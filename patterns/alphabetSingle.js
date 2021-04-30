let string =''
let count = 0
for(let i = 1; i <= 5; i++){
    for(let j = 0 ;j < i; j++){
        string+=String.fromCharCode(65 + count)
        count ++
    }
    string+= '\n'
}

console.log(string)



/*
i j count string
1 0 0     A
2 1 1 2   B C 
3 2 2 3 4 D E F

J IS INITIALIZE TO 0 EVERYTIME I IS INCREMENTED


*/