// prime numbers are numbers that are only divisible by 1 and itself
// palindromes are numbers that read the same backwards and forwards
function primePalindrome(n) {
  var curLargest;
  // check if prime, then check if palindrome

  // check if prime
  for (var i = 0; i < n; i++) {
    var factorCtr = 0;
    for (var j = 2; j < i; j++) {
      if (i % j == 0) { 
        factorCtr++;
      };
    }
    
    if (!factorCtr) { 
      curPrime = i;
    }

    if (curPrime) {
      var strNum = String(curPrime).split('');
      var isPalindrome = false;
      for (var h = 0; h < strNum.length; h++) {
        if (strNum[h] === strNum[strNum.length - 1 - h])
          isPalindrome = true;
        else {
          isPalindrome = false;
        }
      }
      if (isPalindrome) {
        curLargest = curPrime;
      }
    }

  }
  console.log(curLargest);
}

primePalindrome(1000);