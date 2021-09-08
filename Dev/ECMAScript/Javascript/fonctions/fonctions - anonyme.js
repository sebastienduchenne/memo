/*
Fonction anonyme
= fonction qui ne porte pas de nom
-permet d’isoler le code, on peut créer des variables sans aucune incidence sur le reste du code car elles sont détruites lorsque la méthode a fini d’être exécuté
-utilisé pour les fonctions qui ne sont appelées qu’une fois
-IIFE= immediately invoked fonction expression = qui sont exécutées immédiatement, une seule fois
-les fonctions sont des variables et peuvent donc être passées en paramètres d’une méthode ou mises dans une variable de retour d’une fonction
*/

setTimeout(function () {
    alert('Trois secondes se sont écoulées.');
}, 3000);
