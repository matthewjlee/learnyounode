var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var bufString = buf.toString();
var stringArray = bufString.split("\n");
var newLineCount = stringArray.length - 1;
console.log(newLineCount);