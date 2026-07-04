// What is Scope?
// Scope হলো JavaScript-এর এমন একটি নিয়ম, যা নির্ধারণ করে কোন Variable কোথা থেকে Access করা যাবে এবং কোথা থেকে যাবে না।

// সহজভাবে, Scope = Variable-এর Visibility

// Scope কত প্রকার?
// JavaScript-এ প্রধানত ৩ ধরনের Scope আছে।
// 1.Global Scope
// 2.Function Scope
// 3.Block Scope

// 1️⃣ Global Scope
// Global Scope-এ Declare করা Variable পুরো Program থেকে Access করা যায়।
// let name = "Bright";

// function greet() {
//   console.log(name); //Bright

// }
// console.log(name); //Bright
// greet();

// কেন?
// কারণ name Global Scope-এ আছে।
// তাই Function-এর ভিতর থেকেও Access করা যাচ্ছে।

// 2️⃣ Function Scope
// Function-এর ভিতরে Declare করা Variable শুধু সেই Function-এর ভিতরেই ব্যবহার করা যায়।

// function greet() {
//   let message = "Hello";
//   console.log(message); //Hello

// }

// greet();

// console.log(message); //ReferenceError
// কেন?
// কারণ message Function Scope-এর Variable।
// Function-এর বাইরে এটি নেই।

// 3️⃣ Block Scope

// যে কোনো {}-এর ভিতরের অংশকে Block বলে।
// let এবং const Block Scope Follow করে।

// {
//   let age = 25;
// }

// console.log(age); //ReferenceError কারণ age Block-এর বাইরে নেই।

// var কি Block Scope Follow করে?
// ❌ না।
// এটি Interview-এর খুব Common প্রশ্ন।  

// if (true) {
//   var number = 100;
// }

// console.log(number); //100   var follow func scope

// Lexical Scope? =Lexical মানে হলো কোড কোথায় লেখা হয়েছে (Written Location)।
// JavaScript Variable Access করে Code-এর Position দেখে, Function কোথা থেকে Call হয়েছে সেটা দেখে না।

// let a = 10
// function first(){
//     let b = 20
//     function two(){
//         let c = 30
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     two()
// }
// first()

// কী ঘটল?

// Function two() প্রথমে নিজের ভিতরে Variable খুঁজল।

// পেল?

// হ্যাঁ → c

// তারপর b খুঁজল।

// নিজের ভিতরে পেল না।

// বাইরের Function-এ পেল।

// তারপর a

// Global-এ পেল।
// এটাকেই বলে

// Scope Chain

// Scope Chain কী?
// JavaScript যখন কোনো Variable খুঁজে পায় না,
// তখন
// নিজের Scope
// ↓
// Parent Scope
// ↓
// Global Scope
// এইভাবে খুঁজতে থাকে।
// এটাকে Scope Chain বলে।

// 🧠 Quick Revision

// ✅ Scope = Variable কোথা থেকে Access করা যাবে।

// ✅ তিন ধরনের Scope:

// Global
// Function
// Block

// ✅ var → Function Scope

// ✅ let, const → Block Scope

// ✅ Lexical Scope = Variable Code-এর Position অনুযায়ী খোঁজা হয়।

// ✅ Scope Chain = নিজের Scope → Parent Scope → Global Scope


// ⭐ Interview Secret

// অনেক interviewer এই প্রশ্নটি করেন:

// "What is the difference between Scope and Hoisting?"

// সংক্ষিপ্ত উত্তর:

// Hoisting বলে Declaration কখন Memory-তে যায়।
// Scope বলে Variable কোথা থেকে Access করা যাবে।

// দুটো সম্পর্কিত, কিন্তু এক জিনিস নয়।