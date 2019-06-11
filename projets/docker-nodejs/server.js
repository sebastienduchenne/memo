'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});
console.log("--------------------------")
app.get('/events', (req, res) => {
  res.send('events\n');
});

app.listen(PORT, HOST, function(){
  console.log(`Running on http://${HOST}:${PORT}`);
});
