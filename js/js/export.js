/*
2 types d'export : export nommé et export par défaut
*/

// exporte une fonction déclarée précédemment
export { maFonction };

// exporte une constante
export const machin = Math.sqrt(2);

export default function() {}

export default class {}





class c {}

module.exports = c;
module.exports = new c();