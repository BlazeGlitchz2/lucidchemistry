/* Page-specific methods for the supplied 72-page worksheet. */
(() => {
  'use strict';
  const methods = {
    shared: {
      title:'Which compound has shared electron pairs?',
      clue:'Use when the question asks for covalent bonding or shared pairs.',
      definition:'A covalent bond is a shared pair of electrons between atoms.',
      steps:[
        'Identify the elements in each formula. CH₄ contains carbon and hydrogen; PbBr₂ contains lead and bromine; NaCl contains sodium and chlorine.',
        'Find those elements in the periodic table. Carbon, hydrogen, bromine and chlorine are non-metals. Lead and sodium are metals.',
        'For these examples, non-metal atoms share electron pairs in methane. The metal–non-metal compounds contain oppositely charged ions held by ionic attraction.',
        'Check each option. Methane is the one with shared electron pairs. Each C–H bond has one shared pair.'
      ],
      example:'CH₄: 4 shared pairs (8 bonding electrons). NaCl: Na⁺ and Cl⁻ ions. PbBr₂: Pb²⁺ and Br⁻ ions in a 1:2 ratio.',
      caution:'These are useful starting patterns, not rules for every compound. A compound with a polyatomic ion can contain both ionic and covalent bonding; for example NaOH contains covalent O–H bonds within OH⁻.',
      lesson:'3.1', table:true
    },
    atoms: {
      title:'Find protons, neutrons and electrons', clue:'Use a particle table, nuclear symbol or ion charge.',
      definition:'Atomic number = protons. Mass number = protons + neutrons. Charge = protons − electrons.',
      steps:['Read atomic number to find protons and identify the element.','Subtract protons from mass number to find neutrons.','For a neutral atom, electrons = protons. For an ion, electrons = protons − signed charge.','Check the charge from protons minus electrons. Hydrogen-1 has one proton and no neutrons.'],
      example:'²⁷₁₃Al³⁺ has 13 protons, 14 neutrons and 10 electrons.',caution:'Changing electrons changes charge; changing protons changes the element.',lesson:'2.1'
    },
    isotope: {
      title:'Recognise isotopes and compare their properties', clue:'Use when atoms of the same element have different masses.',
      definition:'Isotopes are atoms of the same element with the same number of protons and different numbers of neutrons.',
      steps:['Compare proton numbers first: they must be the same.','Compare neutron numbers or mass numbers: they must differ.','For neutral isotopes, the electron arrangements are the same, so their chemical properties are similar.','When calculating neutrons, subtract atomic number from mass number.'],
      example:'Chlorine-35 and chlorine-37 both have 17 protons; they have 18 and 20 neutrons respectively.',caution:'Different numbers of electrons alone make ions, not different isotopes.',lesson:'2.2'
    },
    ar: {
      title:'Relative atomic mass and isotope abundance', clue:'Use a weighted mean when isotope abundances are given.',
      definition:'Relative atomic mass is the weighted mean mass of an atom compared with one-twelfth of the mass of a carbon-12 atom.',
      steps:['Multiply each isotope mass by its percentage abundance.','Add the products and divide by 100.','If an abundance is missing, subtract the known percentage from 100.'],
      example:'75% chlorine-35 and 25% chlorine-37: (35 × 75 + 37 × 25) ÷ 100 = 35.5.',caution:'The relative atomic mass is an average; it need not be a whole number.',lesson:'2.2'
    },
    shells: {
      title:'Electron shells, groups and ions', clue:'Use when a table gives atomic number, arrangement, group or charge.',
      definition:'Electronic configuration is the arrangement of electrons in shells.',
      steps:['For a neutral atom, start with electrons = atomic number. Adjust the count for an ion.','For the first 20 elements in this model, fill shells as 2, then 8, then 8, then the fourth shell.','The period gives the number of occupied shells for these atoms. For main-group elements, outer electrons relate to the group.','The periodic table here labels groups 1–18: groups 13–17 correspond to Cambridge groups III–VII, and group 18 to group 0.'],
      example:'Na atom: 11 electrons, 2,8,1. Na⁺: 10 electrons, 2,8.',caution:'Hydrogen is a non-metal despite its position above group 1 metals. Transition metals need different treatment.',lesson:'2.3', table:true
    },
    formula: {
      title:'Write a formula from ion charges', clue:'Use when the compound must have zero overall charge.',
      definition:'An ionic formula gives the simplest whole-number ratio of ions with total charge zero.',
      steps:['Write each ion with its charge. Keep a polyatomic ion together.','Choose the smallest numbers that make positive and negative charge totals equal.','Use brackets if more than one polyatomic ion is needed.','Check the total charge is zero and use the smallest whole-number ratio.'],
      example:'Pb²⁺ + 2Br⁻ gives PbBr₂. Three Ca²⁺ and two PO₄³⁻ give Ca₃(PO₄)₂.',caution:'Subscripts give ion ratios; they are not the charges themselves.',lesson:'3.2'
    },
    count: {
      title:'Count atoms, bonds and electrons', clue:'Use formulas, displayed structures and bond lines carefully.',
      definition:'One single covalent bond is one shared pair of electrons; a double bond has two pairs and a triple bond has three.',
      steps:['Count atoms from the formula: a subscript belongs to the symbol immediately before it; brackets multiply every atom inside.','For a displayed molecule, count one pair for each single line, two for each double line, and three for each triple line.','Multiply shared pairs by two to find bonding electrons. Do not count lone-pair electrons as bonding electrons.','For the total electrons in a neutral molecule, add the atomic numbers of all its atoms. This includes inner-shell and non-bonding electrons.'],
      example:'H–C≡C–H has 5 shared pairs, or 10 bonding electrons. Neutral NH₃ has 7 + 3 × 1 = 10 total electrons.',caution:'Bonding electrons and total electrons are different counts. A pair contains two electrons.',lesson:'3.1'
    },
    covdiagram: {
      title:'Draw or choose a covalent dot-and-cross diagram', clue:'Use for molecules such as CH₄, NH₃, N₂, H₂S, NF₃ or PH₃.',
      definition:'Each shared pair is attracted to the nuclei of both bonded atoms.',
      steps:['Count each atom’s outer electrons using its group; hydrogen has one.','Use the given molecular structure. Put one shared pair in each single bond, two in each double bond and three in each triple bond.','Place the remaining outer electrons as lone pairs. Use dots and crosses to show which atom supplied each electron.','Check the total number of outer electrons. In the common examples here, each H has two and C, N, O and halogens usually have eight around them.'],
      example:'NH₃: nitrogen makes three shared pairs with H and has one lone pair. N₂ has three shared pairs and one lone pair on each N.',caution:'The octet is a useful check for these examples, not a universal rule for every compound.',lesson:'3.1'
    },
    iondiagram: {
      title:'Draw ions and ionic electron arrangements', clue:'Use for KF, KI, MgS, MgO, MgF₂ or Al₂O₃.',
      definition:'An ion is a charged atom or group of atoms formed by gaining or losing electrons.',
      steps:['Find the charge of each ion and the simplest ratio needed for total charge zero.','Count electrons lost by the metal and gained by the non-metal. Transfer the correct number of electrons in the diagram.','Draw each ion separately in brackets, label its charge and show the requested outer electrons using dots and crosses.','Count transferred electrons once on their receiving ions, and check the ratio matches the formula.'],
      example:'Mg loses two electrons to form Mg²⁺; each Cl gains one to form two Cl⁻ ions, giving MgCl₂.',caution:'Electron transfer forms the ions. The ionic bond is the electrostatic attraction between oppositely charged ions.',lesson:'3.2'
    },
    ionic: {
      title:'Explain an ionic lattice and conductivity', clue:'Use for NaCl, KBr, PbF₂ and other ionic compounds.',
      definition:'An ionic bond is the strong electrostatic attraction between oppositely charged ions.',
      steps:['Describe the solid as a giant regular lattice of positive and negative ions.','For melting point, state that many strong attractions between opposite ions require much energy to overcome.','For a solid, ions are fixed and cannot carry charge through the lattice.','When molten, or dissolved in water if soluble, ions can move and carry charge.'],
      example:'Solid NaCl does not conduct. Molten NaCl conducts because Na⁺ and Cl⁻ ions can move.',caution:'Do not say that mobile electrons conduct electricity in molten ionic compounds.',lesson:'3.2'
    },
    molecular: {
      title:'Explain the properties of simple molecules', clue:'Use for substances such as CO₂, CF₄, H₂S, N₂H₄ and SCl₂.',
      definition:'Intermolecular forces are attractions between separate molecules.',
      steps:['Name the structure: small covalent molecules.','For a low melting or boiling point, identify the weak attractions between molecules.','Relatively little energy is needed to overcome these intermolecular forces.','For electrical conductivity, identify the absence of mobile charged particles.'],
      example:'CF₄ has a low boiling point because weak forces between its molecules need little energy to overcome.',caution:'Do not call the covalent bonds inside the molecules weak; melting or boiling normally overcomes intermolecular forces.',lesson:'3.1'
    },
    giant: {
      title:'Diamond, graphite and silicon dioxide', clue:'Use when a question asks about giant covalent structures.',
      definition:'A giant covalent structure is a continuous network of atoms joined by covalent bonds.',
      steps:['Identify the structure, then connect its bonds or mobile particles to the property.','Diamond: each carbon bonds to four other carbons; the strong 3D network is hard.','Graphite: each carbon bonds to three others in layers; weak attractions let layers slide and delocalised electrons conduct.','SiO₂: each silicon bonds to four oxygens, and each oxygen to two silicons. Many strong bonds explain its high melting point.'],
      example:'Graphite conducts because delocalised electrons can move through its layers; diamond has no mobile charged particles.',caution:'Graphite has strong covalent bonds within its layers and weak attractions between layers.',lesson:'3.3'
    },
    metal: {
      title:'Explain metallic bonding and metal properties', clue:'Use for magnesium, aluminium, copper and other metals.',
      definition:'Metallic bonding is the strong electrostatic attraction between positive metal ions and delocalised electrons.',
      steps:['Describe a lattice of positive metal ions with delocalised electrons.','Conductivity: the delocalised electrons move and carry charge.','Malleability: layers of ions can slide while attraction to the delocalised electrons remains.','For melting, many strong attractions must be overcome.'],
      example:'Solid magnesium conducts because its delocalised electrons are mobile.',caution:'In a solid metal, ions are fixed in the lattice; electrons carry the charge.',lesson:'3.3'
    },
    compare: {
      title:'Compare structures using properties', clue:'Use tables of melting point and conductivity in different states.',
      definition:'A property is evidence for a structure; use all the evidence given.',
      steps:['Compare solid and molten conductivity. An ionic solid has fixed ions but conducts when molten; metals generally conduct in both states.','A low melting point and no conductivity often indicate a simple molecular substance.','A high melting point and no conductivity often indicate a giant covalent structure. Graphite is a conducting exception.','Explain a comparison by naming the force broken or the mobile charge carrier in each substance.'],
      example:'PbF₂ is giant ionic and conducts when molten. CF₄ is simple molecular and does not conduct; its intermolecular forces are weak.',caution:'Conductivity of an aqueous solution requires the substance to dissolve and produce mobile ions.',lesson:'3.3'
    },
    state: {
      title:'Identify the state and particle arrangement', clue:'Use melting and boiling points or a particle diagram.',
      definition:'A solid has fixed shape and volume; a liquid has fixed volume; a gas has neither fixed shape nor fixed volume.',
      steps:['Below melting point the substance is solid; between melting and boiling points it is liquid; above boiling point it is gas. Use the stated pressure.','Solid: particles close together, usually regular, vibrating about fixed positions.','Liquid: particles close together, irregular and able to move past each other. Gas: particles far apart, moving randomly.','Gas is easily compressed because there is space between particles. The particles themselves do not shrink.'],
      example:'Melting point −10°C, boiling point 80°C: at 25°C the substance is liquid.',caution:'At the melting or boiling point of a pure substance, two states may coexist.',lesson:'1.1'
    },
    changes: {
      title:'Name changes of state', clue:'Read the starting and ending state in the arrow.',
      definition:'Melting is solid → liquid; freezing is liquid → solid; boiling and evaporation are liquid → gas; condensation is gas → liquid.',
      steps:['Read the arrow direction before choosing the name.','Melting, boiling and evaporation absorb energy. Freezing and condensation release energy.','Evaporation occurs at the surface below boiling point; boiling occurs throughout the liquid at its boiling point.','Sublimation is solid → gas without passing through the liquid state.'],
      example:'Gas → liquid is condensation. Liquid → solid is freezing.',caution:'The particles do not become a new substance during a change of state.',lesson:'1.2'
    },
    graph: {
      title:'Read heating and cooling curves', clue:'Use a temperature–time graph with slopes and flat sections.',
      definition:'For a pure substance at constant pressure, temperature stays constant during a change of state.',
      steps:['Read whether the graph shows heating or cooling. A sloping section shows temperature changing within a state.','A flat section shows a state change; read its temperature from the vertical axis.','During melting or boiling, energy is absorbed to overcome attractions. Temperature and average kinetic energy stay constant on the plateau.','During freezing or condensation, energy is released as attractions form.'],
      example:'A heating curve that is flat at 80°C while solid becomes liquid shows a melting point of 80°C.',caution:'A flat line does not mean particles stop moving or that energy transfer has stopped.',lesson:'1.2'
    },
    gas: {
      title:'Explain a heated or cooled gas', clue:'Check whether pressure or volume is kept constant.',
      definition:'Temperature is related to the average kinetic energy of particles.',
      steps:['On heating, particles gain average kinetic energy and move faster.','At constant pressure, a gas can expand: its particles become farther apart on average.','In a sealed rigid container, volume stays fixed. Faster particles hit the walls more often and with greater force, increasing pressure.','Reverse the temperature and motion changes for cooling.'],
      example:'A gas heated in a sealed rigid container increases in pressure; it does not expand.',caution:'Do not state that the particles get bigger, or that every heated gas expands.',lesson:'1.2'
    },
    diffusion: {
      title:'Explain diffusion and the white-ring experiment', clue:'Use for spreading gases or dissolved particles.',
      definition:'Diffusion is the net movement of particles from higher to lower concentration due to random motion.',
      steps:['State that particles move randomly in all directions, with overall movement from higher to lower concentration.','At the same temperature, the gas with lower relative molecular mass generally diffuses faster.','In the NH₃/HCl tube, NH₃ has Mr 17 and HCl has Mr 36.5. NH₃ travels farther before they react.','The white ammonium chloride ring forms nearer the slower HCl end.'],
      example:'NH₃ diffuses faster than HCl at the same temperature; the ring forms closer to HCl.',caution:'At uniform concentration particles still move, but there is no net diffusion.',lesson:'1.3'
    },
    dissolving: {
      title:'Distinguish dissolving, diffusion and reaction', clue:'Use when colour spreads from a crystal or gases meet.',
      definition:'Dissolving disperses solute particles in a solvent; diffusion is net spreading due to random motion.',
      steps:['First identify whether a solute forms a solution in a solvent.','Then identify any spreading from higher to lower concentration as diffusion.','If substances change into new substances, a chemical reaction has occurred.','Two or more of these processes can occur in the same experiment.'],
      example:'A soluble coloured crystal dissolves in water; its dissolved particles then diffuse through the water.',caution:'Diffusion explains how NH₃ and HCl meet; their reaction forms the white solid.',lesson:'1.3'
    },
    equation: {
      title:'Read or balance a reaction equation', clue:'Use when ions or substances react to form a compound.',
      definition:'A balanced equation has the same number of each type of atom on both sides.',
      steps:['Write the correct chemical formulas first. Do not change their subscripts to balance the equation.','Count each element on both sides.','Add coefficients in front of formulas until each atom count matches.','Reduce coefficients to the smallest whole-number ratio.'],
      example:'2Mg + O₂ → 2MgO: each side contains two Mg atoms and two O atoms.',caution:'A coefficient multiplies the whole formula; a subscript belongs to the formula itself.',lesson:'3.2'
    }
  };
  // Page numbers are the PDF viewer's page numbers. Methods apply to the questions on each page.
  const pages = {
    1:['Methane, hydrogen-1 and covalent bonding',['shared','covdiagram','atoms','count']],
    2:['Hydrogen-1, relative atomic mass and magnesium oxide',['atoms','ar','formula','iondiagram']],
    3:['Potassium fluoride ion diagrams',['formula','iondiagram','ionic']],
    4:['Isotopes and sodium chloride properties',['isotope','ionic','compare']],
    5:['Atomic identity, ion transfer, methane and formula counts',['atoms','iondiagram','shared','count','isotope']],
    6:['Shared pairs: methane, lead bromide and sodium chloride; particle counts',['shared','atoms','isotope']],
    7:['Ion data, graphite, formula counts and isotopes',['atoms','giant','count','isotope']],
    8:['Isotopes, diamond and graphite',['isotope','giant']],
    9:['Identify structures from conductivity',['compare','giant','ionic']],
    10:['Atoms, ions and isotopes in tables',['atoms','isotope','shells']],
    11:['Nitrogen dot-and-cross diagrams and particle tables',['covdiagram','count','atoms','shells']],
    12:['Carbon dioxide and silicon dioxide properties',['molecular','giant','compare']],
    13:['Subatomic particles, bromine isotopes and silicon dioxide',['atoms','isotope','giant']],
    14:['Atomic number, mass number and carbon isotopes',['atoms','isotope']],
    15:['Isotopes, carbon structures and covalent diagrams',['isotope','giant','covdiagram']],
    16:['Hydrogen-1, ion counts and ionic formulae',['atoms','formula','iondiagram']],
    17:['Carbon and silicon particles, shells and silicon structure',['atoms','isotope','shells','giant']],
    18:['Magnesium bonding and magnesium sulfide ions',['metal','formula','iondiagram','ionic']],
    19:['Metallic magnesium and ionic conductivity',['metal','ionic','iondiagram']],
    20:['Isotopes, electron arrangements and ions',['isotope','atoms','shells']],
    21:['Isotope identity and ion arrangements',['isotope','atoms','shells']],
    22:['Atoms, ions, electron arrangements and periodic groups',['atoms','shells','isotope','count']],
    23:['Isotope properties and electronic configuration',['isotope','shells','atoms']],
    24:['Isotopes, ions and periodic table clues',['isotope','atoms','shells']],
    25:['Particle counts, isotope identity and electron arrangement',['atoms','isotope','shells']],
    26:['Heated gas, melting plateau and gas diffusion',['gas','graph','diffusion']],
    27:['Molten ions and the white-ring diffusion experiment',['ionic','diffusion']],
    28:['Melting on a heating curve and gas in a rigid container',['graph','gas']],
    29:['Cooling curves and heated gas conditions',['graph','changes','gas']],
    30:['Dissolving, diffusion and a heated gas balloon',['dissolving','diffusion','gas']],
    31:['Freezing curves, diffusion and energy changes',['graph','diffusion','changes']],
    32:['Evaporation versus boiling and the ammonia tube',['changes','diffusion']],
    33:['State-change energy, melting and diffusion rates',['changes','graph','diffusion']],
    34:['Heating-curve melting and water separation terms',['graph','changes']],
    35:['State-change names and movement in liquids',['changes','state']],
    36:['Solid particles, molecular diagrams and cooling tin',['state','covdiagram','graph']],
    37:['States of matter and evaporation',['state','changes']],
    38:['Dissolving, diffusion and reaction',['dissolving','diffusion']],
    39:['Particle spacing, evaporation and diffusion',['state','changes','diffusion']],
    40:['Particle spacing and state-change arrows',['state','changes']],
    41:['Compression and descriptions of states',['state','gas']],
    42:['Diffusion and the ammonia–hydrogen chloride tube',['diffusion','dissolving']],
    43:['Bonding from electron arrangements; forces and metallic structure',['shells','shared','molecular','metal']],
    44:['Metallic structures, single bonds and ion formation',['metal','covdiagram','iondiagram','compare']],
    45:['Covalent diagrams and identifying electron arrangements',['covdiagram','count','shells']],
    46:['Methanal diagrams, metals and molecular forces',['covdiagram','metal','molecular','compare']],
    47:['Ions, diamond, shared-pair counts and metals',['iondiagram','giant','count','metal']],
    48:['Diamond and graphite, silicon dioxide and ionic formulae',['giant','formula','metal']],
    49:['Giant covalent structures and physical properties',['giant','compare']],
    50:['Carbon dioxide diagrams and silicon dioxide structure',['covdiagram','giant','compare']],
    51:['Graphite and metallic bonding',['giant','metal']],
    52:['Ion formation, metals and giant covalent structures',['iondiagram','metal','giant','equation']],
    53:['Iron sulfide formulae, shared electrons and melting points',['formula','count','molecular','ionic','compare']],
    54:['Methane covalent bonding and ionic lattice definitions',['shared','covdiagram','ionic','metal']],
    55:['Silicon dioxide, calcium phosphate and metallic bonding',['giant','formula','ionic','metal']],
    56:['Potassium iodide and electron transfer',['formula','iondiagram','ionic']],
    57:['Hydrazine diagrams and CO₂ versus SiO₂',['covdiagram','molecular','giant','compare']],
    58:['Hydrazine and classifying substances from properties',['covdiagram','compare']],
    59:['Metallic bonding, carbon allotropes and CO₂',['metal','giant','covdiagram']],
    60:['Compare silicon dioxide and sodium chloride',['giant','ionic','compare']],
    61:['Explain CO₂ gas and SiO₂ solid',['molecular','giant','compare']],
    62:['Magnesium sulfide ions and conductivity',['formula','iondiagram','ionic']],
    63:['Nitrosyl chloride diagram and boiling point',['covdiagram','count','molecular']],
    64:['Aluminium oxide, lithium chloride and sulfur chloride diagrams',['iondiagram','ionic','covdiagram','molecular']],
    65:['Compare lithium chloride and sulfur chloride melting points',['ionic','molecular','compare','giant']],
    66:['Potassium bromide, conductivity and ethanol',['ionic','compare','covdiagram']],
    67:['Nitrogen trifluoride and sodium chloride ions',['covdiagram','shared','ionic','atoms','shells']],
    68:['Hydrogen sulfide diagram and boiling point',['covdiagram','molecular']],
    69:['Ethyne, carbon structures and phosphorus molecules',['covdiagram','count','giant','molecular']],
    70:['Phosphine, magnesium and magnesium oxide',['covdiagram','metal','formula','iondiagram']],
    71:['Magnesium oxide, fluorine and fluoride compounds',['ionic','covdiagram','compare','formula']],
    72:['Compare tetrafluoromethane and lead(II) fluoride',['compare','formula','ionic','molecular','shared']]
  };
  const pageNotes = [
    '',
    'Hydrogen-1 has one proton and no neutrons. In methane, carbon forms four C–H bonds: four shared pairs.',
    'Use the carbon-12 standard for relative atomic mass. Magnesium and oxygen form Mg²⁺ and O²⁻, so the formula is MgO.',
    'Potassium loses one electron and fluorine gains one. Draw K⁺ and F⁻ separately, with brackets and charges.',
    'Compare isotopes using proton and neutron counts. In NaCl, ions are fixed in the solid but can move when molten.',
    'Use proton number to identify an element, then check electron count for charge. Count each atom in a formula using its subscript.',
    'For the shared-pair question, methane is covalent. Lead(II) bromide and sodium chloride are ionic.',
    'Graphite layers slide because attractions between the layers are weak. Use proton and electron counts to identify each ion.',
    'Diamond and graphite are both giant covalent forms of carbon: each carbon bonds to four neighbours in diamond and three in graphite.',
    'Use all the conductivity and solubility evidence. Graphite conducts as a solid; diamond does not.',
    'Atoms with the same proton number are the same element. A different neutron number gives a different isotope; electron differences change charge.',
    'N₂ has a triple bond: three shared pairs. Each nitrogen also has one lone pair.',
    'CO₂ consists of small molecules; SiO₂ is a giant covalent network. Their different forces explain their different melting points.',
    'Bromine isotopes have the same number of protons and different numbers of neutrons. Their neutral atoms have the same electron arrangement.',
    'Read atomic number as protons and mass number as protons plus neutrons. Calculate neutrons by subtraction.',
    'Carbon allotropes contain the same element in different structures. For CO₂, draw O=C=O with two lone pairs on each oxygen.',
    'MgF₂ contains one Mg²⁺ and two F⁻ ions. Sr²⁺ and P³⁻ combine in a 3:2 ratio to give Sr₃P₂.',
    'Use proton and neutron numbers for isotope tables. Silicon has a giant covalent structure with many strong bonds.',
    'Magnesium has positive metal ions and delocalised electrons. MgS contains Mg²⁺ and S²⁻ ions.',
    'Solid MgS cannot conduct because its ions are fixed. When molten, its ions can move and carry charge.',
    'An atom with 7 protons has 2,5 electrons; one with 15 has 2,8,5. They have the same outer-shell count but different numbers of shells.',
    'A potassium-39 ion K⁺ has 19 protons, 20 neutrons and 18 electrons. For the diagram question, count the electrons actually shown before identifying the particle.',
    'Neutral isotopes have the same outer-shell electrons and similar chemical properties. NH₃ has 7 + 3 × 1 = 10 electrons in total.',
    'Fluorine-19 has 9 protons, 10 neutrons and 9 electrons when neutral. Na⁺ has 11 protons and 10 electrons.',
    'The chlorine isotopes shown have 17 protons and 18 or 20 neutrons. They are the same element because their proton numbers match.',
    'A caesium atom forms Cs⁺ by losing one electron. Neutral isotopes have similar chemistry because their electron arrangements match.',
    'At constant pressure, a heated gas moves faster and expands. On a melting plateau, energy overcomes attractions while temperature stays constant.',
    'Molten ionic particles are mobile. In the diffusion tube, lighter NH₃ travels farther, so the reaction ring is nearer the heavier gas.',
    'Read melting temperature from the flat section. In a heated rigid container, faster particle collisions increase gas pressure.',
    'On a cooling curve, identify the plateau before naming the change. Check whether the gas question fixes pressure or volume.',
    'Dissolving and diffusion are separate processes. A heated flexible balloon can expand as its gas particles move faster.',
    'Freezing releases energy. At the same temperature, compare gas diffusion rates using relative molecular masses.',
    'Evaporation happens at the surface below boiling point. Ammonia diffuses farther than hydrogen chloride in the same time.',
    'During a melting plateau, energy is absorbed but temperature stays constant. CH₄ has a lower Mr than C₂H₆ and diffuses faster at the same temperature.',
    'The first horizontal section on heating a pure solid is melting. Evaporation changes liquid to gas; condensation changes gas to liquid.',
    'Read every change-of-state arrow from its starting state. Liquid particles remain close together but move past each other.',
    'Solid particles vibrate about fixed positions. Use the cooling curve to distinguish cooling within a state from a state-change plateau.',
    'Evaporation from tea occurs at the liquid surface; it can happen below the boiling point.',
    'A solute dissolves in a solvent; its particles then diffuse through the solution. A chemical reaction forms new substances.',
    'Heating changes particle motion and sometimes spacing. Diffusion is net spreading from higher to lower concentration.',
    'Match each arrow to its start and end state. Gas particles are far apart; liquid particles are close and can move past each other.',
    'Gas is easier to compress because there are large spaces between its particles. Solid particles are already close together.',
    'NH₃ travels farther than HCl at the same temperature, so the white ammonium chloride ring is nearer the HCl end.',
    'In the first electron-arrangement question, X is silicon and Y is chlorine. They form a covalent compound; W is a metal and Z has a full outer shell.',
    'For metal P and non-metal Q, electrons transfer from P to Q to form ions. Metallic conduction uses delocalised electrons.',
    'In the ethanoic acid diagram, check each bond and oxygen lone pair against the displayed structure. Each shared pair has two electrons.',
    'Methanal has two C–H single bonds and one C=O double bond: four shared pairs. Oxygen has two lone pairs.',
    'Count shared pairs from the bond lines, then multiply by two for bonding electrons. Diamond carbon atoms each bond to four others.',
    'Diamond has four covalent bonds per carbon; graphite has three per carbon. Balance ion charges before writing a formula.',
    'Diamond and SiO₂ have high melting points because many strong covalent bonds in their giant networks must be overcome.',
    'In CO₂ draw O=C=O. SiO₂ is a giant covalent network, not separate CO₂-like molecules.',
    'Graphite is slippery because layers can slide. Metals conduct because delocalised electrons move.',
    'A metal forms positive ions by losing electrons. In SiO₂, each silicon bonds to four oxygens and each oxygen to two silicons.',
    'Fe²⁺ and S²⁻ give FeS; Fe³⁺ and S²⁻ give Fe₂S₃. Count bonding electrons as two per shared pair.',
    'Methane has four shared C–H pairs: hydrogen has two electrons in its shell and carbon has eight around it.',
    'Calcium phosphate has Ca²⁺ and PO₄³⁻ ions, so its formula is Ca₃(PO₄)₂. Metals contain positive ions and delocalised electrons.',
    'In KI, potassium transfers one electron to iodine, forming K⁺ and I⁻ ions.',
    'Hydrazine has an N–N single bond; each nitrogen also has two N–H bonds and one lone pair. Compare CO₂ molecules with the SiO₂ network.',
    'For the property table, compare solid and molten conductivity as well as melting point and solubility.',
    'Metallic bonding is attraction between positive ions and delocalised electrons. CO₂ has two C=O double bonds.',
    'SiO₂ and NaCl are both giant structures, but SiO₂ is covalent and NaCl is ionic. Name the forces and mobile particles for each.',
    'CO₂ is simple molecular with weak intermolecular forces. SiO₂ has a giant network of strong covalent bonds.',
    'MgS has Mg²⁺ and S²⁻ in a 1:1 ratio. Its ions conduct only when they are free to move.',
    'For NOCl use the displayed O=N–Cl structure: the double bond has two shared pairs and the single bond has one.',
    'Al₂O₃ has two Al³⁺ ions for every three O²⁻ ions. LiCl is ionic; SCl₂ is made of covalent molecules.',
    'LiCl has strong attractions between ions. SCl₂ has weak intermolecular forces between molecules, so it melts at a lower temperature.',
    'KBr is a giant ionic lattice. Solid ions are fixed, but molten ions move. ICl is simple molecular with weaker intermolecular forces.',
    'In NF₃, nitrogen has three shared pairs and one lone pair. Na⁺ has the same electron arrangement as neon, 2,8.',
    'H₂S has two S–H shared pairs and two lone pairs on sulfur. Its low boiling point is due to weak intermolecular forces.',
    'H–C≡C–H has five shared pairs and ten bonding electrons. P₄ is simple molecular; diamond and graphite are giant covalent.',
    'PH₃ has three P–H shared pairs and one lone pair on phosphorus. MgO contains Mg²⁺ and O²⁻.',
    'Molten MgO conducts through moving ions. F₂ has one shared pair, with three lone pairs on each fluorine.',
    'CF₄ has covalent molecules; PbF₂ has a giant ionic lattice. Molten PbF₂ conducts through moving ions; CF₄ has weak intermolecular forces.'
  ];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let page = 6;
  try { const saved=Number(localStorage.getItem('lucidWorksheetPage')); if(Number.isInteger(saved)&&saved>=1&&saved<=72)page=saved; } catch {}
  function methodCard(id, open) {
    const m=methods[id];
    const comparison=id==='shared'?`<div class="wg-compare" aria-label="Compare the three compounds"><div class="wg-compound"><strong>Methane · CH₄</strong><span>Carbon + hydrogen: non-metals</span><span class="wg-result">Covalent · 4 shared pairs</span></div><div class="wg-compound"><strong>Lead(II) bromide · PbBr₂</strong><span>Lead: metal · bromine: non-metal</span><span class="wg-result">Ionic · Pb²⁺ and 2Br⁻</span></div><div class="wg-compound"><strong>Sodium chloride · NaCl</strong><span>Sodium: metal · chlorine: non-metal</span><span class="wg-result">Ionic · Na⁺ and Cl⁻</span></div></div>`:'';
    return `<details class="wg-method" ${open?'open':''}><summary><span><strong>${esc(m.title)}</strong><small>${esc(m.clue)}</small></span><span class="wg-plus" aria-hidden="true">+</span></summary><div class="wg-method-body"><p class="wg-definition"><b>Definition:</b> ${esc(m.definition)}</p><h4>How to answer</h4><ol>${m.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><div class="wg-example"><b>Worked example</b><p>${esc(m.example)}</p>${comparison}</div><p class="wg-caution"><b>Check:</b> ${esc(m.caution)}</p><div class="wg-method-links"><button class="text-link" data-lesson="${m.lesson}">Open related lesson</button>${m.table?'<button class="text-link" data-view="periodic">Open periodic table</button>':''}</div></div></details>`;
  }
  function renderPage() {
    const [description,ids]=pages[page];
    return `<div class="wg-page-head" tabindex="-1" id="wg-page-heading"><span>PDF PAGE ${page} OF 72</span><h2>${esc(description)}</h2><p>Open the method that matches your question.</p></div><div class="wg-page-note"><b>For this page</b><p>${esc(pageNotes[page])}</p></div><div class="wg-method-list">${ids.map((id,i)=>methodCard(id,i===0)).join('')}</div><div class="wg-page-nav"><button class="btn light" data-wg-page="${page-1}" ${page===1?'disabled':''}>← Previous page</button><span>Page ${page} / 72</span><button class="btn light" data-wg-page="${page+1}" ${page===72?'disabled':''}>Next page →</button></div>`;
  }
  function render() {
    return `<div id="worksheet-guide-app" class="wg-app"><section class="wg-hero"><div><span class="wg-eyebrow">YOUR WORKSHEET · 72 PDF PAGES</span><h2>Find the method for your question.</h2><p>Choose the page in your PDF. Follow the steps and compare the worked example.</p></div><form id="wg-form" class="wg-finder"><label for="wg-page-input">PDF page number</label><div><input id="wg-page-input" type="number" min="1" max="72" step="1" required value="${page}"><button class="btn lime" type="submit">Open page</button></div><small id="wg-status" role="status">Use the PDF viewer’s page number.</small></form></section><div id="wg-page-content">${renderPage()}</div></div>`;
  }
  function show(n, focus=true) {
    if(!Number.isInteger(n)||n<1||n>72)return;
    page=n;try{localStorage.setItem('lucidWorksheetPage',String(page));}catch{}
    const root=document.getElementById('worksheet-guide-app');if(!root)return;
    root.querySelector('#wg-page-input').value=page;
    root.querySelector('#wg-status').textContent='Use the PDF viewer’s page number.';
    root.querySelector('#wg-page-content').innerHTML=renderPage();
    if(focus)root.querySelector('#wg-page-heading').focus({preventScroll:true});
  }
  document.addEventListener('submit',e=>{
    if(e.target.id!=='wg-form')return;
    e.preventDefault();const input=e.target.querySelector('#wg-page-input'),n=Number(input.value);
    if(!Number.isInteger(n)||n<1||n>72){e.target.querySelector('#wg-status').textContent='Enter a whole page number from 1 to 72.';input.focus();return;}
    show(n);
  });
  document.addEventListener('click',e=>{const button=e.target.closest('[data-wg-page]');if(button&&document.getElementById('worksheet-guide-app')?.contains(button))show(Number(button.dataset.wgPage));});
  window.CHEM_WORKSHEET=Object.freeze({render,openPage:show,pages,methods,pageNotes});
})();
