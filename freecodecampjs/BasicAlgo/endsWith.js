function confirmEnding(str, target) {
    // let strArr =str.split(' ');
    // let targetArr = target.split(' ')
    // console.log(strArr[strArr.length-1], targetArr[0])
    // if(strArr[targetArr.length -1 ] === targetArr[targetArr.length - 1]){
    //     return true
    // }else{
    //     return false;
    // }
    
    let endOfStr = str.slice(str.length - target.length)
    return endOfStr == target ? true : false

    
  }
  
  console.log(confirmEnding("Open sesame", "sage"));
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on"));
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
  console.log(confirmEnding("Open sesame", "game"));
  console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
  console.log(confirmEnding("Abstraction", "action"));