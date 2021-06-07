// function reverseMyString(str){
//     for(var newStr ="",i =str.length - 1;i>=0;i--){
//         newStr+=str[i];
//     }

//     return newStr
// }

function reverseMyString(str){
    return str.split('').reverse().join('')
}



console.log(reverseMyString('hello world!'));