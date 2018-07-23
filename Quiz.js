// global variables
let correctAnswer;
let userAnswer;
let generateRandom;
let response;

const elementNamesArray = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen',
'fluorine', 'neon', 'sodium', 'magnesium', 'aluminum', 'silicon', 'phosphorus', 'sulfur', 'chlorine', 'argon',
'potassium', 'calcium', 'scandium', 'titanium', 'vanadium', 'chromium', 'manganese', 'iron', 'cobalt', 'nickel',
'copper', 'zinc', 'gallium', 'germanium', 'arsenic', 'selenium', 'bromine', 'krypton', 'rubidium', 'strontium',
'yttrium', 'zirconium', 'niobium', 'molybdenum', 'technetium', 'ruthenium', 'rhodium', 'palladium', 'silver',
'cadmium', 'indium', 'tin', 'antimony', 'tellerium', 'iodine', 'xenon', 'caesium', 'barium', 'lanthanum', 'cerium', 
'praseodymium', 'neodymium', 'promethium', 'samarium', 'europium', 'gadolinium', 'terbium', 'dysprosium', 'holmium',
'erbium', 'thulium', 'ytterbium', 'lutetium', 'hafnium', 'tantalum','tungsten', 'rhenium', 'osmium', 'iridium', 
'platinum', 'gold', 'mercury', 'thallium', 'lead', 'bismuth', 'polonium','astatine', 'radon', 'francium', 'radium',
'actinium', 'thorium', 'protactinium', 'uranium', 'neptunium', 'plutonium', 'americium', 'curium', 'berkelium', 'californium', 
'einsteinium', 'fermium', 'mendelevium', 'nobelium', 'lawrencium', 'rutherfordium', 'dubnuim', 'seaborgium', 'bohrium',
'hassium', 'meitnerium', 'darmstadtium', 'roentgenium', 'copernicium', 'nihonium', 'flerovium', 'moscovium', 'livermorium',
'tennessine', 'oganesson']

const firstFiftySix = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen',
'fluorine', 'neon', 'sodium', 'magnesium', 'aluminum', 'silicon', 'phosphorus', 'sulfur', 'chlorine', 'argon',
'potassium', 'calcium', 'scandium', 'titanium', 'vanadium', 'chromium', 'manganese', 'iron', 'cobalt', 'nickel',
'copper', 'zinc', 'gallium', 'germanium', 'arsenic', 'selenium', 'bromine', 'krypton', 'rubidium', 'strontium',
'yttrium', 'zirconium', 'niobium', 'molybdenum', 'technetium', 'ruthenium', 'rhodium', 'palladium', 'silver',
'cadmium', 'indium', 'tin', 'antimony', 'tellerium', 'iodine', 'xenon', 'caesium', 'barium']

const naturallyOccurring = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen',
'fluorine', 'neon', 'sodium', 'magnesium', 'aluminum', 'silicon', 'phosphorus', 'sulfur', 'chlorine', 'argon',
'potassium', 'calcium', 'scandium', 'titanium', 'vanadium', 'chromium', 'manganese', 'iron', 'cobalt', 'nickel',
'copper', 'zinc', 'gallium', 'germanium', 'arsenic', 'selenium', 'bromine', 'krypton', 'rubidium', 'strontium',
'yttrium', 'zirconium', 'niobium', 'molybdenum', 'technetium', 'ruthenium', 'rhodium', 'palladium', 'silver',
'cadmium', 'indium', 'tin', 'antimony', 'tellerium', 'iodine', 'xenon', 'caesium', 'barium', 'lanthanum', 'cerium', 
'praseodymium', 'neodymium', 'promethium', 'samarium', 'europium', 'gadolinium', 'terbium', 'dysprosium', 'holmium',
'erbium', 'thulium', 'ytterbium', 'lutetium', 'hafnium', 'tantalum','tungsten', 'rhenium', 'osmium', 'iridium', 
'platinum', 'gold', 'mercury', 'thallium', 'lead', 'bismuth', 'polonium','astatine', 'radon', 'francium', 'radium',
'actinium', 'thorium', 'protactinium', 'uranium', 'neptunium', 'plutonium']

const firstTwenty = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen',
'fluorine', 'neon', 'sodium', 'magnesium', 'aluminum', 'silicon', 'phosphorus', 'sulfur', 'chlorine', 'argon',
'potassium', 'calcium']

