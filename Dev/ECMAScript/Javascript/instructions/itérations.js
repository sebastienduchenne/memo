/*
-for
-for ... in
-for ... of
-for await ... of
-do ... while
-switch
-while
*/

//for
for (var i = 0; i < 9; i++) { }

//for ... in : itérer sur les propriétés énumérables d'un objet
const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


//for ... of : créer une boucle Array qui parcourt un objet itérable
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

//for await ... of : parcourt les objets itérables asynchrones


//do ... while
var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);


//switch
var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
