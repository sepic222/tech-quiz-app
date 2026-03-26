// ===== STATE =====
const STATE = {
  selectedCategories: [],
  mode: 'multiple-choice',
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  xpEarned: 0,
  answers: [],  // { question, correct, userAnswer }
  flipped: false,
};

// ===== PERSISTENCE =====
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('techup-progress')) || {
      totalXP: 0,
      streak: 0,
      lastPlayed: null,
      mastered: {},    // { "term": correctCount }
      categoryStats: {} // { "cat-id": { played: N, correct: N } }
    };
  } catch {
    return { totalXP: 0, streak: 0, lastPlayed: null, mastered: {}, categoryStats: {} };
  }
}

function saveProgress(progress) {
  localStorage.setItem('techup-progress', JSON.stringify(progress));
}

function updateStreak(progress) {
  const today = new Date().toDateString();
  if (progress.lastPlayed === today) return; // already played today

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (progress.lastPlayed === yesterday) {
    progress.streak += 1;
  } else if (progress.lastPlayed !== today) {
    progress.streak = 1;
  }
  progress.lastPlayed = today;
}

// ===== INIT =====
function init() {
  renderCategories();
  setupModeSelector();
  setupStartButton();
  setupResultButtons();
  updateStatsDisplay();
}

function updateStatsDisplay() {
  const progress = loadProgress();
  document.getElementById('total-xp').textContent = progress.totalXP;
  document.getElementById('current-streak').textContent = progress.streak;
  const masteredCount = Object.values(progress.mastered).filter(c => c >= 3).length;
  document.getElementById('cards-mastered').textContent = masteredCount;
  renderHistory();
}

function renderHistory() {
  const container = document.getElementById('session-history');
  if (!container) return;

  const sessions = loadProgress().sessions || [];
  if (sessions.length === 0) { container.innerHTML = ''; return; }

  const modeLabel = { 'multiple-choice': 'MC', 'flashcard': 'Flash', 'type-answer': 'Type' };

  function formatDate(ts) {
    const d = new Date(ts);
    const today = new Date();
    const yesterday = new Date(Date.now() - 86400000);
    if (d.toDateString() === today.toDateString()) return 'Today';
    if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  }

  function scoreColor(score, total) {
    const pct = score / total;
    if (pct >= 0.8) return 'var(--success)';
    if (pct >= 0.5) return 'var(--warning)';
    return 'var(--danger)';
  }

  const rows = [...sessions].reverse().slice(0, 8).map(s => {
    const catNames = s.categories.map(c => QUESTIONS[c]?.name || c).join(', ');
    const color = scoreColor(s.score, s.total);
    return `
      <div class="session-row">
        <span class="session-date">${formatDate(s.ts)}</span>
        <span class="session-mode">${modeLabel[s.mode] || s.mode}</span>
        <span class="session-cats">${catNames}</span>
        <span class="session-score" style="color:${color}">${s.score} / ${s.total}</span>
        <span class="session-xp">+${s.xp} XP</span>
      </div>`;
  }).join('');

  container.innerHTML = `
    <h2 class="section-title">Recent Sessions</h2>
    <div class="session-list">${rows}</div>
  `;
}

