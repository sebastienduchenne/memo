/*
-x++ : opérateur d'incrémentation, renvoit la valeur avant puis fait l'incrémentation
-++x : fait l'incrémentation puis renvoit la valeur
-% : reste
*/


//concaténation et addition
var x = 10 + 5;          // the result in x is 15
var y = 10 + "5";        // the result in y is "105"


// '===' versus '=='
2 == "2" // true, une conversion est effectuée si nécessaire
2 === "2" // false, pas de conversion
true == 1; //true, because 'true' is converted to 1 and then compared

//typeof
console.log(typeof 42);// expected output: "number"

//in
var car = {make: 'Honda', model: 'Accord', year: 1998};
console.log('make' in car);// expected output: true

//instanceof
console.log(string instanceof Object);

//label, continue, break
var str = "";

loop1:
for (var i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
  if (i === 5) {
    break;
  }
}

//try catch, throw
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}

try {
  getRectArea(3, 'A');
}
catch(e) {
  console.log(e);
  // expected output: "Parameter is not a number!"
}

//debugger
debugger; // permet de démarrer un débogueur (s'il existe)


return; //return undefined

/*
-types
  Number
  String
  Boolean
  Symbol (apparu dans ES2015)
  Object
      Function
      Array
      Date
      RegExp
  null
  undefined
*/


//check
if (typeof myObj !== "undefined" && myObj !== null){}