// var foo = function foo(){
//     console.log(foo === foo);
// }
// foo(); //true

// function aaa(){
//     return{
//         test: 1
//     };
// }
// console.log(typeof aaa()); //object

// let res  = Number("1") -1 ;
// console.log(res); // 0

// let res =(true + false) >  2 +true; // 1 > 3
// console.log(res); // false

// function bar(){
//     return foo;
//     foo =10;
//     function foo(){
//         var foo = '11';
//     }
// }
// console.log(typeof bar()); //function

// console.log("1" -  -  "1"); // 2
// var x = 3;

// var foo = {
//   x: 2,
//   baz: {
//     x: 1,
//     bar: function() {
//       return this.x;
//     }
//   }
// };

// var go = foo.baz.bar;

// console.log(go());
// console.log(foo.baz.bar());

// console.log(new String("This is a string") instanceof String);//true
//  console.log([] + [] + "foo".split("")); // f,o,o
// console.log(new Array(5).toString()); // ,,,,

// var myArr = ['foo', 'bar', 'baz'];
// myArr.length = 0;
// myArr.push('bin');
// console.log(myArr); // ['bin']

// console.log(String('Hello') === 'Hello'); //true

// var x = 0;
// function foo() {
//     x++;
//     this.x = x;
//     return foo;
// }
// var bar = new new foo;
// console.log(bar.x); //undefined
// console.log("This is a string" instanceof String); //false

// var bar = 1,
//     foo = {};

// foo: {
//     bar: 2;
//     baz: ++bar;
// };
// console.log(foo.baz + foo.bar + bar); //NAN

// var myArr = ['foo', 'bar', 'baz'];
// myArr[2];
// console.log('1' in myArr);// true

// var arr = [];
// arr[0]  = 'a';
// arr[1]  = 'b';
// arr.foo = 'c';
// console.log(arr.length); //2

console.log(10 > 9 > 8 === true); //false

// function foo(a, b) {
//     arguments[1] = 2;
// console.log(b); //undefinde
// }
// foo(1);

//console.log(NaN === NaN); //false

