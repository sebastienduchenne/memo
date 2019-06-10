var express = require('express');
const eventsController = require('./controller');

var hostname = 'localhost';
var port = 3000;

var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/events', function (req, res) {
    console.log( "GET /events" );
    eventsController.list(req, res)
});

app.get('/events/:eventId', function (req, res) {
    console.log( "GET /events/:eventId - id:"+req.params.eventId);
    eventsController.getById(req, res)
});

app.post('/events', function (req, res) {
    console.log( "POST /events - title:"+req.body.title );
    
    eventsController.create(req, res)
});

app.post('/events/:eventId', function (req, res) {
    console.log( "PATCH /events/:eventId - id:"+req.params.eventId );
    eventsController.updateById(req, res)
});

app.delete('/events/:eventId', function (req, res) {
    console.log( "DELETE /events/:eventId - id:"+req.params.eventId );
    eventsController.removeById(req, res)
});



//listen
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
