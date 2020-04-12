/*
    The "use strict" Directive
    String.trim()
    Array.isArray()
    Array.forEach()
    Array.map()
    Array.filter()
    Array.reduce()
    Array.reduceRight()
    Array.every()
    Array.some()
    Array.indexOf()
    Array.lastIndexOf()
    JSON.parse()
    JSON.stringify()
    Date.now()


    The "use strict" Directive
-'use strict' : mode strict, impose des contraintes de développement (pas de variables non déclarées, mots clé réservés)


*/

/*
La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
*/

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);//callback

console.log(map1);
// expected output: Array [2, 8, 18, 32]
