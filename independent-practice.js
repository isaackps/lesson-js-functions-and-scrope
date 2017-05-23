//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
var lengths = function (arrayStr) {
  return arrayStr.forEach(function(eachStr){
    return eachStr.length;
  });
}

var MyLengths = ["avd", "sdff", "asdflj"];

console.log(lengths(MyLengths));

//



// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
var transmogrifier = function (num1, num2, num3) {
  var product = num1 + num2;
  return (Math.pow(product, num3));
}

//var trans = [1,2,3];

console.log(transmogrifier(1,2,3));






// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

var wordReverse = function (word) {
  return word.
}
