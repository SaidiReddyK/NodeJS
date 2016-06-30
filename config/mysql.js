
var mysql = require('mysql'),
	config = require('./env/' + process.env.NODE_ENV);;

exports.executeQuery = function(sql, resultHandler) {
	
	// create connection instance
	var connection = mysql.createConnection(config.mySqlConfig);

	// open connection
	connection.connect();

	//execute the query
	connection.query(sql, resultHandler);

	// return connection to manage status
	return connection;
}