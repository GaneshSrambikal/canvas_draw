
function largestOfFour(arr){
    let largestArr = [];

    const reducer = (acc ,value) => {
        return Math.max(acc ,value)
    }
    largestArr = arr.map(item =>{
        return item.reduce(reducer)
    })
    return largestArr;
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));