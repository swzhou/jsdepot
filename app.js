var express = require('express');

var app = module.exports = express.createServer();

// Configuration
var config = require('./config/config');
config.configure(app, express);

// Models
var mongoose = require('mongoose');
var models = require('./app/models');
var db, Product;
models.defineModels(mongoose, function() {
	app.Product = Product = mongoose.model('Product');
	db = mongoose.connect(app.set('db-uri'));
});

// Routes
var router = require('./router');
router.route(app);

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}
