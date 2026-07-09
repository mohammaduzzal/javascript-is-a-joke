// What is a Callback Function?
// Callback Function হলো এমন একটি Function, যেটিকে অন্য একটি Function-এর Argument হিসেবে পাঠানো হয় এবং পরে Call করা হয়।

// যে Function-কে অন্য Function-এর ভিতরে পাঠানো হয়, তাকে Callback Function বলে।

// function greet(callback) {
//   callback();
// }

// function sayHello() {
//   console.log("Hello Bright");
// }

// greet(sayHello); // hello bright

// Anonymous Callback
// Callback-এর জন্য আলাদা Function বানানো বাধ্যতামূলক নয়।

// function greet(callback) {
//   callback();
// }

// greet(function () {
//   console.log("Hi!");
// });
// -----
// function greet(callback) {
//   callback();
// }

// greet(() => {
//   console.log("Hello!");
// });


// Higher-Order Function কী?
// যে Function
// অন্য Function-কে Parameter হিসেবে নেয়
// অথবা Function Return করে
// তাকে Higher-Order Function বলে।


// setTimeout() 

// setTimeout(()=>{
//     console.log("hello bright");
// },5000)

// Event Listener,Array Methods(forEach(),map(),filter()) everyone uses callback func 

// Why Callback?
// Callback ব্যবহার করলে
// ✅ Code Reusable হয়।
// ✅ Flexible হয়।
// ✅ Async Task Handle করা যায়।
// ✅ Array Methods সহজ হয়।


// 🌍 আরেকটি Real-Life Example
// ধরো তুমি Food Delivery App ব্যবহার করছ।
// তুমি বললে—
// খাবার পৌঁছালে আমাকে Notification দিও।
// খাবার পৌঁছানোর আগে Notification হবে?
// ❌ না।
// পৌঁছানোর পরে হবে।
// এটাই Callback-এর ধারণা।

// Interview Ready Answer

// A Callback Function is a function passed as an argument to another function, which is executed later. The function that receives or returns another function is called a Higher-Order Function. Callbacks are widely used in asynchronous programming, event handling, and array methods like map(), filter(), and forEach().

// Q1. Callback Function কী?

// অন্য Function-এর Argument হিসেবে পাঠানো Function।

// Q2. Higher-Order Function কী?

// যে Function

// Function নেয়
// অথবা Function Return করে।

// Common Mistakes
// ভাবা যে Callback মানেই Async।
// ✔️
// না।
// সব Callback Async নয়।
// forEach(), map(), filter()-এর Callback Synchronous।


// 🧠 Quick Revision
// ✅ Callback = Function as Argument।
// ✅ Higher-Order Function = Function নেয় বা Return করে।
// ✅ setTimeout() Callback ব্যবহার করে।
// ✅ Event Listener Callback ব্যবহার করে।
// ✅ map(), filter(), forEach() Callback ব্যবহার করে।


function operator(a,b,callback){
  return callback(a,b)
}

const add = (x,y) => x+y
const subtract = (x,y) => x-y

// 



// ⭐ Interview Secret

// Interviewer প্রায়ই এই প্রশ্ন করেন:

// "What's the difference between a callback function and a higher-order function?"

// Professional উত্তর:

// Callback Function: যে Function-কে Argument হিসেবে অন্য Function-এর কাছে পাঠানো হয়।
// Higher-Order Function: যে Function অন্য Function-কে Argument হিসেবে নেয় বা Function Return করে।