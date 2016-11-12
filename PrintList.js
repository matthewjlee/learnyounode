var module = require('./myModule.js');
var directory = process.argv[2];
var extension = process.argv[3];

printList(directory, extension, function(err, data){
	if(err) return console.err;
	console.log(data)
})