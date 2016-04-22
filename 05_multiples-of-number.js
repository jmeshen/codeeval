/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync('05_file.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
    
      var tmp = line.split(',');
      var x = Number(tmp[0]);
      var n = Number(tmp[1]);
      var exp = 2;
      while (n < x) {
        var tmp = Math.pow(2, exp);
        if (tmp < x) { 
          exp++;
        } else {
          n = tmp;
        }
      }

      console.log(n);
    }
});