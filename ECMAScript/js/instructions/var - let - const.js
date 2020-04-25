/*
-La portée lexicale d'une variable est la partie d'un programme où la liaison entre son identifiant et sa donnée est valide
-la redéclaration dans une fonction fille d’une variable la masque dans la fonction fille, ne peut se faire qu’avec var
-le changement d'une valeur change non pas la value mais change le pointage vers une nouvelle valeur
-les variables déclarées avec var sont hoisted to the top
-les variables sont passées par valeur, et les objets par référence
-variable sans affectation est “undefined”
*/

let x = 1; // la portée est celle du bloc courant, globale en dehors de toute fonction
const c = 0; // la portée est celle du bloc courant, comme let, globale en dehors de tout fonction. Const est un abus de langage car c'est la référence vers la valeur qui ne peut pas être changé et non la valeur, donc on peut ajouter un élément à un tableau const ou modifier une propriété d'un objet const
var v = 2; // la portée est la fonction qui contient la déclaration, qu’importe le bloc dans lequel elle se trouve, et le contexte global en dehors de toute fonction

//var et let : on peut aussi ne pas définir de valeur initiale, la variable aura donc une valeur undefined.
//La déclaration sans instruction var (exemple : maVar = ‘test’) revient à écrire var maVar = ‘test’ dans un contexte global. La variable devient donc une propriété de l’objet global window

var x = 10;// Here x is 10
{ 
  var x = 2;  // Here x is 2
}
// Here x is 2

//--------------------------

var x = 10;// Here x is 10
{ 
  let x = 2;  // Here x is 2
}
// Here x is 10

//--------------------------



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


