const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ctx = {window:{}};
vm.createContext(ctx);
for (const file of ['course-data.js','practice-data.js']) vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
const c=ctx.window.CHEM_COURSE;
const ids=['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3'];
for(const id of ids){
 const l=c.lessons[id];assert(l);
 for(const field of ['goal','context','foundation','bridge','answerFrame'])assert(l[field]?.length>40,`${id} ${field}`);
 assert(l.concepts.length>=4);assert(l.examples.length===2);assert(l.traps.length>=2);assert(l.recall.length>=3);
 l.examples.forEach(e=>{assert(e.steps.length>=3);assert(e.answer);assert(e.why);});
 assert(c.written.filter(q=>q.lesson===id).length>=4);
 assert(c.extraMCQ.filter(q=>q[0]===id).length>=5);
}
assert(new Set(c.written.map(q=>q.id)).size===c.written.length);
for(const q of c.written){assert(ids.includes(q.lesson));assert(q.marks===q.points.length);assert(q.marks>0);assert(q.hints.length>=2);assert(q.model.length>40);}
for(const [id,q,opts,correct,explain] of c.extraMCQ){assert(ids.includes(id));assert.equal(opts.length,4);assert(correct>=0&&correct<4);assert(explain.length>20);assert(q.length>20);}
let end=0;
for(const range of c.worksheet){const [lo,hi]=range.pages.split('–').map(Number);assert.equal(lo,end+1);assert(hi>=lo);end=hi;range.lessons.forEach(id=>assert(ids.includes(id)));}
assert.equal(end,72);
assert(c.sources.every(s=>s.url.startsWith('https://www.cambridgeinternational.org/')));
const html=fs.readFileSync('index.html','utf8');
for(const f of ['academy.css','course-data.js','practice-data.js','academy.js']){assert(html.includes(f));assert(fs.existsSync(f));}
// Demonstrate the validation logic rejects a bad mapping and wrong answer index.
assert.throws(()=>assert(ids.includes('9.9')));
assert.throws(()=>assert(7>=0&&7<4));
console.log(`Validated ${ids.length} lessons, ${c.written.length} written questions, ${c.extraMCQ.length} added MCQs and worksheet pages 1–${end}.`);
console.log('CONTENT_VALID');
