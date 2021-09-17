const express = require('express')
var morgan = require('morgan'); // Charge le middleware de logging

const app = express()

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('hello world')
})

//plusieurs fonctions de rappel
app.get('/example/b', function (req, res, next) {
  // actions
  next(); //important
}, function (req, res) {
  res.send('Hello from B!');
});

//route dynamique + utilisation template ejs
app.get('/:var', function(req, res) {
  res.render('template.ejs', {etage: req.params.var});
});

app.route('/book') // gérer le routage d'un chemin en particulier
  .get( (req, res) => res.send('Get a random book') )
  .post( (req, res) => res.send('Add a book') )
  .put( (req, res) => res.send('Update the book') );


//middleware
app.use(morgan('combined')) // Active le middleware de logging
.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
.use(function(req, res){ // Répond enfin
    res.send('Hello');
});

app.use( (req, res, next) => { // gestion des erreurs avant app.listen
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable !');
});

const server = app.listen(3000, () => console.log('Server ready'))
