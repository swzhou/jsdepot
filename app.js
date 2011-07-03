var express = require('express');

var app = module.exports = express.createServer();

// Configuration
var config = require('./config/config');
config.configure(app, express);

// Routes
var router = require('./router');
router.route(app);

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}
