# LUCID Chemistry

A static Cambridge IGCSE Chemistry 0620 study space covering Coursebook Chapters 1–3.

- Nine guided lessons: idea, explanation, two worked examples, written practice and recall.
- A page guide to the supplied 72-page worksheet; the worksheet itself is not republished.
- Original multiple-choice and written practice, hints, model answers and explicit self-assessment.
- Local browser drafts, checklist progress, review queue, and the existing interactive labs, flashcards and mock exam.

Open with a static server, e.g. `python3 -m http.server 8765`, and visit localhost:8765. There is no build step or server-side data store. Progress is specific to the browser and origin; clearing site storage removes it.

Source review and attribution are in the site’s Book & sources view. LUCID is independent of Cambridge. Exercises are original exam-style practice, not official paper reproductions or guaranteed predictions. Written checklists are not official examiner grades. No model was fine-tuned on the papers.

Deploy the directory as a static site on Vercel. `node scripts/verify-content.cjs` checks lesson, worksheet and practice data integrity.
