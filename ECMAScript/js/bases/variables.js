/*
La portée lexicale d'une variable est la partie d'un programme où la liaison entre son identifiant et sa donnée est valide
var : fonction où elle est déclarée
let et const : bloc où elle est déclarée
la redéclaration dans une fonction fille d’une variable la masque dans la fonction fille, ne peut se faire qu’avec var
-le changement d'une valeur change non pas la value mais change le pointage vers une nouvelle valeur

variable sans affectation est “undefined”
https://medium.com/@vincent.bocquet/var-let-const-en-js-quelles-diff%C3%A9rences-b0f14caa2049

*/

let x = 1; // déclarer une variable dont la portée est celle du bloc courant
const c = 0; // déclarer une constante dont la portée est celle du bloc courant, comme let
var v = 2; // déclarer une variable dont la portée est la fonction qui contient la déclaration ou le contexte global si la variable est déclarée en dehors de toute fonction

// 1. Avec initialiseur

alert(maVariable1); // erreur : accès impossible avant l'initialisation
alert(maVariable2); // erreur : accès impossible avant l'initialisation
let maVariable1 = 5;
const maVariable2 = 8;
alert(maVariable1); // affiche 5
alert(maVariable2); // affiche 8

// 2. Sans initialiseur

alert(maVariable3); // erreur : accès impossible avant l'initialisation
alert(maVariable4); // erreur : accès impossible avant l'initialisation
let maVariable3;
const maVariable4;  // erreur : initialisation manquante
alert(maVariable3); // affiche undefined
alert(maVariable4); // erreur : initialisation manquante


