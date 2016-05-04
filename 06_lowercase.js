/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync('06_file.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
      console.log(line.toLowerCase())
    }
});