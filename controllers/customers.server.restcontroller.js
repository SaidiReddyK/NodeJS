
var mysql = require('../config/mysql');

exports.getAll = function(req, resp, next) {

	var sql = "SELECT * FROM Customers";
	var cnn = mysql.executeQuery(sql, function(err, rows, fields) {
		// error in db request
		if (err) { 
			next(err);
		} 

		//respond to REST (GET) request with JSON of rows
		resp.json(rows);

		// close connection
		if (cnn) cnn.end();
	});
}

exports.getOne = function(req, resp, next) {
	var id = req.param('id');
	var sql = "SELECT * FROM Customers WHERE ID = " + id;
	var cnn = mysql.executeQuery(sql, function(err, rows, fields) {
		// error in db request
		if (err) { 
			next(err);
		} 

		//respond to REST (GET) request with JSON of rows
		resp.json(rows);
		
		// close connection
		if (cnn) cnn.end();
	});
}

exports.create = function(req, resp, next) {
	
}

exports.update = function(req, resp, next) {
	
}

exports.delete = function(req, resp, next) {
	
}