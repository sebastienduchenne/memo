/*Fermeture ou closure

= paire formée d'une fonction et de l'environnement lexical (contenant les variables)
-autrement dit, ces fonctions se « souviennent » de l'environnement dans lequel elles ont été créées (on dit aussi que la fonction capture son « environnement »)
-on dit que la valeur de la variable est clôturée
-on peut faire un parallèle avec la POO car les objets permettent d'associer des données (les propriétés) avec des méthodes

*/

function faireAddition(x) {
    return function(y) { //créée une fermeture : la fonction avec la variable 'x'
      return x + y;
    };
};

//on créée 2 fermetures ajout5 et ajout10
var ajout5 = faireAddition(5);
var ajout10 = faireAddition(10);

console.log(ajout5(2));  // 7
console.log(ajout10(2)); // 12