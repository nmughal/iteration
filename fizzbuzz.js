
function fizzBuzz( maxNumber) {
  let arrayNumber = [];
  for ( count = 1; count <= maxNumber; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      arrayNumber.push('fizzbuzz');
    } else if (count % 3 === 0) {
      arrayNumber.push('fizz');
    } else if (count % 5 === 0 ) {
      arrayNumber.push('buzz');
    } else {
      arrayNumber.push(count);
    }
  }
  return arrayNumber;
}
fizzBuzz(18)
let testRunner = require('./fizzbuzz-tests.js');
testRunner(fizzBuzz);
