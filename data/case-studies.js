/* ==========================================================
   PROJECTS  —  every project has three stages, shown in this order:
     research  (User research PDF)  ->  prd (PRD PDF)  ->  prototypes (links)
   To add a project:
   1. Drop the PDFs into  assets/pdfs/
   2. Copy one whole { ... } block below, paste it after the last one
      (don't forget the comma), and change the text.
   2b. Put the product logo in assets/img/logos/ and set  logo: "assets/img/logos/name.png"  (round, shows top-right of the card)
   3. Anything left empty ("" or []) shows a "Coming soon" card.
   4. Push to GitHub. Done — it appears on the site automatically.
   ========================================================== */
window.CASES = [
  {
    id: "deconstructing-quora",          // used in the page URL – lowercase, no spaces
    title: "Quora",
    type: "Trust and credibility",
    tags: ["Trust & safety", "Retention", "AI features", "Prioritisation"],
    oneLiner: "Readers find noise, not trust. I mapped why, and designed AI credibility labels that show which answers to rely on.",
    cover: "",
    icon: "chat",
    logo: "assets/img/logos/quora.png",

    /* ---- detailed project page (shown when "problem" is filled in) ---- */
    problem: {
      statement: "High-intent knowledge seekers on Quora are unable to confidently identify credible, high-quality answers due to opinion-heavy content, spam, and lack of evidence visibility. This reduces trust, increases cross-platform verification behaviour, and negatively impacts 30-day retention and engagement depth.",
      goal: "Increase 30-day retention of high-intent search users in the top 5 knowledge categories by 5–10% within 6 months.",
      because: [
        ["Highest PIF score", "14 against 12, 12, 11 and 9 for the other four problems."],
        ["Strongest retention link", "When users cannot trust answers they cross-check on Reddit or AI tools, and leave."],
        ["Backed by user evidence", "The most repeated theme in the survey, interviews and Play Store reviews."]
      ],
      pif: 14,
      personas: [
        ["Rakshith, 26", "The execution-driven professional", "“Don’t give me 20 opinions, give me one answer I can rely on.”"],
        ["Alisha, 24", "The educator and contributor", "“I’m happy to contribute, just treat contributors fairly.”"]
      ]
    },

    // headline numbers (from the Phase 2 survey of 12 respondents, and the Phase 3 plan)
    metrics: [
      { n: 2.92, dec: 2, suffix: "/5", label: "average trust rating", note: "Quora vs Reddit, YouTube, Google" },
      { n: 92, suffix: "%", label: "met misleading answers", note: "11 of 12 respondents, very often or sometimes" },
      { n: 84, suffix: "%", label: "struggle to spot the best answer", note: "Yes or sometimes, in long threads" },
      { n: 92, suffix: "%", label: "would trust an “evidence-backed” label", note: "11 of 12 respondents" },
      { n: 64, suffix: "%", label: "only skim answers", note: "58% want AI summaries of long threads" },
      { n: 14, suffix: "", label: "PIF score of the P0 problem", note: "Population + Intensity + Frequency" }
    ],

    insights: [
      ["Trust, not access, is the gap", "Quora’s mission is to organise the world’s knowledge, yet people leave to cross-check on Reddit and AI tools because they cannot tell which answer to believe."],
      ["Readers skim, so credibility has to be visible", "Most people skim two or three answers before deciding. A signal has to sit at the top of an answer, not behind a click."],
      ["Both sides of the marketplace matter", "Opaque moderation drives contributors away, so any ranking change needs guardrails that protect answer supply."],
      ["Prioritised with numbers, not instinct", "Problems were scored with PIF and solutions with RICE, so the final bets follow the evidence."]
    ],

    // the feature to spotlight
    feature: {
      name: "AI credibility labels",
      tagline: "Every answer shows how much to trust it, at a glance.",
      body: "Each answer is tagged Evidence-backed, Experienced or Opinion-based, and long threads open with a short, sourced AI summary. It sits on top of the existing answers, so nothing is rebuilt, and it goes straight at the P0 problem.",
      points: [
        "Labels appear at the top of every answer, with source links to avoid over-claiming",
        "A 3 to 5 line AI summary highlights key insights and disagreements",
        "Rolled out softly, A/B tested in the top 3 categories, with human review"
      ],
      mock: {
        label: "Wireframe: credibility labels and AI summary",
        caption: "Wireframe from Phase 3: answers tagged Facts-checked, Experienced or Opinion-based, with concise AI highlights.",
        html: '<div class="mk-bar"><span class="mk-logo">Quora</span><span class="mk-search">What is the best laptop for programming?</span></div>' +
          '<div class="mk-sum"><b>AI-generated summary</b><ul><li>MacBook Pro (M1/M2): best for battery life and reliability.</li><li>Dell XPS 13: lightweight, good display, Linux support.</li><li>Budget: ThinkPad X1, Acer Swift 3, upgradeable RAM.</li></ul></div>' +
          '<div class="mk-ans"><div class="mk-who"><i>RR</i><span><b>Rahul Rao</b> · Software engineer, 6 mo ago</span></div><span class="mk-tag ok">Facts-checked</span><p>Cited sources on laptop benchmarks.</p></div>' +
          '<div class="mk-ans"><div class="mk-who"><i>AM</i><span><b>Anu Mehra</b> · Product enthusiast, 2 yr ago</span></div><span class="mk-tag exp">Experienced</span><p>8+ years in software development.</p></div>'
      },
      bets: [
        { name: "AI duplicate question merge", rice: 18, pick: true },
        { name: "Credibility labels", rice: 13.5, pick: true, star: true },
        { name: "AI thread summary", rice: 6, pick: true },
        { name: "Reputation-based ranking", rice: 4 },
        { name: "Moderation explanation assistant", rice: 4 },
        { name: "Canonical structured answer", rice: 1.33 }
      ]
    },

    // Stage 1: the three research documents
    research: {
      note: "The full working behind the project, in the order I did it: understand the product, research the users, then decide what to build.",
      docs: [
        { title: "Phase 1: Understanding Product & Users", pdf: "assets/pdfs/phase-1-understanding-product-and-users.pdf", note: "A teardown of ten user flows and where they break, plus company context, feature reverse-engineering and user segments.", has: ["Flows and frictions", "Company context", "User segments", "Problem hypotheses"] },
        { title: "Phase 2: User Research", pdf: "assets/pdfs/phase-2-user-research.pdf", note: "Interviews and a survey turned into themes, a SWOT, two personas, and the P0 problem chosen with PIF scoring.", has: ["Survey and interviews", "SWOT", "Personas", "PIF scoring", "Problem statement"] },
        { title: "Phase 3: Features, Prioritization + PRD", pdf: "assets/pdfs/phase-3-features-prioritization-prd.pdf", note: "Eight solution ideas, RICE prioritisation, wireframes, success metrics, and risks with mitigations.", has: ["Brainstorm", "RICE", "Wireframes", "Success metrics", "Risks"] }
      ]
    },

    // Stage 2: the PRD
    prd: {
      pdf: "assets/pdfs/prd-quora.pdf",
      note: "The product requirements: what to build, how success is measured, and what could go wrong.",
      goal: "Increase 30-day retention of high-intent search users by 5–10% within 6 months by improving answer credibility visibility and reducing low-signal content exposure.",
      metrics: [
        ["Key metric", "30-day retention (high-intent search users)", "Share of search-driven users in the top 5 categories who return and view another answer within 30 days"],
        ["Secondary", "Credibility-labelled answer CTR", "Whether trust signals change what people click"],
        ["Secondary", "AI summary engagement rate", "Share of sessions where users expand or use the summary"],
        ["Secondary", "Duplicate thread reduction rate", "Fewer similar questions after the AI merge rollout"],
        ["Guardrail", "Answer creation rate", "Makes sure ranking and AI changes do not discourage contributors"],
        ["Guardrail", "Contributor retention and moderation appeals", "Protects supply-side health and detects AI misclassification"]
      ],
      risks: [
        ["Users ignore or distrust AI labels", "Start with soft labels like “AI-assisted insight”, show source links, avoid claiming “verified”."],
        ["Summaries oversimplify nuanced threads", "Limit to the top 3 ranked answers, add a “View full context” button, evaluate quality continuously."],
        ["Contributors feel demoted or unfairly ranked", "Transparent ranking signals, gradual rollout and contributor education, with a rollback ready."]
      ]
    },

    // Stage 3: prototype
    prototypeNote: "A clickable prototype of the credibility labels and summary, built with Lovable.",
    prototypes: [{ name: "Quora credibility prototype", icon: "phone", url: "https://lovable.dev/projects/e865ec32-1837-4b16-8625-e593cc4d56ba", note: "Opens the Lovable project." }]
  }

  /* HIDDEN FOR NOW. To bring it back, ask Claude or delete the comment marks and the extra comma below
  {
    id: "hr-policy-assistant",
    title: "HR Policy Assistant",
    type: "Product prototype",
    icon: "bot",
    logo: "assets/img/logos/hr-policy-assistant.png",
    tags: ["Coming soon"],
    oneLiner: "Research, PRD and prototype will be added here soon.",
    research: { pdf: "", note: "", has: [] },
    prd: { pdf: "", note: "", has: [] },
    prototypes: []
  },
  */
  ,{
    id: "notebook-lm",
    title: "NotebookLM",
    type: "Personalised research",
    tags: ["Personalisation", "Retention", "AI features", "Prioritisation"],
    oneLiner: "Users keep rewriting prompts to get relevant answers. I designed Research Modes, so NotebookLM shapes its output to what you are trying to do.",
    cover: "",
    icon: "search",
    logo: "assets/img/logos/notebook-lm.png",

    problem: {
      statement: "Users struggle to get relevant and personalized research outputs because NotebookLM doesn't consistently understand their research intent. As a result, they repeatedly refine prompts, manually edit responses, or switch to other AI tools to complete their work.",
      goal: "Improve 30-day retention by 5–10% within 6 months by delivering more relevant and personalized research outputs.",
      because: [
        ["Highest PIF score", "14 against 12, 11, 9 and 9 for the other four problems."],
        ["Backed by the survey", "Personalisation was the top thing users want improved, and half leave for another AI tool when answers miss."],
        ["Hits retention directly", "It affects the core AI experience for every persona, and it fits NotebookLM's aim of being a trusted research assistant."]
      ],
      pif: 14,
      personas: [
        ["Rakshith, 26", "The research-driven student", "“I don’t want to keep rewriting prompts. I want NotebookLM to understand what I’m trying to learn.”"],
        ["Alisha, 30", "The insight-seeking product manager", "“Understand what I’m trying to accomplish, not just what I’m asking.”"]
      ]
    },

    // headline numbers: Phase 2 survey of 8 NotebookLM users, and the PIF scoring
    metrics: [
      { n: 62.5, dec: 1, suffix: "%", label: "want more personalised output", note: "Top thing to improve, 5 of 8 respondents" },
      { n: 50, suffix: "%", label: "copy the content into another AI tool", note: "When the generated content is not satisfactory, 4 of 8" },
      { n: 50, suffix: "%", label: "say asking the right questions takes most effort", note: "4 of 8 respondents" },
      { n: 50, suffix: "%", label: "want better accuracy and relevance", note: "Each chosen by 4 of 8 respondents" },
      { n: 75, suffix: "%", label: "use Summaries the most", note: "The most used feature, 6 of 8 respondents" },
      { n: 14, suffix: "", label: "PIF score of the P0 problem", note: "Population 5 + Intensity 5 + Frequency 4" }
    ],

    insights: [
      ["Generic answers are the core problem", "Responses often don’t match the user’s research goal, so people refine the prompt again and again. Personalisation was the most requested improvement in the survey."],
      ["Frustration ends with users leaving", "Half of the respondents copy the content into another AI tool when it isn’t good enough. That is where retention is lost."],
      ["A strong base to build on, not replace", "NotebookLM already wins on source-grounded answers and citations, and summaries are the most used feature. So the fix keeps the core workflow and adds intent on top."],
      ["Prioritised with numbers, not instinct", "Five problems were scored with PIF, and four solution ideas with RICE, so the chosen feature follows the evidence."]
    ],

    feature: {
      name: "Research Modes",
      tagline: "Tell NotebookLM what you are trying to do, and it answers that way.",
      body: "Before asking a question, the user picks a research objective: Study, Compare, Report, Brainstorm or Deep Research. NotebookLM then adapts the structure and level of detail of its answer, so users stop rewriting prompts and can finish the research inside NotebookLM.",
      points: [
        "Pick a mode before asking, and switch modes at any point in a session",
        "Answers change shape with the mode, for example a study guide versus a structured report, always with citations from the uploaded documents",
        "Sensible defaults: Standard mode if none is chosen, and Compare is disabled with guidance when only one document is uploaded"
      ],
      mock: {
        label: "Wireframe: choosing a research mode in NotebookLM",
        caption: "Wireframe from Phase 3: the user uploads sources, chooses a research mode, and the answer is shaped to that goal (shown here as Study and Report).",
        html: '<div class="mk-bar"><span class="mk-logo nb"><img src="assets/img/logos/notebook-lm.png" alt="" width="24" height="24">NotebookLM</span><span class="mk-search">Sources: 4 documents uploaded</span></div>' +
          '<p class="mk-head">What are you trying to accomplish?</p>' +
          '<div class="mk-modes"><div class="mk-mode on"><b>Study</b><span>Understand topics and learn better</span></div><div class="mk-mode"><b>Compare</b><span>Compare documents and find differences</span></div><div class="mk-mode"><b>Report</b><span>Create structured reports and summaries</span></div><div class="mk-mode"><b>Brainstorm</b><span>Generate ideas and creative insights</span></div><div class="mk-mode"><b>Deep Research</b><span>In-depth analysis and identify gaps</span></div></div>' +
          '<div class="mk-ans"><span class="mk-tag ok">Study mode</span><p>Summary, key concepts and sources with page numbers, plus Explain Simply, Examples and Quiz Me.</p></div>' +
          '<div class="mk-ans"><span class="mk-tag exp">Report mode</span><p>Executive summary, key findings, recommendations and supporting evidence, ready to export as a PDF.</p></div>'
      },
      riceNote: "Research Modes scored highest of the four ideas and was selected.",
      bets: [
        { name: "Research Modes", rice: 13.5, pick: true, star: true },
        { name: "Prompt Suggestions", rice: 9 },
        { name: "Personalized Output Templates", rice: 4 },
        { name: "AI Research Assistant", rice: 2 }
      ]
    },

    research: {
      note: "The full working behind the project, in the order I did it: understand the product, research the users, then decide what to build.",
      docs: [
        { title: "Phase 1: Understanding Product & Users", pdf: "assets/pdfs/notebooklm-phase-1-understanding-product-and-users.pdf", note: "Five product flows and where they cause friction, company context against ChatGPT, Perplexity and Notion, three features reverse-engineered, and four user segments.", has: ["Flows and frictions", "Company context", "Feature reverse-engineering", "User segments", "Problem hypothesis"] },
        { title: "Phase 2: User Research", pdf: "assets/pdfs/notebooklm-phase-2-user-research.pdf", note: "An 8-person survey and interviews turned into three themes, a SWOT, two personas, and the P0 problem chosen with PIF scoring.", has: ["Survey and interviews", "SWOT", "Goal setting", "Personas", "PIF scoring", "Problem statement"] },
        { title: "Phase 3: Features, Prioritization + PRD", pdf: "assets/pdfs/notebooklm-phase-3-features-prioritization-prd.pdf", note: "Four solution ideas, RICE prioritisation, the Research Modes wireframe, success metrics, and pitfalls with mitigations.", has: ["Brainstorm", "RICE", "Wireframe", "Success metrics", "Pitfalls and mitigations"] }
      ]
    },

    prd: {
      pdf: "assets/pdfs/notebooklm-prd.pdf",
      note: "The product requirements: what to build, how success is measured, and what could go wrong.",
      goal: "Increase user retention by delivering relevant and personalized research outputs that reduce the need for prompt refinement and external tools.",
      metrics: [
        ["Key metric", "30-day retention rate", "Share of users who return to NotebookLM within 30 days after using Research Modes"],
        ["Secondary", "Research Mode adoption rate", "Share of research sessions where users pick a mode before asking a question"],
        ["Secondary", "Response satisfaction rate", "Share of AI responses marked as helpful"],
        ["Secondary", "Prompt refinement rate", "Average prompt edits or regenerations before a satisfactory answer"],
        ["Guardrail", "Response generation time", "Personalisation must not make the experience noticeably slower"],
        ["Guardrail", "Citation accuracy rate", "Answers stay grounded in the uploaded sources"],
        ["Guardrail", "Session completion rate", "Users still finish their research sessions"]
      ],
      risks: [
        ["Users pick the wrong mode", "Clear descriptions and recommended use cases for each mode, with simpler onboarding if satisfaction drops or users switch modes often."],
        ["Personalisation doesn’t reduce prompt rewriting", "Keep refining prompts and AI behaviour from usage analytics, and improve templates and intent detection."],
        ["Too many modes cause decision fatigue", "Start with a small set and expand gradually based on adoption, merging or removing modes nobody uses."]
      ],
      extras: [
        { title: "Acceptance criteria", items: [
          ["Users can select a research mode before asking a question"],
          ["AI responses adapt to the selected research mode"],
          ["Responses include citations from the uploaded documents"],
          ["Users can switch research modes during a session"],
          ["Users can save or export generated outputs"]
        ] },
        { title: "Edge cases", items: [
          ["No mode selected", "Default to Standard mode."],
          ["Single document uploaded", "Compare mode is disabled with guidance."],
          ["Insufficient context", "The AI asks for more sources or explains its limits."]
        ] },
        { title: "Tentative timeline", items: [
          ["Leadership approval", "1 Jul 2026"],
          ["Design ready", "14 Jul 2026"],
          ["Prototype testing", "8 Aug 2026"],
          ["Development starts", "26 Aug 2026"],
          ["Beta launch", "19 Dec 2026"]
        ] }
      ]
    },

    prototypeNote: "A clickable prototype of Research Modes, built with Lovable.",
    prototypes: [{ name: "Research Modes Studio", icon: "search", url: "https://research-modes-studio.lovable.app/", note: "Try the five research modes: Study, Compare, Report, Brainstorm and Deep Research." }]
  },
  {
    id: "glassdoor",
    title: "Glassdoor",
    type: "Interview prep",
    tags: ["AI features", "RAG", "Engagement", "Prioritisation"],
    oneLiner: "Candidates read dozens of interview reports the night before. I designed Interview Brief, a one-page summary built from Glassdoor's own data.",
    cover: "",
    icon: "briefcase",
    logo: "assets/img/logos/glassdoor.png",

    problem: {
      statement: "Glassdoor already has useful interview information, but candidates have to find and connect it themselves. They open many interview reports to spot patterns, struggle to tell recent experiences from old ones, and often leave Glassdoor to research the company elsewhere. There is no simple one-page summary of the interview evidence that already exists.",
      goal: "Help candidates understand what the interview process may look like, using relevant information already available on Glassdoor, and raise engagement with the Interviews section.",
      because: [
        ["Backed by the survey", "8 in 10 candidates read several interview experiences, and 7 in 10 would rather read a short summary."],
        ["Uses data Glassdoor already has", "No new content is needed. The value comes from bringing existing reports, questions and company data together."],
        ["Plays to Glassdoor's strength", "Real candidate experiences are Glassdoor's strongest advantage, so every point in the brief links back to them."]
      ],
      personas: [
        ["Last-minute job seeker", "Aged 22 to 35, students and working professionals", "Has an interview in the next 24 to 48 hours and uses Glassdoor to research the company, salary, reviews and interview experience."],
        ["Jobs to be done", "Functional, emotional and social", "Functional: quickly understand the company's interview process so I know what to expect. Emotional: feel prepared instead of wondering what to focus on. Social: walk in feeling confident and informed."]
      ]
    },

    // headline numbers: user survey of 10 candidates, and the RICE scoring
    metrics: [
      { n: 80, suffix: "%", label: "read several interview experiences first", note: "Before an interview, 8 of 10 respondents" },
      { n: 70, suffix: "%", label: "search for company-specific interview information", note: "7 of 10 respondents" },
      { n: 60, suffix: "%", label: "use more than one source to prepare", note: "6 of 10 respondents" },
      { n: 50, suffix: "%", label: "struggle to tell what is recent and relevant", note: "5 of 10 respondents" },
      { n: 70, suffix: "%", label: "prefer a short summary of experiences", note: "Instead of reading each one, 7 of 10" },
      { n: 18, suffix: "", label: "RICE score of Interview Brief", note: "The highest of the three ideas scored" }
    ],

    insights: [
      ["Candidates do the synthesis by hand", "They open several reports for the same company and compare difficulty and process across them. The summary they want is work the product could do for them."],
      ["Recent and relevant is hard to spot", "Half of the respondents find it hard to tell which experiences are recent and fit their role, and some roles have many questions while others have very few."],
      ["Candidates leave to finish their research", "People switch between company, interview and job pages, and look elsewhere for extra company information. That is engagement Glassdoor loses."],
      ["Trust matters more than a clever answer", "The brief must show when evidence is limited and link every claim to a source, so a thin dataset is never mistaken for a prediction."]
    ],

    feature: {
      name: "Interview Brief",
      tagline: "One page that turns Glassdoor's interview data into a brief for your role.",
      body: "A candidate picks a company and role, and clicks Get Interview Brief. Glassdoor retrieves the relevant interview data, ranks recent and role-relevant information first, and generates a short brief with every point linked back to the original reports.",
      points: [
        "Built on retrieval: interview reports, questions, dates, locations, difficulty, outcomes and company data are retrieved, re-ranked, and only then summarised by the model",
        "Recent and role-specific information comes first, and closely related roles are clearly labelled when the exact role has no reports",
        "Honest by design: it says when evidence is limited, shows conflicting experiences side by side, and never claims to know the exact questions"
      ],
      mock: {
        label: "Wireframe: Interview Brief on a Glassdoor company page",
        caption: "Wireframe from the PRD: a snapshot of difficulty, reports found, rounds and overall experience, what candidates reported, and a suggested preparation plan.",
        html: '<div class="mk-bar"><span class="mk-logo nb gd"><img src="assets/img/logos/glassdoor.png" alt="" />Glassdoor</span><span class="mk-search">Adobe · Interviews · Interview Brief</span></div>' +
          '<p class="mk-head">Interview Brief for Product Manager at Adobe</p>' +
          '<div class="mk-stats"><div><b>3.2</b><span>Interview difficulty</span></div><div><b>28</b><span>Reports found</span></div><div><b>3 to 4</b><span>Interview rounds</span></div><div><b>Positive</b><span>Overall experience</span></div></div>' +
          '<div class="mk-ans"><span class="mk-tag ok">What candidates reported</span><p>Interview process, common topics, how candidates got the interview, and locations, each with a See details link to the source reports.</p></div>' +
          '<div class="mk-ans"><span class="mk-tag exp">Limited evidence</span><p>No specific questions were found for this exact role. Related experiences are offered instead of a guess.</p></div>'
      },
      riceNote: "Interview Brief scored highest of the three ideas and was selected.",
      bets: [
        { name: "Interview Brief", rice: 18, pick: true, star: true },
        { name: "Better Interview Filters", rice: 13.5 },
        { name: "AI Mock Interview", rice: 12 }
      ]
    },

    research: { note: "", docs: [] },

    prd: {
      pdf: "assets/pdfs/glassdoor-prd.pdf",
      note: "The product requirements: what to build, how success is measured, and how the brief behaves when data is thin.",
      goal: "Help candidates understand what the interview process may look like using relevant information already available on Glassdoor.",
      metrics: [
        ["Key metric", "Interview Brief engagement rate", "Share of users who open an Interview Brief and interact with at least one section"],
        ["Secondary", "Interview Brief adoption", "How many users generate a brief"],
        ["Secondary", "Interview reports and questions opened", "Whether the brief leads users into the source reports and questions"],
        ["Secondary", "Company profile visits", "Whether the brief drives users deeper into Glassdoor"],
        ["Secondary", "Content saved and checklist completion", "Whether users save content and finish the preparation checklist"],
        ["Guardrail", "Citation and source accuracy", "Percentage of claims supported by Glassdoor data"],
        ["Guardrail", "Response time", "The brief must arrive quickly enough for a last-minute user"],
        ["Guardrail", "User-reported usefulness", "Whether candidates find the brief genuinely useful"]
      ],
      risksTitle: "Edge cases",
      risks: [
        ["Very few interview reports", "Clearly show that the evidence is limited."],
        ["No reports for the exact role", "Show closely related roles and label them clearly."],
        ["Conflicting experiences", "Show both patterns rather than choosing one without evidence."],
        ["No company data", "Ask the user to select another company or broaden the search."]
      ],
      extras: [
        { title: "Acceptance criteria", items: [
          ["Users can select a company and role"],
          ["Users can generate an Interview Brief"],
          ["The brief prioritises recent information and the selected role"],
          ["Every factual summary links to supporting Glassdoor data"],
          ["Questions appear only when relevant questions exist"],
          ["Missing information is clearly communicated"],
          ["Users can open the original interview report"],
          ["The AI does not claim to know the exact questions"]
        ] },
        { title: "Tentative timeline", items: [
          ["Leadership approval", "1 Sep 2026"],
          ["Design ready", "14 Sep 2026"],
          ["Prototype testing", "8 Oct 2026"],
          ["Development starts", "26 Oct 2026"],
          ["Beta launch", "19 Dec 2026"]
        ] }
      ]
    },

    prototypeNote: "A clickable prototype of Interview Brief, built with Lovable.",
    prototypes: [{ name: "Interview Brief", icon: "briefcase", url: "https://interview-brief-buddy.lovable.app", note: "Pick a company and role, and generate an Interview Brief." }]
  },
  {
    id: "curio",
    title: "Curio",
    type: "Personal learning",
    icon: "sprout",
    logo: "assets/img/logos/curio.svg",
    tags: ["Personalisation", "Learning", "AI practice", "Built with Lovable"],
    oneLiner: "People don't just learn a skill, they learn it for a reason. Curio starts with 'why' and shapes the whole learning path around it.",
    cover: "",

    problem: {
      statement: "Learning has never been easier to access, but knowing what to learn, and what to do next, is still hard. Thousands of courses make it hard to know where to start, platforms don't adapt to why someone wants to learn, and learning stops at content, so people struggle to practise, create or apply what they learn.",
      goal: "Turn curiosity into capability: a learning journey shaped by why someone is learning, that carries them from watching to doing to creating.",
      because: [
        ["Too much choice", "Thousands of courses make it hard to know where to start."],
        ["No context", "Platforms don't adapt to why someone wants to learn."],
        ["Learning stops at content", "People consume, but struggle to practise, create or apply."]
      ],
      personas: [
        ["Curiosity", "Intent 1", "“I just want to understand photography.”"],
        ["Personal interest", "Intent 2", "“I want to improve my photography.”"],
        ["Creator goal", "Intent 3", "“I want to create better content.”"],
        ["Career", "Intent 4", "“I want to become a photographer.”"],
        ["Income", "Intent 5", "“I want to get freelance work.”"]
      ]
    },

    metrics: [
      { n: 5, suffix: "", label: "learners tested the prototype", note: "Early learner feedback shaped the experience" },
      { n: 5, suffix: "", label: "learning intents, one skill", note: "Curiosity, personal interest, creator goal, career and income" },
      { n: 6, suffix: "", label: "stages in the product journey", note: "Discover, Personalize, Learn, Practice, Create, Grow" },
      { n: 4, suffix: "", label: "ways learning adapts to the learner", note: "Bite-sized lessons, a personal path, AI practice and next steps" }
    ],

    insights: [
      ["Intent matters", "Learners found the “Why are you learning?” step useful because the same skill can have very different goals. As one tester put it, choosing why they want to learn makes the experience feel more relevant."],
      ["The same skill needs different journeys", "Someone learning photography out of curiosity needs a different path from someone who wants freelance work. A single syllabus serves neither well."],
      ["Learning has to go beyond lessons", "Feedback pushed the journey further than content: Learn, then Practice, then Create, so learners apply what they learn and build something."],
      ["Community and proof close the loop", "Peer communities give support and accountability, portfolio building showcases real work, and opportunities such as freelance work, jobs and mentorship arrive when learners are ready."]
    ],

    feature: {
      name: "Why-first learning paths",
      tagline: "The first question isn't “What do you want to learn?” It's “Why?”",
      body: "Curio starts by understanding the why behind the skill. That answer determines what to learn, how to learn it, and what to do next, so every path is shaped by the learner's intent, pace and progress instead of a one-size-fits-all curriculum.",
      points: [
        "Four starting points, from “I'm curious” to career and income, set the shape of the path",
        "Bite-sized lessons, a path sequenced to your goal, AI-powered practice and feedback, and clear next steps after every lesson",
        "The journey continues past content into peer communities, portfolio building and opportunities"
      ],
      mock: {
        label: "Prototype screen: choosing why you want to learn",
        caption: "Based on the Curio prototype: the learner picks their intent, and the path and next step follow from it.",
        html: '<div class="mk-bar"><span class="mk-logo nb cu"><img src="assets/img/logos/curio.svg" alt="" />Curio</span><span class="mk-search">Search anything you want to learn...</span></div>' +
          '<p class="mk-head">Why do you want to learn photography?</p>' +
          '<div class="mk-modes"><div class="mk-mode on"><b>Curiosity</b><span>I just want to understand it</span></div><div class="mk-mode"><b>Personal interest</b><span>I want to improve</span></div><div class="mk-mode"><b>Creator goal</b><span>I want to create better content</span></div><div class="mk-mode"><b>Career</b><span>I want to make it my work</span></div><div class="mk-mode"><b>Income</b><span>I want to get freelance work</span></div></div>' +
          '<div class="mk-ans"><span class="mk-tag ok">Continue learning</span><p>Photography, Beginner. 32% of your path done. Your next step: “Understanding light”.</p></div>' +
          '<div class="mk-ans"><span class="mk-tag exp">Ask your coach</span><p>Stuck? Curious? Ask anything, in any language.</p></div>'
      },
      journey: {
        title: "The Curio journey",
        note: "From curiosity to capability in six stages.",
        steps: [
          ["Discover", "Search anything, or pick a world to wander into."],
          ["Personalize", "Start with why, and the path is sequenced to your goal."],
          ["Learn", "Bite-sized lessons in focused, digestible steps."],
          ["Practice", "AI-powered practice and feedback, so learning is active."],
          ["Create", "Build projects and showcase your progress."],
          ["Grow", "Peer communities, a portfolio and opportunities."]
        ]
      }
    },

    research: {
      title: "Case study deck",
      note: "The story of the project in one deck: the problem, the why-first idea, the product journey, how it was built, and what early learners said.",
      docs: [
        { tag: "Deck", title: "From curiosity to prototype", pdf: "assets/pdfs/curio-deck.pdf", note: "From the gap between curiosity and capability to a working prototype, including the six-step process and early learner feedback.", has: ["The problem", "Why-first approach", "Product journey", "Learning experience", "Process", "Early feedback"] }
      ]
    },

    prd: { pdf: "" },

    prototypeNote: "A clickable prototype of Curio, built with Lovable.",
    prototypes: [{ name: "Curio", icon: "sprout", url: "https://path-to-bloom-68.lovable.app/", note: "Start a learning path." }]
  },
  {
    id: "uber",
    title: "Uber",
    type: "Driver wellbeing",
    icon: "car",
    logo: "assets/img/logos/uber.png",
    tags: ["Product analytics", "Dashboards", "Driver wellbeing", "Built with Lovable"],
    oneLiner: "Drivers guess where and when to drive. I designed a dashboard that explains a weak shift and shows where demand is building, without pushing longer hours.",
    cover: "",

    problem: {
      statement: "Drivers make dozens of micro-decisions during a shift: when to go online, where to position themselves, which trips to accept and when to move zones. Most rely on intuition or community advice, because Uber's rich demand and marketplace data is not visible to them. They cannot tell why one shift beat another, where demand is building, how their behaviour affects earnings, or how they compare with similar drivers.",
      goal: "Help drivers maximise Earnings per Online Hour with actionable, real-time insights on demand, zone selection and driving behaviour, without increasing the hours they work.",
      because: [
        ["Slow shift: bad luck or poor choice?", "Drivers have no way to find the root cause of a low-earning shift."],
        ["Limited visibility into future demand", "They can react to demand but struggle to anticipate it."],
        ["Cancellations and ratings go unnoticed", "Drivers focus on earnings and miss the operational metrics that shape future trips."],
        ["No meaningful benchmarking", "Most drivers don't know how they perform against peers."],
        ["Income is unpredictable", "Day-to-day earnings fluctuate significantly."]
      ],
      personas: [
        ["Full-time driver", "Uber is the main income", "Online 35 to 60 hours a week and drives throughout the day. Success is earnings per online hour and weekly earnings stability."],
        ["Peak-hour driver", "Morning and evening rush", "Drives mainly in rush hours with limited daily hours, optimising for high-demand periods. Success is earnings per hour in peak windows and demand capture rate."],
        ["Weekend driver", "Supplements other income", "Drives mostly on weekends with flexible availability. Success is earnings per active shift and weekend earnings per hour."],
        ["Airport specialist", "Airport trips", "Works the airport demand cycle. Success is earnings per trip and airport trip utilisation."]
      ]
    },

    // the sample numbers below come from the dashboard designs in the document
    metrics: [
      { n: 5, suffix: "", label: "driver pain points addressed", note: "From slow shifts to unpredictable income" },
      { n: 4, suffix: "", label: "driver personas to benchmark against", note: "Full-time, peak-hour, weekend and airport" },
      { n: 6, suffix: "", label: "metric groups defined", note: "North Star, driver, outcome, success, operational and guardrail" },
      { n: 92, suffix: "", label: "Demand Opportunity Score of the best nearby zone", note: "Example from the design: a score out of 100" },
      { n: 11, suffix: "%", label: "above similar drivers in the sample view", note: "₹210/hr against a ₹190 benchmark" },
      { n: 21, suffix: "%", label: "below similar drivers in the sample diagnosis", note: "₹185/hr against ₹235/hr, with the reasons broken down" }
    ],

    insights: [
      ["Earnings per hour, not total earnings", "Total earnings can rise just by driving longer, which risks fatigue. Earnings per Online Hour reflects the quality of decisions, so online hours are treated as fixed and the dashboard helps drivers earn more from them."],
      ["Zone and time only work together", "The same zone can be a medium opportunity at 2 PM and a high one at 8 PM. A business district can be high at 8 AM and low at 3 PM. The dashboard has to read both at once."],
      ["Wellbeing is a requirement, not an add-on", "A fatigue score built from consecutive driving hours, break frequency and weekly hours guards the whole design, so success is higher efficiency rather than longer driving."],
      ["Compare like with like", "A city average misleads, because drivers work differently. Benchmarks use peers in the same city, vehicle category and driving pattern."]
    ],

    feature: {
      name: "Shift diagnostics",
      tagline: "Was today's shift bad luck, or poor positioning?",
      body: "After a shift, the dashboard breaks Earnings per Online Hour into the factors that moved it, then shows where demand is building so the next shift starts better. It answers three questions: how am I doing, why am I performing this way, and what should I do next.",
      points: [
        "A root-cause breakdown shows what pulled earnings down, such as zone choice, missed peak hours and idle time, and what helped, such as acceptance rate and rating",
        "Nearby zones are ranked by a Demand Opportunity Score from 0 to 100: 40% demand volume, 30% surge probability, 20% waiting-time reduction and 10% historical earnings",
        "Only nearby zones are shown, and the ranking refreshes at set intervals, so drivers aren't sent chasing the same zone or re-routed constantly"
      ],
      mock: {
        label: "Design: shift diagnostics for a below-benchmark shift",
        caption: "From the document's worked example: a shift earning less than similar drivers, with the reasons broken down.",
        html: '<div class="mk-bar"><span class="mk-logo nb uber"><img src="assets/img/logos/uber.png" alt="Uber" /></span><span class="mk-search">Shift insights</span></div>' +
          '<p class="mk-head">Why was my shift weak?</p>' +
          '<div class="mk-stats neutral"><div><b>₹185</b><span>Your earnings per hour</span></div><div><b>₹235</b><span>Similar drivers</span></div><div><b>21% less</b><span>Than similar drivers</span></div><div><b>18 min</b><span>Idle per hour, city 9</span></div></div>' +
          '<div class="mk-ans"><span class="mk-tag exp">What pulled it down</span><p>Zone selection -12%, missed 6 to 8 PM peak -8%, idle time -5%, missed surge -4%.</p></div>' +
          '<div class="mk-ans"><span class="mk-tag ok">What helped</span><p>Healthy acceptance rate +3% and strong rating +2%.</p></div>'
      },
      journey: {
        title: "Three questions the dashboard answers",
        note: "Every screen is built to answer one of these.",
        steps: [
          ["How am I doing?", "Earnings per hour against similar drivers, for example ₹210 against a ₹190 benchmark."],
          ["Why am I performing this way?", "The drivers behind it: strong zone and peak hours, or a missed nearby surge."],
          ["What should I do next?", "The best nearby opportunity, with its score, estimated earnings and when demand peaks."]
        ]
      }
    },

    research: { note: "", docs: [] },

    prd: {
      title: "Product analytics document",
      btn: "Click to explore the full document ↗",
      pdf: "assets/pdfs/uber-product-analytics.pdf",
      note: "The full document: the problem, goals, personas, solution, metrics and design trade-offs. Below are the metrics that matter most.",
      goal: "Enable drivers to maximise Earnings per Online Hour by providing actionable, real-time insights on demand, zone selection and driving behaviour.",
      metrics: [
        ["Key metric", "Earnings per Online Hour", "Total earnings divided by online hours. It cannot be raised just by working longer, and it reflects location, timing and trip choices"],
        ["Leading", "Demand Score and Zone Quality", "Predict future earning opportunities and help drivers position before demand peaks"],
        ["Leading", "Acceptance and cancellation rate", "Show whether drivers capture the trips on offer and keep matching efficient"],
        ["Leading", "Rating", "Rider rating over 7 or 30 days, a signal of service quality and trust"],
        ["Outcome", "Earnings today and trips completed", "A snapshot of the shift, read alongside earnings per hour so it doesn't reward long hours"],
        ["Outcome", "Earnings vs benchmark", "Earnings per hour against similar drivers in the same city, vehicle category and driving pattern"],
        ["Success", "Increase in earnings per hour", "Change before and after dashboard adoption, the primary sign the product works"],
        ["Success", "Increase in trip acceptance", "Shows whether drivers act on the recommendations"],
        ["Success", "Reduction in idle time", "Less time online without a trip means more time earning"],
        ["Success", "Lower earnings variance", "More predictable income across days, weeks and shifts"],
        ["Success", "Driver satisfaction", "Survey scores, app feedback, NPS or CSAT"],
        ["Operational", "Deadhead distance", "Distance driven without a passenger, a proxy for fuel use and poor positioning"],
        ["Guardrail", "Fatigue score", "Built from consecutive driving hours, breaks and weekly hours, so earnings never come at the cost of wellbeing"],
        ["Guardrail", "Consecutive hours driving", "Triggers break recommendations and wellbeing alerts"]
      ],
      risksTitle: "Design questions and trade-offs",
      risks: [
        ["Won't everyone rush to the same zone?", "Only the closest zones are shown, within 2 to 4 km and widening if demand is poor. A predictive model also lowers a zone's score as drivers accept rides and move toward it."],
        ["Does it steer drivers to remote areas?", "No. It signals where earning potential per hour is higher, based on demand and surge."],
        ["Could it push drivers into unhealthy hours?", "A separate fatigue score shows when a driver is running tired, so resting can be the better choice."],
        ["How are comparable drivers defined?", "Averages are taken within segments, never across them: city, vehicle type (auto, UberGo, Premier, XL, Moto) and working pattern."],
        ["Why deadhead distance?", "Net earnings would be the better success metric, but fuel data isn't available, so distance without a passenger is the proxy."],
        ["What is knowingly accepted?", "Distance-based staggering reduces clustering but doesn't remove it, and drivers who work near high-demand hubs keep a natural geographic advantage. These are named openly as trade-offs."]
      ],
      extras: [
        { title: "Demand Opportunity Score weights", items: [
          ["Demand volume", "40%"],
          ["Surge probability", "30%"],
          ["Waiting-time reduction", "20%"],
          ["Historical earnings", "10%"]
        ] },
        { title: "Zone and time together", items: [
          ["Airport, 2 PM", "Medium opportunity"],
          ["Airport, 8 PM", "High opportunity"],
          ["Business district, 8 AM", "High opportunity"],
          ["Business district, 3 PM", "Low opportunity"]
        ] },
        { title: "Design consideration", items: [
          ["Avoid continuous re-ranking", "A minimum movement threshold or refresh interval prevents driver confusion, excessive repositioning, unnecessary fuel use and recommendation loops."]
        ] }
      ]
    },

    prototypeNote: "Two ways to see the idea: the dashboard design built with Lovable, and a working build made in Google AI Studio.",
    prototypes: [
      { name: "Driver dashboard design", icon: "car", url: "https://driver-next-level.lovable.app/", note: "Try the real-time dashboard and shift insights." },
      { name: "Dashboard build", icon: "chart", url: "https://ai.studio/apps/3fa83bd4-2b34-486d-8a38-51f8415c6cad", note: "The dashboard build in Google AI Studio." }
    ]
  },
  {
    id: "google-meet",
    title: "Google Meet",
    type: "Meeting continuity",
    icon: "phone",
    logo: "assets/img/logos/google-meet.png",
    tags: ["Retention", "Continuity", "Collaboration", "Prioritisation"],
    oneLiner: "The meeting ends, and so does all the context. I designed Persistent Chat History so Meet's chat stays available after the call.",
    cover: "",

    problem: {
      statement: "Working professionals using Google Meet are unable to revisit chat discussions after meetings, causing loss of context, missed decisions, and reliance on external tools. This breaks continuity across meetings and reduces long-term reliance on Google Meet for work-critical conversations.",
      goal: "Improve retention by 15% over the next 6 months for working professionals who use Google Meet for internal and client meetings.",
      because: [
        ["Highest PIF score", "12 against 10, 10, 10 and 7 for the other four problems."],
        ["Strongest retention link", "Users already like joining Meet. Losing meeting context pushes them to external tools and competitors."],
        ["Fits Meet's strengths", "Simplicity, fast joining and Google ecosystem integration. Chat persistence and notes fit naturally with Docs, Drive and Calendar, and can be built step by step."]
      ],
      pif: 12,
      personas: [
        ["Rakshith, 26", "The execution-driven professional", "“The meeting ends, and so does all the context.”"],
        ["Alisha, 21", "The educator", "“People are on the call, but not really in the meeting.”"]
      ]
    },

    // headline numbers: Phase 2 survey and Play Store review analysis
    metrics: [
      { n: 22, suffix: "", label: "users asked for chat history, notes or captioned recordings", note: "Found in the user feedback and Play Store reviews" },
      { n: 44, suffix: "%", label: "face the most friction after the meeting", note: "Notes, recordings and follow-ups, 4 of 9 answers" },
      { n: 45, suffix: "%", label: "switch to another tool when Meet falls short", note: "The most common workaround, 5 of 11 answers" },
      { n: 50, suffix: "%", label: "have lost track of decisions or action items", note: "4 of 8 respondents, the same count as audio and video issues" },
      { n: 25, suffix: "", label: "NPS if Meet makes the improvements", note: "4 promoters, 2 passives and 2 detractors" },
      { n: 12, suffix: "", label: "PIF score of the P0 problem", note: "Population 4 + Intensity 4 + Frequency 4" }
    ],

    insights: [
      ["The pain is after the call, not during it", "People like how easy it is to join Meet. The friction shows up once the meeting ends: chat gets buried, there is no quick summary, and decisions are hard to find again."],
      ["Lost context sends users elsewhere", "When Meet doesn't support what they need, 45% of the answers were to switch to another meeting tool, and others screenshot or record externally. That is how retention leaks."],
      ["Build on simplicity, don't trade it away", "Ease of joining and a clutter-free interface were the most valued strengths. So the fix lives inside the existing Calendar event, with no new dashboard."],
      ["Meet can become a meeting memory system", "Saved chat, notes and captioned recordings were the most requested improvements, a chance to move Meet from a meeting tool to a place where meeting knowledge lives."]
    ],

    feature: {
      name: "Persistent Chat History",
      tagline: "The meeting ends, but the conversation doesn't.",
      body: "Meet automatically saves the in-meeting chat and attaches it to the calendar event, so participants can open it after the call ends. Nothing new to learn and no tool to switch to: it sits next to Details, Files and Notes.",
      points: [
        "Chat is saved and attached to the calendar event or meeting thread, with a Chat tab beside Details, Files and Notes",
        "A one-click Chat-to-Doc Export sends the chat with timestamps into Google Docs for collaborative follow-up",
        "Privacy first: opt-in for the first rollout, clear consent messaging, host-level control, and a 90-day default retention"
      ],
      mock: {
        label: "Wireframe: the Chat tab on a finished meeting",
        caption: "Based on the Phase 3 wireframe: after the meeting ends, the chat stays on the calendar event, and one click exports it to a Google Doc.",
        html: '<div class="mk-bar"><span class="mk-logo nb gm"><img src="assets/img/logos/google-meet.png" alt="" />Google Meet</span><span class="mk-search">Meeting ended · Duration 40 minutes</span></div>' +
          '<p class="mk-head">Project Sync · Calendar view</p>' +
          '<div class="mk-stats neutral"><div><b>Details</b></div><div><b>Files</b></div><div class="on"><b>Chat</b></div><div><b>Notes</b></div></div>' +
          '<div class="mk-ans"><span class="mk-tag ok">Saved chat</span><p>Ram: Here’s the latest report.<br>Isa: I’ll review it by EOD.<br>Deb: Let’s finalize the plan.</p></div>' +
          '<div class="mk-ans"><span class="mk-tag exp">Export Chat to Docs</span><p>One click copies the chat, with timestamps, into a Google Doc such as “Project Sync: Meeting chat transcript”.</p></div>'
      },
      riceNote: "The two high-confidence ideas went forward. Chat-to-Doc Export scored highest, and Persistent Chat History is the one that directly solves the P0 problem.",
      bets: [
        { name: "Chat-to-Doc Export (1-click)", rice: 18, pick: true },
        { name: "Persistent Chat History", rice: 13.5, pick: true, star: true },
        { name: "Smart Action Item Extraction", rice: 4 },
        { name: "Context Continuation Mode", rice: 1.33 }
      ],
      journey: {
        title: "The post-meeting flow",
        note: "From the end of the call to picking up where you left off.",
        steps: [
          ["Meeting ends", "A short summary shows how long it ran, with View summary and Go to calendar."],
          ["Open the event", "The Chat tab sits beside Details, Files and Notes in the calendar event."],
          ["Pick up the thread", "The conversation is still there, with names and timestamps, for later reference."],
          ["Export in one click", "Send the chat to a Google Doc to follow up together."]
        ]
      }
    },

    research: {
      note: "The full working behind the project, in the order I did it: understand the product, research the users, then decide what to build.",
      docs: [
        { title: "Phase 1: Understanding Product & Users", pdf: "assets/pdfs/meet-phase-1-understanding-product-and-users.pdf", note: "Four product flows and where they cause friction, company context against Teams, Zoom and Discord, three features reverse-engineered, and user segments.", has: ["Flows and frictions", "Company context", "Feature reverse-engineering", "User segments", "Problem hypothesis"] },
        { title: "Phase 2: User Research", pdf: "assets/pdfs/meet-phase-2-user-research.pdf", note: "Interviews, a survey and Play Store reviews turned into three themes, a SWOT, a 15% retention goal, two personas, and the P0 problem chosen with PIF scoring.", has: ["Interviews and survey", "SWOT", "Goal setting", "Personas", "PIF scoring", "Problem statement"] },
        { title: "Phase 3: Features, Prioritization + PRD", pdf: "assets/pdfs/meet-phase-3-features-prioritization-prd.pdf", note: "Four solution ideas, RICE prioritisation, the wireframe, success metrics, and pitfalls with mitigations.", has: ["Brainstorm", "RICE", "Wireframe", "Success metrics", "Pitfalls and mitigations"] }
      ]
    },

    prd: {
      pdf: "assets/pdfs/meet-prd.pdf",
      note: "The product requirements: how success is measured, and what could go wrong.",
      goal: "Increase retention among working professionals by improving post-meeting continuity.",
      metrics: [
        ["Key metric", "30-day meeting retention rate", "Share of working professionals who host or join at least one more meeting within 30 days after using Chat History"],
        ["Secondary", "Chat History access rate", "Share of meetings where participants open the saved chat within 7 days after the meeting ends"],
        ["Secondary", "Post-meeting artifact usage rate", "Share of meetings where users copy, export or search the saved chat"],
        ["Guardrail", "Meeting completion rate", "Meetings still finish without drop-off caused by feature friction"],
        ["Guardrail", "Meeting join time", "Protects Meet's core strength: fast and simple access"]
      ],
      risksTitle: "Pitfalls and mitigations",
      risks: [
        ["Privacy concerns about saved chat", "Opt-in by default for the first rollout, clear consent messaging and host-level control."],
        ["Users don't revisit the history", "Add nudges such as “View Chat History” in the calendar event, and surface summary highlights."],
        ["An extra tab clutters the interface", "Keep chat inside the existing Calendar event panel, with no new dashboard."],
        ["Storage and infrastructure costs grow", "Limit retention to 90 days by default and compress chat logs."],
        ["Saved chat is copied and misused", "Make it clear that chat is saved, and let hosts disable it."]
      ],
      extras: [
        { title: "Detection signals", items: [
          ["Privacy", "More support tickets mentioning privacy, and a drop in meeting completion rate"],
          ["Low adoption", "A low Chat History access rate"],
          ["Clutter", "Longer meeting join time and lower satisfaction ratings"],
          ["Cost", "Storage cost per active user rising sharply"]
        ] },
        { title: "Containment and rollback", items: [
          ["Privacy", "Temporarily disable default saving and switch to host-enabled only"],
          ["Low adoption", "Run an experiment with better visibility, and deprioritise if usage stays low"],
          ["Clutter", "Remove the persistent tab and move to an export-only model"],
          ["Cost", "Cap storage and move older chats to an export-only archive"]
        ] }
      ]
    },

    prototypes: []
  },
  {
    id: "amazon",
    title: "Amazon",
    type: "Shopping decisions",
    icon: "grid",
    logo: "assets/img/logos/amazon.png",
    tags: ["Conversion", "Product comparison", "E-commerce", "Prioritisation"],
    oneLiner: "Shoppers compare many similar products by hand before they buy. I designed a side-by-side comparison with a clear recommendation.",
    cover: "",

    problem: {
      statement: "Users struggle to efficiently discover relevant products and compare prices, features, ratings, and offers across multiple alternatives, leading to longer decision-making journeys and increasing the likelihood of purchase abandonment.",
      goal: "Increase purchase conversion rate by 5–8% within 6 months by helping customers compare products more effectively, trust reviews, understand delivery reliability, and receive more relevant recommendations.",
      because: [
        ["Highest PIF score", "14 against 8, 12, 12 and 9 for the other four problems."],
        ["Backed by the survey", "Product discovery was the top thing shoppers want improved, and finding and comparing products take the most effort."],
        ["Hits conversion directly", "A longer decision journey means more drop-offs and cart abandonment, and shoppers who leave to research elsewhere may not come back."]
      ],
      pif: 14,
      personas: [
        ["Rakshith, 26", "The confidence-seeking shopper", "“A good review tells me more than a product description ever can.”"],
        ["Alisha, 24", "The deal-seeking shopper", "“Why pay full price today when the same product could be cheaper tomorrow?”"]
      ]
    },

    // headline numbers: Phase 2 survey of 9 Amazon shoppers, and the PIF scoring
    metrics: [
      { n: 67, suffix: "%", label: "want product discovery improved", note: "The top thing to improve, 6 of 9 respondents" },
      { n: 67, suffix: "%", label: "say finding products takes the most effort", note: "6 of 9 respondents" },
      { n: 56, suffix: "%", label: "find comparing products takes the most effort", note: "5 of 9 respondents, the same as understanding product details" },
      { n: 78, suffix: "%", label: "rely on reviews and ratings between similar products", note: "7 of 9 respondents" },
      { n: 89, suffix: "%", label: "feel confident before buying", note: "Already confident, so the risk is leaving, not hesitating" },
      { n: 14, suffix: "", label: "PIF score of the P0 problem", note: "Population 5 + Intensity 5 + Frequency 4" }
    ],

    insights: [
      ["Finding and comparing is the real effort", "Shoppers say finding products and comparing them take the most effort, while reading reviews takes none. The work is in narrowing the options, not in reading about them."],
      ["Reviews decide, specifications don't", "Reviews and ratings were the top influence on a purchase, and most shoppers lean on them between similar products. Product information alone isn't influential enough."],
      ["Shoppers leave to finish their research", "Users compare prices across competitors and check YouTube, Reddit or review sites before buying. Each trip away is a chance to lose the sale."],
      ["Prioritised with numbers, not instinct", "Five problems were scored with PIF, and five ideas with RICE. Product Comparison scored 27, far ahead of the next at 9."]
    ],

    feature: {
      name: "Product Comparison",
      tagline: "Compare the products that matter, side by side, and know which to pick.",
      body: "On a product page, shoppers see similar products and choose the ones to compare. Amazon then lays out the key differences side by side and, optionally, recommends the best choice and explains why. Comparisons can be saved, shared or cleared, so shopping continues without starting over.",
      points: [
        "Pick from similar products on the product page, then see price, rating, battery, processor, memory, delivery and warranty in one table",
        "An optional AI recommendation names the best overall choice, with the reasons: performance, battery life, customer rating and delivery speed",
        "Add the selected products to the cart or save the comparison, so the decision doesn't have to be remade"
      ],
      mock: {
        label: "Wireframe: comparing three laptops on Amazon",
        caption: "Based on the Phase 3 wireframe: the shopper selects similar products, compares them side by side, and gets an optional recommendation with reasons.",
        html: '<div class="mk-bar"><span class="mk-logo nb am"><img src="assets/img/logos/amazon.png" alt="" />Amazon</span><span class="mk-search">Compare (3 products)</span></div>' +
          '<p class="mk-head">Helping customers compare products easily</p>' +
          '<div class="mk-stats neutral tri"><div><b>₹1,14,990</b><span>MacBook Air M3, 4.6 stars</span></div><div><b>₹79,990</b><span>ASUS Zenbook 14 OLED, 4.4 stars</span></div><div><b>₹54,990</b><span>Dell Inspiron 14, 4.3 stars</span></div></div>' +
          '<div class="mk-ans"><span class="mk-tag ok">Best overall: Apple MacBook Air M3</span><p>Best performance, longest battery life, highest customer rating and fastest delivery.</p></div>' +
          '<div class="mk-ans"><span class="mk-tag exp">Continue shopping</span><p>Save the comparison, share it, add the selected product to the cart, or clear it.</p></div>'
      },
      riceNote: "Product Comparison scored far higher than the other four ideas and was selected.",
      bets: [
        { name: "Product Comparison", rice: 27, pick: true, star: true },
        { name: "Customer Similarity Reviews", rice: 9 },
        { name: "User Intent Selection", rice: 9 },
        { name: "Delivery Reliability Score", rice: 6 },
        { name: "Smart Buying Assistant", rice: 3 }
      ],
      journey: {
        title: "The comparison flow",
        note: "Four steps from browsing to a confident purchase.",
        steps: [
          ["Discover similar products", "A “Similar products shoppers compare” panel sits on the product page."],
          ["Compare products", "A side-by-side table shows the key differences, with Add to Cart for the selection."],
          ["AI recommendation (optional)", "The best choice for the shopper, with a short reason for each pick."],
          ["Continue shopping", "Save, share or clear the comparison at any time."]
        ]
      }
    },

    research: {
      note: "The full working behind the project, in the order I did it: understand the product, research the users, then decide what to build.",
      docs: [
        { title: "Phase 1: Understanding Product & Users", pdf: "assets/pdfs/amazon-phase-1-understanding-product-and-users.pdf", note: "Six shopping flows and where they cause friction, company context against Flipkart, Myntra and Ajio, four features reverse-engineered, and four user segments.", has: ["Flows and frictions", "Company context", "Feature reverse-engineering", "User segments", "Problem hypothesis"] },
        { title: "Phase 2: User Research", pdf: "assets/pdfs/amazon-phase-2-user-research.pdf", note: "A 9-person survey and interviews turned into six themes, a SWOT, two personas, and the P0 problem chosen with PIF scoring.", has: ["Interviews and survey", "SWOT", "Goal setting", "Personas", "PIF scoring", "Problem statement"] },
        { title: "Phase 3: Features, Prioritization + PRD", pdf: "assets/pdfs/amazon-phase-3-features-prioritization-prd.pdf", note: "Five solution ideas, RICE prioritisation, the Product Comparison wireframe, success metrics, and pitfalls with mitigations.", has: ["Brainstorm", "RICE", "Wireframe", "Success metrics", "Pitfalls and mitigations"] }
      ]
    },

    prd: {
      title: "Success metrics and risks",
      note: "From Phase 3: how success is measured, and what could go wrong.",
      goal: "Increase purchase conversion rate by 5–8% within 6 months by helping customers compare products more effectively, trust reviews, understand delivery reliability, and receive more relevant recommendations.",
      metrics: [
        ["Key metric", "Purchase conversion rate", "Share of users who complete a purchase after viewing a product detail page"],
        ["Secondary", "Product Comparison usage rate", "Share of shoppers who use Product Comparison before purchasing"],
        ["Secondary", "Trusted review engagement rate", "Share of users who interact with Customer Similarity Reviews before purchasing"],
        ["Secondary", "Delivery confidence utilisation rate", "Share of users who view delivery reliability information before purchasing"],
        ["Guardrail", "Product return rate", "Share of purchased products returned within the return window, so higher conversion comes from better decisions"]
      ],
      risksTitle: "Pitfalls and mitigations",
      risks: [
        ["Users ignore the comparison tool", "Highlight the comparison button on product pages."],
        ["Review matching feels inaccurate", "Show why a reviewer is considered similar."],
        ["Delivery predictions are inaccurate", "Start with conservative confidence estimates."],
        ["Users don't want extra input steps", "Make intent selection optional and easy to skip."],
        ["Users prefer manual research", "Give clear reasoning and alternative options with every recommendation."]
      ],
      extras: [
        { title: "Detection signals", items: [
          ["Comparison", "A low Product Comparison usage rate, and a low click rate on the Compare button"],
          ["Similarity reviews", "Low engagement, and more “Not Relevant” feedback"],
          ["Delivery score", "More delivery complaints, and a gap between predicted and actual delivery"],
          ["Intent selection", "A low completion rate, and more drop-off while browsing"],
          ["Buying assistant", "Low usage, and a low recommendation acceptance rate"]
        ] },
        { title: "Containment and rollback", items: [
          ["Comparison", "Move the feature higher on the product page, simplify the flow, or fall back to a basic comparison table"],
          ["Similarity reviews", "Reduce the weight of similarity matching, or revert to standard review ranking"],
          ["Delivery score", "Disable the score temporarily and show standard delivery estimates only"],
          ["Intent selection", "Remove mandatory prompts and infer intent from browsing behaviour"],
          ["Buying assistant", "Roll back to recommendations only, and keep the assistant optional"]
        ] }
      ]
    },

    prototypes: []
  }
];
