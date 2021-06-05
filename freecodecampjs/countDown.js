// /*

// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
//  */

// //using recursion 
// // [5,4,3,2,1]
// function countdown(n){
//     let count = [];
//     if(n < 1){
//       return console.log([]);
//     } else{
//       count = [countdown(n - 1)];

//       count.unshift(n);
//       return console.log(count);
//     }
    
//   }

//  const value = countdown(10);
//  console.log(value)

//  function rangeOfNumbers(startNum, endNum) {
//     if (endNum - startNum === 0) {
//       return [startNum];
//     } else {
//       var numbers = rangeOfNumbers(startNum, endNum - 1);
//       numbers.push(endNum);
//       return numbers;
//     }
//   }
//   rangeOfNumbers(1,5);
"use Strict";
// var celius = 34;
// var celius = 23;
// console.log(celius);

let racer = "Felex";
let racer = "John";
console.log(racer);