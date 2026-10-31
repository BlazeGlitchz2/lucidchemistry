(() => {
  'use strict';
  const raw = `H|Hydrogen|nonmetal|1|1
He|Helium|noble|18|1
Li|Lithium|metal|1|2
Be|Beryllium|metal|2|2
B|Boron|metalloid|13|2
C|Carbon|nonmetal|14|2
N|Nitrogen|nonmetal|15|2
O|Oxygen|nonmetal|16|2
F|Fluorine|nonmetal|17|2
Ne|Neon|noble|18|2
Na|Sodium|metal|1|3
Mg|Magnesium|metal|2|3
Al|Aluminium|metal|13|3
Si|Silicon|metalloid|14|3
P|Phosphorus|nonmetal|15|3
S|Sulfur|nonmetal|16|3
Cl|Chlorine|nonmetal|17|3
Ar|Argon|noble|18|3
K|Potassium|metal|1|4
Ca|Calcium|metal|2|4
Sc|Scandium|metal|3|4
Ti|Titanium|metal|4|4
V|Vanadium|metal|5|4
Cr|Chromium|metal|6|4
Mn|Manganese|metal|7|4
Fe|Iron|metal|8|4
Co|Cobalt|metal|9|4
Ni|Nickel|metal|10|4
Cu|Copper|metal|11|4
Zn|Zinc|metal|12|4
Ga|Gallium|metal|13|4
Ge|Germanium|metalloid|14|4
As|Arsenic|metalloid|15|4
Se|Selenium|nonmetal|16|4
Br|Bromine|nonmetal|17|4
Kr|Krypton|noble|18|4
Rb|Rubidium|metal|1|5
Sr|Strontium|metal|2|5
Y|Yttrium|metal|3|5
Zr|Zirconium|metal|4|5
Nb|Niobium|metal|5|5
Mo|Molybdenum|metal|6|5
Tc|Technetium|metal|7|5
Ru|Ruthenium|metal|8|5
Rh|Rhodium|metal|9|5
Pd|Palladium|metal|10|5
Ag|Silver|metal|11|5
Cd|Cadmium|metal|12|5
In|Indium|metal|13|5
Sn|Tin|metal|14|5
Sb|Antimony|metalloid|15|5
Te|Tellurium|metalloid|16|5
I|Iodine|nonmetal|17|5
Xe|Xenon|noble|18|5
Cs|Caesium|metal|1|6
Ba|Barium|metal|2|6
La|Lanthanum|metal|3|6
Ce|Cerium|metal|4|6
Pr|Praseodymium|metal|5|6
Nd|Neodymium|metal|6|6
Pm|Promethium|metal|7|6
Sm|Samarium|metal|8|6
Eu|Europium|metal|9|6
Gd|Gadolinium|metal|10|6
Tb|Terbium|metal|11|6
Dy|Dysprosium|metal|12|6
Ho|Holmium|metal|13|6
Er|Erbium|metal|14|6
Tm|Thulium|metal|15|6
Yb|Ytterbium|metal|16|6
Lu|Lutetium|metal|17|6
Hf|Hafnium|metal|4|6
Ta|Tantalum|metal|5|6
W|Tungsten|metal|6|6
Re|Rhenium|metal|7|6
Os|Osmium|metal|8|6
Ir|Iridium|metal|9|6
Pt|Platinum|metal|10|6
Au|Gold|metal|11|6
Hg|Mercury|metal|12|6
Tl|Thallium|metal|13|6
Pb|Lead|metal|14|6
Bi|Bismuth|metal|15|6
Po|Polonium|metal|16|6
At|Astatine|metalloid|17|6
Rn|Radon|noble|18|6
Fr|Francium|metal|1|7
Ra|Radium|metal|2|7
Ac|Actinium|metal|3|7
Th|Thorium|metal|4|7
Pa|Protactinium|metal|5|7
U|Uranium|metal|6|7
Np|Neptunium|metal|7|7
Pu|Plutonium|metal|8|7
Am|Americium|metal|9|7
Cm|Curium|metal|10|7
Bk|Berkelium|metal|11|7
Cf|Californium|metal|12|7
Es|Einsteinium|metal|13|7
Fm|Fermium|metal|14|7
Md|Mendelevium|metal|15|7
No|Nobelium|metal|16|7
Lr|Lawrencium|metal|17|7
Rf|Rutherfordium|metal|4|7
Db|Dubnium|metal|5|7
Sg|Seaborgium|metal|6|7
Bh|Bohrium|metal|7|7
Hs|Hassium|metal|8|7
Mt|Meitnerium|metal|9|7
Ds|Darmstadtium|metal|10|7
Rg|Roentgenium|metal|11|7
Cn|Copernicium|metal|12|7
Nh|Nihonium|metal|13|7
Fl|Flerovium|metal|14|7
Mc|Moscovium|metal|15|7
Lv|Livermorium|metal|16|7
Ts|Tennessine|nonmetal|17|7
Og|Oganesson|noble|18|7`;
  const elements = raw.split('\n').map((line, i) => { const [symbol,name,type,group,period]=line.split('|'); return {number:i+1,symbol,name,type,group:+group,period:+period}; });
  // La–Lu and Ac–Lr appear in the detached f-block rows.
  elements.forEach(e => { if (e.number >= 58 && e.number <= 71) { e.group = null; e.series = 'Lanthanide'; e.position = {row:9,col:e.number-54}; } if (e.number >= 90 && e.number <= 103) { e.group = null; e.series = 'Actinide'; e.position = {row:10,col:e.number-86}; } });
  const shellText = {1:'1',2:'2',3:'2, 1',4:'2, 2',5:'2, 3',6:'2, 4',7:'2, 5',8:'2, 6',9:'2, 7',10:'2, 8',11:'2, 8, 1',12:'2, 8, 2',13:'2, 8, 3',14:'2, 8, 4',15:'2, 8, 5',16:'2, 8, 6',17:'2, 8, 7',18:'2, 8, 8',19:'2, 8, 8, 1',20:'2, 8, 8, 2'};
  const relativeAtomicMass = {1:'1',2:'4',3:'7',4:'9',5:'11',6:'12',7:'14',8:'16',9:'19',10:'20',11:'23',12:'24',13:'27',14:'28',15:'31',16:'32',17:'35.5',18:'40',19:'39',20:'40',26:'56',29:'63.5',30:'65',35:'80',47:'108',53:'127',56:'137',82:'207'};
  const charges = {1:'+1',3:'+1',4:'+2',7:'−3',8:'−2',9:'−1',11:'+1',12:'+2',13:'+3',16:'−2',17:'−1',19:'+1',20:'+2'};
  const typeLabel = {metal:'Metal',nonmetal:'Non-metal',metalloid:'Metalloid',noble:'Noble gas (non-metal)'};
  let selected = 6;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function elementButton(e) { const p=e.position || {row:e.period+1,col:e.group+1}; return `<button class="pt-element pt-${e.type}" type="button" aria-label="${e.number}, ${esc(e.name)}, ${e.symbol}, ${typeLabel[e.type]}" aria-pressed="${e.number===selected}" data-pt-element="${e.number}" style="--pt-col:${p.col};--pt-row:${p.row}" title="${e.number} · ${esc(e.name)}"><span class="pt-number">${e.number}</span><strong>${e.symbol}</strong><span class="pt-name">${esc(e.name)}</span></button>`; }
  function detail(e) { const shell=shellText[e.number]; const charge=charges[e.number]; const mass=relativeAtomicMass[e.number]; return `<section class="pt-detail" aria-live="polite" aria-atomic="true"><div class="pt-detail-heading"><span class="pt-detail-symbol pt-${e.type}">${e.symbol}</span><div><span class="pt-kicker">Selected element</span><h3>${esc(e.name)}</h3><p>Atomic number <b>${e.number}</b> · ${typeLabel[e.type]}${e.group===18?' · Group 18':''}</p></div></div><div class="pt-facts">${mass?`<div><span>Approximate relative atomic mass (Aᵣ)</span><b>${mass}</b></div>`:''}<div><span>Position</span><b>${e.series?`${e.series} series, period ${e.period}`:`Group ${e.group}, period ${e.period}`}</b></div><div><span>Electron arrangement</span><b>${shell||'Not shown in this simplified view'}</b></div>${charge?`<div><span>Common ion in introductory chemistry</span><b>${e.symbol}<sup>${charge}</sup></b></div>`:''}</div><p class="pt-detail-note">${shell?`For the first 20 elements, this simplified shell model shows ${e.period} occupied shell${e.period===1?'':'s'}. The outer-shell count can help explain reactions; it is not a full orbital configuration.`:'Electron shell arrangements and ion charges vary in complexity here, so this introductory view does not simplify them.'}${charge?' A common ion is shown; many elements can form other ions or oxidation states.':''}</p></section>`; }
  function render() { return `<div id="periodic-table-app" class="pt-app"><header class="pt-header"><div><span class="pt-kicker">IGCSE CHEMISTRY · 0620 · CHAPTERS 1–3</span><h1>Explore the periodic table</h1><p>Select any element to see its position and a few introductory facts. Elements in the same group often show similar chemical properties.</p></div><label class="pt-search-label" for="pt-search">Find an element<input id="pt-search" type="search" aria-label="Find an element" placeholder="Name, symbol or number" autocomplete="off"><span id="pt-search-status" class="pt-search-status" role="status"></span></label></header><div class="pt-layout"><div class="pt-table-panel"><p class="pt-scroll-hint" id="pt-scroll-hint">Scroll the table sideways to see all groups.</p><div class="pt-table-scroll" role="region" aria-label="Periodic table, horizontally scrollable" tabindex="0" aria-describedby="pt-scroll-hint"><div class="pt-grid" aria-label="Periodic table of the elements"><div class="pt-axis pt-group" style="--pt-col:1;--pt-row:1">Group</div>${Array.from({length:18},(_,i)=>`<div class="pt-axis pt-group" style="--pt-col:${i+2};--pt-row:1">${i+1}</div>`).join('')}${elements.map(elementButton).join('')}<div class="pt-series-label" style="--pt-col:1;--pt-row:9">Lanthanides</div><div class="pt-series-label" style="--pt-col:1;--pt-row:10">Actinides</div>${Array.from({length:7},(_,i)=>`<div class="pt-axis pt-period" style="--pt-col:1;--pt-row:${i+2}">${i+1}</div>`).join('')}</div></div><p class="pt-group-note">Group labels: IUPAC groups 13–17 correspond to Cambridge III–VII; IUPAC group 18 is Cambridge 0.</p><div class="pt-legend" aria-label="Element type key"><span><i class="pt-dot pt-metal"></i>Metal</span><span><i class="pt-dot pt-nonmetal"></i>Non-metal</span><span><i class="pt-dot pt-metalloid"></i>Metalloid</span><span><i class="pt-dot pt-noble"></i>Noble gas</span></div></div><aside class="pt-side">${detail(elements[selected-1])}<section class="pt-bond-guide"><span class="pt-kicker">Connect position to bonding</span><h3>From elements to bonds</h3><p>Metals often lose electrons to form positive ions; non-metals often gain electrons to form negative ions. Attraction between oppositely charged ions makes an <b>ionic bond</b>, common in compounds of metals with non-metals.</p><p>When non-metal atoms bond with other non-metal atoms, they often share pairs of electrons in <b>covalent bonds</b>. These are useful patterns for IGCSE, with exceptions and more complex cases.</p><p class="pt-small">Metalloids have mixed properties. Bonding depends on the substances and conditions, so use these as starting patterns rather than absolute rules.</p></section></aside></div></div>`; }
  function selectElement(root, number, reveal) {
    selected=number;
    root.querySelectorAll('[data-pt-element]').forEach(x=>x.setAttribute('aria-pressed',String(Number(x.dataset.ptElement)===selected)));
    const side=root.querySelector('.pt-side');
    side.innerHTML=detail(elements[selected-1])+side.querySelector('.pt-bond-guide').outerHTML;
    if(reveal){
      const container=root.querySelector('.pt-table-scroll'), target=root.querySelector(`[data-pt-element="${number}"]`);
      const box=container.getBoundingClientRect(), cell=target.getBoundingClientRect();
      container.scrollLeft+=cell.left+cell.width/2-box.left-box.width/2;
    }
  }
  function onClick(event) { const b=event.target.closest('[data-pt-element]'); const root=document.getElementById('periodic-table-app'); if(b&&root&&root.contains(b))selectElement(root,Number(b.dataset.ptElement),false); }
  function onInput(event) {
    if(event.target.id!=='pt-search')return;
    const root=document.getElementById('periodic-table-app');if(!root)return;
    const q=event.target.value.trim().toLowerCase();let matches=0;
    root.querySelectorAll('[data-pt-element]').forEach(b=>{const e=elements[Number(b.dataset.ptElement)-1];const hit=!q||`${e.number} ${e.symbol} ${e.name}`.toLowerCase().includes(q);b.classList.toggle('pt-dim',!hit);if(hit)matches++;});
    const exact=q&&elements.find(e=>[String(e.number),e.symbol.toLowerCase(),e.name.toLowerCase()].includes(q));
    root.querySelector('#pt-search-status').textContent=q?(exact?`${exact.name} selected`:`${matches} matching element${matches===1?'':'s'}`):'';
    if(exact)selectElement(root,exact.number,true);
  }

  window.CHEM_PERIODIC = { render, mount(root) { if(root)root.innerHTML=render(); }, destroy() { document.removeEventListener('click',onClick);document.removeEventListener('input',onInput); }, elements };
  document.addEventListener('click',onClick);document.addEventListener('input',onInput);
})();
