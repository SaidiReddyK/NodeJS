
module.exports = function(app) {

	//map controller to route path
	var ctrl = require('../controllers/customers.server.restcontroller.js');
	
	// configure the route "/customers" with HTTP methods
	var router = require('express').Router();
		
	router.get('/', ctrl.getAll);
	router.get('/:id', ctrl.getOne);	
	router.post('/', ctrl.create);
	router.put('/', ctrl.update);
	router.delete('/', ctrl.delete);			

	// configure router with application instance as route middleware
	app.use('/customers', router);

	//for view 
	ctrl = require('../controllers/customersHub.server.controller.js');
	app.use('/customersHub', ctrl.render);
};