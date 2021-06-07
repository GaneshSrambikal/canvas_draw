function truncateString(str, num) {
    return num >=str.length ? str : str.slice(0,num)+"..."
  }
  
console.log(truncateString("Absolutely Longer", 2)); //A-tisket

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
console.log(truncateString("A-", 1))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))


