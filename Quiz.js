// global variables
let correctAnswer;
let userAnswer;
let generateRandom;

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

const firstFiftyFour = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen',
'fluorine', 'neon', 'sodium', 'magnesium', 'aluminum', 'silicon', 'phosphorus', 'sulfur', 'chlorine', 'argon',
'potassium', 'calcium', 'scandium', 'titanium', 'vanadium', 'chromium', 'manganese', 'iron', 'cobalt', 'nickel',
'copper', 'zinc', 'gallium', 'germanium', 'arsenic', 'selenium', 'bromine', 'krypton', 'rubidium', 'strontium',
'yttrium', 'zirconium', 'niobium', 'molybdenum', 'technetium', 'ruthenium', 'rhodium', 'palladium', 'silver',
'cadmium', 'indium', 'tin', 'antimony', 'tellerium', 'iodine', 'xenon']

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

const nameAndSymbol = {'hydrogen' => 'H', 'helium' => 'He', 'lithium' => 'Li', 'beryllium' => 'Be', 'boron' => 'B', 'carbon' => 'C', 
'nitrogen' => 'N', 'oxygen' => 'O', 'fluorine' => 'F', 'neon' => 'Ne', 'sodium' => 'Na', 'magnesium' => 'Mg', 'aluminum' => 'Al', 
'silicon' => 'Si', 'phosphorus' => 'P', 'sulfur' => 'S', 'chlorine' => 'Cl', 'argon' => 'Ag','potassium' => 'K', 'calcium' => 'Ca',
'scandium' => 'Sc', 'titanium' => 'Ti', 'vanadium' => 'V', 'chromium' => 'Cr', 'manganese' => 'Mn', 'iron' => 'Fe', 'cobalt' => 'Co',
'nickel' => 'Ni','copper' => 'Cu', 'zinc' => 'Zn', 'gallium' => 'Ga', 'germanium' => 'Ge', 'arsenic' => 'As', 'selenium' => 'Se', 
'bromine' => 'Br', 'krypton' => 'Kr', 'rubidium' => 'Rb', 'strontium' => 'Sr', 'yttrium' => 'Y', 'zirconium' => 'Zr', 'niobium' => 'Nb', 
'molybdenum' => 'Mo', 'technetium' => 'Tc', 'ruthenium' => 'Ru', 'rhodium' => 'Rh', 'palladium' => 'Pd', 'silver' => 'Ag',
'cadmium' => 'Cd', 'indium' => 'In', 'tin' => 'Sn', 'antimony' => 'Sb', 'tellerium' => 'Te', 'iodine' => 'I', 'xenon' => 'Xe', 'caesium' => 'Cs', 
'barium' => 'Ba', 'lanthanum' => 'La', 'cerium' => 'Ce', 'praseodymium' => 'Pr', 'neodymium' => 'Nd', 'promethium' => 'Pm', 'samarium' => 'Sm', 
'europium' => 'Eu', 'gadolinium' => 'Gd', 'terbium' => 'Tb', 'dysprosium' => 'Dy', 'holmium' => 'Ho','erbium' => 'Er', 'thulium' => 'Tm', 
'ytterbium' => 'Yb', 'lutetium' => 'Lu', 'hafnium' => 'Hf','tantalum' => 'Ta','tungsten' => 'W', 'rhenium' => 'Re', 'osmium' => 'Os', 'iridium' => 'Ir',
'platinum' => 'Pt', 'gold' => 'Au', 'mercury' => 'Hg','thallium' => 'Tl', 'lead' => 'Pb', 'bismuth' => 'Bi', 'polonium' => 'Po','astatine' => 'At', 
'radon' => 'Rn', 'francium' => 'Fr', 'radium' => 'Ra', 'actinium' => 'Ac', 'thorium' => 'Th', 'protactinium' => 'Pa', 'uranium' => 'U', 'neptunium' => 'Np',
'plutonium' => 'Pu', 'americium' => 'Am', 'curium' => 'Cm', 'berkelium' => 'Bk', 'californium' => 'Cf', 'einsteinium' => 'Es', 'fermium' => 'Fm', 'mendelevium' => 'Md', 
'nobelium' => 'No', 'lawrencium' => 'Lr', 'rutherfordium' => 'Rf', 'dubnuim' => 'Db', 'seaborgium' => 'Sg', 'bohrium' => 'Bh', 'hassium' => 'Hs', 
'meitnerium' => 'Mt', 'darmstadtium' => 'Ds','roentgenium' => 'Rg', 'copernicium' => 'Cn', 'nihonium' => 'Nh', 'flerovium' => 'Fl', 'moscovium' => 'Mc', 
'livermorium' => 'Lv','tennessine' => 'Ts', 'oganesson' => 'Og'}


//functions

function quizElementNames() {
	//
}

