
//stack using a Pseudoclassical pattern
/**
 * a pattern which uses a constructor function  and the 
 * new operator ,combined with a prototype added to the constructor is said to be
 * Pseudoclassical pattern 
 * Points a child prototype to parent protype for inheritance to occur;
 */
const Stack = function() {
  this.count = 0;
  this.storage = {};
};
// add value
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

//remove value
Stack.prototype.pop = function() {
  if (this.count == 0) {
    return undefined;
  }
  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return console.log(result);
};

//return length
Stack.prototype.size = function() {
  return console.log(this.count);
};
let ss = new Stack();
ss.push(2);
ss.push(22);
ss.push(3);
// ss.size();
ss.pop();
ss.size();