// ===== CATEGORIES =====
function renderCategories() {
  const grid = document.getElementById('category-grid');
  const progress = loadProgress();

  grid.innerHTML = Object.entries(QUESTIONS).map(([id, cat]) => {
    const stats = progress.categoryStats[id] || { played: 0, correct: 0 };
    const totalQ = cat.questions.length;
    const progressPct = Math.min(100, Math.round((stats.correct / Math.max(1, totalQ * 3)) * 100));

    return `
      <div class="category-card" data-category="${id}">
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-name">${cat.name}</span>
        <span class="cat-count">${totalQ} terms</span>
        <div class="cat-progress">
          <div class="cat-progress-fill" style="width: ${progressPct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
      const catId = card.dataset.category;
      if (STATE.selectedCategories.includes(catId)) {
        STATE.selectedCategories = STATE.selectedCategories.filter(c => c !== catId);
      } else {
        STATE.selectedCategories.push(catId);
      }
      document.getElementById('start-btn').disabled = STATE.selectedCategories.length === 0;
    });
  });
}

// ===== MODE SELECTOR =====
function setupModeSelector() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.mode = btn.dataset.mode;
    });
  });
}

// ===== START =====
function setupStartButton() {
  document.getElementById('start-btn').addEventListener('click', startQuiz);
  document.getElementById('quit-btn').addEventListener('click', goHome);
}

function startQuiz() {
  // Gather questions from selected categories
  let pool = [];
  STATE.selectedCategories.forEach(catId => {
    pool = pool.concat(QUESTIONS[catId].questions.map(q => ({ ...q, category: catId })));
  });

  // Shuffle and pick 10 (or fewer if pool is small)
  STATE.currentQuestions = shuffle(pool).slice(0, 10);
  STATE.currentIndex = 0;
  STATE.score = 0;
  STATE.xpEarned = 0;
  STATE.answers = [];
  STATE.flipped = false;

  showScreen('quiz-screen');
  renderQuestion();
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q = STATE.currentQuestions[STATE.currentIndex];
  const total = STATE.currentQuestions.length;

  // Update header
  document.getElementById('progress-bar').style.width =
    `${((STATE.currentIndex) / total) * 100}%`;
  document.getElementById('quiz-counter').textContent =
    `${STATE.currentIndex + 1} / ${total}`;
  document.getElementById('quiz-xp').textContent = `${STATE.xpEarned} XP`;

  const area = document.getElementById('quiz-area');

  switch (STATE.mode) {
    case 'multiple-choice':
      renderMultipleChoice(area, q);
      break;
    case 'flashcard':
      renderFlashcard(area, q);
      break;
    case 'type-answer':
      renderTypeAnswer(area, q);
      break;
  }
}

// ===== MULTIPLE CHOICE =====
function renderMultipleChoice(area, q) {
  // Generate wrong options from other questions
  const allQuestions = [];
  STATE.selectedCategories.forEach(catId => {
    allQuestions.push(...QUESTIONS[catId].questions);
  });

  const wrongOptions = shuffle(
    allQuestions.filter(oq => oq.term !== q.term)
  ).slice(0, 3).map(oq => oq.term + (oq.full !== oq.term ? ` — ${oq.full}` : ''));

  const correctOption = q.term + (q.full !== q.term ? ` — ${q.full}` : '');
  const options = shuffle([...wrongOptions, correctOption]);

  area.innerHTML = `
    <div class="question-card">
      <div class="question-label">What is this?</div>
      <div class="question-text">${q.definition}</div>
    </div>
    <div class="options-list">
      ${options.map(opt => `
        <button class="option-btn" data-answer="${escapeHtml(opt)}">${opt}</button>
      `).join('')}
    </div>
    <div id="feedback-area"></div>
  `;

  area.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => handleMCAnswer(btn, correctOption, q));
  });
}

function handleMCAnswer(btn, correctOption, q) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.classList.add('disabled'));

  const isCorrect = btn.dataset.answer === correctOption;

  if (isCorrect) {
    btn.classList.add('correct');
    STATE.score++;
    const xp = xpForDifficulty(q.difficulty);
    STATE.xpEarned += xp;
    showXPFloat(btn, xp);
  } else {
    btn.classList.add('wrong');
    buttons.forEach(b => {
      if (b.dataset.answer === correctOption) b.classList.add('correct');
    });
  }

  STATE.answers.push({ question: q, correct: isCorrect, userAnswer: btn.dataset.answer });
  showFeedback(q, isCorrect);
}

// ===== FLASHCARD =====
function renderFlashcard(area, q) {
  STATE.flipped = false;

  area.innerHTML = `
    <div class="flashcard" id="flashcard">
      <div class="term">${q.term}</div>
      <div class="full-name">${q.full !== q.term ? q.full : ''}</div>
      <div class="flip-hint">Tap to reveal</div>
    </div>
    <div id="flashcard-actions" style="display:none">
      <div class="flashcard-actions">
        <button class="flash-btn didnt-know">Didn't know</button>
        <button class="flash-btn knew-it">Knew it!</button>
      </div>
    </div>
  `;

  document.getElementById('flashcard').addEventListener('click', () => {
    if (STATE.flipped) return;
    STATE.flipped = true;

    const card = document.getElementById('flashcard');
    const aiTipFlash = q.aiTool
      ? `<div class="ai-tool-tip flash-tip"><span class="ai-tool-label">\u{1F916} AI Tool Tip</span><p>${q.aiTool}</p></div>`
      : '';
    card.innerHTML = `
      <div class="definition">${q.definition}</div>
      <div class="example">${q.example}</div>
      ${aiTipFlash}
    `;
    card.style.borderColor = 'var(--accent)';

    document.getElementById('flashcard-actions').style.display = 'block';
  });

  area.querySelector('.didnt-know').addEventListener('click', () => {
    STATE.answers.push({ question: q, correct: false, userAnswer: 'didnt-know' });
    nextQuestion();
  });

  area.querySelector('.knew-it').addEventListener('click', () => {
    STATE.score++;
    const xp = xpForDifficulty(q.difficulty);
    STATE.xpEarned += xp;
    STATE.answers.push({ question: q, correct: true, userAnswer: 'knew-it' });
    showXPFloat(area.querySelector('.knew-it'), xp);
    setTimeout(nextQuestion, 600);
  });
}

// ===== TYPE ANSWER =====
function renderTypeAnswer(area, q) {
  // Show the definition, ask them to type the term/abbreviation
  const hint = q.term.length <= 5
    ? `${q.term.length} letters/characters`
    : `Starts with "${q.term[0]}"`;

  area.innerHTML = `
    <div class="question-card">
      <div class="question-label">Name this term</div>
      <div class="question-text">${q.definition}</div>
    </div>
    <div class="type-input-area">
      <input type="text" class="type-input" id="type-input"
             placeholder="Type your answer..." autocomplete="off" spellcheck="false">
      <div class="type-hint">Hint: ${hint}</div>
      <button class="submit-answer-btn" id="submit-type">Check Answer</button>
    </div>
    <div id="feedback-area"></div>
  `;

  const input = document.getElementById('type-input');
  const submitBtn = document.getElementById('submit-type');

  input.focus();
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleTypeAnswer(input, q);
  });
  submitBtn.addEventListener('click', () => handleTypeAnswer(input, q));
}

function handleTypeAnswer(input, q) {
  if (input.classList.contains('correct') || input.classList.contains('wrong')) return;

  const userAnswer = input.value.trim();
  if (!userAnswer) return;

  // Flexible matching: check term, full name, or close matches
  const isCorrect = checkTypeAnswer(userAnswer, q);

  if (isCorrect) {
    input.classList.add('correct');
    STATE.score++;
    const xp = xpForDifficulty(q.difficulty);
    STATE.xpEarned += xp;
    showXPFloat(input, xp);
  } else {
    input.classList.add('wrong');
  }

  document.getElementById('submit-type').disabled = true;
  STATE.answers.push({ question: q, correct: isCorrect, userAnswer });
  showFeedback(q, isCorrect);
}

function checkTypeAnswer(answer, q) {
  const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const a = clean(answer);

  // Check against term
  if (a === clean(q.term)) return true;

  // Check against full name
  if (a === clean(q.full)) return true;

  // Check if answer contains the key term (for abbreviations)
  if (q.term.length <= 5 && a === clean(q.term)) return true;

  // Partial match for longer terms (>70% similar)
  const target = clean(q.term);
  if (target.length > 3 && levenshtein(a, target) <= Math.ceil(target.length * 0.3)) return true;

  return false;
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = a[i-1] === b[j-1]
        ? matrix[i-1][j-1]
        : 1 + Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]);
    }
  }
  return matrix[a.length][b.length];
}

// ===== FEEDBACK & NEXT =====
function showFeedback(q, isCorrect) {
  const feedbackArea = document.getElementById('feedback-area');
  const aiToolHtml = q.aiTool
    ? `<div class="ai-tool-tip"><span class="ai-tool-label">\u{1F916} AI Tool Tip</span><p>${q.aiTool}</p></div>`
    : '';

  feedbackArea.innerHTML = `
    <div class="feedback-card">
      <h4>${isCorrect ? 'Correct!' : `Answer: ${q.term}`}${q.full !== q.term ? ` (${q.full})` : ''}</h4>
      <p>${q.definition}</p>
      <p class="example-text">${q.example}</p>
      ${aiToolHtml}
    </div>
    <button class="next-btn" id="next-btn">
      ${STATE.currentIndex < STATE.currentQuestions.length - 1 ? 'Next Question' : 'See Results'}
    </button>
  `;

  document.getElementById('next-btn').addEventListener('click', nextQuestion);
}

function nextQuestion() {
  STATE.currentIndex++;
  if (STATE.currentIndex >= STATE.currentQuestions.length) {
    showResults();
  } else {
    STATE.flipped = false;
    renderQuestion();
  }
}

// ===== RESULTS =====
function showResults() {
  const total = STATE.currentQuestions.length;
  const pct = Math.round((STATE.score / total) * 100);

  // Update progress
  const progress = loadProgress();
  progress.totalXP += STATE.xpEarned;
  updateStreak(progress);

  // Update mastered counts
  STATE.answers.forEach(a => {
    const term = a.question.term;
    if (!progress.mastered[term]) progress.mastered[term] = 0;
    if (a.correct) progress.mastered[term]++;
  });

  // Update category stats
  STATE.answers.forEach(a => {
    const catId = a.question.category;
    if (!progress.categoryStats[catId]) progress.categoryStats[catId] = { played: 0, correct: 0 };
    progress.categoryStats[catId].played++;
    if (a.correct) progress.categoryStats[catId].correct++;
  });

  if (!progress.sessions) progress.sessions = [];
  progress.sessions.push({
    ts: Date.now(),
    categories: [...STATE.selectedCategories],
    mode: STATE.mode,
    score: STATE.score,
    total: STATE.currentQuestions.length,
    xp: STATE.xpEarned
  });
  if (progress.sessions.length > 20) progress.sessions.shift();

  saveProgress(progress);

  // Render results
  document.getElementById('results-score').textContent = STATE.score;
  document.querySelector('.results-label').textContent = `/ ${total}`;
  document.getElementById('results-xp').textContent = `+${STATE.xpEarned} XP`;

  // Title based on score
  const titles = {
    100: 'Perfect Score!',
    80: 'Excellent!',
    60: 'Great Job!',
    40: 'Getting There!',
    0: 'Keep Learning!'
  };
  const titleKey = Object.keys(titles).reverse().find(k => pct >= Number(k));
  document.getElementById('results-title').textContent = titles[titleKey];

  // Streak
  const streakEl = document.getElementById('results-streak');
  if (progress.streak > 1) {
    streakEl.textContent = `\u{1F525} ${progress.streak} day streak!`;
  } else {
    streakEl.textContent = '';
  }

  // Badges
  const badges = [];
  if (pct === 100) badges.push('\u{1F3C6} Perfect');
  if (pct >= 80) badges.push('\u{2B50} Star Learner');
  if (STATE.xpEarned >= 50) badges.push('\u{1F4A1} XP Machine');
  if (progress.streak >= 3) badges.push('\u{1F525} On Fire');
  if (progress.streak >= 7) badges.push('\u{1F48E} Dedicated');

  const newMastered = STATE.answers.filter(a =>
    a.correct && progress.mastered[a.question.term] === 3
  );
  if (newMastered.length > 0) badges.push(`\u{1F393} Mastered ${newMastered.length} new term${newMastered.length > 1 ? 's' : ''}`);

  document.getElementById('results-badges').innerHTML =
    badges.map(b => `<span class="badge">${b}</span>`).join('');

  // Breakdown
  document.getElementById('results-breakdown').innerHTML = STATE.answers.map(a => `
    <div class="breakdown-item">
      <span class="breakdown-icon">${a.correct ? '\u2705' : '\u274C'}</span>
      <div>
        <span class="breakdown-term">${a.question.term}</span>
        ${a.question.full !== a.question.term ? `<span class="breakdown-answer"> — ${a.question.full}</span>` : ''}
      </div>
    </div>
  `).join('');

  showScreen('results-screen');
  updateStatsDisplay();
}

// ===== RESULT BUTTONS =====
function setupResultButtons() {
  document.getElementById('retry-btn').addEventListener('click', startQuiz);
  document.getElementById('home-btn').addEventListener('click', goHome);
}

function goHome() {
  STATE.selectedCategories = [];
  showScreen('start-screen');
  renderCategories();
  updateStatsDisplay();
  document.getElementById('start-btn').disabled = true;
}

// ===== HELPERS =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function xpForDifficulty(d) {
  return d === 1 ? 5 : d === 2 ? 10 : 15;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showXPFloat(el, xp) {
  const rect = el.getBoundingClientRect();
  const float = document.createElement('div');
  float.className = 'xp-float';
  float.textContent = `+${xp} XP`;
  float.style.left = `${rect.left + rect.width / 2 - 30}px`;
  float.style.top = `${rect.top - 10}px`;
  document.body.appendChild(float);
  setTimeout(() => float.remove(), 1000);
}

// ===== GO =====
init();
