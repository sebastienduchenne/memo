var express = require('express');

var hostname = '0.0.0.0';
var port = 3000;

var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', function (req, res) {
    console.log( "GET /" );
/*
    let events = "";
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "username",
        password: "password"
    });
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
    const sql = "SELECT * FROM events"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result[0]['titre']);
        events = result[0]['titre']
    });
    */

    //res.sendFile(events);
    res.sendFile('coucou');
});


//listen
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
