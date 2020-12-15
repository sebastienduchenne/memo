class ClasseMere {
	private _firstname: string;
	private _lastname;
	readonly empCode: number;		// readonly, compile error if modified
	static pi: number = 3.14;

	public constructor(firstname: string, lastname: string) {
    	this._firstname = firstname;
    	this._lastname = lastname;
	}

	public sayHello(): string { // méthode d'instance
    	return "Hello " + this._firstname + ", " + this._lastname;
	}

	static m() { /* ... */ } // méthode de classe
}

class ClasseFille extends ClasseMere {
	public constructor(firstname: string, lastname: string) {
    	super(firstname, lastname);
	}
}

ClasseMere.pi; // returns 3.14
var monInstance: ClasseFille = new ClasseFille("John", "Doe");
monInstance.sayHello();