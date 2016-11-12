var fs = require('fs')
var http = require('http')
var server = http.createServer(function callback(request, response) {
	//request handling logic..
	var readStream = fs.createReadStream(process.argv[3])
	readStream.on('open', function() {
		readStream.pipe(response);
	}).on('error', function(e) {
		response.end(err);
	})
})

server.listen(process.argv[2]);