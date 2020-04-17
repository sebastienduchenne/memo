/*
-un module peut regrouper plusieurs classes
-2 standarts pour écrire des modules
    CommonJS, implémentation : Node.js
    AMD (Asynchronous Module Definition), implémentation : requireJS


module : variable qui représente le module
exports : objet

Message.js
module.exports = 'Hello world';

app.js
const msg = require(message.js)
console.log(msg) // Hello world


*/

//Parameters.js
const Parameters = (param) => {
    ///…
};
module.exports = new Parameters();


//accounts.js
const accounts = {/**/}
module.exports = accounts
    
