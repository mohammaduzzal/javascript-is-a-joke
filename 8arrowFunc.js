// What is an Arrow Function?
// ES6-এর Short Function Syntax।
// Arrow Function = Function লেখার Short Syntax
// const functionName = () => {};

// Implicit Return
// এটি Interview-এর Favorite Question।
// যদি Function Body-তে শুধু একটি Expression থাকে,
// তাহলে return এবং {} বাদ দেওয়া যায়।

// Arrow Function কি Hoist হয়? //no
// Arrow Function সাধারণত const বা let Variable-এ রাখা হয়।
// তাই Variable-এর Hoisting Rule Follow করে।

// Normal Function vs Arrow Function
// | Feature                   | Normal Function | Arrow Function |
// | ------------------------- | --------------- | -------------- |
// | Syntax                    | বড়             | ছোট            |
// | Hoisted (Declaration হলে) | ✅               | ❌              |
// | Implicit Return           | ❌               | ✅              |
// | নিজের `this`              | ✅               | ❌              |

// 🧠 Quick Revision
// ✅ Arrow Function = ES6 Feature।
// ✅ Syntax ছোট।
// ✅ Single Parameter হলে () Optional।
// ✅ Multiple Parameter হলে () Required।
// ✅ {} থাকলে return লিখতে হবে।
// ✅ Object Return করলে () ব্যবহার করতে হবে।
// ✅ Arrow Function-এর নিজের this নেই।


// const user = () => ({
//   name: "Bright",
//   age: 25
// });

// console.log(user());


// Interview Secret
// Interviewer যদি জিজ্ঞেস করে:
// "Should I always use Arrow Functions?"
// সঠিক উত্তর:
// না। Arrow Function আধুনিক JavaScript-এ খুব জনপ্রিয়, বিশেষ করে React-এ। তবে সব জায়গায় এটি ব্যবহার করা উচিত নয়। যখন Function-এর নিজের this, arguments, বা Constructor Behavior দরকার হয়, তখন Regular Function ব্যবহার করা ভালো।