let string = '';

for(let i=1; i<= 5; i++){
    for(let j=0; j< i; j++){
        string+= String.fromCharCode((i - 1) + 65)
    }
    string+= '\n'
}

console.log(string)


/*
WORKING
i j string
1 0 A
2 1 B B
3 2 C C C
4 3 D D D D
5 4 E E E E E

J IS INITIALIZE TO 0 EVERYTIME I IS INCREMENTED
*/