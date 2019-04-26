/*
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




Fonction callback (de rappel)

Fonction A passée en paramètre d’une autre fonction B et qui sera appelée à un moment précis dans B. On ne passe que le nom de la fonction, cad un pointeur vers la fonction. Si on avait mis les (), la méthode aurait été exécutée. 

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

