
// let string = ''


// for(let i=5 ; i>= 0; i--){
        
//     for(let j=0; j<i; j++){

//      string+=String.fromCharCode(65+j)
//     }

//     string+='\n'
    
// }
// console.log(string)

/* 
i j string
5 0 A B C D E
4 1 A B C D
3 2 A B C
4 3 A B
5 4 A

J IS INITIALIZE TO 0 EVERYTIME I IS INCREMENTED
*/


let string = ''

for(let i=1; i<=5; i++){
    for(let j=0; j < 5 - i + 1; j++){
    string += String.fromCharCode(j + 65)
    }
string += '\n'
}
console.log(string)

/*
i j j < 5-i+1 string
1 0    5      A B C D E
2 1    4      A B C D
3 2    3      A B C
4 3    2      A B
5 4    1      A

J IS INITIALIZE TO 0 EVERYTIME I IS INCREMENTED
*/
