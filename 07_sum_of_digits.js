/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync('07_file.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
      var nums = line.split('');
      var sum = nums.reduce(function (prev,cur,idx,arr) {
        return Number(prev) + Number(cur);
      });
      console.log(sum);
    }
});