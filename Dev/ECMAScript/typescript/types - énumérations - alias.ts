//*** Types  _______________________________________________________

var maChaineDeCaractere = "Hello World";            // déclaration sans type annotation
var maChaineDeCaractere2: string = "Hello World";   // déclaration avec type annotation
const ponyNumber: number = 0;
let pony: Pony = new Pony();

// any si on ne connait pas le type
let changing1: any = 2;

// union type
let changing2: number | boolean = 2;

// générique
const ponies: Array<Pony> = [new Pony()];

// tuple : peut contenir des valeurs de types différents
var employee: [number, string] = [1, "John"];
employee[0]; // vaut 1

// intersection avec &
interface I1 {
    v: boolean;
}

interface I2 {
    a: string;
}

type t = I1 & I2;  // nouveau type qui rassemble les interfaces I1 et I2


//*** Enumération  _______________________________________________________

enum Couleur {Blue, Rouge, Vert};

enum Couleur {Blue = 0, Rouge = 1, Vert = 2};
//utilisation : Couleur.Blue

let color: 'blue' | 'red' | 'green';
// we can only give one of these values to `color`
color = 'blue';

type Color = 'blue' | 'red' | 'green';
const ponyColor: Color = 'blue';


//*** type alias  _______________________________________________________
// = donner un nom à un type
// on ne peut pas modifier un type après sa création
// on peut étendre un type avec une intersection &
type ID = number | string;


// symbol : immuable et unique, peut être utilisé comme clé
const symb = Symbol();
let obj = {
    [symb]: "value",
};
console.log(obj[symb]); // "value"
