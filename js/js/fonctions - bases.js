/*
en JS, les fonctions sont des objets de 1er ordre. Cad elles sont traitées comme un objet et peuvent donc être stockées dans une variable

https://medium.com/codeshake/pour-les-jedis-javascript-%C3%A9pisode-i-au-coeur-des-fonctions-partie-1-8b2cd1cab002

L’argument “arguments”

Cet objet est une sorte de collection de tous les arguments passés à la fonction.

*/

function func(str = "", nbr = NaN, bool = false, obj = null) {
    return {
        str:  str,
        nbr:  nbr,
        bool: bool,
        obj:  obj
    };
};
func("Hello World");

//> Object {str: "Hello World", nbr: NaN, bool: false, obj: null}

var v = function(p){
    console.log(p)
};
v("coucou");






une fonction est un objet stocké en mémoire
= objet de 1ère classe, cad on peut envoyer une fonction en paramètre d'une autre fonction
le nom de la fonction est une variable qui contient une référence vers la fonction stockée en mémoire. On peut donc : 
assigner une fonction à une variable
passer la fonction en paramètre d’une fonction (cad la référence, = callback)
mettre des () pour l’exécuter
dans une fonction, on peut créer une variable locale de même nom qu’une variable en dehors de la fonction sans que cette dernière ne soit modifiée
certaines fonctions possèdent des arguments facultatifs : on n’est pas obligé de spécifier ces arguments lors de l’appel de  la fonction, l’argument sera donc de type undefined
toute fonction crée une fermeture
lors de l’appel d’une fonction, les arguments vont être mis dans les variables spécifiés dans la fonction. Si il y a plus d’argument lors de l’appel, ils ne peuvent pas être mis dans une variable et sont donc rejetés. Si il n’y en a pas assez, les variables non spécifiées sont mise en undefined. Les arguments facultatifs doivent donc être mis après ceux obligatoires.
Pour tester undefined : if(typeof nomVar === ‘undefined’) {}


const Parameters = (param) => {...};


