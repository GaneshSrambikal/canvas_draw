// function repeatStringNumTimes(str, num) {
//     let newArr = '';
//     for(let i=0;i<num;i++){
//       newArr+=str;
//     }
//     return newArr;
//   }
  
//   console.log(repeatStringNumTimes("abc", 3));
//use recursion
function repeatStringNumTimes(str,num){
 return num != 0 ? str + repeatStringNumTimes(str , num - 1) : ''

}

console.log(repeatStringNumTimes('-_-', 3));