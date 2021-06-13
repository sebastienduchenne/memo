/*
-découper une application
-extension .mjs
-chargement : <script type="module" src="main.mjs"></script>
-import et export ne peuvent être utilisés que dans un module


*************** export *********************

2 types d'export : 
    -export nommé : exporter plusieurs valeurs
    -export par défaut : peut être importé avec n'importe quel nom
*/

// *** export nommé

export { maFonction }; // exporte une fonction déclarée précédemment
export { cube, machin };
export const machin = Math.sqrt(2); // exporte une constante
export * from 'mod'; // n'exporte pas le défaut depuis le module importé
export { maFonction as fonction1 // renommer un export
    maVariable as variable1 };

//*** export par défaut
//il n'est pas possible d'utiliser var, let ou const après un export par défaut
export default function() {}
export default class {}
export {default} from 'mod'; //exporter le défaut


/*************** import *********************

-il est obligatoire d'utiliser le même nom de l'objet correspondant
-on peut charger un élément en particulier dans le module
-le chargement peut être asynchrone
-Les modules importés sont interprétés en mode strict
*/

import exportParDefaut from "nom-module";
import * as nom from "nom-module"; //intégralité du contenu d'un module
import { export } from "nom-module"; //un seul export depuis un module
import { export as alias } from "nom-module";
import { export1 , export2 } from "nom-module"; //plusieurs éléments
import { export1 , export2 as alias2 , [...] } from "nom-module";
import exportParDefaut, { export [ , [...] ] } from "nom-module";
import exportParDefaut, * as nom from "nom-module";
import "nom-module";
import { toto , truc } from "nom-module/chemin/vers/fichier-non-exporte";


//import dynamique
let promesse = import("nom-module");

import('/modules/mon-module.js')
.then(module => {
  module.loadPageInto(main);
})
.catch(err => {
  main.textContent = err.message;
});


//*************** import.meta *********************
//contient des informations à propos du module