
var http = require('http');

exports.get = function (callback) {

	return new Promise((resolve, reject) => {

		http.get({
					hostname: 'opendata-download-metfcst.smhi.se',
					path: '/api/category/pmp1.5g/version/2/geotype/point/lon/15.27195/lat/56.21253/data.json'
				}, function(response) {
					var body = '';
					response.on('data', function(d) { body += d; });
					response.on('end', function() { 
						var temps =[];
						var receivedData = JSON.parse(body).timeSeries;
						var d = (new Date().getTime());
						for (i=0;i<receivedData.length;i++){
							var fd = (new Date(receivedData[i].validTime).getTime());
							if ((fd>(d+3600000))&&(fd<(d+90000000))) temps.push({time:receivedData[i].validTime,temp:receivedData[i].parameters[0].values[0]});
						}
						resolve(temps); 
					});
		});
	})
}

