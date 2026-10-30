/* Original explanations and exercises. Worksheet page references use PDF page numbers. */
window.CHEM_COURSE = {
  sources: [
    {name:'Cambridge 0620 syllabus, 2026–2028',url:'https://www.cambridgeinternational.org/Images/697205-2026-2028-syllabus.pdf',use:'Scope check for particles, atoms and bonding. Coursebook chapters do not have the same numbering as syllabus topics.'},
    {name:'2023 specimen Paper 2',url:'https://www.cambridgeinternational.org/Images/595751-2023-specimen-paper-2.pdf',use:'Reviewed Q1–7: cooling graphs, diffusion with a chemical test, ionic bonding, graphite, metals and isotope calculations.'},
    {name:'2023 specimen Paper 4',url:'https://www.cambridgeinternational.org/Images/595758-2023-specimen-paper-4.pdf',use:'Reviewed Q1–2: state changes, particle descriptions, shell arrangements and diagrams of ions.'},
    {name:'June 2024 examiner report',url:'https://www.cambridgeinternational.org/Images/520537-june-2024-examiner-report.pdf',use:'Reviewed comments on subatomic particles and structure/property misconceptions.'},
    {name:'Official past-paper library',url:'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-chemistry-0620/past-papers/',use:'Use full papers and their official mark schemes for timed exam practice.'}
  ],
  worksheet: [
    {pages:'1–8',title:'Recognise atoms, ions and bonding diagrams',lessons:['2.1','2.2','2.3','3.1','3.2','3.3'],task:'Read the proton number first. Decide whether electrons are shared or transferred. Check charges and outer shells.'},
    {pages:'9–10',title:'Use evidence from tables',lessons:['1.1','2.1','2.2','3.3'],task:'Read the column headings carefully. Use melting/boiling points to find the state; use conductivity in both solid and liquid states to identify structure.'},
    {pages:'11–19',title:'Structured atomic and bonding questions',lessons:['2.1','2.2','2.3','3.1','3.2','3.3'],task:'Practise complete sentences, atom/ion calculations, dot-and-cross diagrams and structure → property explanations.'},
    {pages:'20–25',title:'Isotopes, ions and Periodic Table clues',lessons:['2.1','2.2','2.3'],task:'Separate identity (protons), mass (protons + neutrons), charge (protons − electrons) and chemical behaviour (electron arrangement).'},
    {pages:'26–33',title:'Heating curves, diffusion and gas conditions',lessons:['1.1','1.2','1.3'],task:'Identify whether pressure or volume is kept constant. At a plateau, energy changes the state rather than temperature.'},
    {pages:'34–42',title:'Particle diagrams and changes of state',lessons:['1.1','1.2','1.3'],task:'Follow each arrow from its starting state. Explain diffusion by random motion, and compare gas masses at the same temperature.'},
    {pages:'43–54',title:'Bonding multiple choice',lessons:['3.1','3.2','3.3'],task:'Check the full statement. Watch for NOT, shared pairs versus electrons, layers versus bonds, and ions versus molecules.'},
    {pages:'55–62',title:'Explain bonding and physical properties',lessons:['3.1','3.2','3.3'],task:'Name the structure, identify the attraction or mobile charge carrier, then connect it to the observed property.'},
    {pages:'63–68',title:'Unfamiliar molecules and ionic lattices',lessons:['3.1','3.2','3.3'],task:'Use the displayed bonds to count shared pairs. Add lone pairs. Balance total ionic charge and label every ion.'},
    {pages:'69–72',title:'Apply the same rules to new compounds',lessons:['3.1','3.2','3.3'],task:'Transfer the method to ethyne, phosphine, fluorine, magnesium oxide and lead(II) fluoride. Explain forces between particles precisely.'}
  ],
  lessons: {
    '1.1': {
      goal:'Explain a material’s shape, volume and compressibility using its particles.',
      context:'Why can you squash air inside a syringe but barely squash the same volume of water? Both contain moving particles. The difference is mainly the space between those particles.',
      foundation:'A particle is a tiny unit of a substance: it might be an atom, a molecule or an ion. A molecule is a group of atoms bonded together. When water changes state, the particles are still water molecules.',
      bridge:'The people analogy only represents arrangement and movement. Real particles have attractions between them; they do not choose where to go.',
      concepts:[
        ['Describe three separate features','Arrangement means regular or irregular. Separation means close together or far apart. Motion means vibrating about fixed positions, sliding past neighbours, or moving rapidly and randomly. A good answer covers all the features requested.'],
        ['Connect the invisible to the visible','A solid keeps its shape because particles cannot move freely past each other. A liquid flows because close particles can slide past one another. A gas fills a container because widely spaced particles move freely in all directions.'],
        ['Read melting and boiling points','Below melting point: solid. Between melting and boiling points: liquid. Above boiling point: gas. Exactly at a transition temperature, two states can coexist. Use the pressure stated in the question.'],
        ['A physical change preserves identity','Melting or boiling changes spacing, arrangement and motion. It does not make the individual particles larger or change water molecules into hydrogen and oxygen.']
      ],
      examples:[
        {q:'A substance melts at −12°C and boils at 58°C. What state is it at 25°C?',steps:['Locate 25°C on a temperature line. It is higher than −12°C.','It is also lower than 58°C, so melting has finished but boiling has not started.','Conclude that the substance is a liquid.'],answer:'Liquid: −12 < 25 < 58.',why:'Reading a table is about comparing temperatures, not guessing from the name of the substance.'},
        {q:'Explain why a gas is easier to compress than a solid.',steps:['State the separation: gas particles are far apart.','Connect the space to the action: pressure can push particles closer together.','Contrast with the solid: its particles are already closely packed.'],answer:'A gas has large spaces between its particles, so they can be pushed closer together. Solid particles are already close together.',why:'The space between particles gets smaller. Individual particles do not get smaller.'}
      ],
      traps:[['Particles in a solid do not move.','They vibrate about fixed positions. Fixed positions do not mean zero movement.'],['A gas has no volume.','It has no fixed volume: it occupies the available container volume.']],
      recall:['Describe a liquid using arrangement, separation and motion.','Explain why boiling water is still the same substance.','Find the state at 80°C if melting point is 20°C and boiling point is 140°C.'],
      answerFrame:'The particles are [separation] and [arrangement]. They [motion], so the substance [observable property].'
    },
    '1.2': {
      goal:'Read heating/cooling graphs and explain where the energy goes.',
      context:'Ice and water can remain at 0°C while a heater supplies energy. This is not wasted energy: it is helping change the state, so a thermometer does not show a rise yet.',
      foundation:'Temperature measures how hot something is and relates to average particle kinetic energy. Heat is energy transferred because of a temperature difference. Adding energy does not always raise temperature.',
      bridge:'The faster-music analogy works on a sloping part of a heating curve. At a plateau the average kinetic energy stays constant even though energy is still transferred.',
      concepts:[
        ['Read the shape before the letters','On a rising slope, one state warms and average kinetic energy increases. On a horizontal section, a pure substance changes state at constant temperature (at constant pressure). On cooling, reverse the direction: gas → condensation → liquid → freezing → solid.'],
        ['Two kinds of energy change','During heating within a state, particles gain average kinetic energy. During melting or boiling, energy increases potential energy by overcoming attractive forces. Average kinetic energy stays constant during the plateau.'],
        ['Boiling and evaporation are different','Evaporation occurs only at the surface and can occur below the boiling point. Boiling occurs throughout the liquid, at the boiling point for the pressure used. Both produce gas, and neither makes a new substance.'],
        ['Check what is kept constant','Heat a gas at constant pressure: particles move faster and the gas expands, so average separation increases. Heat it in a sealed rigid container: volume stays fixed; more energetic collisions increase pressure. Do not claim that all heated gases expand.'],
        ['Cooling gives energy to the surroundings','Condensation and freezing release energy. A flat cooling section is still a state change: temperature and average kinetic energy stay constant while attractions form.']
      ],
      examples:[
        {q:'A pure solid is heated. Its temperature rises, stays at 500°C, then rises again. Explain the flat section.',steps:['The first plateau during heating is melting.','Energy is still being absorbed.','It overcomes attractive forces rather than increasing average kinetic energy, so temperature remains 500°C until all the solid has melted.'],answer:'The substance is melting. Energy is used to overcome attractions between particles, so its temperature remains constant during the change.',why:'A horizontal line does not mean that heating has stopped.'},
        {q:'A gas is heated while its pressure is kept constant. Describe particle speed and separation.',steps:['Higher temperature gives particles greater average kinetic energy.','They move faster.','At constant pressure the gas expands, so average separation increases.'],answer:'The particles move faster and become further apart on average.',why:'If the volume were fixed, the answer about separation would be different.'}
      ],
      traps:[['Particles stop moving during a plateau.','Average kinetic energy remains constant; the particles continue moving.'],['Water molecules get bigger when heated.','Individual molecules keep their size; speed and average separation can change.']],
      recall:['Explain a plateau using energy and attractive forces.','Give two differences between evaporation and boiling.','Explain what happens when a gas cools in a sealed rigid container.'],
      answerFrame:'Energy is [absorbed/released] as [attractions are overcome/form]. Average kinetic energy remains constant, so temperature stays constant.'
    },
    '1.3': {
      goal:'Explain diffusion, interpret the gas-tube experiment, and distinguish mixtures from compounds.',
      context:'A smell reaches you from across a still room because gas particles move randomly. A crystal can dissolve in water and then its dissolved particles spread: those are two different processes.',
      foundation:'Concentration means how much of a substance is present in a given volume. High concentration means more particles of that substance per unit volume. Random movement continues even when concentration becomes uniform.',
      bridge:'Perfume illustrates diffusion, but a fan also moves air as a whole. A wind carrying pollen is not the same mechanism as diffusion due to random molecular motion.',
      concepts:[
        ['Random movement, overall spreading','Particles move in all directions. If more start on one side, more tend to leave that crowded side than return, producing net movement from higher to lower concentration. At uniform concentration there is no net movement, although particles still move.'],
        ['Compare gases fairly','At the same temperature, gases with lower relative molecular mass generally diffuse faster. Compare molecular mass, not atomic number. Temperature matters too: hotter particles have greater average kinetic energy.'],
        ['The ammonia and hydrogen chloride tube','NH₃ has relative molecular mass 17; HCl is about 36.5. Ammonia diffuses faster and travels further before the gases meet. The white NH₄Cl ring forms nearer the HCl end. Diffusion brings gases together; their reaction forms the white solid.'],
        ['Dissolving is not diffusion','Dissolving produces a solution as solute particles become dispersed among solvent particles. Diffusion spreads the dissolved particles. The purple colour spreading from a soluble crystal can involve both.'],
        ['Element, compound or mixture?','An element has one type of atom, even if its atoms are paired as O₂. A compound has different elements chemically combined in fixed proportions. A mixture has substances together without bonding between those different substances; physical methods can separate its components.']
      ],
      examples:[
        {q:'Where does the white ring form between ammonia and hydrogen chloride, and why?',steps:['Compare relative molecular masses: 17 for NH₃ versus 36.5 for HCl.','The lighter ammonia molecules diffuse faster at the same temperature.','Ammonia travels further, so the meeting point is closer to the HCl end.'],answer:'Nearer the HCl end, because ammonia has the lower relative molecular mass and diffuses faster.',why:'The ring is nearer the slower gas, not the faster gas.'},
        {q:'A gas test changes colour only when an acidic or alkaline gas arrives. Hydrogen is the lightest option. Must it give the fastest colour change?',steps:['Read both requirements: the gas must diffuse and must affect the indicator.','Hydrogen does not produce the required acid/alkali colour change.','Among gases that do change that indicator, compare diffusion rates.'],answer:'No. The gas must also react with or affect the indicator; speed alone is insufficient.',why:'This is an exam reading skill: satisfy every condition, not just the first clue.'}
      ],
      traps:[['The white ring forms nearer ammonia because it is lighter.','Lighter ammonia travels further, so the ring is nearer the HCl end.'],['O₂ is a compound because it has two atoms.','Both atoms are oxygen, so it is an element.']],
      recall:['Define diffusion without saying particles choose where to go.','Predict the slowest of H₂, CH₄ and CO₂ at the same temperature.','Explain why dissolving and diffusion are not interchangeable words.'],
      answerFrame:'At the same temperature, [gas] has a lower relative molecular mass, so it diffuses faster and travels further in the same time.'
    },
    '2.1': {
      goal:'Complete atom/ion tables using proton number, mass number and charge.',
      context:'A table might show 13 protons, 14 neutrons and 10 electrons. You can identify the element, isotope and charge without recognising any picture: each number answers a different question.',
      foundation:'An atom is electrically neutral. Its tiny nucleus contains protons (+1) and neutrons (0), both with relative mass about 1. Electrons (−1) occupy shells and have a very small relative mass, about 1/1836 (often rounded to 1/1840).',
      bridge:'The element-ID analogy refers only to proton number. Changing electrons changes charge; changing neutrons changes the isotope. Neither changes which element it is.',
      concepts:[
        ['Read nuclear notation','In ²³₁₁Na, the lower number Z = 11 counts protons. The upper number A = 23 counts protons + neutrons. Subtract: neutrons = 23 − 11 = 12. An ion’s charge is written at the upper right and is separate from A.'],
        ['Use charge as an equation','Charge = protons − electrons. A +2 ion has two fewer electrons than protons. A −1 ion has one more electron than protons. Gain or loss of electrons leaves the nucleus unchanged in ordinary chemical reactions.'],
        ['Work in a safe order','Find protons from Z. Find neutrons from A − Z. Then find electrons using the charge. Finally check that protons − electrons gives the stated charge. Never subtract charge from the neutron count.'],
        ['The hydrogen-1 exception','A hydrogen-1 nucleus has one proton and no neutrons. That is why its proton number and mass number are both 1. Other isotopes of hydrogen do contain neutrons.'],
        ['Which evidence proves what?','Same protons: same element. Equal protons and electrons: neutral atom. Same protons but different neutrons: isotopes. Same electrons alone: potentially different elements or ions, not necessarily the same particle.']
      ],
      examples:[
        {q:'Find protons, neutrons and electrons in ²⁷₁₃Al³⁺.',steps:['Protons = Z = 13.','Neutrons = A − Z = 27 − 13 = 14.','A 3+ charge means 3 electrons were lost: electrons = 13 − 3 = 10.','Check: 13 − 10 = +3.'],answer:'13 protons, 14 neutrons, 10 electrons.',why:'The 3+ changes the electron count, not the proton or neutron count.'},
        {q:'A particle has 16 protons, 18 neutrons and 18 electrons. Identify it.',steps:['16 protons identifies sulfur, S.','Mass number = 16 + 18 = 34.','Charge = 16 − 18 = −2.'],answer:'³⁴₁₆S²⁻: a sulfide ion with mass number 34.',why:'The mass number does not include electrons.'}
      ],
      traps:[['A positive ion has gained positive protons.','It has lost negative electrons. Its proton number is unchanged.'],['The mass number is the number of neutrons.','It counts protons plus neutrons.']],
      recall:['Find p, n and e for ³⁹₁₉K⁺.','Explain why 10 electrons alone cannot identify an element.','What particles are present in a hydrogen-1 nucleus?'],
      answerFrame:'p = Z; n = A − Z; e = Z − charge (with its sign). Check: charge = p − e.'
    },
    '2.2': {
      goal:'Identify isotopes, explain their chemical similarity, and calculate weighted atomic masses.',
      context:'A Periodic Table value such as 35.5 does not mean an atom has half a neutron. A natural sample is a mixture of isotopes, so its average mass can lie between their whole-number mass numbers.',
      foundation:'Isotopes are atoms of the same element with the same proton number but different neutron numbers. A sample’s relative atomic mass compares its weighted mean atomic mass with 1/12 of the mass of a carbon-12 atom. It has no unit.',
      bridge:'The phone analogy only represents variants of the same identity. For chemistry, use the actual reason: equal electron arrangements explain similar chemical properties.',
      concepts:[
        ['Give both halves of the definition','Same protons identifies the same element; different neutrons makes them different isotopes. Same electrons on its own is not enough: Na⁺ and Ne both have 10 electrons but have different proton numbers.'],
        ['Explain chemistry using electrons','Neutral isotopes have the same electron arrangement, including the same number of outer-shell electrons. Because chemical reactions involve electrons, they have very similar chemical properties. Different neutron numbers explain different masses, not different ordinary chemical behaviour.'],
        ['A weighted mean gives common isotopes more influence','Multiply each isotope mass by its percentage abundance, add the products and divide by 100. If using decimal fractions, multiply and add without dividing by 100 again. Check that percentages sum to 100.'],
        ['Find an unknown abundance','Let one isotope’s fraction be x and the other be 1 − x. Write mass₁x + mass₂(1 − x) = average. Solve, then convert the fraction to a percentage. The average must lie between the isotope masses.']
      ],
      examples:[
        {q:'A sample contains 80% mass-10 atoms and 20% mass-11 atoms. Calculate Aᵣ.',steps:['Weight the first isotope: 10 × 80 = 800.','Weight the second: 11 × 20 = 220.','Add and divide by 100: (800 + 220) / 100 = 10.2.','Check: 10.2 is between 10 and 11 and closer to the more abundant mass-10 isotope.'],answer:'Aᵣ = 10.2 (no unit).',why:'A simple average, 10.5, would incorrectly assume equal abundance.'},
        {q:'Two isotopes have masses 20 and 22. Their average is 20.4. Find the percentage of mass-22 atoms.',steps:['Let x be the fraction of mass-22 atoms. The other fraction is 1 − x.','20(1 − x) + 22x = 20.4.','20 + 2x = 20.4, so x = 0.2.','Convert to percentage: 0.2 × 100 = 20%.'],answer:'20% mass-22 and 80% mass-20.',why:'A mean nearer 20 than 22 tells you that mass-20 must be more abundant.'}
      ],
      traps:[['Isotopes react differently because their masses differ.','Explain similar chemical properties using the same outer-shell electron arrangement.'],['Relative atomic mass has unit g.','It is a relative value with no unit.']],
      recall:['Define isotope using proton and neutron numbers.','Explain the difference between mass number and relative atomic mass.','Calculate the mean for 60% mass-24 and 40% mass-26.'],
      answerFrame:'Same proton number and electron arrangement → same outer-shell electrons → very similar chemical properties.'
    },
    '2.3': {
      goal:'Use electron arrangements to connect atoms, ions, periods, groups and bonding.',
      context:'An arrangement of 2,8,7 is more useful than just “17 electrons”: it shows three occupied shells and seven outer electrons, which helps predict a −1 ion.',
      foundation:'For neutral atoms of the first 20 elements, fill shells using 2,8,8,2. This is an introductory model for these elements, not a universal capacity rule for all atoms.',
      bridge:'The seats-in-rings picture helps with filling. Real shells represent electron energies, not physical tracks on which electrons circle like planets.',
      concepts:[
        ['Count first, then fill','A neutral atom has Z electrons. Fill 2 in the first shell, up to 8 in the second, then up to 8 in the third for these atoms. Add the arrangement back up to check the total.'],
        ['Read Periodic Table clues','For an atom, the period is the number of occupied shells. In Groups I–VII, the group number gives the number of outer-shell electrons. Group 0 (also called 18) has a full outer shell; helium has 2, not 8.'],
        ['Recount for an ion','Sodium atom: 11 electrons → 2,8,1. Sodium ion Na⁺: 10 electrons → 2,8. Chlorine atom: 17 → 2,8,7; Cl⁻: 18 → 2,8,8. The atom’s place in the Periodic Table does not change when it becomes an ion.'],
        ['Same arrangement does not mean same element','Ne, Na⁺, Mg²⁺, F⁻ and O²⁻ all have 10 electrons. Their different proton numbers distinguish them. When comparing chemical properties of atoms, outer electrons matter; when identifying the element, protons matter.'],
        ['Read a formula accurately','In CH₃OH there are 1 carbon, 4 hydrogens and 1 oxygen: add hydrogen from both parts. A subscript only changes the symbol or bracket immediately before it. In Ca(OH)₂ there are 1 Ca, 2 O and 2 H.']
      ],
      examples:[
        {q:'An atom has arrangement 2,8,5. State its proton number, period and group.',steps:['It is neutral, so protons = electrons = 2 + 8 + 5 = 15.','There are three occupied shells, so period 3.','There are five outer electrons, so Group V (15).'],answer:'Proton number 15; period 3; Group V.',why:'The total, number of shells and last number answer three different questions.'},
        {q:'Compare the electron arrangements of Mg²⁺ and O²⁻. Z(Mg)=12; Z(O)=8.',steps:['Mg²⁺ has 12 − 2 = 10 electrons.','O²⁻ has 8 + 2 = 10 electrons.','Both have arrangement 2,8, but Mg still has 12 protons and O has 8.'],answer:'Both are 2,8. They are different elements with the same number of electrons.',why:'Always apply the sign of the charge before arranging the electrons.'}
      ],
      traps:[['The period is the number of outer electrons.','Period counts occupied shells. Group gives outer electrons for main-group atoms.'],['A sodium ion is neon because it has 10 electrons.','Element identity depends on protons: Na⁺ still has 11.']],
      recall:['Write arrangements for Ca and Ca²⁺.','Why does helium have a full shell with only two electrons?','Count all the atoms in Mg(OH)₂.'],
      answerFrame:'Total electrons = [sum]; occupied shells = [period]; outer electrons = [main group]. For ions, adjust electrons before filling.'
    },
    '3.1': {
      goal:'Construct covalent diagrams, count shared pairs and explain simple molecular properties.',
      context:'Water boils without producing hydrogen and oxygen. The forces between water molecules are overcome; the strong covalent bonds within each molecule remain.',
      foundation:'A covalent bond is a shared pair of electrons between atoms. A pair means two electrons. Dots and crosses record which atom supplied an electron; all electrons are the same type of particle.',
      bridge:'Sharing headphones is only an analogy for a shared pair. A bond is held by electrostatic attraction between the shared electrons and the nuclei of the bonded atoms.',
      concepts:[
        ['Build a diagram in four passes','Count each atom’s outer electrons. Put one pair in each single bond, two pairs in each double bond and three pairs in each triple bond. Add remaining electrons as lone pairs. Check 2 electrons around each H and usually 8 around each other atom in these examples.'],
        ['Know the familiar patterns','H and halogens usually form 1 bond; O usually forms 2; N usually forms 3; C usually forms 4. H₂: 1 pair. O₂: 2 pairs. N₂: 3 pairs plus a lone pair on each N. CH₄: 4 single bonds. NH₃: 3 bonds plus 1 lone pair on N. H₂O: 2 bonds plus 2 lone pairs on O.'],
        ['Apply the same method to an unfamiliar molecule','Use a supplied displayed structure as your map. In H–C≡C–H, the triple bond has 3 pairs and the two C–H bonds add 2 more: 5 shared pairs = 10 bonding electrons. In H₂C=O, the double bond and two single bonds give 4 shared pairs; oxygen also has 2 lone pairs.'],
        ['Total electrons are not bonding electrons','NH₃ contains 7 + 3 = 10 total electrons. Its outer-shell electron total is 5 + 3 = 8. Only 6 are in its three shared pairs; the remaining outer pair is a lone pair on nitrogen. Read exactly which count is requested.'],
        ['Explain a molecular substance’s properties','Low melting/boiling points result from weak attractions between molecules, which need little energy to overcome. It normally does not conduct because there are no mobile ions or delocalised electrons. Some molecular substances react with water to produce ions, so read the stated conditions.']
      ],
      examples:[
        {q:'Describe the dot-and-cross diagram for CO₂.',steps:['Use the displayed structure O=C=O.','Each C=O double bond has two shared pairs, so there are four shared pairs altogether.','Each oxygen has two lone pairs; carbon has no lone pairs.','Check eight electrons around C and around each O. Total outer electrons: 4 + 6 + 6 = 16.'],answer:'Two double bonds, 8 bonding electrons in total, and 2 lone pairs on each oxygen.',why:'A double bond has four electrons, not two.'},
        {q:'Why does a simple molecular substance melt at a low temperature even though its covalent bonds are strong?',steps:['Distinguish bonds within a molecule from attractions between molecules.','Melting overcomes the weak attractions between molecules.','Only a small energy input is needed; the molecules themselves remain intact.'],answer:'Weak intermolecular attractions need little energy to overcome. The strong covalent bonds within the molecules are not broken during melting.',why:'“Weak covalent bonds” confuses two different attractions.'}
      ],
      traps:[['Nitrogen has three shared electrons in N₂.','It has three shared pairs: six shared electrons.'],['All covalent substances have low melting points.','Simple molecular substances often do; giant covalent structures are different.']],
      recall:['Draw NH₃ and label its lone pair.','Count shared pairs and bonding electrons in H–C≡C–H.','Explain how a simple molecule can have strong bonds but a low boiling point.'],
      answerFrame:'Weak forces between molecules require little energy to overcome. Strong covalent bonds within each molecule remain intact.'
    },
    '3.2': {
      goal:'Show electron transfer, balance ionic formulae and explain ionic properties.',
      context:'Solid salt contains charged ions yet does not conduct electricity. Having charge is only half the requirement: the charged particles must also be able to move.',
      foundation:'An ionic bond is a strong electrostatic attraction between oppositely charged ions. Electron transfer forms the ions; attraction between them is the bond. A lattice is a giant, repeating three-dimensional arrangement.',
      bridge:'Giving a token models transfer, but the transfer itself is not the ionic bond. State the strong attraction between the resulting opposite charges.',
      concepts:[
        ['Make and check the ions','Metal atoms usually lose outer electrons; non-metal atoms gain them. In MgCl₂, one Mg atom loses 2 electrons, and each of two Cl atoms gains 1. Mg²⁺ is 2,8 and each Cl⁻ is 2,8,8. All particles keep their proton numbers.'],
        ['Balance total charge, not the atomic numbers','For Al³⁺ and O²⁻, the smallest common total charge is 6. Use 2 Al³⁺ and 3 O²⁻: +6 − 6 = 0, giving Al₂O₃. Simplify ratios: Mg²⁺ and O²⁻ give MgO, not Mg₂O₂.'],
        ['Brackets keep a group of atoms together','Calcium is Ca²⁺ and phosphate is PO₄³⁻. Three calcium ions give +6; two phosphate ions give −6. The formula is Ca₃(PO₄)₂. The 2 multiplies the whole phosphate group: 2 P and 8 O.'],
        ['Dot-and-cross checklist for ions','Show the requested shells, complete the new outer shells, distinguish transferred electrons, put brackets around individual ions and add the correct charges. Draw the correct ratio of ions. Ions are separate, not overlapping as in a shared-pair diagram.'],
        ['Structure explains the properties','High melting point: strong electrostatic attractions in a giant ionic lattice require much energy to overcome. Solid: ions fixed, no conduction. Molten: mobile ions carry charge. Aqueous solution: mobile ions conduct if the compound dissolves; not every ionic compound is soluble.']
      ],
      examples:[
        {q:'Find the formula made from Mg²⁺ and N³⁻.',steps:['Use a common total charge of 6.','Three Mg²⁺ ions give +6; two N³⁻ ions give −6.','Write the lowest whole-number ratio: Mg₃N₂.'],answer:'Mg₃N₂, because 3(+2) + 2(−3) = 0.',why:'The formula shows an ion ratio in a lattice, not a little molecule.'},
        {q:'A certain ionic compound is insoluble in water. How can it conduct electricity?',steps:['Solid ions cannot move freely, so the solid cannot conduct.','Dissolving is not available because the question says insoluble.','Melt it: its ions can now move and carry charge.'],answer:'When molten, because its ions are free to move and carry charge.',why:'Do not give “dissolve it” when the question rules out solubility.'}
      ],
      traps:[['Molten salt conducts because electrons become free.','Mobile ions carry the current in a molten ionic compound.'],['Ionic bonding is electron transfer.','Transfer forms ions; the bond is strong electrostatic attraction between opposite ions.']],
      recall:['Balance Ca²⁺ and P³⁻.','Explain why solid and molten NaCl conduct differently.','List the checks needed for a MgCl₂ ion diagram.'],
      answerFrame:'A giant lattice of oppositely charged ions has strong electrostatic attractions. [Property] follows because [energy required / ions can or cannot move].'
    },
    '3.3': {
      goal:'Infer a structure from properties and explain diamond, graphite, silica and metals.',
      context:'Diamond and graphite contain only carbon, but one cuts glass and the other slides across paper. Composition tells you what atoms are present; structure tells you how they connect.',
      foundation:'Giant means bonding extends through a large network rather than ending at separate small molecules. Delocalised electrons are electrons able to move through a structure rather than staying in a single bond.',
      bridge:'A welded fence models a continuous network, but use real bonding in the explanation. Metallic structures and covalent networks are held together in different ways.',
      concepts:[
        ['Diamond: four bonds in three dimensions','Each carbon has four strong covalent bonds to other carbons. The rigid 3D network makes diamond hard; many strong bonds require much energy to overcome. No mobile charged particles are available for electrical conduction.'],
        ['Graphite: separate the layer facts','Each carbon bonds to three others in sheets. Strong covalent bonds within sheets give high thermal stability. Weak attractions between sheets allow sliding and lubrication. Delocalised electrons within the layers carry electrical charge. These are three different explanations.'],
        ['Silicon dioxide is a network','SiO₂ is giant covalent, not a collection of little O=Si=O molecules. Each silicon bonds to four oxygens; each oxygen bridges two silicons. The overall ratio is Si:O = 1:2. Strong covalent bonds throughout explain its hardness and high melting point.'],
        ['Metals: ions and mobile electrons','Metallic bonding is strong electrostatic attraction between a lattice of positive metal ions and delocalised electrons. Electrons carry current through the solid. Layers can slide while the attraction is maintained, so metals are malleable. Do not say solid metal ions carry the current.'],
        ['Use more than one property','Conducts as a solid and liquid: often metallic. Does not conduct as solid but does when molten: ionic. Low melting point and non-conducting: often simple molecular. Very high melting point and non-conducting: often giant covalent. Graphite is a giant covalent conductor, so a single clue is rarely enough.']
      ],
      examples:[
        {q:'Why is graphite a lubricant and an electrical conductor?',steps:['For lubrication, identify the layers and the weak attractions between them.','The layers can slide over one another.','For conduction, name the mobile charge carrier: delocalised electrons.'],answer:'Weak attractions between layers allow sliding. Delocalised electrons can move along the layers and carry charge.',why:'Delocalised electrons explain conduction; weak forces between layers explain sliding.'},
        {q:'Substance P does not conduct as a solid but conducts when molten. Q conducts in both states. Identify their likely structures.',steps:['P gains mobile charge carriers on melting: ions were fixed, then become mobile.','P is likely ionic.','Q already has mobile electrons in the solid and remains conducting as liquid: likely metallic.'],answer:'P: giant ionic lattice. Q: metallic structure.',why:'State the evidence and its explanation, rather than just naming the structure.'}
      ],
      traps:[['Graphite has weak covalent bonds.','It has strong bonds within layers and weak attractions between layers.'],['A metal is positive ions and negative ions.','It is positive metal ions and delocalised electrons.']],
      recall:['Explain why diamond is hard but graphite is soft.','How many Si atoms bond to each O in SiO₂?','Explain metal conductivity and malleability separately.'],
      answerFrame:'[Structure] contains [bond/force or charge carrier]. Because [energy or movement], it has [property].'
    }
  }
};
