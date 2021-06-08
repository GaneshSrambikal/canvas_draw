function frankenSplice(arr1, arr2, n) {
    let firstArr = [...arr1];
    let secondArr = [...arr2];
    // console.log(firstArr,secondArr)
    for(let i =0; i<arr2.length;i++){
        if(arr2[n] ===arr2[i]){
            secondArr = [
                ...secondArr.slice(0,(n > 1 ? n: 1)),
                ...firstArr ,
                ...secondArr.splice(n)]
        }
    }
    return secondArr;
  }

// using splice
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));