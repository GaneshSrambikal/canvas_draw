function chunkArrayInGroups(arr, size) {
console.log(arr.length)
    let chunk = [];
    for(let i=0;i<arr.length;i+=size){
        if(i !== arr.length){
            chunk.push(arr.slice(i,size+i));
        }
        
    }
    // chunk.push(arr.slice(0,size))
    // chunk.push(arr.slice(2,size+2))
    // chunk.push(arr.slice(4,size+4))
    // chunk.push(arr.slice(0,size))
    return chunk;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))