/*
-packager manager = 2 gestionnaires de package : npm et bower
-attention aux dépendances circulaires
-esprima = parser
-preset
-utilise la VM V8 qui rend l’exécution du JS très rapide (JIT)
-JS est basé sur les évènements ce qui fait qu’il est plus rapide (peut exécuter plusieurs tâches en même temps)
-monothread

requête non bloquante
Télécharger un fichier
    Dès que c'est terminé, afficher le fichier
Faire autre chose
-> ici afficher le fichier est une fonction callback


*** Installation 
globale : dans un seul endroit, avec -g
locale : dans le dossier de travail
préférable localement car permet d’avoir des projets qui utilisent différentes versions du paquet X, si update => casse tout
. invite de commande intéractive ou REPL


*** express
-utilise http

*branchement d'extension / middleware
= traite la requête (parser, modifier la réponse)
-avec app.use()
-


*** Liens

* tuto
https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1056866-node-js-mais-a-quoi-ca-sert
https://oncletom.io/node.js/#fnref1
https://medium.mybridge.co/node-js-top-10-open-source-projects-for-the-past-month-v-mar-2018-6047fc05b1bb
https://www.tutorialsteacher.com/nodejs/nodejs-tutorials

* project
https://github.com/Requarks/wiki
https://github.com/mrvautin/expressCart
https://medium.mybridge.co/45-amazing-node-js-open-source-for-the-past-year-v-2019-c774d750e925


*/