/*
Une expression de fonction fléchée (arrow function en anglais) permet d’avoir une syntaxe plus courte que les expressions de fonction et ne possède pas ses propres valeurs pour this, arguments, super, ou new.target. Les fonctions fléchées sont souvent anonymes et ne sont pas destinées à être utilisées pour déclarer des méthodes.

*/

var a = [
    "We're up all night 'til the sun",
    "We're up all night to get some",
    "We're up all night for good fun",
    "We're up all night to get lucky"
];

// Sans la syntaxe des fonctions fléchées 
var a2 = a.map(function (s) { return s.length });

// Avec une fonction fléchées
var a3 = a.map( s => s.length);


const g = () => { let t = 6+6; return t }
console.log(g())

const g1 = () => "tata"
console.log(g1())

const g2 = () => ( {title: "title", content: "content"} )
console.log(g2())