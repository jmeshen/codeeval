// prime numbers are numbers that are only divisible by 1 and itself
function sumPrimes() {
  var total = 0;
  var numOfPrimes = 0;
  var num = 2;
  // check if prime
  while (numOfPrimes < 1000) {
    var factorCtr = 0;
    for (var j = 2; j < num; j++) {
      if (num % j == 0) { 
        factorCtr++;
      };
    }
    
    if (!factorCtr) { 
      total += num;
      numOfPrimes++;
    }
    num++;
  }
  console.log(total);
}

sumPrimes();