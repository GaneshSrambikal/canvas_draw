let arr = [[1,2,4],[2,3,6],[1,3,7]];

let newArr =[];

function filterCOffee(arr){
    
for(let i=0;i<arr.length;i++){
    if(arr[i].indexOf(3) == 1){
        console.log('found three')
    }else{
        newArr.push(arr[i])
    }
}
return newArr;
}

console.log(filterCOffee(arr))