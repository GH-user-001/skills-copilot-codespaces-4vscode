// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var https = require('https');
var http = require('http');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpsServer = https.createServer(credentials, app);
var httpServer = http.createServer(app);

var port = 3000;
var portHttps = 3001;

// Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));