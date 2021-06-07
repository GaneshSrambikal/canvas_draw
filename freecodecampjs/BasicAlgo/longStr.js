// function longStr(str){
// let strArr = str.split(' ');
// let maxLength = 0;
// let longestString = ''
// for(let i=0;i< strArr.length; i++){
//     if(strArr[i].length > maxLength){
//         maxLength = strArr[i].length;
//         longestString = strArr[i];

//     }
// }
// return {maxLength, longestString}
// }
//reduce
const longStr =(str)=>{
    let strArr = str.split(' ');
    const reducer =(longest, word)=>{
        return Math.max(longest,word.length)
    }
    return strArr.reduce(reducer,0)
}

console.log(longStr("Hey People there is a long strrrriing in here!"))