function titleCase(str) {
    function reducer(acc ,value){
        return acc += value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() + " "
    }
    let strArr = str.split(' ');
    console.log(strArr)
    return strArr.reduce(reducer,'')
  }
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));