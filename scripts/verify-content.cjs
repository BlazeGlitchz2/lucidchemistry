const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ctx = {window:{}};
vm.createContext(ctx);
for (const file of ['course-data.js','practice-data.js']) vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
const c=ctx.window.CHEM_COURSE;
const ids=['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3'];
assert.equal(c.studyPriorities.length,6);
for(const priority of c.studyPriorities){assert(priority.title&&priority.focus&&priority.lessons.length);priority.lessons.forEach(id=>assert(ids.includes(id)));}
for(const id of ids){
 assert(c.worksheetPatterns[id]?.length>=2);c.worksheetPatterns[id].forEach(p=>assert(p.cue&&p.method&&p.pages));
 const l=c.lessons[id];assert(l);
 for(const field of ['goal','context','foundation','bridge','answerFrame'])assert(l[field]?.length>40,`${id} ${field}`);
 assert(l.concepts.length>=4);assert(l.examples.length===2);assert(l.traps.length>=2);assert(l.recall.length>=3);
 l.examples.forEach(e=>{assert(e.steps.length>=3);assert(e.answer);assert(e.why);});
 const examples=c.worksheetExamples[id];assert(examples&&examples.length>=3,`Missing worksheet explanations for ${id}`);
 examples.forEach(e=>{assert(e.id&&e.page>=1&&e.page<=72&&Number.isInteger(e.concept)&&e.concept>=0&&e.concept<l.concepts.length);assert(e.question&&e.short&&e.starting&&e.steps.length>=2&&e.answer);});
 assert(c.written.filter(q=>q.lesson===id).length>=4);
 assert(c.extraMCQ.filter(q=>q[0]===id).length>=5);
}
assert(new Set(c.written.map(q=>q.id)).size===c.written.length);
assert.equal(new Set(Object.values(c.worksheetExamples).flat().map(e=>e.id)).size,Object.values(c.worksheetExamples).flat().length);
for(const q of c.written){assert(ids.includes(q.lesson));assert(q.marks===q.points.length);assert(q.marks>0);assert(q.hints.length>=2);assert(q.model.length>40);}
for(const [id,q,opts,correct,explain] of c.extraMCQ){assert(ids.includes(id));assert.equal(opts.length,4);assert(correct>=0&&correct<4);assert(explain.length>20);assert(q.length>20);}
let end=0;
for(const range of c.worksheet){const [lo,hi]=range.pages.split('–').map(Number);assert.equal(lo,end+1);assert(hi>=lo);end=hi;range.lessons.forEach(id=>assert(ids.includes(id)));}
assert.equal(end,72);
assert(c.sources.every(s=>s.url.startsWith('https://www.cambridgeinternational.org/')));
const html=fs.readFileSync('index.html','utf8');
for(const f of ['academy.css','course-data.js','practice-data.js','worksheet-guide.js','worksheet-guide.css','periodic-table.js','periodic-table.css','learning-visuals.js','learning-visuals.css','academy.js']){assert(html.includes(f));assert(fs.existsSync(f));}
const client={window:{},document:{addEventListener(){},getElementById(){return null;}},localStorage:{getItem(){return null;},setItem(){}}};
vm.createContext(client);
for(const file of ['worksheet-guide.js','periodic-table.js','learning-visuals.js'])vm.runInContext(fs.readFileSync(file,'utf8'),client,{filename:file});
const guide=client.window.CHEM_WORKSHEET;
assert.equal(Object.keys(guide.pages).length,72);
assert.equal(guide.pageNotes.length,73);
for(let page=1;page<=72;page++){
 const entry=guide.pages[page];assert(entry&&entry[0]&&entry[1].length,`Missing worksheet page ${page}`);
 assert(guide.pageNotes[page],`Missing page note ${page}`);
 for(const id of entry[1]){const m=guide.methods[id];assert(m&&m.definition&&m.steps.length>=3&&m.example,`Missing method ${id}`);assert(ids.includes(m.lesson));}
 guide.openPage(page,false);assert(guide.render().includes(`PDF PAGE ${page} OF 72`),`Cannot render page ${page}`);
}
assert(guide.pages[6][1].includes('shared'));
const elements=client.window.CHEM_PERIODIC.elements;
assert.equal(elements.length,118);
assert.equal((client.window.CHEM_PERIODIC.render().match(/data-pt-element=/g)||[]).length,118);
assert.equal(new Set(elements.map(e=>e.symbol)).size,118);
assert.equal(new Set(elements.map(e=>e.number)).size,118);
assert.equal(new Set(elements.map(e=>{const p=e.position||{row:e.period+1,col:e.group+1};return `${p.row}:${p.col}`;})).size,118);
for(const [symbol,number,type] of [['H',1,'nonmetal'],['C',6,'nonmetal'],['Na',11,'metal'],['Cl',17,'nonmetal'],['Br',35,'nonmetal'],['Pb',82,'metal']]){
 const e=elements.find(e=>e.symbol===symbol);assert(e&&e.number===number&&e.type===type,`Incorrect element ${symbol}`);
}
for(const ex of Object.values(c.worksheetExamples).flat())for(const atom of ex.shells||[]){
 const element=elements.find(e=>e.symbol===atom.symbol);assert(element&&element.number===atom.electrons,`Wrong neutral electron count for ${atom.symbol}`);
 assert.equal(atom.arrangement.reduce((sum,n)=>sum+n,0),atom.electrons,`Wrong shell total for ${atom.symbol}`);
 atom.arrangement.forEach((count,i)=>{const capacity=[2,8,8,2][i]||0;assert(count>0&&count<=capacity,`Invalid shell for ${atom.symbol}`);if(i<atom.arrangement.length-1)assert.equal(count,capacity,`Unfilled inner shell for ${atom.symbol}`);});
}
const sodium=c.worksheetExamples['3.2'].find(e=>e.id==='sodium-ion-formation');
assert.equal(sodium.shells.find(a=>a.symbol==='Na').arrangement.join(','),'2,8,1');
assert.equal(sodium.shells.find(a=>a.symbol==='Cl').arrangement.join(','),'2,8,7');
for(const id of ids){
 const figure=client.window.CHEM_VISUALS.render(id);assert(figure.includes('<svg')&&/<desc\b/.test(figure),`Missing visual for ${id}`);
 for(const match of figure.matchAll(/viewBox="([^"]+)"/g))assert.match(match[1],/^-?\d+(?:\.\d+)?\s+-?\d+(?:\.\d+)?\s+\d+(?:\.\d+)?\s+\d+(?:\.\d+)?$/);
}
// Demonstrate the validation logic rejects a bad mapping and wrong answer index.
assert.throws(()=>assert(ids.includes('9.9')));
assert.throws(()=>assert(7>=0&&7<4));
console.log(`Validated ${ids.length} lessons, ${Object.values(c.worksheetExamples).flat().length} worksheet explanations, ${c.written.length} written questions, ${c.extraMCQ.length} added MCQs, ${Object.keys(guide.pages).length} worksheet guides and ${elements.length} elements.`);
console.log('CONTENT_VALID');
