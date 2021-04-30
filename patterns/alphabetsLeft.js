const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let string = '';
readline.question("Enter a number of rows: ", num =>{
    
    for(let i=1 ; i<= num; i++){
        
        for(let j=0; j<i; j++){
    
         string+=String.fromCharCode(65+j)
        }
    
        string+='\n'
        
    }
    console.log(string)
   
    readline.close()
})




