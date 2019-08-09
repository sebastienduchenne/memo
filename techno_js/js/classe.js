/*
le type d'une classe est "fonction"

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/class
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Le_mod%C3%A8le_objet_JavaScript_en_d%C3%A9tails

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

*/
function Employé (nom, age) {
    this.nom = nom;
    this.age = age;
    this.salutation = function() {
      alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
    };
}

//instanciation
var emp1 = new Employé('Marc', 22);//1
var emp2 = new Object();//2
emp2.nom = "atta"
var emp3 = new Object({//3
  nom: 'titi',
  age: 66,
  salutation: function() {
    alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
  }
})
var emp4 = Object.create(emp1);//4


class Employé {//syntaxe avec EC6
    nom = "";
    branche = "commun";

    getNom(){return nom;}
}

//syntaxe ES5?
var Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area() {
      return this.height * this.width;
    }
}
  
var rect = new Rectangle(5,8);
console.log(rect.area());// expected output: 40


/*
on peut ajouter des propriétés lors de l’exécution et on peut utiliser des propriétés qui ne seraient pas définies par le constructeur.
*/

marc.bonus = 3000;

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