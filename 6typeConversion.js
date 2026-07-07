// What is Type Conversion?
// Type Conversion হলো একটি Data Type-কে অন্য Data Type-এ পরিবর্তন করা।

// Type Conversion কত প্রকার?
// 1️⃣ Explicit Type Conversion

// যখন আমরা নিজেরা Type পরিবর্তন করি।

// String → Number
let age = "25";

let newAge = Number(age);

console.log(newAge); //25
// Number → String
let price = 100;

console.log(String(price)); //"100"

// Number → Boolean
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false

// 2️⃣ Implicit Type Conversion (Type Coercion)

// যখন JavaScript নিজে থেকেই Type পরিবর্তন করে।

console.log("5" + 5); //55
console.log("10" - 5); //5
console.log("5" * 2); //10

// "+" Operator দুইটি কাজ করে। ১. Addition ২. String Concatenation

// Truthy & Falsy
// JavaScript-এ সব Value
// Boolean Context-এ
// True অথবা False হয়ে যায়।


// Falsy Values
// JavaScript-এ মাত্র ৮টি Falsy Value আছে।

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Truthy Values
// Falsy ছাড়া বাকি সব Truthy।

// "Hello"
// []
// {}
// 42
// -5
// "0"
// "false"
// Infinity

console.log(Boolean("")); //false
console.log(Boolean(" ")); //true have space 

// == vs ===

// Double Equal (==)
// Value Compare করে।
// প্রয়োজনে Type Convert করে।
console.log(5 == "5"); //true

// Triple Equal (===)
// Value এবং Type
// দুটোই Compare করে।
console.log(5 == "5"); //false

// null vs undefined

// undefined
// Variable Declare করা হয়েছে।
// কিন্তু Value দেওয়া হয়নি।


// null
// Programmer ইচ্ছা করে
// বলছে
// এখানে এখন কোনো Value নেই।

console.log(null == undefined); //true
console.log(null === undefined); //false

// Difference between Type Conversion and Type Coercion?
// Type Conversion → Programmer করে।
// Type Coercion → JavaScript নিজে করে।

// 🧠 Quick Revision

// ✅ Type Conversion দুই ধরনের।

// Explicit
// Implicit

// ✅ + String Concatenate করতে পারে।

// ✅ == Type Convert করে।

// ✅ === Type Convert করে না।

// ✅ Falsy Value = ৮টি।

// ✅ null ≠ undefined
