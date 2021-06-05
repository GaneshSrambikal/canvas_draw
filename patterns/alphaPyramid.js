let string = ''

for(let i=1; i<=5; i++){
    for(let j=0; j<5 - i; j++){
        string+=' '    
       
    }
    for(k=0; k< 2 * i - 2; k++){
        string+=String.fromCharCode(65+k)
       }
    string+='\n'
    

}
console.log(string)

/*
i j k string
1 0 0       A
2 1 1     A B C
3 2 2   A B C D E
4 3 3 A B C D E F G
*/