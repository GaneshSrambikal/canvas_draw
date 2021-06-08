// function bouncer(arr) {
//     let newArr = [];
//     for(let i=0; i< arr.length;i++){
//         if(arr[i]) newArr.push(arr[i])
//     }
//     return newArr
// }
function bouncer(arr) {
    return arr.filter(new Boolean(false));
  }
  console.log(bouncer([7, "ate", "", false, 9]))