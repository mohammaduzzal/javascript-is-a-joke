// What is Hoisting?
//  hoisting = behavior
// Hoisting হলো JavaScript-এর এমন একটি behavior যেখানে Variable এবং Function Declaration কোড execute হওয়ার আগে Memory-তে register করা হয়।

// অনেকেই বলে:
// "JavaScript variable-কে উপরে নিয়ে যায়।"
// ❌ এটা পুরোপুরি সঠিক নয়।
// সঠিক কথা হলো—
// JavaScript কোড সরায় না। Execution Context-এর Creation Phase-এ Variable ও Function-এর জন্য Memory তৈরি করে।

// Hoisting কেন হয়?

// কারণ JavaScript Code Execute করার আগে Execution Context তৈরি করে।

// মনে আছে?
// Execution Context-এর দুইটি Phase ছিল—
// Creation Phase
// ↓
// Execution Phase
// 👉 Hoisting ঘটে Creation Phase-এ।

// console.log(name); //undefined

// var name = "bright" 

// Memory Diagram

// Creation Phase
// name → undefined

// Execution Phase
// console.log(name)
// ↓
// undefined
// ↓
// name = "Bright"

// var কেন undefined দেয়?
// কারণ
// var
// Creation Phase-এ
// Memory Allocate হওয়ার সাথে সাথে
// undefined দিয়ে Initialize হয়।


// let Hoisting
// console.log(age); //ReferenceError
// let age = 25;

// let কি Hoist হয়?
// let এবং const দুটোই Hoist হয়।
// কিন্তু Creation Phase-এ এদের Value দেওয়া হয় না।
// এরা Temporal Dead Zone (TDZ)-এ থাকে।

// TDZ কী?
// Temporal Dead Zone হলো সেই সময়, যখন Variable Memory-তে আছে, কিন্তু এখনও ব্যবহার করা যাবে না।

// Function Hoisting
// greet(); //hello কেন?

// কারণ পুরো Function Memory-তে আগে থেকেই Store হয়।
// greet → পুরো Function

// function greet() {
//   console.log("Hello");
// }

// Function Expression AND arrow func give ReferenceError
// greet();

// const greet = function () {
//   console.log("Hello");
// };
// sayHi();

// const sayHi = () => {
//   console.log("Hi");
// };
কারণ

// এখানে greet and sayHello হলো const Variable। Function নয়।

// 🧠 Quick Revision
// ✅ Hoisting ঘটে Creation Phase-এ।
// ✅ var → undefined
// ✅ let → TDZ
// ✅ const → TDZ
// ✅ Function Declaration → পুরো Function Hoist হয়।
// ✅ Function Expression ও Arrow Function → Variable-এর নিয়ম অনুসরণ করে।