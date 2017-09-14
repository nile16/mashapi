
var http = require('http');

exports.get = function (callback) {

	return new Promise((resolve, reject) => {

		http.get({
					hostname: 'opendata-download-metfcst.smhi.se',
					path: '/api/category/pmp1.5g/version/2/geotype/point/lon/15.27195/lat/56.21253/data.json'
				}, function(response) {
					var body = '';
					response.on('data', function(d) { body += d; });
					response.on('end', function() { resolve(JSON.parse(body).timeSeries); });
		});
	})
}

