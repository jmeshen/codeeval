/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync('04_file.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
      var words = line.split(' ');
      var retStr = '';

      while (words.length) {
        retStr += ' ' + words.pop();
      }

      console.log(retStr.trim());
    }
});