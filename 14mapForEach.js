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


// const users = [
//     {name:"Bright", age:25},
//     {name:"Alex", age:30},
//     {name:"Emma", age:22}
// ];

// const names = users.map(user => user.name)
// console.log(names);

// const numbers = [2,4,6,8];
// const thirdTimes = numbers.map(number => number * 3)
// console.log(thirdTimes);







// জাভাস্ক্রিপ্টে Map আর Set হলো দুইটা বিল্ট-ইন ডেটা স্ট্রাকচার, যেগুলো ES6 থেকে এসেছে। চলুন একটা একটা করে দেখি।

// Map
// Map হলো key-value pair রাখার একটা কালেকশন, অনেকটা অবজেক্টের মতো। কিন্তু এর কিছু বিশেষ সুবিধা আছে:

// যেকোনো টাইপের key ব্যবহার করা যায় — শুধু string না, object, function, এমনকি array-ও key হতে পারে (সাধারণ object-এ key সবসময় string বা symbol হতে হয়)
// Map-এর সাইজ সরাসরি জানা যায় .size দিয়ে
// এতে items insertion order অনুযায়ী থাকে, যেটা iterate করার সময় গ্যারান্টি করা হয়
// javascript
// const myMap = new Map();

// myMap.set('name', 'Rahim');
// myMap.set(42, 'একটা নাম্বার key');
// myMap.set(true, 'বুলিয়ান key');

// console.log(myMap.get('name')); // Rahim
// console.log(myMap.size);        // 3
// console.log(myMap.has('name')); // true

// myMap.delete(42);

// // iterate করা
// for (const [key, value] of myMap) {
//   console.log(key, value);
// }
// Set
// Set হলো ইউনিক ভ্যালুর একটা কালেকশন — মানে এখানে কোনো ডুপ্লিকেট ভ্যালু থাকতে পারবে না। Array-এর মতো দেখতে হলেও এটা মূলত unique জিনিস রাখার জন্য।

// javascript
// const mySet = new Set();

// mySet.add(1);
// mySet.add(5);
// mySet.add(5); // এটা ignore হয়ে যাবে, কারণ 5 আগে থেকেই আছে
// mySet.add('হ্যালো');

// console.log(mySet.size);      // 3
// console.log(mySet.has(5));    // true

// mySet.delete(1);

// // iterate করা
// for (const value of mySet) {
//   console.log(value);
// }
// দারুণ একটা ব্যবহার — array থেকে ডুপ্লিকেট বাদ দেওয়া
// javascript
// const numbers = [1, 2, 2, 3, 3, 3, 4];
// const unique = [...new Set(numbers)];
// console.log(unique); // [1, 2, 3, 4]
// Map vs Object, Set vs Array — কখন কোনটা ব্যবহার করবেন
// ব্যবহার করুন যখন
// Map	key হিসেবে non-string ভ্যালু লাগবে, বা ঘন ঘন add/delete করতে হবে, বা order matter করে
// Object	সিম্পল স্ট্রাকচার্ড ডেটা, JSON-এর সাথে কাজ করতে হবে
// Set	শুধু ইউনিক ভ্যালুর দরকার, ডুপ্লিকেট চেক করতে হবে
// Array	index দিয়ে অ্যাক্সেস করতে হবে, ডুপ্লিকেট থাকা সমস্যা না
// কোনো নির্দিষ্ট মেথড বা use-case নিয়ে আরও বিস্তারিত জানতে চাইলে বলবেন!

// could you explain it in more details

// চলুন আরও গভীরে যাই — সব মেথড, প্রপার্টি, আর গুরুত্বপূর্ণ খুঁটিনাটি সহ।

// Map বিস্তারিত
// Map তৈরি করার বিভিন্ন উপায়
// javascript
// // খালি Map
// const map1 = new Map();

// // array of arrays দিয়ে Map তৈরি
// const map2 = new Map([
//   ['name', 'Karim'],
//   ['age', 25],
//   ['city', 'Dhaka']
// ]);
// সব মেথড
// javascript
// const map = new Map();

// map.set('a', 1);        // যোগ করা — chain করা যায়: map.set('a',1).set('b',2)
// map.get('a');            // 1 — ভ্যালু বের করা, না পেলে undefined
// map.has('a');             // true — আছে কিনা চেক
// map.delete('a');          // true/false — মুছে ফেলা, সফল হলে true
// map.clear();               // সব মুছে ফেলা
// map.size;                  // মোট এন্ট্রি সংখ্যা (প্রপার্টি, ফাংশন না)
// Iteration-এর তিনটা উপায়
// javascript
// const map = new Map([['name', 'Karim'], ['age', 25]]);

// // শুধু key
// for (const key of map.keys()) {
//   console.log(key); // name, age
// }

// // শুধু value
// for (const value of map.values()) {
//   console.log(value); // Karim, 25
// }

