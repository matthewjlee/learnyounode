var http = require('http');
var map = require('through2-map');

upperCase = map(function(chunk) {
	return chunk.toString().toUpperCase();
});

server = http.createServer(function(request, response) {
	//if the request is a POST method
	if (request.method == 'POST') {
		request.pipe(upperCase).pipe(response);
	}
});
server.listen(process.argv[2]);