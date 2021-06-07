// function factorialize(num) {
//     let factorial = 1;
//     for(let i =1; i<=num; i++){
//         factorial *=i
//     }
//     console.log(factorial)
    
// }
// using recursion
// function factorialize(num){
// if(num === 1){
//     return 1;
// } else{
//     return num * factorialize(num - 1)
// }

// }


// function factorialize(num) {
//     return num < 0 ? 1 : (
//       new Array(num)
//         .fill(undefined)
//         .reduce((product, val, index) => product * (index + 1), 1)
//     );
//   }

function factorialize(num){
    return new Array(num).fill().reduce((a ,v) => a*v)
}
console.log(factorialize(5));