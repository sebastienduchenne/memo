//import { MaClass } from "./file";

class ClasseMere  /* implements uneInterface */ {
	private _firstname: string;		// private
	protected _lastname: string;	// protected : accessible aussi dans les classes filles
	public age: number;				// public
	readonly empCode: number;		// readonly, compile error if modified
	static pi: number = 3.14;		// membre de classe, accessible avec ClasseMere.pi

	public constructor(firstname: string, lastname: string) {
    	this._firstname = firstname;
    	this._lastname = lastname;
	}

	// méthode d'instance
	public sayHello(): string {
    	return "Hello " + this._firstname + ", " + this._lastname;
	}

	// méthode de classe
	static m() { /* ... */ }
}

class ClasseFille extends ClasseMere {
	public constructor(firstname: string, lastname: string) {
    	super(firstname, lastname);
	}
}

ClasseMere.pi; // returns 3.14
var monInstance: ClasseFille = new ClasseFille("John", "Doe");
monInstance.sayHello();


export { ClasseMere /* as classe */};


//---------------------------------------------------------------


class Box<Type> {
	contents: Type;

	constructor(value: Type) {
	    this.contents = value;
	}
}
  
const b = new Box("hello!");
//    ^ = const b: Box<string>


class Generic<A,B> { 
    private a: A;
    private b: B;

    setAB(a: A, b: B): void { 
        this.a = a;
        this.b = b;
    }

    log():void { 
        console.log(`a = ${this.a} - b = ${this.b}`);
    }
}

let kvp1 = new Generic<number, string>();
kvp1.setAB(5, "John");
kvp1.log(); //Output: a = 5, b = John
