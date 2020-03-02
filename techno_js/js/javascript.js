/*
*** caractéristiques
-paradigme objet, impératif et fonctionnel
-basé prototype
-typage faible mais dynamique
-portée statique
-le moteur de JS est monothread, il ne peut interpréter qu’une seule instruction à la fois
-toutes les expressions sont de type référence = leur évaluation produit une référence vers une donnée. La référence se nomme le référent de l’expression et la donnée le référé de l’expression.
-gestion de la mémoire automatique, garbage collector
-fonction : objet de 1ere classe
-les variables déclarées avec var sont hoisted to the top
-dans une fonction, s'il manque un paramètre, il prend la valeur "undefined"
-les variables sont passées par valeur, et les objets par référence


*** notions
-moteur v8
-prototype
-fonction fléchée
-héritage et polymorphisme
-itération
-variables
-default
-destructuring assignment


*** bonnes pratiques
-éviter : variable globale, new Object(), ==, eval()
-toujours déclarer les variables locales avec let ou var
-déclarer les variables en haut des scripts ou fonctions
-initialiser les variables lors de la déclaration
-ne jamais déclarer d'objet nombre / string / booléen
-attention aux conversions automatiques
-utiliser le === pour comparer des valeurs
-utiliser les paramètres par défaut
-terminer les switch par default


*** conventions
-variable en camelCase
-espace autour des opérateurs
-indentation : 2 espaces
-finir les instructions avec un ;
-pas de , à la fin du dernier paramètre d'un objet
-lignes de 80 caractères max, break la lignes si possible
-utiliser le lower case pour les noms de fichiers car certains programmes sont case sensitive



*/

return; //return undefined

//concaténation et addition
var x = 10 + 5;          // the result in x is 15
var y = 10 + "5";        // the result in y is "105"

//string sur plusieurs lignes
var x =
"Hello World!";

var x = "Hello \
World!";

//ne jamais faire d'instruction return sur plusieurs lignes car ajout de ; automatiquement après return

//si on utilise des index nommés pour un tableau, celui-ci sera transformé en un objet standart. Cela supprimera les méthodes et propriétés

//check
if (typeof myObj !== "undefined" && myObj !== null){}