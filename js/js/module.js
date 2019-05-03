/*
-un module peut regrouper plusieurs classes
-2 standarts pour écrire des modules
    CommonJS, implémentation : Node.js
    AMD (Asynchronous Module Definition), implémentation : requireJS
*/

//Parameters.js
const Parameters = (param) => {
    ///…
};
module.exports = new Parameters();


//accounts.js
const accounts = {/**/}
module.exports = accounts
    