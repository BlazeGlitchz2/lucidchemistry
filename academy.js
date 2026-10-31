/* Guided learning and transparent self-assessment, entirely in the browser. */
(() => {
  'use strict';
  const course = window.CHEM_COURSE;
  const esc = escapeHTML;
  const storeKey = 'lucidChemistryAcademyV2';
  let restored = {};
  try { restored = JSON.parse(localStorage.getItem(storeKey) || '{}') || {}; } catch { /* Start clean if storage is damaged. */ }
  const progress = {
    stages: restored.stages && typeof restored.stages === 'object' ? restored.stages : {},
    answers: restored.answers && typeof restored.answers === 'object' ? restored.answers : {},
    last: LESSONS.some(l => l.id === restored.last) ? restored.last : '1.1'
  };
  let worksheetTab = 'map', practiceChapter = 'all', reviewOnly = false, practiceLesson = 'all', storageWarned = false;
  const stageNames = ['Definitions', 'Explanation', 'Worksheet questions', 'Practice', 'Recall'];
  GLOSSARY.splice(0, GLOSSARY.length, ...Object.entries(course.definitions).flatMap(([id, definitions]) => definitions.map(d => [Number(id[0]), d.term, d.definition, d.meaning])));
  course.extraMCQ.forEach(([id, question, options, correct, explanation]) => Q.push([Number(id[0]), id, question, options, correct, explanation]));
  NAV.splice(2, 0, ['worksheet', 'Worksheet coach'], ['periodic', 'Periodic table']);
  const originalIcon = icon;
  icon = (type, size) => originalIcon(type === 'worksheet' ? 'sheet' : type === 'periodic' ? 'home' : type, size);
  const legacyRender = render;
  const legacyChrome = updateChrome;
  updateChrome = function () {
    legacyChrome();
    $('#sidecount').textContent=st.completed.length+' / 9 lessons read';
    if (st.view === 'worksheet') $('#crumb').textContent = 'Worksheet coach';
    if (st.view === 'periodic') $('#crumb').textContent = 'Periodic table';
    $$('.nav-btn').forEach(b => { if (b.classList.contains('active')) b.setAttribute('aria-current','page'); });
  };
  function save() {
    try { localStorage.setItem(storeKey, JSON.stringify(progress)); }
    catch { if (!storageWarned) { storageWarned = true; notify('Browser storage is unavailable. Your work will last for this session only.'); } }
  }
  function answer(q) {
    const a = progress.answers[q.id];
    if (!a || typeof a !== 'object') return {draft:'', reveal:false, hints:0, checked:[]};
    return {draft: typeof a.draft === 'string' ? a.draft : '', reveal:!!a.reveal, hints:Number(a.hints)||0, checked:Array.isArray(a.checked)?a.checked:[], assessed:!!a.assessed};
  }
  function put(q, patch) { progress.answers[q.id] = {...answer(q), ...patch}; save(); }
  function questions(id) { return course.written.filter(q => q.lesson === id); }
  function needsReview(q) { const a = answer(q); return a.assessed && a.checked.length < q.marks; }
  function strong(q) { const a = answer(q); return a.assessed && a.checked.length === q.marks; }
  function stageFor(id) { const n = Number(progress.stages[id]); return Number.isInteger(n) && n>=0 && n<5 ? n : 0; }
  function chapterButtons(attr, current) {
    return `<div class="filterbar" role="group" aria-label="Filter by chapter"><button class="filter ${current==='all'?'active':''}" ${attr}="all" aria-pressed="${current==='all'}">All chapters</button>${CHAPTERS.map(ch=>`<button class="filter ${String(current)===String(ch.id)?'active':''}" ${attr}="${ch.id}" aria-pressed="${String(current)===String(ch.id)}">${ch.id}. ${esc(ch.name)}</button>`).join('')}</div>`;
  }
  function scoreText(q) { const a = answer(q); return a.assessed ? `${a.checked.length}/${q.marks} points self-checked` : a.draft ? 'Draft saved' : 'Not attempted'; }
  function lessonLinks(ids) { return ids.map(id=>`<button class="text-link" data-lesson="${id}">${esc(lesson(id).title)}</button>`).join(''); }
  function miniSource(id) { const ranges=course.worksheet.filter(r=>r.lessons.includes(id)); return ranges.map(r=>r.pages).join(', '); }
  function arrow() { return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>'; }

  renderHome = function () {
    const last=lesson(progress.last), review=course.written.filter(needsReview), assessed=course.written.filter(q=>answer(q).assessed);
    const weak=LESSONS.map(l=>({l,n:questions(l.id).filter(needsReview).length})).sort((a,b)=>b.n-a.n)[0];
    return `<section class="study-welcome"><div><span class="course-label">Cambridge IGCSE Chemistry 0620 · Chapters 1–3</span><h1>Make the science<br>make sense.</h1><p>Learn the exact definitions, then see how they answer questions from your worksheet.</p><div class="row wrap"><button class="btn lime" data-lesson="${last.id}" data-resume="true">${assessed.length||stageFor(last.id)?'Continue':'Start'} learning ${arrow()}</button><button class="btn light" data-view="worksheet">Open worksheet coach</button><button class="btn light" data-view="periodic">Periodic table</button></div></div><div class="today-plan"><h2>Your study session</h2><ol><li><b>Understand one idea</b><span>${esc(last.title)} · about ${last.minutes} min</span></li><li><b>Try it without the answer</b><span>Written practice with hints when you need them</span></li><li><b>Explain it back</b><span>Check your reasoning, then revisit missed points</span></li></ol></div></section>
    <div class="study-status"><span><b>${st.completed.length}/9</b> lessons read</span><span><b>${assessed.length}/${course.written.length}</b> written answers self-checked</span><span><b>${review.length}</b> answers to revisit</span></div>
    ${review.length?`<section class="review-banner"><div><h2>One useful next step</h2><p>Your self-checks suggest revisiting <b>${esc(weak.l.title)}</b>. Work through the explanation, then retry without looking at the model.</p></div><button class="btn" data-ac="review">Review missed points</button></section>`:''}
    <section class="path-section"><h2>Your learning path</h2><p class="muted">Start with particles. Build atoms. Use electrons to explain bonding.</p>${CHAPTERS.map(ch=>`<div class="path-chapter"><div class="path-heading"><span class="chapter-marker">${ch.id}</span><div><h3>${esc(ch.name)}</h3><p>${esc(ch.subtitle)}</p></div></div><div class="path-lessons">${LESSONS.filter(l=>l.ch===ch.id).map(l=>`<button class="path-lesson" data-lesson="${l.id}"><span class="path-id">${l.id}</span><span><b>${esc(l.title)}</b><small>${esc(course.lessons[l.id].goal)}</small><small class="topic-worksheet-sample">Worksheet p${course.worksheetExamples[l.id][0].page}: ${esc(course.worksheetExamples[l.id][0].question)}</small></span><span class="path-state">${st.completed.includes(l.id)?'Read':l.minutes+' min'} ${arrow()}</span></button>`).join('')}</div></div>`).join('')}</section>
    <section class="worksheet-intro"><div><h2>Your worksheet, made manageable.</h2><p>Choose a PDF page to find its question types, step-by-step methods and worked examples.</p></div><button class="btn" data-view="worksheet">Find my worksheet page ${arrow()}</button></section>`;
  };

  renderLearn = function () {
    const lis=LESSONS.filter(l=>st.chapter==='all'||l.ch===Number(st.chapter));
    return `<header class="academy-heading"><h1>Understand it step by step.</h1><p>Learn each idea through definitions, diagrams and questions from your worksheet.</p></header>${chapterButtons('data-chfilter',st.chapter)}<div class="learning-index">${lis.map(l=>{const d=course.lessons[l.id],first=course.worksheetExamples[l.id][0];return `<article class="learning-row"><div class="path-id">${l.id}</div><div><h2>${esc(l.title)}</h2><p>${esc(d.goal)}</p><p class="topic-worksheet-sample">Worksheet p${first.page}: ${esc(first.question)}</p><div class="lesson-meta">${l.minutes} min · ${course.worksheetExamples[l.id].length} worksheet explanations · ${questions(l.id).length} written questions</div><details class="coverage"><summary>Where this appears in your worksheet</summary><p>PDF pages ${miniSource(l.id)}. Mixed pages can test several lessons.</p></details></div><button class="btn ${st.completed.includes(l.id)?'light':'lime'}" data-lesson="${l.id}">${st.completed.includes(l.id)?'Revisit':'Learn'} ${arrow()}</button></article>`}).join('')}</div>`;
  };

  function examplesHTML(d) {
    return d.examples.map((ex,i)=>`<article class="worked-example"><div class="example-label">Worked example ${i+1}</div><h2>${esc(ex.q)}</h2><ol class="reasoning-steps">${ex.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><div class="model-answer"><b>A complete answer</b><p>${esc(ex.answer)}</p></div><p class="why-note"><b>Why this works:</b> ${esc(ex.why)}</p></article>`).join('');
  }
  function worksheetPreview(ex) {
    return `<section class="lesson-worksheet-preview"><span class="worksheet-example-label">WORKSHEET · PDF PAGE ${ex.page}</span><h3>${esc(ex.question)}</h3><p>${esc(ex.short)}</p><button class="text-link" data-ac="worksheetexample" data-example="${esc(ex.id)}">See the full steps</button></section>`;
  }
  function shellBreakdown(shells) {
    if(!shells)return '';
    return `<section class="shell-breakdown"><h4>Fill the electron shells</h4><p>Each number shows the electrons in one shell.</p><div class="shell-breakdown-grid">${shells.map(atom=>`<div class="shell-atom"><strong>${esc(atom.symbol)} · ${atom.electrons} electrons</strong><div class="shell-counts">${atom.arrangement.map((count,i)=>`<span class="shell-count ${i===atom.arrangement.length-1?'outer':''}"><small>Shell ${i+1}${i===atom.arrangement.length-1?' · outer':''}</small><b>${count}</b></span>`).join('')}</div>${atom.arrangement.length>1?`<p>${atom.electrons} − ${atom.arrangement.slice(0,-1).join(' − ')} = ${atom.arrangement.at(-1)} in the outer shell.</p>`:''}</div>`).join('')}</div></section>`;
  }
  function worksheetExplanation(ex, indexed=false) {
    return `<article class="lesson-worksheet-example" ${indexed?`id="worksheet-example-${esc(ex.id)}" tabindex="-1"`:''}><span class="worksheet-example-label">WORKSHEET · PDF PAGE ${ex.page}</span><h3>${esc(ex.question)}</h3><div class="worksheet-starting"><b>How to find the starting facts</b><p>${esc(ex.starting)}</p>${ex.table?'<button class="text-link" data-view="periodic">Open periodic table</button>':''}</div>${shellBreakdown(ex.shells)}<h4>Steps</h4><ol>${ex.steps.map(step=>`<li>${esc(step)}</li>`).join('')}</ol><p class="worksheet-example-answer"><b>Answer:</b> ${esc(ex.answer)}</p>${ex.check?`<p class="worksheet-example-check"><b>Check:</b> ${esc(ex.check)}</p>`:''}</article>`;
  }
  function questionHTML(q) {
    const a=answer(q);
    return `<article class="written-question" id="question-${q.id}"><div class="question-top"><span>${esc(q.title)}</span><span>${q.marks} ${q.marks===1?'point':'points'}</span></div><h3>${esc(q.question)}</h3><label for="draft-${q.id}">Your answer${q.title.toLowerCase().includes('sketch')?' (draw on paper; describe your diagram here)':''}</label><textarea id="draft-${q.id}" data-draft="${q.id}" rows="4" placeholder="Write your reasoning. A short, precise answer is enough.">${esc(a.draft)}</textarea><div class="draft-state" data-status="${q.id}" aria-live="polite">${scoreText(q)}</div><div class="row wrap"><button class="btn small light" data-ac="hint" data-q="${q.id}" ${a.hints>=q.hints.length?'disabled':''}>${a.hints>=q.hints.length?'All hints shown':'Give me a hint'}</button><button class="btn small" data-ac="reveal" data-q="${q.id}">${a.reveal?'Hide model answer':'Compare with model answer'}</button>${a.assessed?`<button class="btn small ghost" data-ac="retry" data-q="${q.id}">Try again from blank</button>`:''}</div><div class="hint-list" aria-live="polite">${q.hints.slice(0,a.hints).map((h,i)=>`<p><b>Hint ${i+1}:</b> ${esc(h)}</p>`).join('')}</div>${a.reveal?`<section class="marking"><h4>Model answer</h4><p>${esc(q.model)}</p><h4>Check your own answer</h4><p class="muted">Tick only the points your answer actually includes. This is a study checklist, not an official examiner grade.</p>${q.points.map((p,i)=>`<label class="mark-point"><input type="checkbox" data-mark="${q.id}" value="${i}" ${a.checked.includes(i)?'checked':''}><span>${esc(p)}</span></label>`).join('')}<button class="btn small lime" data-ac="assess" data-q="${q.id}">Save my self-check</button><span class="selfcheck-result" aria-live="polite">${a.assessed?esc(scoreText(q)):''}</span><div class="relearn-link">Need the reasoning? <button class="text-link" data-lesson="${q.lesson}">Revisit ${esc(lesson(q.lesson).title)}</button></div></section>`:''}</article>`;
  }
  function atomTrainer() {
    return `<section class="interactive-teacher"><h3>Build an atom or ion row</h3><p>Change the numbers and watch how identity, mass and charge connect. This calculator uses a simple first-20-elements model.</p><div class="trainer-inputs"><label>Proton number Z<input type="number" id="coach-z" min="1" max="20" value="13"></label><label>Mass number A<input type="number" id="coach-a" min="1" max="100" value="27"></label><label>Charge<select id="coach-charge"><option value="-3">3−</option><option value="-2">2−</option><option value="-1">1−</option><option value="0">Neutral</option><option value="1">1+</option><option value="2">2+</option><option value="3" selected>3+</option></select></label></div><div id="atom-coach-output" class="trainer-output" aria-live="polite"></div></section>`;
  }
  function updateAtom() {
    const out=$('#atom-coach-output'); if(!out)return;
    const z=Number($('#coach-z').value),a=Number($('#coach-a').value),c=Number($('#coach-charge').value),e=z-c;
    if(!Number.isInteger(z)||z<1||z>20||!Number.isInteger(a)||a<z||a>100||e<0||e>20){out.textContent='Use whole numbers: Z from 1 to 20, A at least Z and at most 100, and 0–20 electrons in this model.';return;}
    const el=ELEMENTS.find(x=>x[2]===z);
    out.innerHTML=`<b>${esc(el[1])} ${esc(el[0])}${c?` (${Math.abs(c)}${c>0?'+':'−'})`:' (neutral)'}</b><div class="calculation-lines"><span>Protons = Z = <b>${z}</b></span><span>Neutrons = A − Z = ${a} − ${z} = <b>${a-z}</b></span><span>Electrons = Z − charge = ${z} − (${c}) = <b>${e}</b></span><span>Electron arrangement: <b>${e?shells(e).join(','):'no electrons'}</b></span></div><p class="muted">Arithmetic model only: changing A does not prove this isotope is stable or naturally occurring.</p>`;
  }
  function pairDiagram(kind='nh3') {
    const configs={nh3:{center:'N',outer:[['H',100,160],['H',260,260],['H',420,160]],lone:1},h2o:{center:'O',outer:[['H',100,210],['H',420,210]],lone:2},ch4:{center:'C',outer:[['H',100,160],['H',260,260],['H',420,160],['H',260,60]],lone:0}};
    const m=configs[kind]; let body=`<text x="260" y="168" text-anchor="middle" font-size="26" fill="currentColor">${m.center}</text>`;
    m.outer.forEach(([symbol,x,y])=>{const mx=(260+x)/2,my=(160+y)/2;body+=`<text x="${x}" y="${y+8}" text-anchor="middle" font-size="26" fill="currentColor">${symbol}</text><circle cx="${mx-6}" cy="${my}" r="4" fill="var(--aqua)"/><path d="M${mx+2} ${my-4}l8 8m0-8-8 8" stroke="var(--diagram-cross)" stroke-width="2"/>`;});
    for(let i=0;i<m.lone;i++) body+=`<circle cx="${248+i*26}" cy="115" r="4" fill="var(--aqua)"/><circle cx="${258+i*26}" cy="115" r="4" fill="var(--aqua)"/>`;
    return `<section class="interactive-teacher"><h3>See the shared pairs</h3><div class="filterbar"><button class="filter ${kind==='nh3'?'active':''}" data-ac="molecule" data-kind="nh3">NH₃</button><button class="filter ${kind==='h2o'?'active':''}" data-ac="molecule" data-kind="h2o">H₂O</button><button class="filter ${kind==='ch4'?'active':''}" data-ac="molecule" data-kind="ch4">CH₄</button></div><svg viewBox="0 0 520 310" role="img" aria-label="Outer-electron diagram for ${kind.toUpperCase()}: ${m.outer.length} shared pairs and ${m.lone} lone pairs on ${m.center}" class="pair-diagram">${body}</svg><p>Each dot-and-cross pair between atoms is one bond. Dots come from ${m.center}; crosses come from H. ${m.lone?`${m.center} also has ${m.lone} lone ${m.lone===1?'pair':'pairs'}.`:'Carbon has no lone pairs in methane.'} Positions are schematic, not molecular geometry.</p></section>`;
  }
  let diagramKind='nh3';
  function stageContent(l,d,n) {
    const worksheetExamples=course.worksheetExamples[l.id];
    if(n===0)return `<section class="definition-stage"><h2>Definitions</h2><div class="definition-list">${course.definitions[l.id].map(item=>`<article class="definition-card"><h3>${esc(item.term)}</h3><p><b>Definition:</b> ${esc(item.definition)}</p><p><b>Meaning:</b> ${esc(item.meaning)}</p></article>`).join('')}</div>${worksheetPreview(worksheetExamples[0])}</section>`;
    if(n===1)return `${window.CHEM_VISUALS.render(l.id)}<div class="concepts">${d.concepts.map(([t,p],i)=>`<section class="concept"><h2>${esc(t)}</h2><p>${esc(p)}</p>${worksheetExamples.filter(ex=>ex.concept===i).map(ex=>worksheetExplanation(ex)).join('')}</section>`).join('')}</div>${l.id==='2.1'||l.id==='2.3'?atomTrainer():l.id==='3.1'?pairDiagram(diagramKind):miniVisual(l)}<details class="reference-notes"><summary>Open the original topic notes</summary>${l.sections.map(s=>`<h3>${s.title}</h3><p>${s.body}</p>${s.bullets?`<ul>${s.bullets.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}`).join('')}</details>`;
    if(n===2)return `<section class="worksheet-lesson-questions"><h2>Worksheet questions explained</h2><p>Questions are paraphrased from your worksheet. Page numbers refer to the PDF.</p>${worksheetExamples.map(ex=>worksheetExplanation(ex,true)).join('')}</section><details class="reference-notes"><summary>More worked examples</summary>${examplesHTML(d)}</details>`;
    if(n===3)return `<div class="practice-intro"><h2>Your turn to explain it.</h2><p>Try first with the model hidden. Use a hint if you get stuck. Then compare the science in your answer with the checklist.</p></div>${questions(l.id).map(questionHTML).join('')}`;
    return `<section class="recap"><h2>Keep this idea.</h2><p class="memory-sentence">${l.memory}</p><h3>A useful answer structure</h3><p class="answer-frame">${esc(d.answerFrame)}</p><h3>Two mistakes to catch</h3>${d.traps.map(([wrong,right])=>`<div class="misconception"><p class="wrong-claim">“${esc(wrong)}”</p><p><b>Use this reasoning:</b> ${esc(right)}</p></div>`).join('')}<h3>Close the notes. Explain these out loud.</h3><ol>${d.recall.map(r=>`<li>${esc(r)}</li>`).join('')}</ol><p class="muted">Reading a lesson is different from recalling it. The completion button records reading progress; your written self-checks track practice separately.</p><button class="btn lime" data-action="togglecomplete" data-id="${l.id}">${st.completed.includes(l.id)?'Mark lesson as unread':'Mark lesson as read'}</button></section>`;
  }
  renderLesson=function(){
    const l=lesson(st.selected),d=course.lessons[l.id],n=stageFor(l.id),next=LESSONS[LESSONS.indexOf(l)+1];
    return `<div class="lesson-back"><button class="text-link" data-view="learn">All lessons</button><span>Chapter ${l.ch} · ${esc(chName(l.ch))}</span></div><header class="academy-heading lesson-title"><h1>${esc(l.title)}</h1><p>${esc(d.goal)}</p></header><nav class="lesson-stages" aria-label="Lesson stages">${stageNames.map((name,i)=>`<button data-ac="stage" data-stage="${i}" class="stage ${n===i?'active':''}" ${n===i?'aria-current="step"':''}><span>${i+1}</span>${name}</button>`).join('')}</nav><div class="guided-layout"><div class="reading-content" id="lesson-stage" tabindex="-1">${stageContent(l,d,n)}<div class="stage-footer"><button class="btn light" data-ac="stage" data-stage="${Math.max(0,n-1)}" ${n===0?'disabled':''}>Previous</button><span>${n+1} of 5</span>${n<4?`<button class="btn" data-ac="stage" data-stage="${n+1}">Next: ${stageNames[n+1]} ${arrow()}</button>`:next?`<button class="btn" data-lesson="${next.id}">Next lesson ${arrow()}</button>`:`<button class="btn" data-ac="allpractice">Practise all chapters ${arrow()}</button>`}</div></div><aside class="guided-aside"><section><h2>Lesson objective</h2><p>${esc(d.goal)}</p></section><section><h2>Worksheet pages</h2><p>PDF pages ${miniSource(l.id)}.</p><button class="text-link" data-ac="map">Open page guide</button></section><section><h2>Visual lab</h2><button class="btn small light" data-openlab="${l.lab}">Open lab ${arrow()}</button></section></aside></div>`;
  };

  function renderWorksheet(){
    const review=course.written.filter(needsReview),done=course.written.filter(q=>answer(q).assessed);
    const list=course.written.filter(q=>(practiceChapter==='all'||Number(q.lesson[0])===Number(practiceChapter))&&(practiceLesson==='all'||q.lesson===practiceLesson)&&(!reviewOnly||needsReview(q)));
    return `<header class="academy-heading"><h1>Worksheet coach</h1><p>Choose a PDF page for the method, then practise it.</p></header><div class="coach-tabs" role="group" aria-label="Worksheet coach views"><button class="filter ${worksheetTab==='map'?'active':''}" data-ac="coachmap" aria-pressed="${worksheetTab==='map'}">Page guide</button><button class="filter ${worksheetTab==='practice'&&!reviewOnly?'active':''}" data-ac="allpractice" aria-pressed="${worksheetTab==='practice'&&!reviewOnly}">Written practice (${course.written.length})</button><button class="filter ${reviewOnly&&worksheetTab==='practice'?'active':''}" data-ac="review" aria-pressed="${reviewOnly&&worksheetTab==='practice'}">Review (${review.length})</button></div>${worksheetTab==='map'?window.CHEM_WORKSHEET.render():`<div class="practice-controls">${chapterButtons('data-practicechapter',practiceChapter)}<label class="topic-select">Topic<select id="practice-topic"><option value="all">All topics in this chapter filter</option>${LESSONS.filter(l=>practiceChapter==='all'||l.ch===Number(practiceChapter)).map(l=>`<option value="${l.id}" ${practiceLesson===l.id?'selected':''}>${l.id} ${esc(l.title)}</option>`).join('')}</select></label><p class="muted">${done.length}/${course.written.length} answers self-checked · ${list.length} questions shown. Drafts and checklists save in this browser.</p></div><div class="written-list">${list.length?list.map(q=>`<div class="question-lesson-label">Lesson ${q.lesson} · ${esc(lesson(q.lesson).title)}</div>${questionHTML(q)}`).join(''):`<div class="empty-state"><h2>${reviewOnly?'No missed points in this selection.':'No questions match this selection.'}</h2><p>${reviewOnly?'Save a self-check with missing points to add it here.':'Choose another chapter or topic.'}</p><button class="btn light" data-ac="allpractice">Browse all practice</button></div>`}</div>`}`;
  }
  renderGlossary=function(){
    const query=st.search.trim().toLowerCase();
    const items=GLOSSARY.filter(([ch,term,definition,meaning])=>!query||`${term} ${definition} ${meaning} ${chName(ch)}`.toLowerCase().includes(query));
    return `<header class="academy-heading"><h1>Definitions</h1><p>Definition and direct meaning for each term.</p></header><div class="definition-list glossary-definitions">${items.length?items.map(([ch,term,definition,meaning])=>`<article class="definition-card"><div class="definition-heading"><h2>${esc(term)}</h2><span class="tag">Chapter ${ch}</span></div><p><b>Definition:</b> ${esc(definition)}</p><p><b>Meaning:</b> ${esc(meaning)}</p></article>`).join(''):`<p>No definitions match “${esc(st.search)}”.</p>`}</div>`;
  };
  renderFlash=function(){
    const arr=filteredFlash();
    if(!arr.length)return '<p>No definitions in this chapter.</p>';
    st.flashIndex=Math.min(st.flashIndex,arr.length-1);
    const {g}=arr[st.flashIndex],term=g[1],definition=g[2],meaning=g[3];
    return `${headline('FLASHCARDS','Recall the definition.','Say the definition before revealing it.')}
      <div class="filterbar"><button class="filter ${st.flashChapter==='all'?'active':''}" data-flashchapter="all">All definitions</button>${CHAPTERS.map(c=>`<button class="filter ${st.flashChapter===String(c.id)?'active':''}" data-flashchapter="${c.id}">Chapter ${c.id}</button>`).join('')}</div>
      <div class="card-stack"><div class="row between" style="margin-bottom:14px"><span class="pill">Card ${st.flashIndex+1} / ${arr.length}</span><span class="pill">${st.mastered.length} mastered</span></div>
      <button class="flash-card full definition-flash-card" data-action="flip" aria-label="Flip flashcard"><div>${st.flipped?`<div class="flash-definition"><p><b>Definition</b><br>${esc(definition)}</p><p><b>Meaning</b><br>${esc(meaning)}</p></div>`:`<span class="hint">TERM</span><div class="term">${esc(term)}</div>`}</div></button>
      <div class="flash-footer"><button class="btn light small" data-action="flashprev">← Previous</button><div class="flash-controls"><button class="btn small ${st.mastered.includes(term)?'lime':'light'}" data-action="flashmaster">${st.mastered.includes(term)?'✓ Mastered':'Mark mastered'}</button><button class="btn small" data-action="flashnext">Next →</button></div></div><div class="row wrap" style="margin-top:17px;justify-content:center"><button class="btn small underlined" data-action="flashshuffle">Shuffle order ↻</button></div></div>`;
  };
  const oldSources=renderSources;
  renderSources=function(){return `<header class="academy-heading"><h1>What guides these lessons.</h1><p>Original explanations and practice, informed by your worksheet and the official Cambridge resources below. LUCID is an independent study tool.</p></header><section class="source-list"><h2>Your supplied worksheet</h2><p>The 72-page “Work sheet Ch 1 &amp; 2” packet contains question excerpts labelled across several series, including 2014–2024. Scanned diagrams were inspected alongside extracted text. Mappings use PDF page numbers. The packet itself is not republished here.</p><h2>Official resources reviewed</h2>${course.sources.map(s=>`<article><a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.name)} ${arrow()}</a><p>${esc(s.use)}</p></article>`).join('')}<h2>How to use the practice</h2><p>There are ${Q.length} multiple-choice questions and ${course.written.length} original written questions. These are exam-style practice, not official past-paper reproductions. Written checklists are formative self-assessment, not official mark schemes.</p><p>This update was authored using a review of the material. No machine-learning model was trained or fine-tuned on the papers. Future exam questions and marks cannot be guaranteed.</p></section><details class="book-reference"><summary>Coursebook information and original references</summary>${oldSources()}</details>`;};
  render=function(){
    if(st.view==='lesson') { progress.last=st.selected; save(); }
    if(st.view==='worksheet'){stopAnim();updateChrome();$('#main').innerHTML=renderWorksheet();}
    else if(st.view==='periodic'){stopAnim();updateChrome();$('#main').innerHTML=window.CHEM_PERIODIC.render();}
    else legacyRender();
    updateAtom();
  };
  function redrawFocus(qid){const y=window.scrollY; render(); const el=qid?document.getElementById('question-'+qid):null; if(el) el.querySelector('.draft-state')?.setAttribute('aria-live','polite');window.scrollTo(0,y);}
  document.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(!b)return;
    if(b.dataset.lesson&&!b.dataset.resume){progress.stages[b.dataset.lesson]=0;save();}
  },true);
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-ac]'); if(!b)return;
    const act=b.dataset.ac,q=course.written.find(q=>q.id===b.dataset.q);
    if(act==='stage'){progress.stages[st.selected]=Number(b.dataset.stage);save();render();$('#lesson-stage').focus();$('#main').scrollIntoView({block:'start',behavior:st.settings.reduce?'instant':'smooth'});}
    if(act==='worksheetexample'){const ex=course.worksheetExamples[st.selected].find(item=>item.id===b.dataset.example);if(!ex)return;progress.stages[st.selected]=2;save();render();const target=document.getElementById('worksheet-example-'+ex.id);target?.focus({preventScroll:true});target?.scrollIntoView({block:'start',behavior:st.settings.reduce?'instant':'smooth'});return;}
    if(act==='molecule'){diagramKind=b.dataset.kind;redrawFocus();}
    if(act==='map'||act==='coachmap'){worksheetTab='map';reviewOnly=false;go('worksheet');}
    if(act==='allpractice'){worksheetTab='practice';reviewOnly=false;practiceLesson='all';practiceChapter='all';go('worksheet');}
    if(act==='review'){worksheetTab='practice';reviewOnly=true;practiceLesson='all';practiceChapter='all';go('worksheet');}
    if(!q)return;
    if(act==='hint'){put(q,{hints:Math.min(answer(q).hints+1,q.hints.length)});redrawFocus(q.id);}
    if(act==='reveal'){put(q,{reveal:!answer(q).reveal});redrawFocus(q.id);}
    if(act==='retry'){put(q,{draft:'',reveal:false,hints:0,checked:[],assessed:false});if(st.view==='worksheet'){reviewOnly=false;practiceChapter=q.lesson[0];practiceLesson=q.lesson;}redrawFocus(q.id);document.getElementById('draft-'+q.id)?.focus();}
    if(act==='assess'){const a=answer(q);put(q,{assessed:true});redrawFocus(q.id);notify(a.checked.length===q.marks?'All checklist points recorded. Try recalling this again tomorrow.':'Saved. Revisit the missing points, then try again.');}
  });
  document.addEventListener('click',e=>{const b=e.target.closest('[data-practicechapter]');if(b){practiceChapter=b.dataset.practicechapter;practiceLesson='all';render();}});
  document.addEventListener('input',e=>{
    const id=e.target.dataset.draft;if(!id)return;const q=course.written.find(q=>q.id===id);if(!q)return;
    put(q,{draft:e.target.value,assessed:false,checked:[]});
    const status=document.querySelector(`[data-status="${id}"]`);if(status)status.textContent='Draft saved in this browser';
    const box=e.target.closest('.written-question');box?.querySelectorAll('[data-mark]').forEach(x=>x.checked=false);
    const result=box?.querySelector('.selfcheck-result');if(result)result.textContent='Answer edited. Check the points again and save.';
  });
  document.addEventListener('change',e=>{
    if(e.target.id.startsWith('coach-'))updateAtom();
    if(e.target.id==='practice-topic'){practiceLesson=e.target.value;render();}
    const id=e.target.dataset.mark;if(!id)return;const q=course.written.find(q=>q.id===id);if(!q)return;
    const checked=[...document.getElementById('question-'+id).querySelectorAll('[data-mark]:checked')].map(el=>Number(el.value));
    put(q,{checked,assessed:false});
    const result=e.target.closest('.written-question').querySelector('.selfcheck-result');if(result)result.textContent='Checklist changed. Save your self-check.';
  });
  // A native link supports keyboard skip navigation without intercepting browser shortcuts.
  const skip=document.createElement('a');skip.href='#main';skip.className='skip-link';skip.textContent='Skip to study content';document.body.prepend(skip);
  $('#main').setAttribute('tabindex','-1');
  document.title='LUCID Chemistry · Understand. Practise. Remember.';
  render();
})();
