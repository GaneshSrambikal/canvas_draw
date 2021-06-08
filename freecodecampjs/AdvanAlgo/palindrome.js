function palindrome(str) {
    /*this creates a regex to 
        remove all non-alphanumeric characters (punctuation, spaces and 
        symbols) and turn everything into the same case 
        (lower or upper case) in order to check for palindromes
    */
    let reg = /(?=[A-Z]|[a-z])/g;
    // to store new strings
    let newStr ='';
    // stores final all lowercase string
    let allLowerCases =''
  
      // loop through the  given string
      for (let i = 0; i < str.length; i++) {
          if((reg.test(str[i])) === true){
              if(reg.test(str[i])){
                //   if it passes the regex than store to newStr
                newStr+=str[i];
            }
          }
    }
    //   set to lowercase
    allLowerCases = newStr.toLowerCase();
    // get if palindrome
      for(let j=0;j<Math.ceil(allLowerCases.length/2);j++){
            if (allLowerCases[j] !== allLowerCases[allLowerCases.length - 1 - j]) {
              return false;
          }
      }
    console.log(allLowerCases)
      return true;
  }
  
  
  
  console.log(palindrome("1 eye for of 1 eye."));

// let word = `A man, a plan, a canal. Panama`;

// let reg = /(?=[#()*/]|[,.0-9_]|[\s])/gi;
// let reg = /(?=[A-Z]|[a-z])/gi;

// console.log(reg.test(word[0]));
// console.log(reg.test(word[23]));

function palindromes(str) {
    var isPali = true;
    var newStr = str.toLowerCase().replace(/([^a-z0-9])*/g, "").split("");
    for (var i=0; i<Math.floor(newStr.length/2); i++){
      if (newStr[i] !== newStr[newStr.length-1-i]) isPali = false;
    }
    return isPali;
  }

  console.log(`this: ${palindromes("1 eye for of 1 eye.")}`)
