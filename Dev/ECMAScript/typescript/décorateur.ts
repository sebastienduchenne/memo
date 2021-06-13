// déclaration s'attachant à une classe / méthode / prorpiété / paramètre et qui est évaluée permettant d'ajouter des fonctionnalités

function first() { // Decorator Factory
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}

function second() { // Decorator Factory
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called");
    };
}

class ExampleClass {
    @first()
    @second()
    method() {}
}

//appelle à method() :
    //first(): factory evaluated
    //second(): factory evaluated
    //second(): called
    //first(): called