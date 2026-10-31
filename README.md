# LUCID Chemistry

A static Cambridge IGCSE Chemistry 0620 study space covering Coursebook Chapters 1–3.

- Nine guided lessons with definitions, labelled diagrams and step-by-step explanations of questions paraphrased from the supplied worksheet, plus practice and recall.
- A page-by-page guide to the supplied 72-page worksheet, with methods and worked examples; the worksheet itself is not republished.
- An interactive periodic table of 118 elements, with introductory shell arrangements and selected approximate atomic masses.
- Original multiple-choice and written practice, hints, model answers and explicit self-assessment.
- Local browser drafts, checklist progress, review queue, and the existing interactive labs, flashcards and mock exam.

Open with a static server, e.g. `python3 -m http.server 8765`, and visit localhost:8765. There is no build step or server-side data store. Progress is specific to the browser and origin; clearing site storage removes it.

Source review and attribution are in the site’s Book & sources view. LUCID is independent of Cambridge. Exercises are original exam-style practice, not official paper reproductions or guaranteed predictions. Written checklists are not official examiner grades. No model was fine-tuned on the papers.

Deploy the directory as a static site on Vercel. `node scripts/verify-content.cjs` checks lesson, worksheet, diagram, element and practice data integrity.
