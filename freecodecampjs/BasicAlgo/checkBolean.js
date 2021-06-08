// function booWho(bool) {
//     return (bool === true || bool === false) ? true : false;
// }
function booWho(bool) {
 return typeof bool === 'boolean'
}
console.log(booWho(''))