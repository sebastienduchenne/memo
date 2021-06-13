/*
= objet de 1ère classe. On peut donc : 
  -assigner une fonction à une variable (le nom de la fonction est une variable qui contient une référence vers la fonction stockée en mémoire)
  -passer la fonction en paramètre d’une fonction (cad la référence, = callback)
  -mettre des () à son nom pour l’exécuter

-une fonction est un objet de type Function

-Lorsque JavaScript exécute une fonction, un objet de portée est créé pour conserver les variables locales créées au sein de cette fonction. Il est initialisé avec les variables passées en paramètres à la fonction.

-Dans le cas d’une fonction déclarée de manière classique, toute la fonction est chargée dans la mémoire du navigateur même si elle n’est pas utilisée immédiatement. À la différence des expressions de fonction (ou function expression) qui elles sont appelées quand l’interpréteur atteint cette ligne de code.

-dans une fonction, on peut créer une variable locale avec "let" de même nom qu’une variable en dehors de la fonction sans que cette dernière ne soit modifiée

-toute création de fonction crée une fermeture (contrairement au constructeur Function)


*** arguments
-lors de l’appel d’une fonction, les arguments vont être mis dans les variables spécifiés dans la fonction. 
-S'il y a plus d’arguments lors de l’appel, ils ne peuvent pas être mis dans une variable et sont donc rejetés. 
-S'il n’y en a pas assez, les variables non spécifiées sont mises en undefined. 
-Les arguments facultatifs doivent donc être mis après ceux obligatoires.
-passe par valeur, si objet alors la valeur est une référence ver l'objet
  -primitive (boolean, null, undefined, string, number) : variable originelle non modifiée
  -objects (object, function, array) : objet modifié
-les paramètres sont mis dans le tableau arguments

-arguments facultatifs : 'arguments' est un objet, semblable à un tableau, correspondant aux arguments passés à une fonction
-tester la valeur d'un argument facultatif : if(typeof nomVar === ‘undefined’) {}


-par défaut, la valeur des paramètres d'une fonction sera undefined
-return; //return undefined

-func.prototype : définir le prototype à affecter aux instances des objets créés par func

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


//*********** valeur par défaut des arguments
function multiply(a, b = 1) {
  return a * b;
}


// ********** paramètres du reste, rest parameter
function maFonction(a, b, ...theArgs) { // theArgs est un tableau
  //...
}
maFonction("un", "deux", "trois", "quatre", "cinq");


// ********** syntaxe de décomposition, spread operator
const numbers = [1, 2, 3];
console.log(sum(...numbers));


// ********** arguments
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


//******** IIFE (immediately invoked function expression)
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

/*
*** static
-définir une méthode statique
-appeler une static depuis une static : utiliser this.staticMethod()
-appeler une static depuis un constructeur / une méthode non static :
    -this.constructor.staticMethod()
    -ClassName.staticMethod()
*/

// *** check initialisation d'un paramètre d'une fontion
function f(par){
  if (typeof par !== "undefined" && par !== null){}
}

//on peut déclarer une fonction dans une fonction
function f(){
  function z(){
      console.log("toto")
  }
  z()
}
f()