// function rot13(str) {

//     return str;
//   }
  
//   rot13("SERR PBQR PNZC");
function rot13(str){
    let alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let alpha_13 = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
    console.log(alpha_13.length ,alpha.length)
    let decodedCipher= '';
    let reg =/(?=[!.?]|[\s])/g;
    for(let i=0;i<str.length;i++){
        if(reg.test(str[i])){
            decodedCipher+=str[i]
        } else {
            // console.log(`this:${str[i]}`)
            decodedCipher+=alpha[alpha_13.indexOf(str[i])]
        }
    }
    return decodedCipher;
}
let str = 'E';
// 65-90 A-Z
console.log((String.fromCharCode(str.charCodeAt(0) +13)))

console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'))