const nameAndSymbol = {hydrogen:  'H', helium: 'He', lithium: 'Li', beryllium: 'Be', boron: 'B', carbon: 'C', 
nitrogen:  'N', oxygen:  'O', fluorine: 'F', neon: 'Ne', sodium: 'Na', magnesium: 'Mg', aluminum: 'Al', 
silicon:  'Si', phosphorus: 'P', sulfur: 'S', chlorine: 'Cl', argon: 'Ag',potassium: 'K', calcium: 'Ca',
scandium:  'Sc', titanium:  'Ti', vanadium: 'V', chromium: 'Cr', manganese: 'Mn', iron: 'Fe', cobalt: 'Co',
nickel:  'Ni', copper:  'Cu', zinc: 'Zn', gallium: 'Ga', germanium: 'Ge', arsenic: 'As', selenium: 'Se', 
bromine:  'Br', krypton:  'Kr', rubidium: 'Rb', strontium: 'Sr', yttrium: 'Y', zirconium: 'Zr', niobium: 'Nb', 
molybdenum:  'Mo', technetium:  'Tc', ruthenium: 'Ru', rhodium: 'Rh', palladium: 'Pd', silver: 'Ag',
cadmium:  'Cd', indium:  'In', tin: 'Sn', antimony: 'Sb', tellerium: 'Te', iodine: 'I', xenon: 'Xe', caesium: 'Cs', 
barium:  'Ba', lanthanum:  'La', cerium: 'Ce', praseodymium: 'Pr', neodymium: 'Nd', promethium: 'Pm', samarium: 'Sm', 
europium:  'Eu', gadolinium:  'Gd', terbium: 'Tb', dysprosium: 'Dy', holmium: 'Ho', erbium: 'Er', thulium: 'Tm', 
ytterbium:  'Yb', lutetium:  'Lu', hafnium: 'Hf', tantalum: 'Ta',tungsten: 'W', rhenium: 'Re', osmium: 'Os', iridium: 'Ir',
platinum:  'Pt', gold:  'Au', mercury: 'Hg', thallium: 'Tl', lead: 'Pb', bismuth: 'Bi', polonium: 'Po', astatine: 'At', 
radon:  'Rn', francium:  'Fr', radium: 'Ra', actinium: 'Ac', thorium: 'Th', protactinium: 'Pa', uranium: 'U', neptunium:'Np',
plutonium:  'Pu', americium:  'Am', curium: 'Cm', berkelium: 'Bk', californium: 'Cf', einsteinium: 'Es', fermium: 'Fm', mendelevium: 'Md', 
nobelium:  'No', lawrencium:  'Lr', rutherfordium: 'Rf', dubnuim: 'Db', seaborgium: 'Sg', bohrium: 'Bh', hassium: 'Hs', 
meitnerium:  'Mt', darmstadtium:  'Ds', roentgenium: 'Rg', copernicium: 'Cn', nihonium: 'Nh', flerovium: 'Fl', moscovium: 'Mc', 
livermorium:  'Lv', tennessine:  'Ts', oganesson: 'Og'}


//functions

function welcome() {
	response = window.prompt("Welcome to the Elements Quiz! Would you like to play the quiz and test your knowledge of the elements? (Y/N)");
	if (response.toLowerCase() === 'y') { return chooseQuiz(); }
	else if (response.toLowerCase() === 'n') { window.alert("Goodbye!"); }
	else { return welcome(); }
}

function chooseQuiz() {
	response = parseInt(window.prompt("Select one of these quiz types: 1. Symbol of first 20 elements, 2. Symbol of first 56 elements, 3. Symbol of all 118 named elements. (Type 1, 2, or 3)"))
	if (typeof response === 'number' && response < 4 && response > 0) {
		return quizChoice(response) 
	} 
	else {
		window.alert("You must type 1, 2, or 3 for quiz choice");
		return chooseQuiz();
	}
}

function quizChoice(response) {
	switch(response) {
		case 1:
			generateRandom = Math.floor(Math.random() * 20);
			return quizElements(generateRandom);
			break;
		case 2:
			generateRandom = Math.floor(Math.random() * 56);
			return quizElements(generateRandom);
			break;
		case 3:
			generateRandom = Math.floor(Math.random() * 118);
			return quizElements(generateRandom);
			break;
		default:
			window.alert("invalid selection. Quiz choice must be 1, 2, or 3.");
			return welcome();
	}
}

function quizElements(generateRandom) {
	let answerKey = elementNamesArray[generateRandom];
	correctAnswer = nameAndSymbol[answerKey];
	userAnswer = window.prompt(`What is the symbol for ${answerKey}? (or type "exit" to quit)`)
	if (userAnswer.toLowerCase() === 'exit') {
		window.alert('Goodbye!');
		return null;
	}
	else if (userAnswer === correctAnswer) {
		window.alert("Correct!");
		return quizChoice(response);
	}
	else {
		window.alert(`That is incorrect. The correct answer is ${correctAnswer}.`);
		return quizChoice(response);
	}
}

