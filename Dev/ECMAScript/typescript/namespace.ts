// fichier StringUtility.ts
namespace NamespaceName 
{
    export function function1(): boolean {
        return true;
    }

    export function function2(): boolean {
        return true;
    }
}

//------------------------------------
//fichier d'usage du namespace

// import avec /// < reference=xxx />
/// <reference path="NamespaceName.ts" /> 
NamespaceName.function1();