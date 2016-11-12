var http = require('http');
var bl = require('bl');
var finished = 0;

var finalStrings = [];

function outputResults() {
	for (var i = 0; i < 3; i++) {
		console.log(finalStrings[i]);
	}
}

function fetchData(index) {
	var currentURL = process.argv[index + 2];
	http.get(currentURL, function (response) {
		response.pipe(bl(function (err, data) {
			if (err) {
				console.log("error");
			}
			finalStrings[index] = data.toString();
			finished++;

			if (finished == 3) {
				outputResults();
			}
		}))
	})
}

for (i = 0; i <= 2; i++) {
	fetchData(i);
}