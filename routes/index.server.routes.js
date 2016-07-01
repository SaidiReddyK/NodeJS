
module.exports = function(app) {
	//map controller to route path
	var index = require('../controllers/index.server.controller.js');
	app.get('/', index.render);
}