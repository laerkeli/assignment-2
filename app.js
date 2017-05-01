var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var GoogleAuth = require('google-auth-library');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.set('port', 8080);


app.get('/', function(req, res) {
  console.log("GET the homepage");
  res
  .status(200)
  .sendFile(path.join(__dirname, 'index.html'));
});


var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
console.log('Magic happens on port ' + port);
});