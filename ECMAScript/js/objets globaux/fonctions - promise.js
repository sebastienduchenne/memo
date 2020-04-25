/*
-promesse : objet qui représente une valeur qui n’est pas forcément disponible maintenant, mais qui le sera dans le futur (si tout va bien) ou pas (si l’exécution échoue). Le constructeur prend une fonction qui prend 2 paramètres pour la complétion ou l'échec. Une promesse a 4 états :
-pending
-fulfilled
-rejected
-settled
*/

var promise = new Promise(function (resolve, reject) {
  // Ici je fais mon traitement, mes appels http…

  if (/* tout a fonctionné */) {
      resolve("Tout est OK!");
  }
  else {
      reject(Error("Hmm c'est embêtant…"));
  }
});

/*
*** constructeur
prend en paramètre une fonction exécuteur qui prend 2 fonctions en paramètres : resolve et reject (fournit par l'implémentation de Promise). Cette fonction est exécutée avant que le constructeur Promise ait renvoyé l'objet créé.
Resolve est une fonction qui correspond à celle envoyé dans p.then(res)
Reject est une fonction qui correspond à celle envoyé dans p.then(res, rej)
Donc si dans la promise on fait appel à reject alors on doit mettre les 2 paramètres res et rej dans then().
On attend de l'exécuteur qu'il démarre un travail asynchrone puis, une fois le travail terminé, appelle la fonction resolve (si tout s'est bien passé) ou la fonction reject (lorsqu'il y a eu un problème) pour définir l'état final de la promesse.

appel exécuteur > constr renvoit promise > then(res,rej) > ... > appel resolve/reject

*** Méthodes promise
-Promise.all(iterable) : renvoie une promesse qui est résolue lorsque l'ensemble des promesses contenues dans l'itérable passé en argument ont été résolues ou qui échoue avec la raison de la première promesse qui échoue au sein de l'itérable
-Promise.race(iterable) : Renvoie une promesse qui est tenue ou rompue dès que l'une des promesses de l'itérable est tenue ou rompue avec la valeur ou la raison correspondante.
-Promise.reject() : renvoit une promise rejetée
-Promise.resolve() : renvoie un objet Promise qui est résolu avec la valeur donnée.

*** Méthode promise.prototype
-Promise.prototype.then() : renvoit une promesse. Elle peut prendre jusqu'à deux arguments qui sont deux fonctions callback
-Promise.prototype.catch() : renvoit une promesse et ne traite que des cas où la promesse initiale est rejetée. obj.catch(onRejected) est traduit en obj.then(undefined, onRejected))
-Promise.prototype.finally()

composition : chainage de then et catch
*/

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('OK');//renvoit une promise qui est tenue (résolue) avec la valeur donnée
	//reject('KO');//Renvoie un objet Promise qui est rompue avec la raison donnée.
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log("1-"+promise1); // expected output: [object Promise]

////////////////////////////////

promise.then(successCallback, failureCallback);//callback d'affichage

//Promise​.all()
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 2000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]


/////////////////// ASYNC AWAIT ///////////////////////////////////////

/*
- await = suspendre l’exécution jusqu’à ce que la promise soit réglée, utilisable dans les fonctions marquées de async. Si, dans une fonction async A, on appelle une fonction B avec await et que B n’est pas une promesse, alors B est convertie en promesse
- async : une fonction définie avec le mot clé async renvoie systématiquement une promesse : si une erreur est levée pendant l’exécution de la fonction, la promesse est rejetée, et si une valeur est retournée, la promesse est résolue avec cette valeur.

*/

function getOTC() {
  return new Promise(async (resolve) => {
    //sans async await
    axios.get(urls.otc[parameters.env]).then((response) => {
      const ch = cheerio.load(response.data);
      const otc = ch('#code-1').text();
      resolve(otc);
    })
    .catch((e) => {
      console.log(e)
    });

    //avec async await
    const val = await axios.get(urls.otc[parameters.env]);
    const ch = cheerio.load(val.data);
    const otc = ch('#code-1').text();
    resolve(otc);
  });
}

//sans async-await
it('should enter OTC', () => {
  const promiseOTC = new Promise(resolve => resolve(lost.getOTC())); //il faut créer une promise
  promiseOTC.then(
    otc => console.log(otc),
    error => console.log(error)
  );
})

//avec async-await
it('should enter OTC', async () => { //async
  try {
    const OTC = await lost.getOTC(); //OTC est une promesse, et on s'arrête qu'elle n'a pas été remplie
  } catch (error){
    console.log(error)
  } finally{
    //...
  }

  lost.enterOTC(OTC);
})


async function getNombreAsynchrone1() {/* traitement asynchrone (appel d’une API HTTP) */}
async function getNombreAsynchrone2() {/* traitement asynchrone (appel d’une API HTTP) */}

async function getAdditionAsynchrone() {
  const nombre1 = await getNombreAsynchrone1();
  const nombre2 = await getNombreAsynchrone2();
  return nombre1 + nombre2;
}


/*
https://javascript.info/promise-basics
https://stackoverflow.com/questions/3884281/what-does-the-function-then-mean-in-javascript
https://blog.xebia.fr/2017/11/14/asyncawait-une-meilleure-facon-de-faire-de-lasynchronisme-en-javascript/
https://javascript.developpez.com/actu/102019/Apprendre-les-mecanismes-de-base-de-l-asynchrone-en-JavaScript-un-tutoriel-de-Yahiko/
https://javascript.developpez.com/actu/146280/Comprendre-les-Promises-en-JavaScript-TypeScript-article-de-yahiko/
https://medium.com/codeshake/pour-les-jedis-javascript-%C3%A9pisode-i-au-coeur-des-fonctions-partie-1-8b2cd1cab002
https://www.guru99.com/node-js-promise-generator-event.html
*/