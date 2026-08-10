// Module কী?
// একটা বড় JavaScript file-এর মধ্যে সব code রাখলে project বড় হওয়ার সাথে সাথে code manage করা কঠিন হয়ে যায়।
// তাই code-কে আলাদা আলাদা file-এ ভাগ করা হয়।
// এই আলাদা file-গুলোকে JavaScript Module হিসেবে ব্যবহার করতে পারি।
// project/
// │
// ├── app.js
// ├── math.js
// └── user.js

// কেন Module ব্যবহার করি?
// 1. Code আলাদা রাখা যায়
// 2. Code Reuse করা যায়
// একবার function লিখে অন্য file-এ ব্যবহার করতে পারো।
// 3. বড় Project সহজে Manage করা যায়


// Module-এর মূল Concept
// JavaScript Module-এর ক্ষেত্রে দুইটা keyword সবচেয়ে গুরুত্বপূর্ণ:
// export
// import

// export

// এক file থেকে কোনো কিছু বাইরে পাঠানো।

// import

// অন্য file থেকে সেটা নিয়ে আসা।


// import { add } from "./math.js"; //named export
// Named Export import করার সময় { } ব্যবহার করি।


// export const add = (a, b) => {
//     return a + b;
// };

// export const subtract = (a, b) => {
//     return a - b;
// };
// import { add, subtract } from "./math.js";

// 2️⃣ Named Export-এর নাম পরিবর্তন করা যায়?
// হ্যাঁ! as ব্যবহার করে।
// import { add as sum } from "./math.js";



// 3️⃣ Default Export
// এখন আসি Default Export-এ।

// const multiply = (a, b) => {
//     return a * b;
// };

// export default multiply;
// এখানে multiply হলো Default Export।

// Default Export Import

// এখন import করার সময় { } লাগবে না।
// import multiply from "./math.js";

// সহজ Trick
// Named Export
//      ↓
// { } লাগে

// Default Export
//      ↓
// { } লাগে না

// Default Imসবগুলো valid।

// কারণ Default Export-এর import করার সময় original নাম match করা বাধ্যতামূলক নয়।

// 6️⃣ একই File-এ Named + Default দুটোই থাকতে পারে?
// হ্যাঁ। 🔥




// 📊 Quick Comparison
// বিষয়	             Named Export	              Default Export
// Export	            export const x	            export default x
// Import	            { x }	                      x
// {} দরকার?	        ✅ হ্যাঁ	                 ❌ না
// নাম match করতে হবে?	✅ সাধারণত	  ❌ না
// এক file-এ কতগুলো?	অনেক	    সর্বোচ্চ ১টি
// একটি JavaScript file-এ একটির বেশি default export থাকতে পারে না।