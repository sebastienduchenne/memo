/*
-promesse : objet qui représente une valeur qui n’est pas forcément disponible maintenant, mais qui le sera dans le futur (si tout va bien) ou pas (si l’exécution échoue)
-représente l'état d'une opération asynchrone
-Une promesse a 4 états possibles :
  -pending (en attente) : état initial, la promesse n'est ni remplie, ni rompue
  -fulfilled (tenue) : l'opération a réussi
  -rejected (rompue) : l'opération a échoué
  -settled (acquittée) : la promesse est tenue ou rompue mais elle n'est plus en attente
-Job Queue : file qui contient les fonctions dans p.then() et qui sont exécutées à la fin du tick
-composition = chainage des promesses : suite de then, catch et finally. Cela est possible car ces méthodes renvoient un objet Promise
-HOF (Higher Order Function)
-si échec et mais pas de catch, alors la promise ne sera jamais résolue
-résolue = tenue ou rompue


*** constructeur
-prend en paramètre une fonction exécuteur qui prend 2 fonctions en paramètres : resolve et reject (fournis par l'implémentation de Promise)
-l'exécuteur est exécutée immédiatement avant que le constructeur ait renvoyé l'objet créé
-si dans la promise on fait appel à reject() alors on doit mettre les 2 paramètres res et rej dans then()
-On attend de l'exécuteur qu'il démarre un travail asynchrone puis, une fois le travail terminé, appelle la fonction resolve (si tout s'est bien passé) ou la fonction reject (lorsqu'il y a eu un problème) pour définir l'état final de la promesse


*** Etapes de fonctionnement des Promises
1.run executor immédiatement contenant un appel asynchrone
2.renvoit de l'objet Promise
3.dire à l'objet Promise quoi faire en cas de succès ou d'échec avec then/catch
4.une fois l'appel asynchrone fini, la promesse passe à l'état fulfilled ou rejected
5.exécution des callbacks de succès/d'échec dans la job queue


*** Méthodes promise
-Promise.all(iterable) : renvoie un objet Promise qui est résolue lorsque l'ensemble des promesses contenues dans l'itérable passé en argument ont été résolues ou qui échoue avec la raison de la première promesse qui échoue au sein de l'itérable
-Promise.allSettled(iterable) : attendre la résolution de toutes les promesses
-Promise.race(iterable) : Renvoie une promesse qui est tenue ou rompue dès que l'une des promesses de l'itérable est tenue ou rompue avec la valeur ou la raison correspondante
-Promise.reject() : renvoie un objet Promise qui est rejeté
-Promise.resolve() : renvoie un objet Promise qui est résolu avec la valeur donnée
-Promise.any() : prend des promesses en paramètres et renvoit une promesse avec la valeur de la 1ère promesse tenue (réussie)


*** Méthode promise.prototype
-Promise.prototype.then() : 
  -ajoute des fonctions à utiliser en cas de résolution ou de rejet de la promesse
  -renvoie une nouvelle promesse qui est résolue avec la valeur de retour de la fonction utilisée en fonction de la résolution ou non
  -la fonction passée est mise dans une job queue et sera exécutée de manière asynchrone à la fin du tick
-Promise.prototype.catch() : 
  -ajoute une fonction callback à utiliser en cas de rejet de la promesse
  -Elle renvoie un objet Promise et ne traite que des cas où la promesse initiale est rejetée 
  -obj.catch(onRejected) est traduit en obj.then(undefined, onRejected)
-Promise.prototype.finally() : renvoie un objet Promise, exécute du code une fois que la promesse a été traitée, quel que soit le résultat

*/

var promise1 = new Promise(function(resolve, reject) {
    // Ici je fais mon traitement, mes appels http...
    if (true/* tout a fonctionné */) {
        resolve("Tout est OK!");
    } else {
        reject(Error("Hmm c'est embêtant…"));
    }
});
  
promise1.then(
    result => console.log(result),
    err => console.log(err)
)
.then(/* */)
.then(/* */)


`Promise​.all(iterable)`

/*
-renvoie une promesse tenue lorsque toutes les promesses de l'argument itérable sont tenues, ou une promesse rompue dès qu'une promesse de l'argument itérable est rompue avec la raison de la première promesse qui échoue au sein de l'itérable
*/

var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 2000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]


`Promise.allSettled(iterable)`

/*
-renvoie une promesse qui est résolue une fois que l'ensemble des promesses de l'itérable passée en argument sont acquittées (réussies ou rejetées). La valeur de résolution de cette promesse est un tableau d'objets dont chacun est le résultat de chaque promesse de l'itérable.
*/
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"


`Promise.race(iterable)`

/*
-renvoie une promesse qui est résolue ou rejetée dès qu'une des promesses de l'itérable passé en argument est résolue ou rejetée
*/
const promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"


/***********************************************/

const p = new Promise(
  (resolve, reject) => { // exécuteur, call stack
    console.log(1);
    resolve(2);
    console.log(3);
  }
);
  
console.log(4); // call stack

p.then(
  result => console.log(result) // appelée la success handler, job queue
);

setTimeout(() => console.log(5), 0); // message queue

console.log(6); // call stack

//=> 1 3 4 6 2 5
