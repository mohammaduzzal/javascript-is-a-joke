// What is a Data Type?
// Data Type হলো এমন একটি বিষয় যা JavaScript-কে বলে দেয় একটি Variable-এর ভিতরে কী ধরনের Data রাখা হয়েছে।

// JavaScript-এ মোট কয়টি Data Type আছে?

// 👉 মোট ৮টি Data Type

// Primitive (৭টি)
// String
// Number
// Boolean
// Undefined
// Null
// Symbol
// BigInt
// Non-Primitive (Reference Type)
// Object

// মনে রাখবে: Array এবং Function আলাদা Data Type নয়। দুটোই Object Type।

// Primitive Data Type
// Primitive কী?

// Primitive হলো এমন Data যেটি একটি মাত্র Value ধারণ করে।

// Non-Primitive Data Type

// Non-Primitive মানে

// একাধিক Value রাখতে পারে।

// ------------------------------

// typeof Operator

// typeof দিয়ে Variable-এর Type জানা যায়।

// console.log(typeof "Hello");
// console.log(typeof 100);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function(){}); 
// 💡 যদিও Function Object, typeof Function-এর জন্য "function" return করে। এটি JavaScript-এর একটি বিশেষ behavior।

// console.log(typeof null); //obj
// প্রশ্ন

// null কি Object?
// 👉 না।
// এটি JavaScript-এর একটি পুরনো Bug।
// এই Bug ঠিক করা হয়নি, কারণ করলে পুরনো অনেক Code ভেঙে যাবে।
// "typeof null returns 'object' because of a historical bug in JavaScript. However, null is actually a primitive data type."

// let a = 10;

// let b = a;

// b = 20;

// console.log(a);

// console.log(b);
// কারণ Primitive Copy by Value।

// const person = {
//     name : "bright"
// }
// const person1 = person
// console.log(person);
// console.log(person1);
// person1.name = "rik"
// // console.log(person); //rik
// console.log(person1); //rik
// কারণ Object Copy by Reference।

// 🌍 Real-Life Example
// Primitive

// তুমি বন্ধুকে তোমার Photo-এর একটি Print Copy দিলে।

// সে তার Copy-তে লিখলে।

// তোমার Original বদলাবে?

// ❌ না।

// Object

// তুমি এবং তোমার বন্ধু একই Google Docs File Edit করছ।

// সে কিছু পরিবর্তন করল।

// তুমি কী দেখবে?

// ✅ একই পরিবর্তন।

// কারণ তোমরা একই File ব্যবহার করছ।

// Q5. Difference between Primitive and Non-Primitive?

// Primitive → Copy by Value

// Non-Primitive → Copy by Reference  

// Q4. Why does typeof null return "object"?

// কারণ JavaScript-এর পুরনো Bug।

// Common Mistakes

// ❌ Array আলাদা Data Type।

// ✔️ না।

// Object।

// ❌ Function Object নয়।

// ✔️ Function-ও Object।

// ❌ null Object।

// ✔️ না।

// Primitive।

// 🧠 Quick Revision

// ✅ JavaScript-এ ৮টি Data Type।

// ✅ Primitive = ৭টি।

// ✅ Non-Primitive = Object।

// ✅ Array ও Function → Object।

// ✅ Primitive → Copy by Value।

// ✅ Object → Copy by Reference।

// ✅ typeof null → "object" (Historical Bug)।


const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1); //[ 1, 2, 3, 4 ] //non-prim copy by reference

// ⭐ Interview Secret

// এই প্রশ্নটি খুবই জনপ্রিয়:

// "Why does changing person2.name also change person1.name?"

// সঠিক উত্তর:

// "Because objects are stored by reference. person1 and person2 point to the same object in memory, so changing the object through one reference is visible through the other."
