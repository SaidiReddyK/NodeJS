
var express = require('express'),
	morgan = require('morgan'), 				 // for logging
	compress = require('compression'),			 // for zipping
	bodyParser = require('body-parser'),		 // for parsing the request body
	methodOverride = require('method-override'), // for supporting all HTTP 
	ejs = require('ejs'),
	statics = require('serve-static'),
	session = require('express-session'),		 // session manager
	config = require('./env/' + process.env.NODE_ENV);

module.exports = function() {
	var app = express();
	app.use(bodyParser.urlencoded({ extended : true }));
 	app.use(bodyParser.json());
	app.use(methodOverride());

	if(process.env.NODE_ENV == 'DEVELOPMENT') {
		app.use(morgan('dev'));
	} else {
		app.use(compress());
	}

	//configure view engine
	app.set('view engine', 'ejs');
	app.set('views', './views');

	//configure session support
	app.use(session({
		saveUninitialized : true,
		secret : config.sessionSecret,
		resave : true
	}));

	//configure for static resources to serve
	app.use(statics('./public'));

	//configure routes
	var route = require('../routes/index.server.routes');
	route(app);
	require('../routes/products.server.route')(app);
	require('../routes/customers.server.restroutes')(app);

	//return express app instance
	return app;
}