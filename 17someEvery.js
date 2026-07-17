// // What is some()?
// some() চেক করে Array-এর অন্তত একটি Element Condition পূরণ করে কিনা।
// এটি সবসময় Boolean Return করে।

// const numbers = [2, 4, 6, 7];
// const result = numbers.some(number => number % 2 !== 0)
// console.log(result); //true

// ⚠️ some() প্রথম true পেলেই থেমে যায়।
// যদি কেউ Match না করে? false

// What is every()?
// every() চেক করে Array-এর সব Element Condition পূরণ করে কিনা।
// // এটি সবসময় Boolean Return করে।

// const numbers = [2,4,6,8];
// const result = numbers.every(num => num % 2 === 0)
// console.log(result); //true
// যদি একটি Fail করে? false 
// every() প্রথম false পেলেই থেমে যায়।

// some()
// Login System
// const users = [
//     { isAdmin: false },
//     { isAdmin: false },
//     { isAdmin: true }
// ];

// const hasAdmin = users.some(user => user.isAdmin)
// console.log(hasAdmin);



// every()
// ধরো সব Student-এর Attendance 75%-এর বেশি কিনা।

// const students = [
//     { attendance: 90 },
//     { attendance: 80 },
//     { attendance: 78 }
// ];

// const eligible = students.every(student => student.attendance >= 75)
// console.log(eligible);


// | `some()`                | `every()`                |
// | ----------------------- | ------------------------ |
// | অন্তত একটি Match?       | সবগুলো Match?            |
// | প্রথম `true` পেলেই Stop | প্রথম `false` পেলেই Stop |
// | Return `true/false`     | Return `true/false`      |


// সহজে মনে রাখো
// some() --->"কেউ একজন"
// every() --->"সবাই"

// এই Array-তে অন্তত একজন 18 বছরের বেশি কি না চেক করো।

// const users = [
//     { name: "Bright", age: 16 },
//     { name: "Alex", age: 17 },
//     { name: "Emma", age: 20 }
// ];

// const user = users.some(user => user.age > 18)
// console.log(user);


// এই Array-তে সব Mobile-এর Price 30000-এর বেশি কি না চেক করো।
// const mobiles = [
//     { name: "Samsung", price: 65000 },
//     { name: "iPhone", price: 120000 },
//     { name: "Pixel", price: 85000 }
// ];

// const mobile = mobiles.every(mobile => mobile.price > 30000)
// console.log(mobile);


// ⭐ Interview Tip
// অনেক Interview-তে এই প্রশ্ন আসে।

// const numbers = [];
// const numSom = numbers.some(num => num > 5)
// console.log(numSom); //false

// const numbers = [];
// const numEvery = numbers.every(num => num > 5)
// console.log(numEvery); //true

// 😲 অবাক লাগছে?
// কেন every() Empty Array-এর জন্য true দেয়?
// কারণ এমন কোনো Element নেই যা Condition ভেঙেছে।
// এটাকে Mathematics-এ Vacuous Truth বলা হয়।

const arr = [10, 20, 30];

const result = arr.some(num => {
    num > 15;
});

console.log(result);