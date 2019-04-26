Promesse / promise 

Une promesse est un objet qui représente une valeur qui n’est pas forcément disponible maintenant, mais qui le sera dans le futur (si tout va bien) ou pas (si l’exécution échoue).
objet qui est renvoyé et auquel on attache des callbacks


var promise = new Promise(function (resolve, reject) {
    // Ici je fais mon traitement, mes appels http…

    if (/* tout a fonctionné */) {
        resolve("Tout est OK!");
    }
    else {
        reject(Error("Hmm c'est embêtant…"));
    }
});

Le constructeur de la promesse prend en argument un callback avec deux paramètres : resolve et reject qui seront appelés respectivement si le traitement réussi ou échoue.
Une promesse peut avoir 3 états :
Resolved : tout s’est bien déroulé => on appelle resolve.
Rejected : une erreur est survenue => on appelle reject
Pending : si elle n’est ni resolved ni rejected (elle est en attente du résultat)

