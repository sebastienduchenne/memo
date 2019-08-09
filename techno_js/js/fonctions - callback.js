/*
Fonction callback (de rappel)

Une fonction de rappel est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.

*/

function callback(name) {
    alert('Bonjour ' + name);
}
  
function processUserInput(callback) {
    var name = prompt('Entrez votre nom.');
    callback(name);
}

processUserInput(callback);

//---------------------------------------------------

function hello(onBefore,onAfter) {
    if(onBefore) {        onBefore();    }
    console.log("bonjour");
    if(onAfter) {        onAfter();    }
}
// On appel la fonction
hello(
    function(){    console.log("avant"); },
    function(){    console.log("après"); }
);
//Resultat :
// avant
// bonjour
// après

