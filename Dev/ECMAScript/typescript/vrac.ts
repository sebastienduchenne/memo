//directive triple-slash        /// <reference path="..." />

//JSX
var foo = <foo>bar;

// mixin = fonction qui ajoute une fonctionnalité (membres et fonctions) à une classe

// declaration merging = merge de plusieurs déclarations avec le même nom en une seule
interface I {
    a: number;
    b: number;
}
interface I {
    c: number;
}
let i: I = { a: 1, b: 2, c: 3 };