// // key-value দুইটাই (default)
// for (const [key, value] of map.entries()) {
//   console.log(key, value);
// }

// // forEach দিয়েও করা যায়
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
// Object আর Map-এর মধ্যে রূপান্তর
// javascript
// // Object → Map
// const obj = { name: 'Karim', age: 25 };
// const map = new Map(Object.entries(obj));

// // Map → Object
// const backToObj = Object.fromEntries(map);

// // Map → Array
// const arr = [...map]; // [['name','Karim'], ['age',25]]
// object key ব্যবহারের আসল সুবিধা
// javascript
// const userScores = new Map();
// const user1 = { name: 'Rahim' };
// const user2 = { name: 'Karim' };

// userScores.set(user1, 90);
// userScores.set(user2, 85);

// console.log(userScores.get(user1)); // 90 — object reference key হিসেবে কাজ করছে
// সাধারণ object দিয়ে এটা করলে key অটোম্যাটিক string-এ কনভার্ট হয়ে যেত ("[object Object]"), তাই দুইটা user-ই একই key-তে গিয়ে collision করত। Map-এ এই সমস্যা নেই।

// Set বিস্তারিত
// সব মেথড
// javascript
// const set = new Set([1, 2, 3]);

// set.add(4);         // যোগ করা — chain করা যায়
// set.has(2);          // true
// set.delete(2);        // true/false
// set.clear();           // সব মুছে ফেলা
// set.size;               // মোট আইটেম সংখ্যা
// Iteration
// javascript
// const set = new Set(['apple', 'banana', 'mango']);

// for (const value of set) {
//   console.log(value);
// }

// set.forEach(value => console.log(value));

// // values() আর keys() দুইটাই একই জিনিস দেয় (Set-এ key=value)
// console.log([...set.values()]);
// বাস্তব জীবনের ব্যবহার
// ১. Array থেকে ডুপ্লিকেট রিমুভ করা

// javascript
// const ids = [101, 102, 101, 103, 102];
// const uniqueIds = [...new Set(ids)];
// console.log(uniqueIds); // [101, 102, 103]
// ২. দুইটা array-এর মধ্যে common/unique এলিমেন্ট বের করা

// javascript
// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([3, 4, 5, 6]);

// // Intersection (common)
// const intersection = [...setA].filter(x => setB.has(x));
// console.log(intersection); // [3, 4]

// // Union (সব মিলিয়ে unique)
// const union = new Set([...setA, ...setB]);
// console.log([...union]); // [1, 2, 3, 4, 5, 6]

// // Difference (setA-তে আছে কিন্তু setB-তে নেই)
// const difference = [...setA].filter(x => !setB.has(x));
// console.log(difference); // [1, 2]
// ৩. দ্রুত membership check

// javascript
// // Array-তে .includes() ব্যবহার করলে বড় ডেটাতে স্লো হয়ে যায়
// // Set-এ .has() অনেক দ্রুত (O(1) সময়ে)
// const visitedPages = new Set(['/home', '/about', '/contact']);
// console.log(visitedPages.has('/about')); // true — খুব দ্রুত
// WeakMap আর WeakSet — বোনাস
// এগুলো Map/Set-এর "দুর্বল" ভার্সন, মেমোরি ম্যানেজমেন্টের জন্য বিশেষভাবে তৈরি।

// javascript
// const weakMap = new WeakMap();
// let obj = { data: 'কিছু তথ্য' };

// weakMap.set(obj, 'এক্সট্রা ইনফো');

// obj = null; // এখন garbage collector obj-কে মুছে ফেলতে পারবে,
//              // কারণ WeakMap-এর reference "weak" — এটা GC-কে আটকায় না
// মূল পার্থক্য:

// key শুধু object হতে পারে (string/number key দেওয়া যায় না)
// iterate করা যায় না — কোনো .size, .forEach(), for...of নেই
// মূল উদ্দেশ্য: memory leak এড়ানো, যেমন DOM element-এর সাথে প্রাইভেট ডেটা জুড়ে রাখা
// সাধারণত দৈনন্দিন কাজে আপনার Map/Set-ই যথেষ্ট হবে, WeakMap/WeakSet খুবই স্পেশাল কেসে (advanced memory optimization) লাগে।

// পারফরম্যান্স তুলনা (এক নজরে)
// অপারেশন	Array	Object	Map	Set
// খোঁজা (search)	O(n) ধীর	O(1) key দিয়ে	O(1)	O(1)
// যোগ/মুছা	দ্রুত (শেষে)	দ্রুত	দ্রুত	দ্রুত
// Order গ্যারান্টি	হ্যাঁ	না (numeric key ছাড়া অদ্ভুত আচরণ করে)	হ্যাঁ	হ্যাঁ
// ডুপ্লিকেট	থাকতে পারে	key unique	key unique	ভ্যালু unique
