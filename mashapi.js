

var forecast      = require('./forecast.js');
var temp          = require('./temp.js');

forecast.get(console.log);
temp.get(console.log);

//var request     = require('request');
//const http      = require('http');
//var forecastUrl = 'opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/2/geotype/point/lon/15.27195/lat/56.21253/data.json';
//
//const server = http.createServer((req, res) => {
//
//	res.setHeader('Access-Control-Allow-Origin',   '*');
//	res.setHeader('Access-Control-Request-Method', '*');
//	res.setHeader('Access-Control-Allow-Methods',  '*');
//	res.setHeader('Access-Control-Allow-Headers',  '*');
//
//	res.setHeader('Content-Type', 'application/json');
//
//	urlPara = req.url.split('/');
//
//	switch(req.method){
//
//		case 'POST':
//			var d = new Date();
//			request({ method: 'PUT', uri:url+urlPara[1], json: { time:d.toLocaleString(), title: decodeURI(urlPara[2]), priority: decodeURI(urlPara[3]), message: decodeURI(urlPara[4]), author: decodeURI(urlPara[5]) }}, function (error, response, body) {
//				res.end(JSON.stringify(body));
//			});
//			break;
//		
//		case 'GET':
//			if (urlPara[1]=="") urlPara[1]='_all_docs?include_docs=true';
//			request({ method: 'GET', uri:encodeURI(url+urlPara[1])}, function (error, response, body) {
//				res.end(body);
//			});
//			break;
//			
//		case 'PUT':
//			request({ method: 'GET', uri:url+urlPara[1]}, function (error, response, body) {
//				var change = JSON.parse(body);
//				if (!urlPara[2]=="") change.title    = decodeURI(urlPara[2]);
//				if (!urlPara[3]=="") change.priority = decodeURI(urlPara[3]);
//				if (!urlPara[4]=="") change.message  = decodeURI(urlPara[4]);
//				if (!urlPara[5]=="") change.author   = decodeURI(urlPara[5]);
//				request({ method: 'PUT', uri:url+urlPara[1], json: change }	, function (error, response, body) {
//					res.end(JSON.stringify(body));
//				});
//			});
//			break;
//		
//		case 'DELETE':
//			request({ method: 'GET', uri:url+urlPara[1]}, function (error, response, body) {
//				request({ method: 'DELETE', uri:url+urlPara[1]+'?rev='+JSON.parse(body)._rev}, function (error, response, body) {
//					res.end(JSON.stringify(body));
//				});
//			});
//		break;
//
//		default:
//			res.end(JSON.stringify({error:'Method not supported'}));
//			break;
//	}		
//			
//}).listen(1250);
//
//
//