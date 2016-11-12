var http = require('http');
var bl = require('bl');
var URL = process.argv[2];

http.get(URL, function (response) {
	response.pipe(bl(function (err, data) {
		if (err) {
			console.log("error");
		}
		console.log(data.toString().length);
		console.log(data.toString());
	}))
})
