const allEquals = (arr) => {
    arr = [5, 5, 5];
    const pivot = arr[0];
    let flag;
    arr.forEach(element => {
        if (pivot === element) {
            flag = 0;
        }
        else {
            flag = 1;
        }
    });
    if (flag === 0) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
}

allEquals();