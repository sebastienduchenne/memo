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
-callback
-closure
-promise
-map
-maps
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


*/