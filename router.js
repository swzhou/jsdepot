var route = function(app) {
	app.get('/', function(req, res){
	  res.render('index', {
	    title: 'Express'
	  });
	});
};

exports.route = route;