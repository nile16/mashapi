
var forecast      = require('./forecast.js');
var temp          = require('./temp.js');
var request       = require('request');
const http        = require('http');


setInterval( function(){
	var data          = {};
	var d = new Date();
	data.time=d.toLocaleString();
	forecast.get().then( (forecast) => {
		data.forecast = forecast;
	}).then( temp.get().then( (temp) => {
		data.temp = temp;
	})).then( () => {
		request({ method: 'GET', uri: 'http://192.168.1.200:5984/forecast/1'}, function (error, response, body) {
			data._rev = JSON.parse(body)._rev;
			request({ method: 'PUT', uri: 'http://192.168.1.200:5984/forecast/1', json: data }, function (error, response, body) {
				if (error) console.log(error);
			});
		});
	});
},3600000);




