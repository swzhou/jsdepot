var defineModels = function(mongoose, fn) {
	var Schema = mongoose.Schema;
	
	Product = new Schema({
    'title': String,
    'description': String,
    'imageUrl': String,
    'price': Number
  });

	mongoose.model('Product', Product);
	fn();
};

exports.defineModels = defineModels;