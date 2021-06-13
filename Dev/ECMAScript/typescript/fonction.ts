//*** Paramètres optionnels : ? __________________________________________________

function maFonction(monParametre?: string) {
	// On teste si le paramètre "monParametre" a une valeur
	if (monParametre) {
    	return monParametre;
	} else {
    	// Dans le cas contraire, une valeur par défaut est retournée
	}
}


//*** Union : | _______________________________________________________

// La fonction autorise que le paramètre soit un string ou un number
function maFonction2(monParametre: string | number): void {
	if (typeof monParametre === "string") {
    	// Traitement si string
	} else {
    	// Traitement si number
	}
}


//*** Annotation  _______________________________________________________

// définir le type statique d'une variable, optionnel (=> utilisation type dynamique)

function add(left: number, right: number): number {
    return left + right;
}


//*** générique  _______________________________________________________

function firstElement<Type>(arr: Type[]): Type {
	return arr[0];
}


// void : pas de donnée retournée
function f(): void { 
    console.log('Hello')
} 

// never : fonction qui ne termine jamais
function neverEnd(): never { 
	while (true) { 
 		console.log('never ends')
	}
}
