var http    = require('http');
var cheerio = require('cheerio');



const server = http.createServer((req, res) => {

	res.setHeader('Access-Control-Allow-Origin',   '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods',  '*');
	res.setHeader('Access-Control-Allow-Headers',  '*');

	res.setHeader('Content-Type', 'application/json');

    http.get({
				hostname: 'www.temperatur.nu',
				path: '/ronneby_harstopasjon.html'
			}, function(response) {
				var body = '';
				response.on('data', function(d) { body += d; });
				response.on('end', function() { 
						var html=cheerio.load(body);
						res.end(JSON.stringify( { Ronneby:html('.favoritTemp').text() } )); 
					});
    });
			
			
}).listen(1251);
