/*
= collection de paires nom-valeur qui peuvent être des données apparentées et/ou de fonctionnalités
-aussi appelé tableau associatif
-2 types d'objets
  -objet littéral = on écrit littéralement le contenu de l'objet pour le créer
  -objet instancié = créé depuis une classe
-Le nom de l'objet agit comme un espace de noms
-propriété et méthode sont des membres
-les propriétés sont encapsulés
-objets : array, object, function
-tous les objets en JavaScript descendent d'Object, tous les objets héritent des méthodes et des propriétés de Object.prototype
-les objets sont muables (mutable) : on peut donc augmenter les nouvelles instances en leur donnant de nouveaux champs et méthodes. Ces nouvelles instances peuvent à leur tour servir de prototypes pour de nouveaux objets. Nul besoin de classes pour créer des tas d’objets similaires
-property access : les objets ont des références qui pointent vers elles, il existe différentes stratégies d'accès à une propriété

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

//delete
delete personne.interets