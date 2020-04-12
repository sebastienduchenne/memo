/*

-let et const
-template string
-paramètre par défaut
-boucle for - of
-évolution des objets litéraux
-fonction fléchée
-classe et héritage
-destructuring assignement
-promesse
-Array.find()
-Array.findIndex()

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