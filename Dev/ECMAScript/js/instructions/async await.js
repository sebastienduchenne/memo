/*
- await : suspendre l’exécution d'une fonction asynchrone jusqu’à ce que la promise soit résolue. Si, dans une fonction async A, on appelle une fonction B avec await et que B n’est pas une promesse, alors B est convertie en promesse
- async : une fonction définie avec le mot clé async renvoie systématiquement une promesse : si une erreur est levée pendant l’exécution de la fonction, la promesse est rejetée, et si une valeur est retournée, la promesse est résolue avec cette valeur

*/

async function getOTC() {
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


//******************************************/


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


//******************************************/


async function getNombreAsynchrone1() {/* traitement asynchrone (appel d’une API HTTP) */}
async function getNombreAsynchrone2() {/* traitement asynchrone (appel d’une API HTTP) */}

async function getAdditionAsynchrone() {
  const nombre1 = await getNombreAsynchrone1();
  const nombre2 = await getNombreAsynchrone2();
  return nombre1 + nombre2;
}

//******************************************/


async function f2() {
  var y = await 20;
  console.log(y); // 20
}
console.log(1);
f2();
console.log(2);

// console : 1 2 20