
var http = require('http');

exports.get = function (callback) {

    http.get({
				hostname: 'nile16.nu',
				port: 1251,
				path: '/'
			}, function(response) {
				var body = '';
				response.on('data', function(d) { body += d; });
				response.on('end', function() { callback(JSON.parse(body)); });
    });
}

