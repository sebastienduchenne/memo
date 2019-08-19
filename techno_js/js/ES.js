/*

-transcompilateur = permet de convertir une version de ES en une plus ancienne (ex : Babel.js)


*** ECMAScript
-ECMAScript est un langage, une grammaire avec des fonctionnalités de base. Chaque environnement – les navigateurs web, Node – le comprend et lui ajoute de nouvelles expressions, contextuelles à cet environnement d’exécution. JavaScript est le grand ensemble des technologies qui reposent sur ECMAScript pour fonctionner.
-ECMAscript = ensemble de règles que doit respecter les langages de ce standard (JavaScript, JScript et ActionScript), et standardisées par Ecma International dans le cadre de la spécification ECMA-262
-API javascript : Node et les navigateurs ont chacun une API qui complète ECMA et qui différe entre elles
    .nav : fetch(), querySelector(), addEventListener(), document, API DOM pour page web
    .node : require()


*** ES5
-'use strict' : mode strict, impose des contraintes de développement (pas de variables non déclarées, mots clé réservés)


*** ES6 / ES2015

-let
-template string
-paramètre par défaut
-boucle for - of
-évolution des objets litéraux
-fonction fléchée
-classe et héritage
-destructuring assignement
-promesse


Les modules ES6 / ES2015 sont supportés nativement par :
Chrome, > version 63.
Firefox, > 60,
Edge, > 16,
Safari, > 11,
Node.js, > 10.

*/

//template string
let l = `je m’appelle ${prenom}`

//destructuring assignment
const tableau = [1, 2, 3, 4]
let [un,,trois] = tableau;
let [un,,trois] = [1, 2, 3, 4] // autre notation
let [un,...trois] = [1, 2, 3, 4] // un = un, trois = [2, 3, 4]

var a = 3;
var b = 6;
[a,b] = [b,a]; // inversion des valeurs


/*
https://www.wanadev.fr/21-introduction-a-ecmascript-6-le-javascript-de-demain/
https://web.developpez.com/tutoriels/fonctionnalite-javascript-es6/
https://www.wanadev.fr/21-introduction-a-ecmascript-6-le-javascript-de-demain/
https://fr.wikipedia.org/wiki/ECMAScript
https://blog.lesieur.name/apprendre-et-comprendre-javascript-version-es6/
https://web.developpez.com/actu/93866/La-programmation-orientee-objet-en-JavaScript-ES5-ES6-vue-par-un-developpeur/

*/