let today = new Date();
console.log(today.getMonth());

let cmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
let one_day = 1000 * 60 * 60 * 24;

console.log(parseInt((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left untill christmas");

// let month = document.getElementById('month');
// month = today.getMonth();