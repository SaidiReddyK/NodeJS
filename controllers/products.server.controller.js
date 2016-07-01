
var Product = require('mongoose').model('Product');

exports.list = function(req, resp, next) {

	Product.find({}, function(err, products) {
		// failed to load all products	
		if(err) {
			return next(err);
		} else {
			//respond with the view having list of all products
			resp.render('products-list', { AllProducts : products });
		}
	});
};

exports.details = function(req, resp, next) {
	//get id of the product requested from the request	
	var id = req.param('id');
	console.log(id);
	if (!id) {
		resp.status(404).send('No product is selected...');
		return;
	}
	Product.find({ID: id}, function(err, product) {
		resp.render('details', {Product : product[0]});
	});
};