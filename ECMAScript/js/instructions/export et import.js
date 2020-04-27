//export
//import
//import.meta

//*************** export *********************

/*
2 types d'export : 
    -export nommé
    -export par défaut
*/

// *** export nommé

// exporte une fonction déclarée précédemment
export { maFonction };

// exporte une constante
export const machin = Math.sqrt(2);


//*** export par défaut
export default function() {}

export default class {}


//*************** import *********************

import exportParDefaut from "nom-module";
import * as nom from "nom-module";
import { export } from "nom-module";
import { export as alias } from "nom-module";
import { export1 , export2 } from "nom-module";
import { export1 , export2 as alias2 , [...] } from "nom-module";
import exportParDefaut, { export [ , [...] ] } from "nom-module";
import exportParDefaut, * as nom from "nom-module";
import "nom-module";
import { toto , truc } from "nom-module/chemin/vers/fichier-non-exporte";
let promesse = import("nom-module");


//Importer l'intégralité du contenu d'un module
import * as monModule from '/modules/mon-module.js';

//Importer un seul export depuis un module
import {monExport} from '/modules/mon-module.js';

//Importer plusieurs éléments exportés depuis un module
import {machin, truc} from '/modules/mon-module.js';


//*************** import.meta *********************
//contient des informations à propos du module