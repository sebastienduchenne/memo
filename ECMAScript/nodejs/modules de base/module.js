/*
-module : variable qui représente le module
-un module peut regrouper plusieurs classes
-2 standarts pour écrire des modules
    -CommonJS, implémentation : Node.js
    -AMD (Asynchronous Module Definition), implémentation : requireJS


-exports : rendre des propriétés et des méthodes disponibles en dehors du module
-require : le chemin est relatif au script et non depuis le dossier où le terminal exécute le script

-2 moyens : 
    -exports : l'objet à exporter est une propriété de 'exports'
    -module.exports : exporte un seul objet

const car = { brand: 'Ford', model: 'Fiesta' }
module.exports = car
//..in the other file
const car = require('./car')

    OU

const car = { brand: 'Ford', model: 'Fiesta' }
exports.car = car
//..in the other file
const items = require('./items')
items.car
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
    
