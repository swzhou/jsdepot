var assert = require('assert');
var app = require('../app');

module.exports = {
	"test stub": function() {
		assert.response(app, {
			  url: '/'
			, method: 'get'
		} , {
			  status: 200,
			  body: /.*Welcome to Express.*/
		});
	},
	"test configuration": function() {
		assert.equal(app.settings['hello'], 'from development');
	}
}