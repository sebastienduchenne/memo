/*
-le changement d'une valeur change non pas la value mais change le pointage vers une nouvelle valeur
-** : exponentiation ou puissance
-x++ : renvoit la valeur avant puis fait l'incrémentation
-++x : fait l'incrémentation puis renvoit la valeur
-% : reste
-7 types de données : primitif (number, string, boolean, null, undefined, symbol) et object
-symbol = type primitif et immuable qui peut être utilisée afin de représenter des identifiants pour des propriétés d'un objet
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');


-commentaire
  -décrit l'architecture à un haut niveau
  -JSDoc pour l'usage d'une fonction
  -une solution non évidente

-Dans le cas d’une function déclarée de manière classique, toute la function est chargée dans la mémoire du navigateur même si elle n’est pas utilisée immédiatement. À la différence des expressions de fonction (ou function expression) qui elles sont appelées quand l’interpréteur atteint cette ligne de code.


*/

//map = appliquer un traitement à n’importe quelle valeur d’un array
var monArray = [1,2,3,4,5,6];
var result = monArray.map(function(arrayCell){
  return arrayCell *2;
});
console.log(result);// affiche 2,4,6,8,10,12



/*

**** A chercher
-module, classe, prototype
-import, require
-fonction promise
-mapper
-objet window
-valeur référence
-symbole


**** Liens

https://www.w3schools.com/js
https://developer.mozilla.org/fr/docs/Web/JavaScript/
https://javascript.info/


https://jpvincent.developpez.com/tutoriels/javascript/usage-avance-fonctions-javascript/
https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Building_blocks/Build_your_own_function
https://putaindecode.io/fr/articles/frontend/2015-etat-lieux-javascript-modulaire/
https://www.antoinebrossault.com/les-functions-expressions/


*/
