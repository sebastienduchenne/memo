/*
2 types d'export : 
    -export nommé
    -export par défaut
*/

// *************** export nommé ************

// exporte une fonction déclarée précédemment
export { maFonction };

// exporte une constante
export const machin = Math.sqrt(2);



//**************** export par défaut *********
export default function() {}

export default class {}


//*************** import *********************

//Importer l'intégralité du contenu d'un module
import * as monModule from '/modules/mon-module.js';

//Importer un seul export depuis un module
import {monExport} from '/modules/mon-module.js';

//Importer plusieurs éléments exportés depuis un module
import {machin, truc} from '/modules/mon-module.js';