
module.exports = function(app) {
	//map controller to route path
	var ctrl = require('../controllers/products.server.controller.js');
	app.route('/products').get(ctrl.list);
	//.post(ctrl.save)
	//.delete(ctrl.remove);
	app.get('/product/:id', ctrl.details);	
};