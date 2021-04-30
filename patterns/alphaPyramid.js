let string = ''

for(let i=1; i<=5; i++){
    for(let j=0; j<5 - i; j++){
        string+=' '    
       
    }
    for(k=0; k< 2 * i - 1; k++){
        string+=String.fromCharCode(65+k)
       }
    string+='\n'
    

}
console.log(string)