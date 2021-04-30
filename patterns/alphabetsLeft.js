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


/*

I J STRING
1 0 A
2 1 A B
3 2 A B C
4 3 A B C D
5 4 A B C D E

J IS INITIALIZE TO 0 EVERYTIME I IS INCREMENTED
*/

