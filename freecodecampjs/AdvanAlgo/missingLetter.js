let str = 'abcdefghijklmnopqrstuvwxyz';

console.log(str.charAt(str.length -1))
console.log(String.fromCharCode(65));
console.log(str.charCodeAt(0));

let first = str.charCodeAt(0)
let last = str.charCodeAt(str.length -1)
let missingLetter = '';
/* 
97 - a
98 - b
99 - c
100 - d ?
101 - e
*/
// console.log(str.length)
for(let i=0; i<str.length;i++){
    if(first === last){
         missingLetter = undefined
    } else if(str.charCodeAt(i) === first) {
       first++;
   } else{
      missingLetter = String.fromCharCode(first);
       
   }
}
console.log(missingLetter)

