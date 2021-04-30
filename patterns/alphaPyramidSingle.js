let string = ''
let count = 0
for(let i =0; i<=5; i++){
    for(let j=0;j<5 - i; j++){
        string +=' '
    }
    for(let k=0; k< 2 * i -1; k++){
        string+= String.fromCharCode(65+count)
        count++
    }
    string+='\n'
}

console.log(string)


/*
i j k string
1 0 0       A
2 1 1     B C D
3 2 2   E F G H I
4 3 3 J K L M N O P
*/