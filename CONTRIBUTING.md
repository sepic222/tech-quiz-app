# Contributing to TechUp!

Thanks for wanting to contribute! The main way to help is by **suggesting new quiz questions**.

---

## Suggest a question

Open a **[Challenge Me](https://github.com/sepic222/tech-quiz-app/issues/new?template=stump-me.yml)** issue. The form will ask you for:

- **Term** — the short answer the quiz expects (e.g. `RAG`, `Churn`, `git stash`)
- **Full name** — the expanded form (e.g. `Retrieval-Augmented Generation`)
- **Definition** — explain it without using the term itself (that would give away the answer!)
- **Example** — one or two sentences showing it in real use
- **Difficulty** — 1 easy / 2 medium / 3 hard
- **Category** — pick an existing one or suggest a new one
- **AI Tool Tip** *(optional)* — a clever way to use AI with this concept

Once submitted, the maintainer will review it and add it to `questions.js`.

---

## Adding questions directly via Pull Request

If you are comfortable with Git, you can add questions directly:

1. Fork the repository
2. Open `questions.js` and add your question to the right category array following the existing format:

```js
{
  term: "YAGNI",
  full: "You Aren't Gonna Need It",
  definition: "A software design principle that says don't add functionality until you actually need it. Avoid building features 'just in case'.",
  example: "\"Should we add multi-currency support now?\" \"Nobody asked for it — YAGNI. Ship the MVP first.\"",
  difficulty: 2
}
```

3. Open a pull request with a short description of what you added

**One rule:** the `definition` must not contain the `term` or abbreviation — otherwise it gives away the answer during the quiz.

---

## Reporting bugs or suggesting features

Open a regular [GitHub Issue](https://github.com/sepic222/tech-quiz-app/issues/new) and describe what you found or what you'd like to see.
