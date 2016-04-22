/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync('01_file.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
    
      var tmp = line.split(' ');
      var fd = tmp[0];
      var bd = tmp[1];
      var n = tmp[2];
      var ret = [];
      for (var i = 1; i <= n; i++) {
        if (i % fd == 0 && i % bd == 0) {
          ret.push('FB');
        }
        else if (i % fd == 0) {
          ret.push('F');
        }
        else if (i % bd == 0) {
          ret.push('B');
        } else {
          ret.push(i);
        }
      }
      
      console.log(ret.join(' '));

    }
});