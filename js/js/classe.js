/*
le type d'une classe est "fonction"

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/class
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Le_mod%C3%A8le_objet_JavaScript_en_d%C3%A9tails

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

*/
function Employé () {
    this.nom = "";
    this.branche = "commun";
}

class Employé {//syntaxe avec EC6
    nom = "";
    branche = "commun";

    getNom(){return nom;}
}

var marc = new Travailleur;

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