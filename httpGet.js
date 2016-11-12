//URL provided as first command-line argument
var URL = process.argv[2];
var http = require('http');
var response = "";

function readURL(printResponse) {
	http.get(URL, function(res) {
	    res.setEncoding('utf8');
	    res.on("data", function (data) {
            response += data + "\n";
	    }).on("error", function(e) {
	    	console.log("response reading error");
	    }).on("end", function(a) {
	    	printResponse();
	    })
	}).on('error', function(e) {
		console.log("got error on HTTP get");
	})
}

function printResponse() {
    console.log(response);
}

readURL(printResponse);