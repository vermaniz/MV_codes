/* ==========================================================
   SITE CONTENT  —  edit this file to change text on the site.
   (Case studies live in data/case-studies.js)
   ========================================================== */
window.SITE = {
  name: "Manish Verma",
  firstName: "Manish",
  year: "2026",
  tagline: "Release Manager · AI Product Management",
  email: "manishvermabittu@gmail.com",
  linkedin: "https://www.linkedin.com/in/manishvermabittu",
  resume: "https://vermaniz.github.io/Resume_Build/",   // opens in a new tab
  resumeLabel: "Resume",
  location: "Hyderabad, India",

  about: [
    "Four years ago I joined Deloitte as a DevOps engineer. Since then I have put real effort into automating the repetitive work, saving hours so every release is delivered on time and succeeds. I look after builds, deployments and the stakeholders depending on them, keeping many moving parts calm, tested and shipping. Juggling all of it at once is what I enjoy most! 🚀",
    "Along the way I fell for product. I love working out why people use something, what quietly frustrates them, and how one small change can improve their day. So now I take products apart, prototype the fix, and explore the magic of AI ✨, where an idea can become a working app in an afternoon.",
    "Away from the screen you will find me on a ride 🏍️, chasing new places and new plates of food, getting lost in history, painting, gaming, or chatting with anyone who has a good story. Got one? The chai is on me! ☕"
  ],



  /* icon names available: cloud branch rocket heart zap sparkles grid bot calendar car search sprout briefcase mail news chat clock pin plane */
  tools: [
    { name: "Salesforce", icon: "cloud" },
    { name: "Copado", icon: "branch" },
    { name: "Release management", icon: "rocket" },
    { name: "Lovable", icon: "heart" },
    { name: "Relay.app", icon: "zap" },
    { name: "Claude", icon: "sparkles" },
    { name: "Google Workspace", icon: "grid" },
    { name: "AI workflows", icon: "bot" }
  ],

  certifications: [
    {
      title: "AI Product Management Program",
      issuer: "HelloPM",
      status: "Completed Oct 2026",
      img: "assets/img/cert-hellopm.png"
    },
    { title: "Copado Certifications ×5", issuer: "Copado", status: "Completed" },
    { title: "Salesforce Certifications ×8", issuer: "Salesforce", status: "Completed" }
  ],


  /* travel photos shown in "Off the clock". Change the captions freely; add/remove photos in assets/img/ */
  gallery: [
    { img: "assets/img/life-sunworld.jpg",     alt: "Manish outside Sun World Ba Na Hills" },
    { img: "assets/img/life-banahills.jpg",   alt: "Manish looking out over a hilltop village" },
    { img: "assets/img/life-himalaya.jpg",   alt: "Manish sitting on a rock in the mountains" },
    { img: "assets/img/life-ninhbinh.jpg",         alt: "Manish at a viewpoint over green limestone hills" }
  ],

  automations: [
    {
      icon: "branch",
      wide: true,
      name: "PR to Merge Pipeline",
      line: "From raising a PR to merging it, the pipeline validates the code on its own: Apex checks, PMD checks, Flow tests and SA11y accessibility checks. A report shows what to fix, and once the lead approves the PR, it merges to the target branch automatically.",
      tags: ["Apex checks", "PMD checks", "Flow tests", "SA11y checks", "Report to fix", "Lead approval", "Auto-merge"],
      img: "assets/img/automation-pr-pipeline.svg"
    },
    {
      icon: "mail",
      name: "Daily Doc Summary",
      line: "Every afternoon a Google Doc is exported, summarised by AI and mailed to me.",
      img: "assets/img/relay-doc-summary.png"
    },
    {
      icon: "news",
      name: "Daily News Brief",
      line: "A 6 PM digest across global, AI, jobs, economy, tech and RBI news, written by Claude.",
      img: "assets/img/relay-daily-news.png"
    },
    {
      icon: "calendar",
      name: "Meeting Reminder",
      line: "Upcoming cohort sessions get a summarised agenda, the right Drive files, and a WhatsApp nudge.",
      img: "assets/img/relay-meeting-reminder.png"
    },
    {
      icon: "chat",
      name: "It actually pings me",
      line: "The WhatsApp notifications the workflow above sends, running for real.",
      img: "assets/img/relay-whatsapp.png"
    }
  ]
};
