(function () {
  "use strict";
  var S = window.SITE, CASES = window.CASES || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var isCase = document.body.classList.contains("case-page");
  var home = isCase ? "index.html" : "";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function setHTML(sel, html) { var el = $(sel); if (el) el.innerHTML = html; }

  /* ---------- icons (24x24 line icons) ---------- */
  var ICONS = {
    cloud: '<path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4.5 12 3.5 3.5 0 0 0 6 19z"/>',
    branch: '<circle cx="6" cy="5" r="2.2"/><circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="8" r="2.2"/><path d="M6 7.2v9.6M18 10.2c0 4.2-6.5 3.4-10.2 7.4"/>',
    rocket: '<path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    bot: '<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V5M9 13h.01M15 13h.01M3 13v2M21 13v2"/><circle cx="12" cy="4" r="1"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    car: '<path d="m4 14 1.6-4.6A2 2 0 0 1 7.5 8h9a2 2 0 0 1 1.9 1.4L20 14"/><path d="M3 14h18v4H3zM7 18v1.5M17 18v1.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    sprout: '<path d="M12 21v-8"/><path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6zM12 15c0-3-2.5-5-6-5 0 3.5 2.5 5 6 5z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
    news: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h4"/>',
    chat: '<path d="M20 12a8 8 0 0 1-11.8 7L4 20l1.2-4A8 8 0 1 1 20 12z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    plane: '<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>',
    award: '<circle cx="12" cy="9" r="6.5"/><path d="m8.5 14.5-1.5 7 5-2.5 5 2.5-1.5-7"/><path d="m12 6 1 2 2.2.3-1.6 1.6.4 2.2-2-1-2 1 .4-2.2L8.8 8.300 11 8z"/>',
    doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14a5 5 0 0 1 4.5 5"/>',
    flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
    bike: '<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16 9.500 8H13M12 16 9.500 8M12 16l3-8h2M13 8l-.5-2h2"/>',
    food: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 21V3c-2.500 1.500-3.500 4.500-3.500 8H17"/>',
    landmark: '<path d="M3 10 12 4l9 6M5 10v8M9.500 10v8M14.500 10v8M19 10v8M3 20h18"/>',
    phone: '<rect x="7" y="2.500" width="10" height="19" rx="2.500"/><path d="M11 18.500h2"/>',
    gamepad: '<rect x="2.5" y="7" width="19" height="11" rx="5"/><path d="M7 10.500v4M5 12.500h4M15.500 11h.01M18 14h.01"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a3 3 0 0 0 3 3M16 6h4v1a3 3 0 0 1-3 3M12 13v4M8.500 20h7M10 17h4"/>',
    mountain: '<path d="m3 19 6.500-11 4 6.500 2-3L21 19z"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.500 0 2-1 1.500-2.200-.6-1.400.2-2.800 1.800-2.800H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3z"/><path d="M7.500 11h.01M10 7.500h.01M14.500 7.500h.01"/>'
  };
  function svg(name) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.sparkles) + "</svg>"; }

  /* soft colour pairs: [tint, deep, folderBack, folderTop, folderBottom] */
  var PAL = [
    ["#d2e0f9", "#1952b3", "#a6c2f2", "#e9f0fc", "#d2e0f9"],
    ["#f9ead2", "#b47818", "#edc078", "#fcf5e9", "#f3d5a5"],
    ["#d1faea", "#0f8a5b", "#75f0c1", "#e8fcf5", "#a3f5d6"],
    ["#d3e1f8", "#153e84", "#7ba4ea", "#e9f0fb", "#a7c2f1"]
  ];
  function tn(i) { var p = PAL[i % PAL.length]; return "--tint:" + p[0] + ";--deep:" + p[1] + ";"; }
  function ico(name, i) { return '<span class="ico" style="' + tn(i) + '">' + svg(name) + "</span>"; }

  /* the three stages every project goes through: research -> PRD -> prototype */
  var STEPS = [
    { key: "research", icon: "users", label: "User research", short: "Research" },
    { key: "prd", icon: "doc", label: "PRD", short: "PRD" },
    { key: "prototype", icon: "phone", label: "Prototype", short: "Prototype" }
  ];
  function flowHTML(link) {
    var o = '<div class="flow" data-reveal role="img" aria-label="Process: user research, then PRD, then prototype">';
    STEPS.forEach(function (s, i) {
      if (i) o += '<span class="fl" aria-hidden="true"><i></i></span>';
      var inner = ico(s.icon, i) + "<b>" + s.label + "</b>";
      o += link ? '<a class="fn tlink" href="#' + s.key + '">' + inner + "</a>" : '<span class="fn">' + inner + "</span>";
    });
    return o + "</div>";
  }

  /* ---------- shared chrome ---------- */
  setHTML("#nav",
    '<nav class="nav" id="navbar"><div class="l"><a href="' + home + '#about">About</a><a href="' + home + '#projects">Projects</a></div>' +
    '<a class="dots" href="' + (home || "#top") + '" aria-label="Home"><i></i><i></i><i></i></a>' +
    '<div class="r"><a href="' + home + '#automations">Automations</a><a href="' + home + '#contact">Contact</a></div></nav>');
  setHTML("#footer", "<span>© " + new Date().getFullYear() + " " + esc(S.name) + "</span><a class=\"f-mail\" href=\"mailto:" + esc(S.email) + '" aria-label="Email me" title="Email me"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg></a>');
  var navbar = $("#navbar");
  function navState() { navbar.classList.toggle("solid", window.scrollY > 40); }
  window.addEventListener("scroll", navState, { passive: true }); navState();

  /* ---------- home content ---------- */
  if (!isCase) {
    setHTML("#heroTag", esc(S.tagline));
    setHTML("#heroYear", esc(S.year));
    setHTML("#hi", '<span class="hi-a">Hi there,</span><br><span class="hi-b">I\'m ' + esc(S.firstName) + "!</span>");
    setHTML("#aboutText", S.about.map(function (p) { return "<p data-reveal>" + esc(p) + "</p>"; }).join(""));




    setHTML("#certList", S.certifications.map(function (c, i) {
      return '<div class="cert" data-reveal>' + ico("award", i) + "<div><h3>" + esc(c.title) + "<small>by " + esc(c.issuer) + '</small></h3><p class="st">' + esc(c.status || "") + "</p>" +
        (c.img ? '<button type="button" data-img="' + esc(c.img) + '">View certificate</button>' : "") + "</div></div>";
    }).join(""));
    setHTML("#tools", S.tools.map(function (t, i) {
      var name = typeof t === "string" ? t : t.name, icon = typeof t === "string" ? "sparkles" : t.icon;
      return '<div class="tool glass" data-reveal>' + ico(icon, i + 2) + "<span>" + esc(name) + "</span></div>";
    }).join(""));

    setHTML("#projFlow", flowHTML(false));
    setHTML("#cases", CASES.map(function (c, i) {
      var p = PAL[i % PAL.length];
      return '<a class="pcard glass tlink" data-reveal style="' + tn(i) + "--f1:" + p[3] + ";--f2:" + p[4] + '" href="case.html?id=' + encodeURIComponent(c.id) + '">' +
        '<span class="pc-logo" aria-hidden="true"><b>' + esc(c.title.charAt(0)) + "</b>" + (c.logo ? '<img loading="lazy" src="' + esc(c.logo) + '" alt="" onerror="this.remove()">' : "") + "</span>" +
        '<div class="pc-top"><span class="pc-ico">' + svg(c.icon || "doc") + '</span><span class="pc-type">' + esc(c.type || "Project") + "</span></div>" +
        "<h3>" + esc(c.title) + '</h3><p class="pc-line">' + esc(c.oneLiner || "") + "</p>" +
        '<span class="pc-go">Open this project <i>→</i></span></a>';
    }).join("") + '<div class="pcard soon" data-reveal><h3>More coming soon</h3><p class="pc-line">The next project will appear here.</p></div>');

    setHTML("#autos", S.automations.map(function (a, i) {
      return '<figure class="auto glass" data-reveal><button type="button" data-img="' + esc(a.img) + '" aria-label="Enlarge ' + esc(a.name) + '"><img loading="lazy" src="' + esc(a.img) + '" alt="' + esc(a.name) + ' workflow"></button>' +
        '<div class="cap">' + ico(a.icon || "zap", i) + "<h3>" + esc(a.name) + "</h3></div><p>" + esc(a.line) + "</p></figure>";
    }).join(""));

    if (S.gallery && S.gallery.length) {
      setHTML("#snaps", S.gallery.map(function (g, i) {
        return '<div class="snap" data-reveal style="--bk:' + PAL[i % PAL.length][2] + ";" + tn(i) + '"><figure>' +
          '<button type="button" data-img="' + esc(g.img) + '" aria-label="Enlarge photo: ' + esc(g.cap || "") + '"><span class="ph"><img loading="lazy" src="' + esc(g.img) + '" alt="' + esc(g.alt || g.cap || "") + '"></span></button>' +
          (g.cap ? "<figcaption>" + svg("pin") + esc(g.cap) + "</figcaption>" : "") + "</figure></div>";
      }).join(""));
    } else { var lifeSec = $("#life"); if (lifeSec) lifeSec.remove(); }

    var mailHref = "mailto:" + S.email + "?subject=" + encodeURIComponent("Hello from your portfolio");
    $("#mailIcon").href = mailHref;
    if (S.linkedin) { var li = $("#liBtn"); li.href = S.linkedin; li.hidden = false; }
    if (S.resume) { var rs = $("#resumeBtn"); rs.href = S.resume; rs.hidden = false; $("#resumeLabel").textContent = S.resumeLabel || "Resume"; }

    var lb = document.createElement("div");
    lb.className = "lightbox"; lb.innerHTML = '<img alt="">';
    document.body.appendChild(lb);
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-img]");
      if (b) { $("img", lb).src = b.getAttribute("data-img"); lb.classList.add("on"); }
      else if (lb.classList.contains("on")) lb.classList.remove("on");
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("on"); });
  }

  /* ---------- case page ---------- */
  if (isCase) {
    var id = new URLSearchParams(location.search).get("id");
    var idx = CASES.findIndex(function (c) { return c.id === id; });
    if (idx < 0) idx = 0;
    var c = CASES[idx];
    var CYCLE = ["target", "alert", "trend", "users", "flag", "bulb", "chart"];
    if (c) {
      document.title = c.title + " — " + S.name;
      var nxt = CASES[idx + 1];
      var h = '<div class="wrap"><section class="c-top"><a class="back tlink" href="index.html#projects">← All Projects</a>' +
        '<div class="c-titlerow">' + (c.logo ? '<span class="c-logo" aria-hidden="true"><b>' + esc(c.title.charAt(0)) + '</b><img src="' + esc(c.logo) + '" alt="" onerror="this.remove()"></span>' : "") +
        '<h1 class="c-title" data-reveal>' + esc(c.title) + '</h1></div><div class="c-pills" data-reveal>' + (c.year ? '<span class="pill" style="' + tn(0) + '">' + esc(c.year) + "</span>" : "") +
        (c.tags || []).map(function (t, i) { return '<span class="pill" style="' + tn(i + 1) + '">' + esc(t) + "</span>"; }).join("") + "</div>" +
        "</section>";

      /* optional long-form write-up (details, goal, role, numbers, sections) - shown inside the research stage */
      var legacy = "";
      if ((c.details || []).length || c.goal || c.approach) legacy += '<section class="c-hero"><div class="c-card glass" data-reveal><h3>Details</h3><dl>' +
        (c.details || []).map(function (d) { return "<dt>" + esc(d[0]) + ":</dt><dd>" + esc(d[1]) + "</dd>"; }).join("") + "</dl>" +
        (c.goal ? "<h4>Goal</h4><p>" + esc(c.goal) + "</p>" : "") + (c.approach ? "<h4>Approach</h4><p>" + esc(c.approach) + "</p>" : "") + "</div>" +
        '<div class="c-visual glass" data-reveal>' + (c.cover ? '<img src="' + esc(c.cover) + '" alt="">' : "") +
        (c.cover ? "" : "<q>" + esc(c.title.split(" ")[0]) + " <em>" + esc(c.title.split(" ").slice(1).join(" ")) + "</em></q>") + "</div></section>";

      if (c.role && c.role.length) {
        legacy += '<section class="c-card glass" style="margin-top:20px" data-reveal><h3>My role</h3><ul>' + c.role.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></section>";
      }
      if (c.stats && c.stats.length) {
        legacy += '<section class="perf"><h2 class="h-sec" data-reveal>Performance</h2><p class="script sub center" data-reveal>the numbers</p><div class="perf-row">' +
          c.stats.map(function (s, i) {
            return '<div class="glass" style="' + tn(i) + '" data-reveal>' + ico(s.icon || ["users", "alert", "search", "award"][i % 4], i) + '<b><span class="count" data-to="' + s.n + '" data-dec="' + (s.dec || 0) + '">0</span>' + esc(s.suffix || "") + "</b><span>" + esc(s.label) + "</span></div>";
          }).join("") + "</div></section>";
      }
      legacy += '<section class="c-secs">' + (c.sections || []).map(function (s, i) {
        return '<article class="c-sec c-card glass" style="' + tn(i) + '" data-reveal><div class="head">' + ico(s.icon || CYCLE[i % CYCLE.length], i) + '<span class="lab">' + esc(s.label) + "</span></div><h3>" + esc(s.title) + "</h3>" +
          (s.body ? "<p>" + esc(s.body) + "</p>" : "") +
          (s.items ? s.items.map(function (it) { return '<div class="it"><b>' + esc(it[0]) + "</b><span>" + esc(it[1]) + "</span></div>"; }).join("") : "") + "</article>";
      }).join("") + "</section>";

      /* the three stages, always in this order: user research -> PRD -> prototype */
      var STAGE_NOTE = {
        research: "The research behind the product: who it is for, what is going wrong, and the problem worth solving.",
        prd: "The product requirements: goals, scope, user stories and how success is measured.",
        prototype: "A clickable prototype you can try yourself."
      };
      function stageHead(i, num) {
        var s = STEPS[i];
        return '<div class="st-head" data-reveal><span class="st-num">' + (num || "0" + (i + 1)) + "</span>" + ico(s.icon, i) + '<h2 class="st-title">' + s.label + "</h2></div>";
      }
      function docStage(i, d, extra) {
        var s = STEPS[i], pdf = d && d.pdf;
        var o = '<section class="stage" id="' + s.key + '" style="' + tn(i) + '">' + stageHead(i) +
          '<p class="st-note" data-reveal>' + esc((d && d.note) || STAGE_NOTE[s.key]) + "</p>";
        if (d && d.has && d.has.length) o += '<ul class="has" data-reveal>' + d.has.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
        if (extra) o += extra;
        if (pdf) {
          o += '<div class="pdf-frame glass" data-reveal><iframe src="' + esc(pdf) + '" title="' + esc(c.title) + " " + s.label + ' PDF"></iframe></div>' +
            '<div class="pdf-actions"><a class="btn btn-ink" href="' + esc(pdf) + '" target="_blank" rel="noopener">Open PDF ↗</a><a class="btn" href="' + esc(pdf) + '" download>Download</a></div>';
        } else {
          o += '<div class="soon-card glass" data-reveal><b>Coming soon</b><span>The ' + s.label + " PDF will appear here.</span></div>";
        }
        return o + "</section>";
      }
      var protoList = c.prototypes || [];

      /* ---- detailed layout (used when a project has a "problem" block) ---- */
      function rcHead(num, icon, title, i) {
        return '<div class="st-head" data-reveal><span class="st-num">' + num + "</span>" + ico(icon, i) + '<h2 class="st-title">' + title + "</h2></div>";
      }
      function richTop() {
        var p = c.problem, f = c.feature, o = "";
        o += '<section class="rc-sec" id="problem" style="' + tn(0) + '">' + rcHead("01", "target", "Problem statement", 0) +
          '<div class="rc-grid"><div class="rc-quote glass" data-reveal><span class="rc-eyebrow">The P0 problem I worked on</span><p>' + esc(p.statement) + "</p>" +
          (p.goal ? '<div class="rc-goal"><b>Goal</b><span>' + esc(p.goal) + "</span></div>" : "") + "</div>" +
          '<div class="rc-why glass" data-reveal>' +
          (p.pif ? '<div class="rc-pif"><b><span class="count" data-to="' + p.pif + '" data-dec="0">0</span></b><span>PIF score, the highest of the five problems scored</span></div>' : "") +
          "<ul>" + (p.because || []).map(function (b) { return "<li><b>" + esc(b[0]) + "</b><span>" + esc(b[1]) + "</span></li>"; }).join("") + "</ul></div></div>" +
          '<div class="rc-personas">' + (p.personas || []).map(function (q, i) {
            return '<figure class="rc-persona glass" data-reveal style="' + tn(i + 1) + '"><span class="rc-eyebrow">' + esc(q[0]) + " · " + esc(q[1]) + "</span><blockquote>" + esc(q[2]) + "</blockquote></figure>";
          }).join("") + "</div></section>";

        o += '<section class="rc-sec" id="insights" style="' + tn(3) + '">' + rcHead("02", "chart", "Key insights and metrics", 3) +
          '<div class="kpis">' + (c.metrics || []).map(function (m, i) {
            return '<div class="kpi glass" data-reveal style="' + tn(i) + '"><b><span class="count" data-to="' + m.n + '" data-dec="' + (m.dec || 0) + '">0</span>' + esc(m.suffix || "") + "</b><strong>" + esc(m.label) + "</strong><span>" + esc(m.note || "") + "</span></div>";
          }).join("") + "</div>" +
          '<div class="ins">' + (c.insights || []).map(function (t, i) {
            return '<article class="ins-card glass" data-reveal style="' + tn(i + 2) + '"><span class="ins-n">0' + (i + 1) + "</span><h3>" + esc(t[0]) + "</h3><p>" + esc(t[1]) + "</p></article>";
          }).join("") + "</div></section>";

        if (f) {
          var max = Math.max.apply(null, (f.bets || []).map(function (b) { return b.rice; }));
          o += '<section class="rc-sec" id="feature" style="' + tn(5) + '">' + rcHead("03", "bulb", "The feature that matters", 5) +
            '<div class="feat"><div class="feat-copy glass" data-reveal><span class="rc-eyebrow">Highlighted feature</span><h3>' + esc(f.name) + "</h3><p class=\"feat-tag\">" + esc(f.tagline) + "</p><p>" + esc(f.body) + "</p><ul>" +
            (f.points || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>" +
            '<figure class="mock glass" data-reveal aria-label="' + esc((f.mock && f.mock.label) || "Wireframe") + '">' + ((f.mock && f.mock.html) || "") +
            "<figcaption>" + esc((f.mock && f.mock.caption) || "") + "</figcaption></figure></div>" +
            ((f.bets && f.bets.length) ? '<div class="rice glass" data-reveal><h3>How the bets were chosen</h3><p>RICE score = (Reach × Impact × Confidence) ÷ Effort. ' + esc(f.riceNote || "The top three went forward.") + "</p>" +
            f.bets.map(function (b) {
              return '<div class="rice-row' + (b.pick ? " pick" : "") + '"><span>' + esc(b.name) + (b.star ? " <em>spotlight</em>" : "") + '</span><div class="bar"><i style="width:' + Math.round(b.rice / max * 100) + '%"></i></div><b>' + b.rice + "</b></div>";
            }).join("") + "</div>" : "") +
            (f.journey ? '<div class="journey glass" data-reveal><h3>' + esc(f.journey.title) + "</h3><p>" + esc(f.journey.note || "") + '</p><ol>' +
              f.journey.steps.map(function (s, i) { return "<li><i>" + (i + 1) + "</i><b>" + esc(s[0]) + "</b><span>" + esc(s[1]) + "</span></li>"; }).join("") + "</ol></div>" : "") +
            "</section>";
        }
        return o;
      }
      var hasDocs = !!(c.research && c.research.docs && c.research.docs.length);
      function richDocs() {
        if (!hasDocs) return "";
        var r = c.research, docs = r.docs || [];
        var o = '<section class="rc-sec" id="research" style="' + tn(0) + '">' + rcHead("04", "users", esc(r.title || "Research documents"), 0) +
          '<p class="st-note" data-reveal>' + esc(r.note || STAGE_NOTE.research) + "</p>" +
          '<div class="doc-cards">' + docs.map(function (d, i) {
            return '<article class="doc-card glass" data-reveal style="' + tn(i) + '"><span class="doc-n">' + (d.tag ? esc(d.tag) : "Phase " + (i + 1)) + "</span><h3>" + esc(d.title.replace(/^Phase \d: /, "")) + "</h3><p>" + esc(d.note) + "</p>" +
              '<ul class="has">' + (d.has || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
              '<div class="doc-act"><a class="btn btn-ink" href="' + esc(d.pdf) + '" target="_blank" rel="noopener">Preview</a></div></article>';
          }).join("") + "</div></section>";
        return o;
      }
      var hasPrd = !!(c.prd && (c.prd.pdf || (c.prd.metrics && c.prd.metrics.length)));
      function richPrd() {
        var d = c.prd;
        if (!hasPrd) return "";
        return '<section class="rc-sec" id="prd" style="' + tn(1) + '">' + rcHead(hasDocs ? "05" : "04", "doc", esc(d.title || "PRD"), 1) +
          '<p class="st-note" data-reveal>' + esc(d.note || STAGE_NOTE.prd) + "</p>" +
          (d.goal ? '<div class="rc-quote glass" data-reveal><span class="rc-eyebrow">Goal</span><p>' + esc(d.goal) + "</p></div>" : "") +
          '<div class="prd-grid"><div class="glass prd-card" data-reveal><h3>Success metrics</h3><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Type</th><th>Metric</th><th>What it tells us</th></tr></thead><tbody>' +
          (d.metrics || []).map(function (m) { return '<tr><td><span class="mt mt-' + m[0].toLowerCase().replace(/\s/g, "") + '">' + esc(m[0]) + "</span></td><td><b>" + esc(m[1]) + "</b></td><td>" + esc(m[2]) + "</td></tr>"; }).join("") +
          '</tbody></table></div></div><div class="glass prd-card" data-reveal><h3>' + esc(d.risksTitle || "Risks and mitigations") + '</h3>' +
          (d.risks || []).map(function (r) { return '<div class="it"><b>' + esc(r[0]) + "</b><span>" + esc(r[1]) + "</span></div>"; }).join("") + "</div></div>" +
          (d.extras && d.extras.length ? '<div class="prd-extra">' + d.extras.map(function (x) {
            return '<div class="glass prd-card" data-reveal><h3>' + esc(x.title) + "</h3>" + x.items.map(function (r) { return '<div class="it"><b>' + esc(r[0]) + "</b>" + (r[1] ? "<span>" + esc(r[1]) + "</span>" : "") + "</div>"; }).join("") + "</div>";
          }).join("") + "</div>" : "") +
          (d.pdf ? '<div class="pdf-actions" data-reveal><a class="btn btn-ink" href="' + esc(d.pdf) + '" target="_blank" rel="noopener">' + esc(d.btn || "Click to explore the full PRD ↗") + '</a></div>' : "") + "</section>";
      }

      if (c.problem) {
        h += richTop() + richDocs() + richPrd();
      } else {
        h += docStage(0, c.research, legacy);
        h += docStage(1, c.prd);
      }
      if (!(c.problem && !protoList.length)) h += '<section class="stage" id="prototype" style="' + tn(2) + '">' + stageHead(2, c.problem ? "0" + (4 + (hasDocs ? 1 : 0) + (hasPrd ? 1 : 0)) : "") +
        '<p class="st-note" data-reveal>' + esc(c.prototypeNote || STAGE_NOTE.prototype) + "</p>" +
        (protoList.length ?
          '<div class="proto-list">' + protoList.map(function (p, i) {
            return '<a class="proto-card glass tlink" data-reveal style="' + tn(i + 2) + '" href="' + esc(p.url) + '" target="_blank" rel="noopener"><span class="pi">' + svg(p.icon || "phone") + "</span><h3>" + esc(p.name) + "</h3>" +
              (p.note ? "<p>" + esc(p.note) + "</p>" : "") + '<span class="open">Open prototype ↗</span></a>';
          }).join("") + "</div>" :
          '<div class="soon-card glass" data-reveal><b>Coming soon</b><span>The prototype link will appear here.</span></div>') +
        "</section>";
      h += "</div>";
      setHTML("#case", h);
    } else {
      setHTML("#case", '<div class="wrap c-top"><h1 class="c-title">Nothing here</h1><a class="back tlink" href="index.html">← Home</a></div>');
    }
  }

  // fill any static <i data-ico="name"> placeholders
  document.querySelectorAll("[data-ico]").forEach(function (el) { el.innerHTML = svg(el.getAttribute("data-ico")); });

  /* ---------- motion ---------- */
  function fmt(el, v) { el.textContent = v.toFixed(parseInt(el.dataset.dec || "0", 10)); }
  if (!hasGSAP || reduce) {
    var introOff = $("#intro"); if (introOff) introOff.remove();
    document.querySelectorAll(".count").forEach(function (el) { fmt(el, parseFloat(el.dataset.to)); });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("anim");

  var lenis = null;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({ lerp: 0.08 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var hash = a.getAttribute("href");
      if (hash === "#top") { e.preventDefault(); lenis.scrollTo(0, { duration: 1.4 }); }
      else if (hash === "#about") { e.preventDefault(); lenis.scrollTo("#about", { offset: 36, duration: 1.4 }); }   // lands with the greeting just under the nav
      else if (hash.length > 1 && $(hash)) { e.preventDefault(); lenis.scrollTo(hash, { offset: -40, duration: 1.4 }); }
    });
  }

  // (page transition removed: links now go straight to the next page)

  // hero intro
  var introEl = $("#intro");
  var willIntro = !!introEl && !document.documentElement.classList.contains("no-intro");
  if (introEl && !willIntro) { introEl.remove(); introEl = null; }
  var tl = null;
  if ($("#heroName")) {
    /* floating bubbles (same dots as the intro): drift forever, pop in with the hero, dodge the mouse */
    var bHost = $("#heroDots"), bubbles = [], bubbleInner = [];
    if (bHost) {
      var BC = ["#03160d", "#03160d", "#2066df", "#2066df", "#4c85e6", "#14b879", "#19e697", "#e0961f", "#e7ab4b", "#a6c2f2", "#f3d5a5"];
      var bCount = innerWidth < 700 ? 22 : 40;
      for (var bi = 0; bi < bCount; bi++) {
        var bx, by;
        do { bx = Math.random(); by = Math.random(); } while (Math.abs(bx - .5) < .27 && Math.abs(by - .5) < .2 && Math.random() < .75);   // keep the middle (name) airy
        var br = Math.random(), bs = br < .5 ? 4 + Math.random() * 5 : br < .86 ? 10 + Math.random() * 10 : 24 + Math.random() * 18;
        var bo = document.createElement("i"), bn = document.createElement("b");
        bo.style.left = (bx * 100) + "%"; bo.style.top = (by * 100) + "%";
        bn.style.cssText = "width:" + bs + "px;height:" + bs + "px;margin:" + (-bs / 2) + "px 0 0 " + (-bs / 2) + "px;background:" + BC[Math.floor(Math.random() * BC.length)];
        bo.appendChild(bn); bHost.appendChild(bo);
        bo._x = bx; bo._y = by;
        bo._qx = gsap.quickTo(bo, "x", { duration: .7, ease: "power3.out" });
        bo._qy = gsap.quickTo(bo, "y", { duration: .7, ease: "power3.out" });
        bubbles.push(bo); bubbleInner.push(bn);
        gsap.to(bn, { x: gsap.utils.random(-34, 34), y: gsap.utils.random(-34, 34), duration: gsap.utils.random(3.5, 7), ease: "sine.inOut", repeat: -1, yoyo: true, delay: -gsap.utils.random(0, 5) });
      }
    }
    tl = gsap.timeline({ delay: .25, paused: willIntro });
    tl.fromTo("#heroName", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.6, ease: "power2.inOut" })
      .from(["#heroTag", "#heroYear", ".scroll-hint"], { opacity: 0, y: 16, duration: .8, stagger: .12 }, "-=.6")
      .set("#heroName", { clearProps: "clipPath" });
    if (bubbleInner.length) {
      gsap.set(bubbleInner, { scale: 0 });
      tl.to(bubbleInner, { scale: 1, duration: .9, ease: "back.out(2.2)", stagger: { amount: 1.2, from: "random" } }, .2);
      gsap.to(bHost, { yPercent: -14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    }
    gsap.to("#heroName", { yPercent: -40, opacity: .2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    var heroEl = $(".hero");
    heroEl.addEventListener("mousemove", function (e) {
      var x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      gsap.to("#heroName", { x: x * 26, y: y * 10, duration: 1, ease: "power2.out" });
      if (bubbles.length && window.matchMedia("(hover: hover)").matches) {
        var hr = heroEl.getBoundingClientRect(), mx = e.clientX - hr.left, my = e.clientY - hr.top, R = 160;
        bubbles.forEach(function (b) {
          var dx = b._x * hr.width - mx, dy = b._y * hr.height - my, d = Math.sqrt(dx * dx + dy * dy) || 1;
          if (d < R) { var f = (1 - d / R) * 110; b._qx(dx / d * f); b._qy(dy / d * f); } else { b._qx(0); b._qy(0); }
        });
      }
    });
    heroEl.addEventListener("mouseleave", function () { bubbles.forEach(function (b) { b._qx(0); b._qy(0); }); });
    // click the hero to pop a little confetti
    var COLS = ["#2066df", "#e0961f", "#14b879", "#e7ab4b", "#4c85e6"];
    heroEl.addEventListener("click", function (e) {
      if (e.target.closest("a,button")) return;
      for (var i = 0; i < 9; i++) {
        var s = document.createElement("span");
        s.className = "spark"; s.style.color = COLS[i % COLS.length];
        s.innerHTML = i % 3 === 0 ? '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>' : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c.8 6.6 4.4 10.2 12 12-7.6 1.8-11.2 5.4-12 12-.8-6.6-4.4-10.2-12-12C7.6 10.2 11.2 6.6 12 0z"/></svg>';
        s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px";
        document.body.appendChild(s);
        var a = Math.PI * 2 * i / 9 + Math.random() * .5, d = 60 + Math.random() * 70;
        gsap.fromTo(s, { scale: 0, opacity: 1 }, { x: Math.cos(a) * d, y: Math.sin(a) * d, rotate: Math.random() * 180 - 90, scale: .6 + Math.random() * .9, opacity: 0, duration: 1 + Math.random() * .4, ease: "power3.out", onComplete: (function (n) { return function () { n.remove(); }; })(s) });
      }
    });
  }

  /* page-load intro: text lines rise out of a mask, dots pop in, then it all shrinks away (~1.8s) */
  if (introEl) {
    introEl.style.animation = "none";                       // cancel the CSS safety timer
    if (lenis) lenis.stop();
    try { sessionStorage.setItem("mv-intro", "1"); } catch (err) {}

    var host = $("#introDots"), dotCount = innerWidth < 700 ? 24 : 36;
    var DOTC = ["#03160d", "#03160d", "#03160d", "#03160d", "#03160d", "#03160d", "#03160d", "#03160d", "#2066df", "#14b879", "#e0961f"];
    for (var di = 0; di < dotCount; di++) {
      var rr = Math.random(), size = rr < .5 ? 4 + Math.random() * 6 : rr < .85 ? 11 + Math.random() * 13 : 30 + Math.random() * 20;
      var gx = (Math.random() + Math.random() + Math.random()) / 3, gy = (Math.random() + Math.random() + Math.random()) / 3;
      var dEl = document.createElement("i");
      dEl.style.cssText = "width:" + size + "px;height:" + size + "px;left:" + (gx * 100) + "%;top:" + (gy * 100) + "%;margin:" + (-size / 2) + "px 0 0 " + (-size / 2) + "px;background:" + DOTC[Math.floor(Math.random() * DOTC.length)];
      host.appendChild(dEl);
    }
    var dots = gsap.utils.toArray("#introDots i"), lines = gsap.utils.toArray("#intro .il>span");
    var finish = function () {
      if (introEl) { introEl.remove(); introEl = null; }
      if (lenis) lenis.start();
      ScrollTrigger.refresh();
    };
    gsap.timeline({ onComplete: finish })
      .fromTo(dots, { scale: 0 }, { scale: 1, duration: .9, ease: "back.out(2.2)", stagger: { amount: 1.3, from: "random" } }, .1)
      .to(dots, { x: function () { return gsap.utils.random(-40, 40); }, y: function () { return gsap.utils.random(-40, 40); }, duration: 4.2, ease: "sine.inOut" }, 0)
      .fromTo(lines, { yPercent: 115, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 1.1, ease: "power4.out", stagger: .22 }, .35)
      .fromTo(".intro-pill", { scale: .7, opacity: 0 }, { scale: 1, opacity: 1, duration: .8, ease: "back.out(1.7)" }, 1.3)
      .to(lines, { yPercent: -115, duration: .7, ease: "power3.in", stagger: .1 }, 3.3)
      .to(".intro-pill", { scale: .7, opacity: 0, duration: .5, ease: "power2.in" }, 3.3)
      .to(dots, { scale: 0, duration: .6, ease: "power2.in", stagger: { amount: .6, from: "random" }, overwrite: false }, 3.3)
      .add(function () { if (tl) tl.delay(0).play(); }, 4)
      .to(introEl, { opacity: 0, duration: .6, ease: "power1.out" }, 4);
  }

  // headings: words rise out of a mask
  // *** ABOUT SECTION IS LOCKED: design, copy-layout and animation are approved. Do not change without the owner asking. ***
  // The About section is the first thing visitors see, so it gets its own staged entrance
  // that waits for the intro to fade out (inDelay), then builds in one piece at a time.
  var inDelay = willIntro ? 4.05 : .25;
  var aboutEls = gsap.utils.toArray("#about .about [data-reveal]");

  gsap.utils.toArray(".h-sec,.c-title").forEach(function (h) {
    var txt = h.textContent.trim(), first = !!h.closest(".about-copy");
    h.removeAttribute("data-reveal");
    h.setAttribute("aria-label", txt);
    h.innerHTML = txt.split(/\s+/).map(function (w) { return '<span class="w" aria-hidden="true"><span>' + esc(w) + "</span></span>"; }).join(" ");
    gsap.from(h.querySelectorAll(".w>span"), { yPercent: 115, rotate: 5, duration: 1.1, ease: "power4.out", stagger: .08, delay: first ? inDelay + .25 : 0, scrollTrigger: { trigger: h, start: "top 90%", once: true } });
  });

  // reveals: fade up + un-blur
  gsap.utils.toArray("[data-reveal]").forEach(function (el) {
    var ai = aboutEls.indexOf(el);
    if (ai > -1) {
      var isPic = el.classList.contains("portrait-wrap");
      gsap.fromTo(el,
        isPic ? { x: -90, scale: .86, rotate: -5, opacity: 0, filter: "blur(12px)" } : { x: 60, y: 24, opacity: 0, filter: "blur(10px)" },
        { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, filter: "blur(0px)", duration: isPic ? 1.4 : 1.1, ease: isPic ? "back.out(1.5)" : "power3.out",
          delay: inDelay + (isPic ? 0 : .35 + ai * .14),
          scrollTrigger: { trigger: el, start: "top 98%", once: true },
          onComplete: function () { el.style.filter = ""; } });
      return;
    }
    gsap.fromTo(el, { y: 50, opacity: 0, filter: "blur(10px)" }, {
      y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
      onComplete: function () { el.style.filter = ""; }
    });
  });
  // the greeting gets "written in" left to right
  if ($("#hi")) gsap.fromTo("#hi", { clipPath: "inset(-25% 100% -25% -15%)" }, { clipPath: "inset(-25% -15% -25% -15%)", duration: 1.7, ease: "power2.inOut", delay: inDelay + .2, clearProps: "clipPath" });
  // blob grows behind the portrait, stickers + sparkles pop in after it
  if ($(".portrait-wrap .blob")) gsap.from(".portrait-wrap .blob", { scale: .5, opacity: 0, transformOrigin: "50% 50%", duration: 1.6, ease: "power3.out", delay: inDelay + .2 });
  gsap.from(".portrait-wrap .stk,.portrait-wrap .deco", { opacity: 0, duration: .7, ease: "power2.out", stagger: .25, delay: inDelay + 1.1 });
  document.querySelectorAll(".count").forEach(function (el) {
    var o = { v: 0 }, to = parseFloat(el.dataset.to);
    ScrollTrigger.create({ trigger: el, start: "top 94%", once: true, onEnter: function () {
      gsap.to(o, { v: to, duration: 1.8, ease: "power2.out", onUpdate: function () { fmt(el, o.v); } });
    } });
  });
  gsap.utils.toArray(".portrait").forEach(function (el) {
    gsap.fromTo(el, { yPercent: 5 }, { yPercent: -5, ease: "none", scrollTrigger: { trigger: el, scrub: true } });
  });
  // float every other phone / folder a little (inner element, so it never fights the reveal)
  gsap.utils.toArray(".proto:nth-child(even) .phone, .folder:nth-child(even) .fo").forEach(function (el) {
    gsap.fromTo(el, { yPercent: 6 }, { yPercent: -6, ease: "none", scrollTrigger: { trigger: el, scrub: true, start: "top bottom", end: "bottom top" } });
  });
  // screenshots settle in as you scroll
  gsap.utils.toArray(".auto img").forEach(function (img) {
    gsap.fromTo(img, { scale: 1.22 }, { scale: 1, ease: "none", scrollTrigger: { trigger: img.parentNode, scrub: true, start: "top 98%", end: "bottom 45%" } });
  });
  // process flow (research -> PRD -> prototype): nodes pop, lines draw
  gsap.utils.toArray(".flow").forEach(function (f) {
    var st = { trigger: f, start: "top 92%", once: true };
    gsap.from(f.querySelectorAll(".fn .ico"), { scale: .4, opacity: 0, duration: .7, ease: "back.out(2.2)", stagger: .35, clearProps: "transform,opacity", scrollTrigger: st });
    gsap.from(f.querySelectorAll(".fl i"), { scaleX: 0, transformOrigin: "0 50%", duration: .8, ease: "power2.inOut", stagger: .35, delay: .25, scrollTrigger: st });

    // a small dot travels from "User research" to "Prototype", again and again
    var dot = document.createElement("span"); dot.className = "fdot"; dot.setAttribute("aria-hidden", "true"); f.appendChild(dot);
    var icos = f.querySelectorAll(".fn .ico");
    function pts() {
      var fr = f.getBoundingClientRect(), a = icos[0].getBoundingClientRect(), z = icos[icos.length - 1].getBoundingClientRect();
      return { x0: a.left + a.width / 2 - fr.left, x1: z.left + z.width / 2 - fr.left, y: a.top + a.height / 2 - fr.top };
    }
    var run = gsap.timeline({ repeat: -1, repeatDelay: .6, repeatRefresh: true, delay: 1.6 });
    run.set(dot, { top: function () { return pts().y; } }, 0)
      .fromTo(dot, { x: function () { return pts().x0; }, opacity: 0, scale: .3 }, { x: function () { return pts().x1; }, duration: 3.4, ease: "none" }, 0)
      .to(dot, { opacity: 1, scale: 1, duration: .3 }, 0)
      .to(dot, { opacity: 0, scale: .3, duration: .3 }, 3.1);
  });
  // travel photos drift inside their frames
  gsap.utils.toArray(".snap img").forEach(function (img) {
    gsap.fromTo(img, { scale: 1.2, yPercent: -6 }, { scale: 1.2, yPercent: 6, ease: "none", scrollTrigger: { trigger: img.closest(".snap"), scrub: true, start: "top bottom", end: "bottom top" } });
  });
  var pol = $(".polaroid");
  if (pol) gsap.fromTo(pol, { y: 40, rotate: -16 }, { y: -10, rotate: -9, ease: "none", scrollTrigger: { trigger: ".touch", scrub: true, start: "top bottom", end: "center center" } });

  /* ---------- interactions ---------- */
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // scroll progress bar
  var bar = document.createElement("div");
  bar.className = "progress"; document.body.appendChild(bar);
  gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: .3 } });

  if (fine) {
    // 3D tilt on cards
    var tiltSets = [[".stat,.tool,.perf-row .glass,.c-sec", 7], [".auto,.pipe,.next,.pcard:not(.soon),.proto-card", 5], [".proto .phone", 9], [".folder:not(.soon) .fo", 12]];
    tiltSets.forEach(function (set) {
      gsap.utils.toArray(set[0]).forEach(function (el) {
        var max = set[1];
        el.classList.add("tilt");
        gsap.set(el, { transformPerspective: 900 });
        var rx = gsap.quickTo(el, "rotationX", { duration: .5, ease: "power3.out" }),
            ry = gsap.quickTo(el, "rotationY", { duration: .5, ease: "power3.out" }),
            yy = gsap.quickTo(el, "y", { duration: .5, ease: "power3.out" });
        el.addEventListener("mousemove", function (e) {
          var r = el.getBoundingClientRect();
          rx(-((e.clientY - r.top) / r.height - .5) * max); ry(((e.clientX - r.left) / r.width - .5) * max); yy(-6);
        });
        el.addEventListener("mouseleave", function () { rx(0); ry(0); yy(0); });
      });
    });

    // magnetic buttons
    gsap.utils.toArray(".hero .pill,.socials a,.btn,.touch-mail,.cv .pill,.nav .dots").forEach(function (el) {
      el.classList.add("mag");
      var xq = gsap.quickTo(el, "x", { duration: .5, ease: "power3.out" }), yq = gsap.quickTo(el, "y", { duration: .5, ease: "power3.out" });
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        xq((e.clientX - r.left - r.width / 2) * .35); yq((e.clientY - r.top - r.height / 2) * .35);
      });
      el.addEventListener("mouseleave", function () { xq(0); yq(0); });
    });

    // custom cursor
    var dot = document.createElement("div"), ring = document.createElement("div");
    dot.className = "cur-dot"; ring.className = "cur-ring";
    document.body.appendChild(ring); document.body.appendChild(dot);
    var dx = gsap.quickTo(dot, "x", { duration: .08 }), dy = gsap.quickTo(dot, "y", { duration: .08 }),
        qx = gsap.quickTo(ring, "x", { duration: .45, ease: "power3.out" }), qy = gsap.quickTo(ring, "y", { duration: .45, ease: "power3.out" });
    var shown = false;
    document.addEventListener("mousemove", function (e) {
      if (!shown) { shown = true; document.documentElement.classList.add("has-cursor"); gsap.to([dot, ring], { opacity: 1, duration: .3 }); gsap.set([dot, ring], { x: e.clientX, y: e.clientY }); }
      dx(e.clientX); dy(e.clientY); qx(e.clientX); qy(e.clientY);
    });
    document.addEventListener("mouseout", function (e) {
      if (e.relatedTarget) return;
      gsap.to([dot, ring], { opacity: 0, duration: .2 }); shown = false; document.documentElement.classList.remove("has-cursor");
    });
    document.addEventListener("mouseover", function (e) {
      var t = e.target, label = "", mode = "";
      if (t.closest(".lightbox.on")) { mode = "big"; label = "Close"; }
      else if (t.closest("[data-cursor]")) { mode = "big"; label = t.closest("[data-cursor]").getAttribute("data-cursor"); }
      else if (t.closest("a,button") && !t.closest(".pcard,.proto-card,[data-img]")) mode = "link";   // project cards keep the plain dot cursor
      ring.className = "cur-ring" + (mode ? " " + mode : ""); ring.textContent = label;
      dot.classList.toggle("hide", mode === "big");
    });
  }

  /* ---------- colourful bubbles across the whole page ---------- */
  (function () {
    var layer = document.createElement("div");
    layer.className = "bubbles"; layer.setAttribute("aria-hidden", "true");
    document.body.insertBefore(layer, document.body.firstChild);
    var PC = ["#03160d", "#03160d", "#2066df", "#2066df", "#4c85e6", "#14b879", "#19e697", "#e0961f", "#e7ab4b", "#a6c2f2", "#f3d5a5"];   // same mix as the hero bubbles
    var LIGHT = ["#a6c2f2", "#d2e0f9", "#a3f5d6", "#f3d5a5", "#f9ead2"];
    var n = innerWidth < 700 ? 45 : 95, list = [], pops = [];
    for (var k = 0; k < n; k++) {
      var t = Math.random(), size = t < .5 ? 4 + Math.random() * 5 : t < .86 ? 10 + Math.random() * 10 : 24 + Math.random() * 18;
      var o = document.createElement("i"), sp = document.createElement("span"), b = document.createElement("b");
      o._x = Math.random(); o._y = Math.random(); o._s = size;
      o.style.left = (o._x * 100) + "%"; o.style.top = (o._y * 100) + "%";
      var col = size > 22 ? LIGHT[Math.floor(Math.random() * LIGHT.length)] : PC[Math.floor(Math.random() * PC.length)];   // big bubbles stay soft and light
      b.style.cssText = "width:" + size + "px;height:" + size + "px;margin:" + (-size / 2) + "px 0 0 " + (-size / 2) + "px;background:" + col;
      sp.appendChild(b); o.appendChild(sp); layer.appendChild(o);
      o._qx = gsap.quickTo(o, "x", { duration: .8, ease: "power3.out" });
      o._qy = gsap.quickTo(o, "y", { duration: .8, ease: "power3.out" });
      list.push(o); pops.push(b);
      var d = gsap.utils.random(50, 190) * (Math.random() < .5 ? -1 : 1);                      // each bubble moves at its own depth while scrolling
      gsap.fromTo(sp, { y: -d }, { y: d, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: true } });
      gsap.to(b, { x: gsap.utils.random(-30, 30), y: gsap.utils.random(-30, 30), duration: gsap.utils.random(3.5, 7), ease: "sine.inOut", repeat: -1, yoyo: true, delay: -gsap.utils.random(0, 5) });
    }
    gsap.fromTo(pops, { scale: 0 }, { scale: 1, duration: 1, ease: "back.out(2)", stagger: { amount: 1.6, from: "random" }, delay: willIntro ? 4 : .4 });

    if (fine) {
      var busy = false;
      document.addEventListener("mousemove", function (e) {
        if (busy) return; busy = true;
        requestAnimationFrame(function () {
          busy = false;
          var L = layer.getBoundingClientRect(), mx = e.clientX - L.left, my = e.clientY - L.top, R = 170;
          list.forEach(function (o) {
            var dx = o._x * L.width - mx, dy = o._y * L.height - my;
            if (Math.abs(dy) > R + 220) return;                                                // far off-screen: skip the maths
            var dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < R) { var f = (1 - dist / R) * 120 * Math.min(1, 40 / o._s + .4); o._qx(dx / dist * f); o._qy(dy / dist * f); }
            else { o._qx(0); o._qy(0); }
          });
        });
      });
    }
  })();

  ScrollTrigger.refresh();
})();
