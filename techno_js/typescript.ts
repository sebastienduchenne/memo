/*
.  sur-ensemble de JS

*/

//Annotation  _______________________________________________________

//l  définir le type statique, optionnel (=> utilisation type dynamique)

function add(left: number, right: number): number {
     	return left + right;
}


//Interface  _______________________________________________________

interface MonInterface {
    	maVariable: string; // Création d'une signature de variable.
    	maMethode(parametre: string): void; // Création d'une signature de méthode.
}

class MaClasse2 implements MonInterface {
	maVariable: string;
	maMethode(parametre: string): void {
    	// Contenu de la méthode.
	}
}

// Précision du type de la variable en utilisant l'interface.
var instance: MonInterface = new MaClasse2();

//----------------------------------------------------------------------------

interface ICar{ 
	engine: string;
	color: string;
}

class Car implements ICar { 
	constructor (public engine: string, public color: string) {
	}
}
-//---------------------------------------------------------------------------

class Control {
	private state: any;
}

interface SelectableControl extends Control {
	select(): void; // hérite du membre mais pas de son implémentation
}

//utilse si beaucoup d’héritage



//Classe  _______________________________________________________

class MaClasseDeBase {
	private _firstname: string;
	private _lastname;

	public constructor(firstname: string, lastname: string) {
    	this._firstname = firstname;
    	this._lastname = lastname;
	}

	public direBonjour(): string {
    	return "Bonjour " + this._firstname + ", " + this._lastname;
	}
}

// La classe hérite de "MaClasseDeBase".
class MaClasse extends MaClasseDeBase {
	public constructor(firstname: string, lastname: string) {
    	// Accède au constructeur de "MaClasseDeBase".
    	super(firstname, lastname);
	}
}

// Création d'une instance de "MaClasse" et
// appel de la méthode: "direBonjour" de la classe parente : "MaClasseDeBase".
var monInstance: MaClasse = new MaClasse("Jean", "Dupond");
monInstance.direBonjour();

//Module  ___________________________________________________________________
 
//l  espace de nom, contient des classes, fonctions

declare module arithmetics {
	add(left: number, right: number): number;
	subtract(left: number, right: number): number;
	multiply(left: number, right: number): number;
	divide(left: number, right: number): number;
}


//Enumération  _______________________________________________________

enum Couleur {Blue, Rouge, Vert};

enum Couleur {Blue = 0, Rouge = 1, Vert = 2};


//Paramètres optionnels  __________________________________________________

function maFonction(monParametre?: string) {
	// On teste si le paramètre "monParametre" a une valeur.
	if (monParametre) {
    	return monParametre;
	} else {
    	// Dans le cas contraire, une valeur par défaut est retournée.
   	
	}
}


//Union  _______________________________________________________


// La fonction autorise que le paramètre soit un string ou un tableau de string
function maFonction(monParametre: string|string[]): void {
	if (typeof monParametre === "string") {
    	// Traitement de ma chaîne de caractère.
	} else {
    	// Traitement de mon tableau.
	}
}


//Alias  _______________________________________________________

type MonAlias = number;
var monNombre: MonAlias = 1;


//Async  _______________________________________________________



//####################################################################
 
function defaultScene(): Scene {
	return {
    	things: [new Plane(new Vector(0.0, 1.0, 0.0), 0.0, Surfaces.checkerboard),
             	new Sphere(new Vector(0.0, 1.0, -0.25), 1.0, Surfaces.shiny),
             	new Sphere(new Vector(-1.0, 0.5, 1.5), 0.5, Surfaces.shiny)],
    	lights: [{ pos: new Vector(-2.0, 2.5, 0.0), color: new Color(0.49, 0.07, 0.07) },
             	{ pos: new Vector(1.5, 2.5, 1.5), color: new Color(0.07, 0.07, 0.49) },
             	{ pos: new Vector(1.5, 2.5, -1.5), color: new Color(0.07, 0.49, 0.071) },
             	{ pos: new Vector(0.0, 3.5, 0.0), color: new Color(0.21, 0.21, 0.35) }],
    	camera: new Camera(new Vector(3.0, 2.0, 4.0), new Vector(-1.0, 0.5, 0.0))
	};
}


