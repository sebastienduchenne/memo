var express = require('express');
var fs = require("fs");

var hostname = 'localhost';
var port = 3000;

var app = express();
/*
var myRouter = express.Router();

myRouter.route('/events')
.get(function(req,res){
	res.json({message : "Liste toutes les piscines de Lille Métropole", methode : req.method});
})
.post(function(req,res){
      res.json({message : "Ajoute une nouvelle piscine à la liste", methode : req.method});
})
.put(function(req,res){
      res.json({message : "Mise à jour des informations d'une piscine dans la liste", methode : req.method});
})
.delete(function(req,res){
      res.json({message : "Suppression d'une piscine dans la liste", methode : req.method});
});
*/
app.get('/listUsers', function (req, res) {
      fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
         console.log( data );
         res.end( data );
      });
})

/*app.get('/listUsers', function (req, res) {
      bd.get()
})*/

//app.use(myRouter);

app.listen(port, hostname, function(){
      console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
