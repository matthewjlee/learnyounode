//Solution taken from official solutions repository
var http = require('http');
var port = process.argv[2];
var url = require('url')

server = http.createServer(function(request, response) {
	var urlObject = url.parse(request.url, true),
		pathname = urlObject.pathname,
		startTime = urlObject.query.iso
		result = null;

	if (pathname === '/api/unixtime') {
		result = getUnixTimeStamp(startTime);
	} else if (pathname === '/api/parsetime') {
		result = getTimeObject(startTime);
	}

	if (result) {
		response.writeHead(200, {'Content-Type': 'application/son'});
		response.end(JSON.stringify(result));
	}

	else {
		response.writeHead(404);
		response.end();
	}
})

function getUnixTimeStamp(startTime) {
	return {
		unixtime: getTimestamp(startTime)
	};
}

function getTimestamp(startTime) {
	return Date.parse(startTime);
}

function getTimeObject(startTime) {
	var date = new Date(getTimestamp(startTime));

	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

server.listen(port);