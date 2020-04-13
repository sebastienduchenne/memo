/*
-classe,
-promise,
-fonction fléchée,
-generator,
-let and const,
-classe,
-module,
-string multiline,
-paramètre default,
-destructuration,
-for...of,
-map et set
-Array.find()
-Array.findIndex()
-template string
-évolution des objets litéraux
-symbol
*/


//string sur plusieurs lignes
var x =
"Hello World!";

var x = "Hello \
World!";

//template string
let l = `je m’appelle ${prenom}`

//destructuring assignment
const tableau = [1, 2, 3, 4]
let [un,,trois] = tableau;
let [un,,trois] = [1, 2, 3, 4] // autre notation
let [un,...trois] = [1, 2, 3, 4] // un = un, trois = [2, 3, 4]

var a = 3;
var b = 6;
[a,b] = [b,a]; // inversion des valeurs


( [{ code }] = text ) // code = text[0].code


//-symbol = type primitif et immuable qui peut être utilisée afin de représenter des identifiants pour des propriétés d'un objet
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');


/*
https://www.wanadev.fr/21-introduction-a-ecmascript-6-le-javascript-de-demain/
https://web.developpez.com/tutoriels/fonctionnalite-javascript-es6/
https://www.wanadev.fr/21-introduction-a-ecmascript-6-le-javascript-de-demain/
https://blog.lesieur.name/apprendre-et-comprendre-javascript-version-es6/
https://web.developpez.com/actu/93866/La-programmation-orientee-objet-en-JavaScript-ES5-ES6-vue-par-un-developpeur/
*/