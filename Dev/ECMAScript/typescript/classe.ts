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