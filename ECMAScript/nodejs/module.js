/*
-module : variable qui représente le module
-un module peut regrouper plusieurs classes
-2 standarts pour écrire des modules
    -CommonJS, implémentation : Node.js
    -AMD (Asynchronous Module Definition), implémentation : requireJS


-exports : rendre des propriétés et des méthodes disponibles en dehors du module
-require : le chemin est relatif au script et non depuis le dossier où le terminal exécute le script


*/



//*** exports

//Parameters.js
const Parameters = (param) => {
    ///…
};
module.exports = new Parameters();


//accounts.js
const accounts = {/**/}
module.exports = accounts
    
