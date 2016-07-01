
var config = require('./env/' + process.env.NODE_ENV);
	mongoose = require('mongoose');

module.exports = function() {

	// connect to mongodb database based on configured connection string
	var db = mongoose.connect(config.mongoDbString);

	// load schema and map model/collection
	require('../models/product.server.model')
	
	return db;
}