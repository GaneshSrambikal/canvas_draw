function reverseNumber(x) {

    let text = x.toString(),
        reverse = text.split("").reverse().join(""),
        result = Number(reverse);
    console.log(result);
};

reverseNumber(5046);