/*
= objet de 1ère classe : la fonction est un objet. Le nom de la fonction est une variable qui contient une référence vers la fonction stockée en mémoire. On peut donc : 
  -assigner une fonction à une variable
  -passer la fonction en paramètre d’une fonction (cad la référence, = callback)
  -mettre des () pour l’exécuter
-dans une fonction, on peut créer une variable locale avec "let" de même nom qu’une variable en dehors de la fonction sans que cette dernière ne soit modifiée
-certaines fonctions possèdent des arguments facultatifs : on n’est pas obligé de spécifier ces arguments -lors de l’appel de la fonction, l’argument sera donc de type undefined
-toute déclaration de fonction crée une fermeture (contrairement au constructeur function)
-lors de l’appel d’une fonction, les arguments vont être mis dans les variables spécifiés dans la fonction. Si il y a plus d’argument lors de l’appel, ils ne peuvent pas être mis dans une variable et sont donc rejetés. Si il n’y en a pas assez, les variables non spécifiées sont mise en undefined. Les arguments facultatifs doivent donc être mis après ceux obligatoires.
-Pour tester undefined : if(typeof nomVar === ‘undefined’) {}
-passe par valeur, si object la valeur est une référence
  -primitive (boolean, null, undefined, string, number) : variable originelle non modifiée
  -objects (object, function, array) : objet modifié

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions
https://medium.com/codeshake/pour-les-jedis-javascript-%C3%A9pisode-i-au-coeur-des-fonctions-partie-1-8b2cd1cab002

*/

function func(str = "", nbr = NaN, bool = false, obj = null) {
  return {
    str:  str,
    nbr:  nbr,
    bool: bool,
    obj:  obj
  };
};
func("Hello World");

//> Object {str: "Hello World", nbr: NaN, bool: false, obj: null}

//expression en tant que fonction ou function expression
var maFonction = function fonctionNommée(){
  /* instructions */
}

var v = function(p){
  console.log(p)
};
v("coucou");


//valeur par défaut des arguments
function multiply(a, b = 1) {
  return a * b;
}

//paramètres du reste
function maFonction(a, b, ...theArgs) { // theArgs est un tableau
  //...
}
maFonction("un", "deux", "trois", "quatre", "cinq");


const Parameters = (param) => {/*...*/};


//arguments = ensemble des arguments passées à une fonction
function func1(a, b, c) {
  console.log(arguments[0]); // expected output: 1
  console.log(arguments[1]); // expected output: 2
  console.log(arguments[2]); // expected output: 3
}
func1(1, 2, 3);


//constructeur function
//Les fonctions créées avec le constructeur Function() ne créent pas de fermetures liées au contexte de leur création. Ainsi, lorsqu'elles sont exécutées, elles ne peuvent accéder qu'aux variables globales et à leurs propres valeurs locales. Elles ne peuvent pas accéder aux variables de la portée dans laquelle le constructeur Function a été invoqué

var ajoute = new Function('a', 'b', 'return a + b');
ajoute(2, 6);


/*
*** asyncFunction

-crée un nouvel objet pour une fonction asynchrone
-En JavaScript, chaque fonction asynchrone est en fait un objet AsyncFunction.
*/

var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

//IIFE (immediately invoked function expression)
//= fonction qui est exécutée dès qu'elle est définie
var result = (function () { 
  var name = "Barry"; 
  return name; 
})();



// JSDoc
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  return x ** n;
}