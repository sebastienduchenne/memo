/*Fermeture ou closure

= fonction qui fait utiliser des variables indépendantes (utilisées localement mais définies dans la portée englobante). Autrement dit, ces fonctions se « souviennent » de l'environnement dans lequel elles ont été créées (on dit aussi que la fonction capture son « environnement »).

capture ou rattache les variables libres (extérieures à la fermeture) à son propre contexte d'exécution

conserver la valeur d’une variable en vue de l’utiliser plus tard et de telle sorte qu’elle ne soit plus accessible en passant par la variable qui la contenait à l’origine
utilisé pour le gestionnaire d'événements ou les fonctions de délais setTimeOut et setInterval
on dit que la valeur de la variable est clôturée

Une fermeture permet d'associer des données (l'environnement) avec une fonction qui agit sur ces données. On peut faire un parallèle avec la programmation orientée objet car les objets permettent d'associer des données (les propriétés) avec des méthodes.


https://developer.mozilla.org/fr/docs/Web/JavaScript/Closures
https://www.developpez.net/forums/blogs/676693-yahiko/b167/js-principe-fermetures-illustre-boucles/
https://www.developpez.net/forums/blogs/676693-yahiko/b174/js-principales-proprietes-fermetures/
https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/les-closures-1

*/

function faireAddition(x) {//créée une fermeture
    return function(y) {
      return x + y;
    };
};

//on créée 2 fermeture ajout5 et ajout10
var ajout5 = faireAddition(5);
var ajout10 = faireAddition(10);

console.log(ajout5(2));  // 7
console.log(ajout10(2)); // 12