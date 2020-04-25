/*
*** function génératrice - générateur - function*
-fonction qu'il est possible de quitter puis de reprendre. Le contexte d'un générateur (les liaisons avec ses variables) est sauvegardé entre les reprises successives.


* yield
-suspendre et reprendre une fonction génératrice
-Le mot-clé yield retourne en fait un objet IteratorResult ayant deux propriétés, value et done.
-yield* : déléguer le mécanisme d'itération/génération à un autre générateur ou à un autre objet itérable


https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/yield
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function*


*** protocoles d'itération : protocole itérable et protocole itérateur

* protocole itérable
-permet aux objets JavaScript de définir ou de personnaliser leur comportement lors d'une itération
-Certains types natifs tels que Array ou Map possèdent un comportement itératif par défaut, d'autres types, comme Object n'ont pas ce type de comportement.
-Afin d'être itérable, un objet doit implémenter la méthode @@iterator, cela signifie que l'objet (ou un des objets de sa chaîne de prototypes) doit avoir une propriété avec une clé @@iterator qui est accessible via Symbol.iterator
-Symbol.iterator définit l'itérateur par défaut d'un objet


https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Symbol/iterator


* protocole itérateur
-définit une façon standard pour produire une suite de valeurs (finie ou infinie) ainsi qu'une valeur de retour lorsque toutes les valeurs ont été générées.
-Un objet est considéré comme un itérateur lorsqu'il implémente une méthode next()
    -done : 
        -si vaut true l'itérateur a fini la suite
        -si vaut false l'itérateur a pu produire la prochaine valeur de la suite
    -value


https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_.C2.AB_it.C3.A9rable_.C2.BB

*/

const iterable1 = new Object();

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable1]);
// expected output: Array [1, 2, 3]

//---------------------------------------------------

var uneChaîne = "toto";//objet natif itérable

var itérateur = uneChaîne[Symbol.iterator]();
itérateur.next();  // { value: "t", done: false }
itérateur.next();  // { value: "o", done: false }
itérateur.next();  // { value: "t", done: false }
itérateur.next();  // { value: "o", done: false }
itérateur.next();  // { value: undefined, done: true }

//----------------------------------------------------------------

function* creerID(){
    var index = 0;
    while(index < 3){
        yield index++;
    }
}
  
var gen = creerID();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined