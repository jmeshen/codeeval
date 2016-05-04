/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync('08_file.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
      // f(0) === 0, f(1) === 1
      // start from zero, count to n
      var n = Number(line);
      var fib = [0, 1];
      for (var i = 2; i <= n; i++) {
        fib.push(fib[i-1] + fib[i-2])
      }
      console.log(fib[n])
    }
});