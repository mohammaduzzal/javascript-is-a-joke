// What is forEach()?
// forEach() হলো একটি Array Method যা Array-এর প্রতিটি Element-এর উপর একবার করে কাজ (iterate) করে।
// সহজভাবে,
// forEach() প্রতিটি Element-এর কাছে একবার করে যায়।

// const names = ["Bright", "Alex", "John"];

// // names.forEach(function(name){
// //     console.log(name);
// // })
// names.forEach(name => {
//     console.log(name);
// })

// forEach() কী Return করে?
// ✅ forEach() কিছু Return করে না।এটি সবসময়: undefined return  করে।


// তাহলে forEach() কেন ব্যবহার করি?
// যখন Array-এর প্রতিটি Element-এর উপর কোনো কাজ করতে চাই।
// যেমন:
// console.log()
// Database Save
// API Call
// DOM Update

// What is map()?
// map()-ও Array-এর প্রতিটি Element-এর উপর যায়।
// কিন্তু একটি বড় পার্থক্য আছে।
// map() প্রতিটি Element পরিবর্তন করে একটি নতুন Array Return করে।

// const numbers = [1,2,3];

// const doubleIt = numbers.map(number => number * 2)
// console.log(doubleIt);   //note Original Array অপরিবর্তিত থাকে।

// const names = ["Bright", "Alex"];
// const upper = names.map(name => name.toUpperCase())
// console.log(upper);
// console.log(names); //Original Array কি পরিবর্তন হয়েছে? না।

// forEach vs map
// forEach()	                        map()
// Iterate করে	                        Iterate করে
// Return করে undefined	            Return করে নতুন Array
// Original Array পরিবর্তন করে না	     Original Array পরিবর্তন করে না
// Side Effects-এর জন্য ভালো	        Data Transform করার জন্য ভালো


// const arr = [1,2,3];
// const result = arr.forEach(num => num * 2);
// console.log(result); //undefined


// কখন forEach() ব্যবহার করব?
// যখন:
// শুধু Print করব
// Database Update
// API Call
// DOM পরিবর্তন
// Notification পাঠাব


// কখন map() ব্যবহার করব?
// যখন:
// নতুন Array দরকার
// Data Transform করতে হবে
// React-এ JSX Render করতে হবে
// API Data Format পরিবর্তন করতে হবে

// What is forEach()?
// forEach() iterates over each element of an array and performs an action. It always returns undefined.

// What is map()?
// map() iterates over an array, transforms each element, and returns a new array without modifying the original array.


// Common Interview Questions
// Q1. Difference between forEach() and map()?
// 👉 forEach() → undefined
// 👉 map() → New Array
// Q2. Does map() change the original array?
// ❌ না।
// Q3. Can forEach() return a new array?
// ❌ না।
// Q4. Which one is used in React?
// ✅ map()

// // 🧠 Quick Revision
// // ✅ দুটোই iterate করে।
// // ✅ forEach() → Side Effects
// // ✅ map() → New Array
// // ✅ Original Array পরিবর্তন হয় না।


const users = [
    {name:"Bright", age:25},
    {name:"Alex", age:30},
    {name:"Emma", age:22}
];

const names = users.map(user => user.name)
console.log(names);

const numbers = [2,4,6,8];
const thirdTimes = numbers.map(number => number * 3)
console.log(thirdTimes);