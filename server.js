
process.env.NODE_ENV = process.env.NODE_ENV || 'DEVELOPMENT';

var express = require('./config/express');
var mongooseDb = require('./config/mongoose');

var db = mongooseDb();

//get instance of configure express app
var app = express();

app.listen(3000, function() {
	console.log('MEAN app is up and running @3000');
});