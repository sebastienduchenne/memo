var express = require('express');
var fs = require("fs");
const eventsController = require('./controller');

var hostname = 'localhost';
var port = 3000;

let events;
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    events = data;
});

var app = express();

app.get('/events', function (req, res) {
    console.log( "GET /events" );
    eventsController.list(req, res)
});

app.get('/events/:eventId', function (req, res) {
    console.log( "GET /events/:eventId - id:"+req.params.eventId);
    eventsController.getById(req, res)
});

app.post('/events/:eventId', function (req, res) {
    console.log( "POST /events/:eventId - id:"+req.params.userId );
    eventsController.getById(req, res)
});

app.patch('/events/:eventId', function (req, res) {
    console.log( "PATCH /events/:eventId - id:"+req.params.userId );
    eventsController.patchById(req, res)
});

app.delete('/events/:eventId', function (req, res) {
    console.log( "DELETE /events/:eventId - id:"+req.params.userId );
    eventsController.removeById(req, res)
});



//listen
app.listen(port, hostname, function(){
      console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
