var fs = require('fs');
var count = undefined;

function readFile(callback) {
	fs.readFile(process.argv[2], 'utf8', function processFile(err, fileContents) {
		if (err) throw err;
		var stringArray = fileContents.split("\n");
		count = stringArray.length - 1;
		callback();
	});
}

function printNumber() {
	console.log(count);
}

readFile(printNumber);
