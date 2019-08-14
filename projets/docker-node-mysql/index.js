var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost", //IP address of the MySQL container
  user: "database",
  password: "database",
  database: "events"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to MySQL container");
});

/*
const sql = "SELECT * FROM events";
let events = "";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result[0]['titre']);
    events = result[0]['titre']
});
*/

const sql = "SELECT NOW();";
let date = '';
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result[0]);
    date = result[0]
});



var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello World !' + date);
});

server.listen(8080);
