//Interface  _______________________________________________________

interface MonInterface {
    maVariable: string; // Création d'une signature de variable
    readonly empCode: number;
    maMethode(parametre: string): void; // Création d'une signature de méthode
}

class MaClasse2 implements MonInterface {
    maVariable: string;
    empCode: number;
    maMethode(parametre: string): void { /* ... */ }
}

// Précision du type de la variable en utilisant l'interface
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

//---------------------------------------------------------------------------

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void; // hérite du membre mais pas de son implémentation
}

// utilise si beaucoup d’héritage

//*** Des fonctions en propriété   _______________________________________________________

interface CanRun {
    run(meters: number): void;
}

function startRunning(pony: CanRun): void {
    pony.run(10);
}

const ponyOne = {
    run: meters => logger.log(`pony runs ${meters}m`)
};

startRunning(ponyOne);

//------------------------------------ readonly ------------------------------------

interface IEmployee {
    empCode: number;
    empName: string;
}

let emp1: Readonly<IEmployee> = {
    empCode:1,
    empName:"Steve"
}
