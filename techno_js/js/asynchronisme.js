/*

Le terme asynchrone fait référence au comportement de certains traitements dans JavaScript qui peuvent être délégués en dehors du moteur.

4 éléments : pile d’exécution, API du systèmes hote, la file des callbacks et la boucle des évènements
-pile d’exécution = les appels au fonction. Un niveau de la pile n'est retiré que lorsque la fonction appelée a terminé son exécution
-API du systèmes hote = fournit toute une panoplie de fonctions et d'objets (API) au moteur JavaScript
-file des callbacks = Une fois que le traitement asynchrone est terminé ou qu'un événement particulier survient, la callback qui a été fournie en paramètre est insérée dans la file d'attente des callbacks avant d'être prise en compte par la boucle des événements.
-boucle des évènements = La boucle des événements a pour but de surveiller l'état de la pile d'exécution. Si cette dernière est vide d'instruction à exécuter, la boucle des événements déplacera la callback en attente dans la file vers la pile d'exécution, permettant à cette callback d'être ainsi exécutée.


https://blog.oxiane.com/2018/01/29/lasynchrone-en-javascript/
https://www.supinfo.com/articles/single/5640-programmation-asynchrone-javascript
https://javascript.developpez.com/actu/102019/Apprendre-les-mecanismes-de-base-de-l-asynchrone-en-JavaScript-un-tutoriel-de-Yahiko/
https://www.developpez.net/forums/blogs/676693-yahiko/b1546/bases-lasynchrone-javascript/


*/
