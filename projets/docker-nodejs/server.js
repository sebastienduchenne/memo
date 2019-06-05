var express = require('express');
var fs = require("fs");

var hostname = 'localhost';
var port = 3000;

let events;
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
 events = data;
});

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
app.get('/events', function (req, res) {
    console.log( "GET /events" );
    res.end( events );
});

app.get('/events/:eventId', function (req, res) {
    console.log( "GET /events/:eventId - id:"+req.params.eventId);
    res.status(201).send( "ghlgfg" );
});

app.post('/events/:eventId', function (req, res) {
    console.log( "POST /events/:eventId - id:"+req.params.userId );

});

app.patch('/events/:eventId', function (req, res) {
    console.log( "PATCH /events/:eventId - id:"+req.params.userId );

});

app.delete('/events/:eventId', function (req, res) {
    console.log( "DELETE /events/:eventId - id:"+req.params.userId );

});


//listen
app.listen(port, hostname, function(){
      console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
