/*
-le type d'une classe est "function"
-pas de hoisting pour les déclarations de classes
-les classes sont un sucre syntaxique des prototypes d'objet
-mixin = classe contenant des méthodes pouvant être utilisées par d'autres classes sans avoir besoin d'hériter d'elles
-les déclarations qui composent le corps de la classe sont exécutées en mode strict


*** constructor
-créer et initiliaser un objet
-il ne peut y avoir qu'une seule fonction constructor dans une classe
-si on ne définit pas de constructor, un constructeur est ajouté par défaut
*/

//----------------- syntaxe avec ES6
class Employé {
  age; //champs public
  constructor(nom) {
    this.nom = nom;
    this.age = 22;
  }

  getNom() {return this.nom;}

  static func(){ // fonction statique
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


//---------------------héritage
//étendre Object.prototype = monkey patching. Déconseillé car brise l'encapsulation

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
