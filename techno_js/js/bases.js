
//types
let x = 1; // déclarer une variable dont la portée est celle du bloc courant
const c = 0; // déclarer une constante dont la portée est celle du bloc courant, comme let
var v = 2; // déclarer une variable dont la portée est la fonction qui contient la déclaration ou le contexte global si la variable est déclarée en dehors de toute fonction
let s = "s";//pas string


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


/*
***objet
= collection de données apparentées et/ou de fonctionnalités
-aussi appelé tableau associatif
-objet littéral = on écrit littéralement le contenu de l'objet pour le créer
-objet instancié = créée depuis une classe

Le nom de l'objet agit comme un espace de noms
propriété et méthode sont des membres
les propriétés sont encapsulés
*/
var personne = {
    prenom: 'Martin',
    interets: ['musique', 'skier'],
    salutation: function() {
      alert('Bonjour ! Je suis ' + this.prenom + '.');
    }
  };

personne.prenom//Martin
personne.salutation()//Bonjour ! Je suis Martin

personne.prenom = 'Jean'//modification
personne['nom'] = 'Durant'//ajout propriété avec crochet
personne.age = 32 // ajout propriété avec point
personne.auRevoir = function() { alert("Bye bye tout le monde !"); }//ajout méthode


var monNomDeDonnee = 'hauteur'
var maValeurDeDonnee = '1.75m'
personne[monNomDeDonnee] = maValeurDeDonnee //Nous n'aurions pas pu construire ce membre avec la notation avec un point, car celle-ci n'accepte qu'un nom et pas une variable pointant vers un nom.

delete personne.interets