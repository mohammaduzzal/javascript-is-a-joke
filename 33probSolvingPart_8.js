// swap variable

let x = 50;
let y = 100;

let temp = x
x = y
 y = temp
console.log(x);
console.log(y);

let first = "Hello";
let second = "World";
[first,second] = [second,first]
console.log(first);
console.log(second);