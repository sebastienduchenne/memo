//types var, let, const
let x = 1; // déclarer une variable dont la portée est celle du bloc courant, globale en dehors de tout fonction
const c = 0; // déclarer une constante dont la portée est celle du bloc courant, comme let, globale en dehors de tout fonction. Const est un abus de langage car c'est la référence vers la valeur qui ne peut pas être changé et non la valeur, donc on peut ajouter un élément à un tableau const ou modifier une propriété d'un objet const
var v = 2; // déclarer une variable dont la portée est la fonction qui contient la déclaration, qu’importe le bloc dans lequel elle se trouve, et global en dehors de toute fonction
//types primitifs : number, string, boolean

//var et let : on peut aussi ne pas définir de valeur initiale, la variable aura donc une valeur undefined.
//La déclaration sans instruction var (exemple : maVar = ‘test’) revient à écrire var maVar = ‘test’ dans un contexte global. La variable devient donc une propriété de l’objet global window

var x = 10;// Here x is 10
{ 
  var x = 2;  // Here x is 2
}
// Here x is 2

//--------------------------

var x = 10;// Here x is 10
{ 
  let x = 2;  // Here x is 2
}
// Here x is 10

//--------------------------

let name = 'Zell'

function sayName (arg) {
  name = arg // name change
  console.log(name)
}


//tableau
/*-les tableaux sont des objets qui utilisent des nombres pour accéder aux éléments alors que les autres objets utilisent des noms pour accéder aux membres
-les éléments d'un tableau peuvent être différents et peuvent être des objets (objets, fonction)
*/
let arr = new Array();//syntaxe 1, peu utilisé
let arr = [];//syntaxe 2
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3
alert( fruits ); // Apple,Orange,Plum

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( arr[1].name ); // John
// get the function at index 3 and run it
arr[3](); // hello


fruits.pop() // get last
fruits.push("Lemon") // push to the end
fruits.shift() // get first
fruits.unshift() // push to the beginning

//shift   <-         -> pop
//           0 1 2 3
//unshift ->         <- push

fruits.length() // le plus grand index + 1
fruits.length = 2 // efface les éléments après index=2
fruits.length = 0 // efface tout le tableau

//tableau 2D
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, the central element


//=== vs ==
//== : une conversion est effectuée si nécessaire
//=== : pas de conversion
2 == "2" // true
2 === "2" // false
true == 1; //true, because 'true' is converted to 1 and then compared

//typeof
console.log(typeof 42);// expected output: "number"

//in
var car = {make: 'Honda', model: 'Accord', year: 1998};
console.log('make' in car);// expected output: true

//instanceof
console.log(string instanceof Object);

//for
for (var i = 0; i < 9; i++) {
  //...
}

//for ... in
for (val in values) {
  console.log(val)
}

//do while
var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

//for in
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 += object1[property1];
}

//for of
function* foo(){
  yield 1;
  yield 2;
}

for (let o of foo()) {
  console.log(o);
  // expected output: 1

  break; // closes iterator, triggers return
}

//for await of : parcourt les objets itérables asynchrones


//switch
var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

//label, continue, break
var str = "";

loop1:
for (var i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
  if (i === 5) {
    break;
  }
}

//try catch, throw
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}

try {
  getRectArea(3, 'A');
}
catch(e) {
  console.log(e);
  // expected output: "Parameter is not a number!"
}

//debugger
debugger; // permet de démarrer un débogueur (s'il existe)

