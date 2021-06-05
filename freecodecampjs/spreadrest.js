function func(){
    return arguments;
}

console.log(func(5.4,"yep!", true));

const sum = (...arg) => {
    const args = arg;
    return args.reduce((a, b) => a + b, 0);
  }
console.log(sum(1,3,2,4))
