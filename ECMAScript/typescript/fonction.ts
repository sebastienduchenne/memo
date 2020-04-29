//*** Paramètres optionnels  __________________________________________________

function maFonction(monParametre?: string) {
	// On teste si le paramètre "monParametre" a une valeur.
	if (monParametre) {
    	return monParametre;
	} else {
    	// Dans le cas contraire, une valeur par défaut est retournée.
	}
}


//*** Union  _______________________________________________________

// La fonction autorise que le paramètre soit un string ou un tableau de string
function maFonction2(monParametre: string|string[]): void {
	if (typeof monParametre === "string") {
    	// Traitement de ma chaîne de caractère.
	} else {
    	// Traitement de mon tableau.
	}
}


//*** Annotation  _______________________________________________________

// définir le type statique, optionnel (=> utilisation type dynamique)

function add(left: number, right: number): number {
    return left + right;
}
