
var http = require('http');

exports.get = function (callback) {
	
	return new Promise((resolve, reject) => {

		http.get({
					hostname: 'nile16.nu',
					port: 1251,
					path: '/'
				}, function(response) {
					var body = '';
					response.on('data', function(d) { body += d; });
					response.on('end', function() { resolve(JSON.parse(body)); });
		});
	})
}
