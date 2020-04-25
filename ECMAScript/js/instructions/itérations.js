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

//for ... in
for (val in values) { }

//do ... while
var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);


//for ... of
function* foo(){
  yield 1;
  yield 2;
}

for (let o of foo()) {
  console.log(o);
  // expected output: 1

  break; // closes iterator, triggers return
}

//for await ... of : parcourt les objets itérables asynchrones


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
