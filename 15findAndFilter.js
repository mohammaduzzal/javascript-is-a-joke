// What is find()?
// find() এমন একটি Array Method যা Condition অনুযায়ী প্রথম Matching Element-টি Return করে।

// মনে রাখো:
// find() → একটি Element
// filter() → একটি Array
// এটাই সবচেয়ে বড় পার্থক্য।

// const numbers = [5, 10, 15, 20];
// const result = numbers.find(num => num > 10);
// console.log(result); // 15

// const numbers = [5, 10, 15, 20];
// const result = numbers.filter(num => num > 10);
// console.log(result);


// const users = [
//   { name: "Bright", age: 25 },
//   { name: "Alex", age: 18 },
//   { name: "Emma", age: 30 }
// ];

// const user = users.find(user => user.age >= 20)
// console.log(user);
// const user = users.filter(user => user.age >= 20)
// console.log(user);

// // যদি কিছু না পায়?
// find ----> undefined
// filter ----> []


// const products = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
//   { id: 3, name: "Tablet" }
// ];

// const product = products.find(product => product.id === 2)
// console.log(product);

// এই Array থেকে প্রথম Even Number বের করো।
// const numbers = [1, 3, 5, 8, 10, 12];
// const even = numbers.find(number => number % 2 === 0)
// console.log(even);

// const mobiles = [
//   { name: "Samsung", price: 65000 },
//   { name: "iPhone", price: 120000 },
//   { name: "Pixel", price: 85000 }
// ];
// const price = mobiles.find(mobile => mobile.price > 70000)
// console.log(price);