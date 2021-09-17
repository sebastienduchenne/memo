let fs = require('fs');
let https = require('https');
let express = require('express');
let app = express();


https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(443);


app.get('/', function(req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Hello world</h1>');
});

/*
récupérer un certificat SSL
    -à acheter auprès de compagnies certifiées
    -à générer soi-même avec openssl (créer key.pem et cert.pem)
*/