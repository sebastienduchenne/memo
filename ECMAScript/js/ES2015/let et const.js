//types var, let, const
let x = 1; // déclarer une variable dont la portée est celle du bloc courant, globale en dehors de tout fonction
const c = 0; // déclarer une constante dont la portée est celle du bloc courant, comme let, globale en dehors de tout fonction. Const est un abus de langage car c'est la référence vers la valeur qui ne peut pas être changé et non la valeur, donc on peut ajouter un élément à un tableau const ou modifier une propriété d'un objet const
var v = 2; // déclarer une variable dont la portée est la fonction qui contient la déclaration, qu’importe le bloc dans lequel elle se trouve, et global en dehors de toute fonction
//types primitifs : number, string, boolean

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
