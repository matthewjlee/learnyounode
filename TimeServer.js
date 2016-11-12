var date = new Date();
var net = require('net')
var server = net.createServer(function listener(socket) {
	//socket handling logic
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var data = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";
	socket.write(data);
	socket.end();
}).on('error', function(e) {
	throw err;
})

server.listen(process.argv[2]);
