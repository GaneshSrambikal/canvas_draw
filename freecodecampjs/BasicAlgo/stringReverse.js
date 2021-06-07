// function reverseMyString(){
//     let strArr = str.split(' ,')
// }
let str = 'hello world'
let strArr = str.split('')
let newStr = strArr.reverse();
let finalStr = ''
for(let i=0; i < newStr.length;i++){
    finalStr+=newStr[i];
    
}


console.log(newStr ,finalStr);