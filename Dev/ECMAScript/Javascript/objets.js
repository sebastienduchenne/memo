/*
= collection de paires nom-valeur qui peuvent être des données apparentées et/ou de fonctionnalités
-aussi appelé tableau associatif
= ensembles dynamiques de propriétés
= un ensemble cohérent des propriétés et des fonctions
-2 types d'objets
  -objet littéral = on écrit littéralement le contenu de l'objet pour le créer
  -objet instancié = créé depuis une classe / une fonction
-Le nom de l'objet agit comme un espace de noms
-propriété et méthode sont des membres
-les propriétés sont encapsulés
-les objets ont un prototype
-les objets sont muables (mutable) : on peut donc augmenter les nouvelles instances en leur donnant de nouveaux champs et méthodes. Ces nouvelles instances peuvent à leur tour servir de prototypes pour de nouveaux objets. Nul besoin de classes pour créer des tas d’objets similaires
-property access : les objets ont des références qui pointent vers elles, il existe différentes stratégies d'accès à une propriété
-geler un objet = rendre immuable un objet
-propriétés en propre = propriétés directement rattachées à un objet
-[[Prototype]] : faire référence au prototype d'un objet
-accès au prototype de obj :
  -obj.__proto__ : OBSOLETE
  -Object.getPrototypeOf(obj) et Object.setPrototypeOf(obj)
-tous les objets descendent d'Object
-tous les objets héritent des méthodes et des propriétés de Object.prototype, et peuvent être surchargées
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


// ******** créer un objet avec une fonction constructeur
function User(lastname, firstname){
  this.lastname = lastname;
  this.firstname = firstname;
  this.presentation = function(){
    console.log(this.lastname + " " + this.firstname)
  }
}
let user1 = new User("Doe", "John")

/*
-on copie la fonction presentation() autant de fois que l'on créé un objet User ce qui n'est pas optimal. La solution est de créer un prototype
-une propriété __proto__ est ajouté automatiquement et correspond au prototype du constructeur. On peut lui ajouter des propriétés et des fonctions qui seront hérités aux objets créés par le constructeur

user1 :
  lastname : "Doe"
  firstname : "John"
  __proto__ : prototype de Object
      constructor
      hasOwnProperty
      ...

          Array
            |
            v
b ---> Array.prototype



*/


// ******** opérateur delete ********
delete personne.interets


// ******** rest and spread property ********
const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }


// ******** opérateur in ********
// renvoie true si une propriété donnée appartient à l'objet donné
const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in car);


/* ******** appel par pratage ou call by sharing ********
-la valeur d'une variable objet est une référence (l'adresse en mémoire) à l'objet
-appel de fonction avec paramètre : passage de la référence de l'objet
-ajout / modif d'une propriété : affecte l'objet d'origine
-réaffectation du paramètre : nouvelle référence/adresse affecté à la variable donc pas d'effet sur l'objet d'origine
*/
function fonction(a, b, c) {
  a.prop2 = "prop2" // objet d'origine affecté
  a = {'prop2': 'another value'}; // objet d'origine non affecté
  b = "another string";
  c = 10;
}
var obj1 = {'prop': 'value'};
var str = 'string';
var num = 2;
fonction(obj1, str, num);
console.log(obj1, str, num); // output : {'prop': 'value'}, 'string', 2