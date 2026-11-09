# Manish Verma — Portfolio

A static site (no build step). Open `index.html` in a browser to preview it locally.

## Where things live

| What | File |
|---|---|
| Name, about, experience, prototypes, automations, certifications, email, LinkedIn | `data/site.js` |
| Case studies | `data/case-studies.js` |
| PDFs | `assets/pdfs/` |
| Images | `assets/img/` |
| Look and feel (colours, fonts) | `css/style.css` (colours are at the top) |

## Optional images and files

| File | Used for |
|---|---|
| `assets/img/manish.jpg` | Portrait in the About section (shown in black and white) |
| `assets/img/manish-contact.jpg` | Polaroid photo in "Get in touch" |
| `assets/pdfs/Manish-Verma-CV.pdf` | Your CV. Also set `cv` in `data/site.js` |
| `assets/img/proto-*.png` | Phone screenshots for prototypes. Set `shot` in `data/site.js` |

## Add a new case study

1. Put the PDF in `assets/pdfs/` (e.g. `my-case.pdf`).
2. Open `data/case-studies.js`, copy the whole `{ ... }` block of an existing case study, paste it after the last one (add a comma between them), and change the text. Give it a unique `id`.
3. Commit and push to `main`. The site updates in about a minute.

## Publish (GitHub Pages)

Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.
Custom domain: add it in the same screen, then point your domain's DNS at GitHub (see GitHub's "Managing a custom domain" docs).
