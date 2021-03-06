var development = require('./development.config').config;
var production = require('./production.config').config;
var mongoStore = require('connect-mongodb');

var configure = function(app, express) {
	app.configure('development', function(){
		  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
		  for (var key in development) {
		  	app.set(key, development[key]);
		  }
	});

	app.configure('production', function(){
	  app.use(express.errorHandler());
	  for (var key in production) {
	  	app.set(key, production[key]);
	  }
	});
	
	app.configure(function(){
		  app.set('views', __dirname + '/../app/views');
		  app.set('view engine', 'jade');
		  app.use(express.bodyParser());
		  app.use(express.methodOverride());
		  app.use(express.cookieParser());
		  app.use(express.session({ store: mongoStore(app.set('db-uri')), secret: 'topsecret' }));
		  app.use(express.compiler({ src: __dirname + '/../public', enable: ['sass'] }));
		  app.use(app.router);
		  app.use(express.static(__dirname + '/../public'));
	});	
};

exports.configure = configure;
