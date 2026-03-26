const QUESTIONS = {
  "tech-vocab": {
    name: "Tech Vocabulary",
    icon: "\u{1F4BB}",
    color: "#E8712A",
    questions: [
      {
        term: "CLI",
        full: "Command Line Interface",
        definition: "A text-based interface where you type commands to interact with your computer — no clicking, just typing. Think Terminal on Mac or Command Prompt on Windows.",
        example: "Developers use the CLI to run scripts, install packages, and manage servers.",
        difficulty: 1
      },
      {
        term: "IDE",
        full: "Integrated Development Environment",
        definition: "A software application that provides everything a developer needs in one place — code editor, debugger, terminal, and more.",
        example: "VS Code and IntelliJ are popular IDEs. Think of it as the 'office suite' for developers.",
        difficulty: 1
      },
      {
        term: "SDK",
        full: "Software Development Kit",
        definition: "A collection of tools, libraries, and documentation that developers use to build applications for a specific platform or service.",
        example: "If you want to add Stripe payments to your app, you'd use the Stripe SDK.",
        difficulty: 1
      },
      {
        term: "API",
        full: "Application Programming Interface",
        definition: "A set of rules that allows different software systems to communicate with each other. Like a waiter taking your order to the kitchen and bringing back food.",
        example: "Your weather app uses an API to fetch forecast data from a weather service.",
        difficulty: 1
      },
      {
        term: "EDI",
        full: "Electronic Data Interchange",
        definition: "A standardized format for exchanging business documents (invoices, purchase orders) electronically between companies — very common in B2B and supply chain.",
        example: "Large retailers like Walmart require suppliers to use EDI for purchase orders.",
        difficulty: 2
      },
      {
        term: "SSH",
        full: "Secure Shell",
        definition: "A protocol for securely connecting to and controlling remote computers over an encrypted connection. Like a secret tunnel to another machine.",
        example: "DevOps engineers use SSH to log into cloud servers and deploy code.",
        difficulty: 2
      },
      {
        term: "Headless",
        full: "Headless Architecture",
        definition: "Software that runs without a graphical user interface (no visible 'head'). Can execute web pages without displaying them, or store and manage content without any built-in frontend.",
        example: "Headless browsers are used for automated testing. Headless CMSs like Contentful let you push content to any frontend (web, app, kiosk).",
        difficulty: 2
      },
      {
        term: "Inference",
        full: "AI Inference",
        definition: "The process of running a trained AI model to generate predictions or outputs. Training teaches the model; this step is when it actually does its job.",
        example: "When ChatGPT answers your question, that's inference. New AI chips (like NVIDIA's) are optimized to do inference faster and cheaper than general-purpose GPUs.",
        difficulty: 2
      },
      {
        term: "Virtual Server / VM",
        full: "Virtual Machine",
        definition: "A simulated computer running inside a real computer. One physical server can host multiple virtual servers, each acting like its own independent machine.",
        example: "Cloud providers like AWS rent out virtual servers so companies don't need to buy physical hardware.",
        difficulty: 2
      },
      {
        term: "CI/CD",
        full: "Continuous Integration / Continuous Deployment",
        definition: "Automated processes that test code changes (CI) and deploy them to production (CD) — so updates ship faster and with fewer bugs.",
        example: "When a developer pushes code, CI/CD pipelines automatically run tests and deploy if everything passes.",
        difficulty: 2
      },
      {
        term: "Docker / Container",
        full: "Containerization",
        definition: "A way to package an application with all its dependencies into a standardized unit (container) that runs the same everywhere — your laptop, a server, the cloud.",
        example: "Instead of 'it works on my machine,' Docker ensures the app runs identically everywhere.",
        difficulty: 3
      },
      {
        term: "Microservices",
        full: "Microservice Architecture",
        definition: "Breaking an application into small, independent services that each do one thing well, instead of one big monolithic application.",
        example: "Netflix runs hundreds of microservices — one for recommendations, one for streaming, one for user profiles, etc.",
        difficulty: 3
      },
      {
        term: "Webhook",
        full: "Webhook",
        definition: "An automated message sent from one app to another when an event happens. Unlike an API where you ask for data, this mechanism pushes data to you automatically.",
        example: "When someone pays on Stripe, a webhook notifies your server instantly — no need to keep checking.",
        difficulty: 2
      },
      {
        term: "Technical Debt",
        full: "Technical Debt",
        definition: "The accumulated cost of shortcuts or quick fixes in code. Like financial debt — the longer you ignore it, the more 'interest' (bugs, slow development) you pay.",
        example: "A startup might take on tech debt to ship faster, but eventually needs to refactor or the codebase becomes unmanageable.",
        difficulty: 1
      },
      {
        term: "Open Source",
        full: "Open Source Software",
        definition: "Software whose source code is publicly available for anyone to view, modify, and distribute. Built by communities rather than (or in addition to) companies.",
        example: "Linux, React, and Python are all open source. Many companies build products on top of open source tools.",
        difficulty: 1
      },
      {
        term: "Latency",
        full: "Latency",
        definition: "The time delay between a request and a response. Low = fast. High = sluggish. Critical for user experience.",
        example: "A website with 3 seconds of latency will lose most visitors. CDNs help reduce latency by serving content from nearby servers.",
        difficulty: 2
      },
      {
        term: "Endpoint",
        full: "API Endpoint",
        definition: "A specific URL where an API receives requests. Each one handles a specific type of data or action.",
        example: "GET /api/users is an endpoint that returns a list of users. POST /api/orders creates a new order.",
        difficulty: 2
      },
      {
        term: "Environment Variables",
        full: "Environment Variables (env vars)",
        definition: "Configuration values stored outside the code — like passwords, API keys, or feature flags. Keeps secrets out of the codebase.",
        example: "Your database password is stored as an env var, not hardcoded. Different environments (dev, staging, prod) use different values.",
        difficulty: 2
      }
    ]
  },

  "ai-native": {
    name: "AI & Becoming AI-Native",
    icon: "\u{1F916}",
    color: "#E84393",
    questions: [
      {
        term: "RAG",
        full: "Retrieval-Augmented Generation",
        definition: "A technique where an AI model retrieves relevant information from a knowledge base before generating its answer — making responses more accurate and grounded in facts.",
        example: "A customer support bot using RAG pulls from your help docs before answering, so it gives accurate, company-specific answers instead of generic ones.",
        difficulty: 2
      },
      {
        term: "LLM",
        full: "Large Language Model",
        definition: "An AI model trained on massive amounts of text that can understand and generate human-like language. The engine behind ChatGPT, Claude, etc.",
        example: "GPT-4, Claude, and Llama are all LLMs. They predict the most likely next words based on patterns learned from training data.",
        difficulty: 1
      },
      {
        term: "Prompt Engineering",
        full: "Prompt Engineering",
        definition: "The skill of crafting effective instructions (prompts) for AI models to get the best possible output. Like learning to ask the right questions.",
        example: "Instead of 'write me an email,' a good prompt is: 'Write a professional follow-up email to a prospect who attended our demo but hasn't responded in 5 days.'",
        difficulty: 1
      },
      {
        term: "Fine-Tuning",
        full: "Model Fine-Tuning",
        definition: "Taking a pre-trained AI model and training it further on your specific data to make it better at your particular use case.",
        example: "A legal firm fine-tunes an LLM on their case history so it understands legal terminology and their specific workflows.",
        difficulty: 2
      },
      {
        term: "Tokens",
        full: "Tokens (AI context)",
        definition: "The basic units that AI models use to process text. Roughly ~1 token = 0.75 words. Models have token limits that determine how much text they can process at once.",
        example: "Claude can handle 200K tokens (~150K words) in one conversation. More tokens = higher API costs.",
        difficulty: 2
      },
      {
        term: "Hallucination",
        full: "AI Hallucination",
        definition: "When an AI model generates information that sounds plausible but is factually incorrect or completely made up.",
        example: "An AI might confidently cite a research paper that doesn't exist. RAG and grounding techniques help reduce hallucinations.",
        difficulty: 1
      },
      {
        term: "AI Agent",
        full: "AI Agent / Agentic AI",
        definition: "An AI system that can autonomously plan, make decisions, and take actions to accomplish goals — not just answer questions but actually do things.",
        example: "An AI agent could research competitors, draft a report, schedule a meeting, and send follow-up emails — all from a single instruction.",
        difficulty: 2
      },
      {
        term: "Vector Database",
        full: "Vector Database",
        definition: "A database optimized for storing and searching 'embeddings' — numerical representations of text, images, etc. Essential for AI search and RAG systems.",
        example: "Pinecone and Weaviate are vector databases. They let you search by meaning rather than exact keywords.",
        difficulty: 3
      },
      {
        term: "AI-Native",
        full: "AI-Native",
        definition: "A person, company, or product that is built from the ground up with AI as a core component — not just bolting AI onto existing processes.",
        example: "An AI-native sales team uses AI for prospecting, email drafting, call analysis, and pipeline forecasting as their default workflow.",
        difficulty: 1
      },
      {
        term: "Foundation Model",
        full: "Foundation Model",
        definition: "A large AI model trained on broad data that can be adapted to many different tasks. The 'base' that specialized applications are built on.",
        example: "Claude is a foundation model — it can write code, analyze data, answer questions, and much more without task-specific training.",
        difficulty: 2
      },
      {
        term: "Inference Chip / NPU",
        full: "Neural Processing Unit",
        definition: "Specialized hardware designed specifically to run AI models (inference) much faster and more efficiently than general-purpose CPUs or GPUs.",
        example: "Apple's Neural Engine, Google's TPUs, and AWS Inferentia chips are all designed to make AI inference faster and cheaper. This is why newer devices run AI features locally.",
        difficulty: 3
      },
      {
        term: "Context Window",
        full: "Context Window",
        definition: "The maximum amount of text an AI model can 'see' and process at once. Like the model's working memory.",
        example: "A 200K token context window means Claude can read and reason about an entire book in one go.",
        difficulty: 2
      }
    ]
  },

  "saas-metrics": {
    name: "SaaS & Startup Metrics",
    icon: "\u{1F4C8}",
    color: "#00B894",
    questions: [
      {
        term: "ARR",
        full: "Annual Recurring Revenue",
        definition: "The total yearly revenue from subscriptions, normalized to an annual figure. The north star metric for SaaS companies.",
        example: "If you have 100 customers paying $100/month, your ARR is $120,000.",
        difficulty: 1
      },
      {
        term: "MRR",
        full: "Monthly Recurring Revenue",
        definition: "The predictable revenue a SaaS company earns each month from subscriptions.",
        example: "MRR = ARR / 12. Tracking MRR growth month-over-month shows if your business is accelerating.",
        difficulty: 1
      },
      {
        term: "Churn Rate",
        full: "Churn Rate",
        definition: "The percentage of customers (or revenue) you lose over a given period. The silent killer of SaaS businesses.",
        example: "5% monthly churn means you lose half your customers in a year. Reducing churn by even 1% can massively impact revenue.",
        difficulty: 1
      },
      {
        term: "CAC",
        full: "Customer Acquisition Cost",
        definition: "The total cost of acquiring a new customer — includes marketing, sales, tools, etc. divided by number of new customers.",
        example: "If you spend $10,000 on marketing and get 50 new customers, your CAC is $200.",
        difficulty: 1
      },
      {
        term: "LTV / CLV",
        full: "Lifetime Value / Customer Lifetime Value",
        definition: "The total revenue a customer generates over their entire relationship with your company. LTV should be at least 3x your CAC.",
        example: "A customer paying $100/month who stays for 2 years has an LTV of $2,400.",
        difficulty: 1
      },
      {
        term: "NRR",
        full: "Net Revenue Retention",
        definition: "Revenue from existing customers this year vs. last year — including upgrades, downgrades, and churn. Above 100% means you're growing even without new customers.",
        example: "NRR of 120% means your existing customer base grew 20% through upsells, even accounting for churn. Best SaaS companies are above 130%.",
        difficulty: 2
      },
      {
        term: "PLG",
        full: "Product-Led Growth",
        definition: "A growth strategy where the product itself drives acquisition, conversion, and expansion — users try before they buy.",
        example: "Slack, Dropbox, and Notion all used PLG — free tiers that spread virally through organizations, then convert to paid.",
        difficulty: 2
      },
      {
        term: "TAM / SAM / SOM",
        full: "Total / Serviceable / Obtainable Market",
        definition: "TAM = total market demand. SAM = the portion you can serve. SOM = the realistic slice you can capture. Used in pitch decks and strategy.",
        example: "TAM for CRM software might be $80B globally, SAM for SMB CRM in Europe might be $5B, SOM might be $50M.",
        difficulty: 2
      },
      {
        term: "NPS",
        full: "Net Promoter Score",
        definition: "A customer loyalty metric from -100 to 100 based on one question: 'How likely are you to recommend us?' Promoters (9-10) minus Detractors (0-6).",
        example: "An NPS of 50+ is excellent. Apple typically scores 60-70. It's a leading indicator of growth.",
        difficulty: 1
      },
      {
        term: "ICP",
        full: "Ideal Customer Profile",
        definition: "A detailed description of the type of company (not person) that would get the most value from your product and be most profitable to serve.",
        example: "ICP: 'B2B SaaS companies with 50-200 employees, $5-50M revenue, using Salesforce, based in DACH region.'",
        difficulty: 1
      },
      {
        term: "GTM",
        full: "Go-To-Market (Strategy)",
        definition: "The plan for how a company will reach its target customers and achieve competitive advantage — combines product, marketing, sales, and distribution.",
        example: "A GTM strategy might be: 'Target mid-market e-commerce companies through LinkedIn outbound + content marketing, with a freemium entry point.'",
        difficulty: 2
      },
      {
        term: "Unit Economics",
        full: "Unit Economics",
        definition: "The direct revenue and costs associated with a single unit of your business (usually one customer). Shows if your business model actually works.",
        example: "If it costs $500 to acquire a customer (CAC) and they generate $2,000 in lifetime value (LTV), your unit economics are healthy (4:1 ratio).",
        difficulty: 2
      },
      {
        term: "Burn Rate",
        full: "Burn Rate",
        definition: "How fast a startup spends money (usually monthly). Gross burn is total spend; net burn is spend minus revenue.",
        example: "If you have $1M in the bank and burn $100K/month, you have 10 months of runway. Investors always ask this.",
        difficulty: 1
      },
      {
        term: "DAU / MAU",
        full: "Daily / Monthly Active Users",
        definition: "The number of unique users who engage with your product daily or monthly. DAU/MAU ratio shows 'stickiness' — how often users come back.",
        example: "A DAU/MAU ratio of 50%+ is excellent (like WhatsApp). Below 20% suggests your product isn't part of users' routine.",
        difficulty: 2
      }
    ]
  },

  "sales-methods": {
    name: "Sales Methodologies",
    icon: "\u{1F3AF}",
    color: "#FDCB6E",
    questions: [
      {
        term: "SPIN Selling",
        full: "Situation, Problem, Implication, Need-Payoff",
        definition: "A consultative sales framework based on asking 4 types of questions: Situation (facts), Problem (pain points), Implication (consequences of the problem), Need-Payoff (value of solving it).",
        example: "Instead of pitching features, you ask: 'What happens to your team's productivity when the system goes down?' (Implication) then 'How would it help if downtime was reduced by 90%?' (Need-Payoff).",
        aiTool: "Use Claude to generate SPIN questions tailored to your prospect's industry. Practice delivering them with ParrotPrep.ai's mock interview mode — it scores your delivery and confidence.",
        difficulty: 1
      },
      {
        term: "MEDDIC",
        full: "Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion",
        definition: "A B2B sales qualification framework that ensures you understand the deal deeply: who decides, how they decide, what they measure, and who's your internal advocate.",
        example: "Before forecasting a deal, you should be able to name your Champion (internal advocate), the Economic Buyer (final approver), and the specific Metrics they care about.",
        aiTool: "Use LinkedIn Sales Navigator + Clay to auto-research org charts and identify Economic Buyers and potential Champions before your first call.",
        difficulty: 2
      },
      {
        term: "BANT",
        full: "Budget, Authority, Need, Timeline",
        definition: "A classic lead qualification framework. Does the prospect have Budget? Are you talking to someone with Authority? Is there a real Need? What's the Timeline?",
        example: "A lead scores high on BANT if they have approved budget, the VP is on the call, they describe a clear pain point, and want to implement this quarter.",
        aiTool: "CRM tools like HubSpot or Salesforce have AI lead scoring that auto-qualifies leads on BANT criteria based on behavior signals and firmographic data.",
        difficulty: 1
      },
      {
        term: "Challenger Sale",
        full: "The Challenger Sale",
        definition: "A methodology where the seller teaches the buyer something new about their business, tailors the pitch to their specific situation, and takes control of the conversation. Challenges the buyer's thinking.",
        example: "Instead of asking what keeps them up at night, a Challenger rep says: 'Companies like yours typically lose 15% of revenue to X. Here's a different way to think about it...'",
        aiTool: "Use Perplexity or Claude to research industry insights and benchmarks before a call — so you can 'teach' the buyer something they didn't know about their own market.",
        difficulty: 2
      },
      {
        term: "Solution Selling",
        full: "Solution Selling",
        definition: "A methodology focused on diagnosing the customer's problem first, then positioning your product as the solution — rather than leading with features.",
        example: "You don't sell 'a CRM with AI features.' You sell 'a way to reduce your sales team's admin time by 40% so they can focus on selling.'",
        aiTool: "Use Gong or Chorus to analyze past won-deal recordings and identify which problem-framing language led to the highest close rates.",
        difficulty: 1
      },
      {
        term: "SNAP Selling",
        full: "Simple, iNvaluable, Aligned, Priority",
        definition: "A methodology for selling to overwhelmed, busy buyers. Keep it Simple, be iNvaluable (stand out), stay Aligned with their goals, raise the Priority of your solution.",
        example: "When a prospect says 'I'm too busy to evaluate new tools,' SNAP says: simplify the decision, show unique value fast, align with their existing priorities.",
        aiTool: "Use Loom to record short, personalized video pitches (under 2 min) — keeps it simple and stands out in a crowded inbox. AI tools like Sendspark can personalize at scale.",
        difficulty: 2
      },
      {
        term: "Sandler System",
        full: "Sandler Selling System",
        definition: "A methodology that flips traditional selling — the seller acts more like a consultant/doctor. Uses an 'upfront contract' to set expectations and qualifies ruthlessly (it's OK to disqualify).",
        example: "Sandler reps say: 'It's totally fine if this isn't a fit. Let's figure out together if it makes sense.' This removes pressure and builds trust.",
        aiTool: "Use ParrotPrep.ai to practice qualification conversations with an AI interviewer — it gives feedback on both your answers and delivery. For live calls, Parakeet AI can overlay real-time answer suggestions.",
        difficulty: 2
      },
      {
        term: "Discovery Call",
        full: "Discovery Call / Needs Analysis",
        definition: "The critical early sales conversation where you diagnose the prospect's situation, pain points, goals, and decision process — before pitching anything.",
        example: "A great discovery call feels like a doctor's appointment: you ask questions, listen deeply, and only then recommend a treatment (solution).",
        aiTool: "Use Granola or Fireflies.ai to auto-transcribe and structure your discovery call notes — captures pain points, next steps, and stakeholders mentioned without you having to type.",
        difficulty: 1
      },
      {
        term: "Objection Handling",
        full: "Objection Handling",
        definition: "The skill of addressing prospect concerns without being defensive. Best practice: acknowledge, empathize, respond, confirm.",
        example: "'I understand price is a concern (acknowledge). Many customers felt the same way initially (empathize). They found the ROI paid for itself in 3 months (respond). Does that address your concern? (confirm)'",
        aiTool: "Practice objection handling with ParrotPrep.ai — it simulates tough interview/sales scenarios and gives feedback. Gong analyzes which real objection responses convert best across your team's calls.",
        difficulty: 1
      },
      {
        term: "Champion",
        full: "Champion (in sales)",
        definition: "An internal advocate at the prospect's company who believes in your solution and actively sells it internally on your behalf. Essential for complex B2B deals.",
        example: "Your champion is the person who forwards your proposal to the VP, argues for budget in internal meetings, and tells you what's really happening behind the scenes.",
        aiTool: "Use LinkedIn Sales Navigator alerts + Clay to track your champion's activity (job changes, posts, promotions). Use Claude to draft internal-ready docs your champion can share with their team.",
        difficulty: 1
      },
      {
        term: "Multi-Threading",
        full: "Multi-Threading (Sales)",
        definition: "Building relationships with multiple stakeholders in a deal, not just one contact. Reduces risk of deals dying when your single contact leaves or goes silent.",
        example: "Instead of only talking to the IT manager, you also connect with the VP of Sales, the CFO's team, and an end-user who'd benefit from the product.",
        aiTool: "Use LinkedIn Sales Navigator to map the org chart. Use Clay or Apollo to find contact info for all stakeholders. Use Lavender AI to craft personalized outreach for each persona.",
        difficulty: 2
      },
      {
        term: "Mutual Action Plan",
        full: "Mutual Action Plan / Close Plan",
        definition: "A shared document between seller and buyer that outlines the steps, owners, and timeline needed to evaluate and implement a solution. Creates accountability on both sides.",
        example: "Week 1: Technical demo with IT team. Week 2: Security review. Week 3: Business case to CFO. Week 4: Contract review. Both sides commit to dates.",
        aiTool: "Use Notion AI or Aligned.com to create collaborative mutual action plans. Ask Claude to generate a MAP template customized to your deal's complexity and stakeholders.",
        difficulty: 2
      }
    ]
  },

  "product-mgmt": {
    name: "Product & Engineering",
    icon: "\u{1F6E0}\uFE0F",
    color: "#0984E3",
    questions: [
      {
        term: "MVP",
        full: "Minimum Viable Product",
        definition: "The simplest version of a product that delivers enough value to early users and provides feedback for future development. Ship fast, learn fast.",
        example: "Dropbox's MVP was literally a video showing the concept before they built the product. It validated demand with zero code.",
        difficulty: 1
      },
      {
        term: "Sprint",
        full: "Sprint (Agile)",
        definition: "A fixed time period (usually 1-2 weeks) during which a development team works on a defined set of tasks. Part of the Agile/Scrum methodology.",
        example: "In a 2-week sprint, the team might commit to building 3 features, fixing 5 bugs, and doing 1 tech debt item.",
        difficulty: 1
      },
      {
        term: "Backlog",
        full: "Product Backlog",
        definition: "The prioritized list of all features, bugs, improvements, and tasks that could be worked on. The product manager owns this list and decides what's most important.",
        example: "A healthy backlog has items ranked by impact. Top items are well-defined and ready to build; bottom items are rough ideas.",
        difficulty: 1
      },
      {
        term: "User Story",
        full: "User Story",
        definition: "A short description of a feature from the end user's perspective: 'As a [type of user], I want [action] so that [benefit].'",
        example: "'As a sales manager, I want to see my team's pipeline in one dashboard so that I can forecast revenue accurately.'",
        difficulty: 1
      },
      {
        term: "A/B Testing",
        full: "A/B Testing / Split Testing",
        definition: "Showing two versions of something (a page, button, email) to different user groups to measure which performs better. Data-driven decision making.",
        example: "Version A has a green 'Buy Now' button, Version B has a red one. After 10,000 visitors, red converts 15% better. Ship red.",
        difficulty: 1
      },
      {
        term: "Feature Flag",
        full: "Feature Flag / Feature Toggle",
        definition: "A switch that lets you turn features on/off without deploying new code. Used for gradual rollouts, testing, and instant rollbacks.",
        example: "Ship the new checkout flow behind a feature flag. Enable it for 5% of users first. If metrics look good, roll to 100%. If not, flip the flag off.",
        difficulty: 2
      },
      {
        term: "Standup",
        full: "Daily Standup / Daily Scrum",
        definition: "A brief daily team meeting (15 min max) where each person shares: what they did yesterday, what they'll do today, and any blockers.",
        example: "Standups keep teams aligned and surface blockers early. If they run longer than 15 minutes, something's wrong.",
        difficulty: 1
      },
      {
        term: "OKR",
        full: "Objectives and Key Results",
        definition: "A goal-setting framework: Objectives are ambitious goals (what you want to achieve), Key Results are measurable outcomes that prove you achieved them.",
        example: "Objective: 'Become the #1 tool for sales teams.' Key Results: 'Reach 10K DAU, achieve NPS of 60, close 50 enterprise deals.'",
        difficulty: 1
      },
      {
        term: "Roadmap",
        full: "Product Roadmap",
        definition: "A high-level visual plan showing what features/initiatives will be built and roughly when. Communicates product direction to stakeholders.",
        example: "Q1: Self-serve onboarding. Q2: Enterprise SSO. Q3: Marketplace integrations. A roadmap is a plan, not a promise.",
        difficulty: 1
      },
      {
        term: "Scope Creep",
        full: "Scope Creep",
        definition: "When a project gradually expands beyond its original goals, usually from adding 'just one more thing.' The enemy of shipping on time.",
        example: "'Can we also add dark mode? And maybe a mobile version? Oh and localization...' — that's scope creep. A good PM says no (or 'not now').",
        difficulty: 1
      },
      {
        term: "KPI",
        full: "Key Performance Indicator",
        definition: "A measurable value that shows how effectively you're achieving a key business objective. Not every metric qualifies — only the ones that truly matter.",
        example: "For a SaaS sales team: pipeline generated, win rate, and average deal size might be your KPIs. Page views is a metric, not a KPI.",
        difficulty: 1
      },
      {
        term: "Dogfooding",
        full: "Dogfooding / Eating Your Own Dog Food",
        definition: "Using your own product internally before or while selling it to customers. Builds empathy and catches issues early.",
        example: "Slack's team used Slack internally for years before launching publicly. They found bugs and built features from their own daily use.",
        difficulty: 2
      }
    ]
  },

  "terminal-basics": {
    name: "Terminal & Commands",
    icon: "\u{1F4DF}",
    color: "#2D3436",
    questions: [
      {
        term: "cd",
        full: "cd (change directory)",
        definition: "Navigate between directories in the terminal. Accepts a folder name to go into it, '..' to go up one level, or '~' to return to your home directory.",
        example: "cd Documents/projects — moves into the projects folder inside Documents.",
        difficulty: 1
      },
      {
        term: "ls",
        full: "ls (list)",
        definition: "List all files and folders in the current directory. Adding '-la' shows hidden files with details like permissions and file sizes.",
        example: "Type 'ls' to see what's in the current folder. Use 'ls -la' to see everything including hidden config files.",
        difficulty: 1
      },
      {
        term: "mkdir",
        full: "mkdir (make directory)",
        definition: "Create a new folder in the current location. Accepts a folder name, and supports '-p' to create nested folders all at once.",
        example: "mkdir -p src/components — creates nested folders (src and components inside it) in one command.",
        difficulty: 1
      },
      {
        term: "git clone",
        full: "git clone",
        definition: "Download a copy of a remote repository (from GitHub, etc.) to your local machine.",
        example: "git clone https://github.com/user/repo.git — downloads the entire project with its history.",
        difficulty: 1
      },
      {
        term: "git commit",
        full: "git commit",
        definition: "Save a snapshot of your staged changes to the local repository with a message describing what you changed.",
        example: "git add . && git commit -m 'Add login page' — stages all changes and commits them with a message.",
        difficulty: 1
      },
      {
        term: "git push / pull",
        full: "git push & git pull",
        definition: "Push sends your local commits to the remote repository. Pull downloads the latest changes from the remote to your local machine.",
        example: "'git push origin main' uploads your commits. 'git pull' fetches and merges the latest changes from your team.",
        difficulty: 1
      },
      {
        term: "npm install",
        full: "npm install",
        definition: "Download and install all the packages (dependencies) a JavaScript project needs, as listed in package.json.",
        example: "'npm install' sets up a project. 'npm install axios' adds a specific package. Think of it as the app store for code libraries.",
        difficulty: 1
      },
      {
        term: "pwd",
        full: "pwd (print working directory)",
        definition: "Shows the full path of the folder you're currently in. Useful when you're lost in the terminal.",
        example: "Type 'pwd' and see something like /Users/sara/Documents/tech-quiz-app",
        difficulty: 1
      },
      {
        term: "touch",
        full: "touch (create file)",
        definition: "Create one or more new empty files in the current directory. Accepts a filename like 'index.html', and you can specify multiple names at once.",
        example: "touch style.css app.js — creates two new files at once.",
        difficulty: 1
      },
      {
        term: "rm",
        full: "rm (remove)",
        definition: "Delete files or folders from the command line. Use with caution — there's no trash can! The '-r' flag removes a folder and everything inside it.",
        example: "rm -r node_modules — deletes the (often huge) dependencies folder. Be very careful with rm -rf!",
        difficulty: 1
      },
      {
        term: "cat",
        full: "cat (concatenate)",
        definition: "Display the contents of a file in the terminal. Quick way to peek at a file without opening an editor.",
        example: "cat .env — shows your environment variables. cat package.json — shows your project config.",
        difficulty: 1
      },
      {
        term: "grep",
        full: "grep (search)",
        definition: "Search for text patterns inside files. Incredibly powerful for finding code, errors, or specific strings.",
        example: "grep -r 'TODO' src/ — finds all TODO comments in your source code recursively.",
        difficulty: 2
      }
    ]
  },

  "biz-dev": {
    name: "B2B & Business Dev",
    icon: "\u{1F4BC}",
    color: "#E17055",
    questions: [
      {
        term: "Pipeline",
        full: "Sales Pipeline",
        definition: "A visual representation of all your active deals organized by stage — from first contact to closed/won. Shows the health and forecast of your sales efforts.",
        example: "A typical pipeline: Lead → Qualified → Demo → Proposal → Negotiation → Closed Won/Lost. A healthy pipeline has 3-4x your quota in total value.",
        difficulty: 1
      },
      {
        term: "Outbound vs Inbound",
        full: "Outbound vs Inbound Sales",
        definition: "Outbound: you proactively reach out to prospects (cold calls, emails). Inbound: prospects come to you (through content, ads, referrals). Most B2B companies need both.",
        example: "Outbound: SDR sends 100 personalized LinkedIn messages. Inbound: prospect downloads your whitepaper and requests a demo.",
        difficulty: 1
      },
      {
        term: "SDR / BDR",
        full: "Sales/Business Development Representative",
        definition: "Entry-level sales role focused on generating qualified meetings for account executives. SDRs typically handle inbound leads; BDRs do outbound prospecting.",
        example: "A BDR might send 50 outbound emails/day, book 5 meetings/week, and hand qualified leads to an AE to close.",
        difficulty: 1
      },
      {
        term: "AE",
        full: "Account Executive",
        definition: "The sales closer — runs demos, manages the deal cycle, handles negotiations, and closes business. Usually works deals handed off by SDRs/BDRs.",
        example: "An AE might manage 20-40 active deals, run 3-5 demos per week, and carry a quarterly quota of $250K-$1M+.",
        difficulty: 1
      },
      {
        term: "ACV",
        full: "Annual Contract Value",
        definition: "The average yearly revenue per customer contract. Critical for understanding deal sizes and segmenting customers.",
        example: "SMB deals might have an ACV of $5K, mid-market $50K, and enterprise $500K+. ACV determines your sales motion.",
        difficulty: 2
      },
      {
        term: "Land and Expand",
        full: "Land and Expand Strategy",
        definition: "Win a small initial deal ('land'), then grow the account over time through upsells, cross-sells, and expanding to more teams/departments ('expand').",
        example: "Land: sell to one team for $10K. Expand: after proving value, roll out company-wide for $200K. Slack and Zoom both grew this way.",
        difficulty: 2
      },
      {
        term: "Persona",
        full: "Buyer Persona",
        definition: "A semi-fictional representation of your ideal buyer — their role, goals, challenges, and how they make decisions. Different from ICP (which describes the company).",
        example: "Persona: 'VP of Sales Sarah, 35-45, manages 20+ reps, frustrated by manual forecasting, reports to CRO, evaluates tools quarterly.'",
        difficulty: 1
      },
      {
        term: "Competitive Intelligence",
        full: "Competitive Intelligence",
        definition: "Systematically gathering and analyzing information about competitors — their products, pricing, positioning, strengths, and weaknesses.",
        example: "Building battle cards that help sales reps handle objections like 'Why should we choose you over [Competitor X]?' with specific, factual responses.",
        difficulty: 2
      },
      {
        term: "QBR",
        full: "Quarterly Business Review",
        definition: "A structured meeting with a customer to review results, align on goals, and plan next steps. A key touchpoint for retention and expansion in B2B.",
        example: "In a QBR: review KPIs achieved, ROI delivered, challenges faced, and roadmap alignment. It's both a retention tool and an upsell opportunity.",
        difficulty: 2
      },
      {
        term: "Stakeholder Mapping",
        full: "Stakeholder Mapping",
        definition: "Identifying all people involved in a buying decision — their roles, influence, and stance (champion, supporter, neutral, blocker) — to navigate complex deals.",
        example: "Map: CEO (economic buyer, neutral), VP Sales (champion), IT Director (technical evaluator, skeptical), Legal (blocker on data privacy).",
        difficulty: 2
      },
      {
        term: "Cold Outreach",
        full: "Cold Outreach / Prospecting",
        definition: "Contacting potential customers who haven't expressed interest in your product. Includes cold emails, cold calls, LinkedIn messages, and social selling.",
        example: "A good cold email: personalized opening (research their company), 1-2 sentences on a relevant pain point, clear CTA (15-min call?), under 100 words.",
        difficulty: 1
      },
      {
        term: "SLA",
        full: "Service Level Agreement",
        definition: "A formal commitment between a service provider and customer defining expected service levels — response times, uptime, resolution times.",
        example: "SLA: 99.9% uptime, critical bugs fixed within 4 hours, support response within 1 hour during business hours.",
        difficulty: 1
      }
    ]
  }
};
