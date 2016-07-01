
var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var ProductSchema = new Schema({
	"ID"			: Number, 
	"Name"			: String, 
	"Description"	: String, 
	"Category"		: String, 
	"Price"			: Number, 
	"Image"			: String,
	"Reviews"		: [ { "By": String, "Rating": Number, "Comments": String } ],
	"DaysLeft"		: Number
});

//map the model with the schema
mongoose.model('Product', ProductSchema);


