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
    "Four years ago I joined Deloitte as a DevOps engineer, and I have loved every release since. I look after builds, deployments and the people waiting on them, which means keeping a lot of moving parts calm, tested and shipping smoothly, even when the pace picks up. Yes, I genuinely enjoy that kind of puzzle! 🧩",
    "Somewhere along the way I fell for product. I love working out why people use something, what quietly frustrates them, and how one small change can make their day better. So now I take products apart, prototype the fix, and spend happy hours exploring the magic of AI ✨, where an idea in my head can become a working app in an afternoon. I am also curious about finance, because that is where good ideas meet the real world.",
    "Away from the screen you will find me out on a ride 🏍️, chasing new places, adventures and new plates of food, getting lost in history, painting, gaming, playing sports, or chatting away with anyone who has a good story. If that sounds like your kind of person, say hi! 👋"
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
    { img: "assets/img/life-sunworld.jpg",   cap: "Ba Na Hills",   alt: "Manish outside Sun World Ba Na Hills" },
    { img: "assets/img/life-banahills.jpg",  cap: "Taking it in",  alt: "Manish looking out over a hilltop village" },
    { img: "assets/img/life-himalaya.jpg",   cap: "Mountain mode", alt: "Manish sitting on a rock in the mountains" },
    { img: "assets/img/life-ninhbinh.jpg",   cap: "Vietnam",       alt: "Manish at a viewpoint over green limestone hills" }
  ],

  automations: [
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
