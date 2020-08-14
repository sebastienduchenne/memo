//*** Types  _______________________________________________________

var maChaineDeCaractere: string = "Hello World";
const ponyNumber: number = 0;
let pony: Pony = new Pony();
let changing1: any = 2; // any si on ne connait pas le type
let changing2: number | boolean = 2;

const ponies: Array<Pony> = [new Pony()]; // générique


//*** Enumération  _______________________________________________________

enum Couleur {Blue, Rouge, Vert};

enum Couleur {Blue = 0, Rouge = 1, Vert = 2};
//utilisation : Couleur.Blue

let color: 'blue' | 'red' | 'green';
// we can only give one of these values to `color`
color = 'blue';

type Color = 'blue' | 'red' | 'green';
const ponyColor: Color = 'blue';


//*** Alias  _______________________________________________________

type MonAlias = number;
var monNombre: MonAlias = 1;

