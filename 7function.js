// What is a Function?
// Function হলো এমন একটি Reusable Block of Code, যা একটি নির্দিষ্ট কাজ করার জন্য তৈরি করা হয়।একবার Function লিখো, যতবার ইচ্ছা ব্যবহার করো।

// Function-এর সুবিধা

// ✅ Code Reuse করা যায়।
// ✅ Code ছোট হয়।
// ✅ Bug কম হয়।
// ✅ পড়তে সহজ হয়।
// ✅ Maintain করা সহজ হয়।

// Function Declare এবং Function Call-এর পার্থক্য কী?
// function greet() {} Function তৈরি করা।
// greet(); Function চালানো।

// Parameter vs Argument

// | Parameter                 | Argument                |
// | ------------------------- | ----------------------- |
// | Function Define করার সময় | Function Call করার সময় |
// | Placeholder               | Actual Value            |

// Return কী করে?
// Return
// ✅ Function শেষ করে।
// ✅ একটি Value ফেরত দেয়।

// Return-এর পরে Function শেষ হয়ে যায়। so return er por console log() write korle kaj hobe na

// // তিনটি Function-এর Comparison
// | Type                 | Syntax                       | Hoisted |
// | -------------------- | ---------------------------- | ------- |
// | Function Declaration | `function greet(){}`         | ✅ Yes   |
// | Function Expression  | `const greet = function(){}` | ❌ No    |
// | Arrow Function       | `const greet = () => {}`     | ❌ No    |

// 

// ⭐ Interview Secret

// Interviewer যদি জিজ্ঞেস করে:

// "What is the difference between a function declaration and a function expression?"

// তুমি এভাবে উত্তর দেবে:

// "A function declaration is fully hoisted, so it can be called before its definition. A function expression is assigned to a variable, so it follows the hoisting rules of that variable and cannot be called before initialization."


const sayHello = () => {
  console.log("Hello");
};

sayHello(); //hello

// Implicit Return

// এটি Interview-এর Favorite Question।

// যদি Function Body-তে শুধু একটি Expression থাকে,

// তাহলে return এবং {} বাদ দেওয়া যায়।

// const add = (a, b) => a + b;

// Explicit Return

// যখন {} ব্যবহার করো,

// তখন return নিজে লিখতে হবে।

// const multiply = (a, b) => {
//   return a * b;
// };

// Object Return

// এটি অনেকেই ভুল করে।
// const getUser = () => ({
//   name: "Bright"
// });

// console.log(getUser()); //{ name: "Bright" } 👉 Object Return করলে Parentheses () ব্যবহার করবে।

// 🧠 Quick Revision

// ✅ Arrow Function = ES6 Feature।

// ✅ Syntax ছোট।

// ✅ Single Parameter হলে () Optional।

// ✅ Multiple Parameter হলে () Required।

// ✅ {} থাকলে return লিখতে হবে।

// ✅ Object Return করলে () ব্যবহার করতে হবে।

// ✅ Arrow Function-এর নিজের this নেই।

// ⭐ Interview Secret

// Interviewer যদি জিজ্ঞেস করে:

// "Should I always use Arrow Functions?"

// সঠিক উত্তর:

// না। Arrow Function আধুনিক JavaScript-এ খুব জনপ্রিয়, বিশেষ করে React-এ। তবে সব জায়গায় এটি ব্যবহার করা উচিত নয়। যখন Function-এর নিজের this, arguments, বা Constructor Behavior দরকার হয়, তখন Regular Function ব্যবহার করা ভালো।