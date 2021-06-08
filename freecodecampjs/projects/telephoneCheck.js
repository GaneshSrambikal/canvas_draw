// function telephoneCheck(str) {

//     return true;
//   }
  
//   telephoneCheck("555-555-5555");
function telephoneCheck(str) {
    let newStr = str;
    newStr = newStr.replace(/\s/g, "");
    newStr = newStr.replace(/\(/g, "");
    newStr = newStr.replace(/\)/g, "");
    newStr = newStr.replace(/-/g, "");
  
    for(var i = 0; i < newStr.length; i++) {
      if(isNaN(parseInt(newStr[i]))) {
        return false;
      }
    }
  
    if(newStr.length === 10) {
      return true;
    }
  
    if(newStr.length === 11 && newStr[0] === 1) {
      return true;
    }
  
    return false;
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("1 555-555-5555"));
  console.log(telephoneCheck("1 (555) 555-5555"));
  console.log(telephoneCheck("5555555555"));
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("(555)555-5555"));
  console.log(telephoneCheck("1(555)555-5555"));
  console.log(telephoneCheck("555-5555"));
  console.log(telephoneCheck("5555555"));
  console.log(telephoneCheck("1 555)555-5555"));
  console.log(telephoneCheck("1 555 555 5555"));
  console.log(telephoneCheck("1 456 789 4444"));
  console.log(telephoneCheck("123**&!!asdf#"));
  console.log(telephoneCheck("55555555"));
  console.log(telephoneCheck("(6054756961)"));
  console.log(telephoneCheck("2 (757) 622-7382"));
  console.log(telephoneCheck("0 (757) 622-7382"));
  console.log(telephoneCheck("-1 (757) 622-7382"));
  console.log(telephoneCheck("2 757 622-7382"));
  console.log(telephoneCheck("10 (757) 622-7382"));
  console.log(telephoneCheck("27576227382"));
  console.log(telephoneCheck("(275)76227382"));
  console.log(telephoneCheck("2(757)6227382"));
  console.log(telephoneCheck("2(757)622-7382"));
  console.log(telephoneCheck("555)-555-5555"));
  console.log(telephoneCheck("(555-555-5555"));
  console.log(telephoneCheck("(555)5(55?)-5555"));
let str = "5555555555";
let reg = /(?=[\s]|[()-])/g;
// console.log(reg.test(str))