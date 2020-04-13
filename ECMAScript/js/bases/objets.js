/*
***objet
= collection de données apparentées et/ou de fonctionnalités
-aussi appelé tableau associatif
-2 types d'objets
  -objet littéral = on écrit littéralement le contenu de l'objet pour le créer
  -objet instancié = créée depuis une classe

-Le nom de l'objet agit comme un espace de noms
-propriété et méthode sont des membres
-les propriétés sont encapsulés
-objets : array, object, function
-Les objets en JavaScript sont simplement des collections de paires nom-valeur.

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