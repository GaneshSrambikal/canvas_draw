// let string = ''

// for(let i=5; i>=0; i--){
//     for(let j=0; j< i; j++){
//         string+=String.fromCharCode(69 -j)
//     }
//     string += '\n'
// }

// console.log(string)


let string = ''

for(let i=1; i<=5; i++){
    for(let j=0; j< 5 - i + 1; j++){
        string+= String.fromCharCode((5 - 1 - j) + 65)
    }
    string+= '\n'
}
console.log(string)

/* 
i j string
5 0 E D C B A
4 1 E D C B 
3 2 E D C 
4 3 E D 
5 4 E 

J IS INITIALIZE TO 0 EVERYTIME I IS INCREMENTED

*/