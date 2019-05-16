//to find area of triangle with given three sides..

//sides
let a = 2,
    b = 3,
    c = 1;

//perimeter 
let perimeter = (a + b + c);


let area = Math.sqrt(perimeter * (perimeter - a) * perimeter * (perimeter - b) * perimeter * (perimeter - c));

console.log(Math.floor(area));

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.font = "30px Comic Sans MS";
// ctx.fillStyle = "red";
// ctx.textAlign = "center";
// ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2); 