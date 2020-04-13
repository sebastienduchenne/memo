/*
-le type d'une classe est "function"
-pas de hoisting pour les déclarations de classes
-les classes sont un sucre syntaxique des prototypes d'objet

https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Le_mod%C3%A8le_objet_JavaScript_en_d%C3%A9tails
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

*/

//----------------- syntaxe avec ES6 (sucre syntaxique)
class Employé {
  age; //champs public
  constructor(nom) {
    this.nom = nom;
    this.age = 22;
  }

  getNom() {return this.nom;}

  static func(){
    //...
  }
}

//instanciation
var emp1 = new Employé('Marc', 22);//1
var emp2 = new Object();//2
emp2.nom = "atta"
var emp4 = Object.create(emp1);//4
emp1.bonus = 3000; //on peut ajouter des propriétés lors de l’exécution et on peut utiliser des propriétés qui ne seraient pas définies par le constructeur.


//----------------- syntaxe ES5
function Employé (nom, age) {
  this.nom = nom;
  this.age = age;
  this.setNom(n);
}

Employé.prototype.setNom = function(n){
  this.nom = n
}

//----------------- expression de classe
//nommée : la classe est visible dans elle-même

let User = class { // nommée : let User = class MyClass {
  sayHi() {
    alert("Hello");
  }
};


//héritage
class Rectangle {
  constructor(hauteur, largeur) {
    this.name = 'Rectangle';
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
  coucou(){
    console.log('Coucou, je suis un ' + this.name + '.');
  }
  get aire() {
    return this.hauteur * this.largeur;
  }
}

class Carré extends Rectangle {
  constructor(longueur) {
    super(longueur, longueur);
    this.name = 'Carré';
  }
}

