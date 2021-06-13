// namespace : regrouper des fonctionnalités tel que des interfaces, classes, fonctions et variables

// fichier Utility.ts
namespace Utility {
    export function function1(): boolean {
        return true;
    }

    export function function2(): boolean {
        return true;
    }
}

//------------------------------------
//fichier d'usage du namespace

// import du namespace avec '/// < reference="Utility.ts" />'
/// <reference path="Utility.ts" /> 
Utility.function1();