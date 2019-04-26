/*
Une expression de fonction fléchée (arrow function en anglais) permet d’avoir une syntaxe plus courte que les expressions de fonction et ne possède pas ses propres valeurs pour this, arguments, super, ou new.target. Les fonctions fléchées sont souvent anonymes et ne sont pas destinées à être utilisées pour déclarer des méthodes.

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es



*/

var a = [
    "We're up all night 'til the sun",
    "We're up all night to get some",
    "We're up all night for good fun",
    "We're up all night to get lucky"
];

// Sans la syntaxe des fonctions fléchées 
var a2 = a.map(function (s) { return s.length });
// [31, 30, 31, 31]

// Avec, on a quelque chose de plus concis
var a3 = a.map( s => s.length);
// [31, 30, 31, 31]