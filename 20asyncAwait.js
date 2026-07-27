// async কী?
// async একটি Function-কে Promise Return করার ক্ষমতা দেয়।
// ⭐ Golden Rule
// Every async function ALWAYS returns a Promise.

// Example 1
// Normal Function
// function greet() {
//     return "Hello";
// }
// console.log(greet()); //hello

// এবার async যোগ করি

// async function greet(){
//     return "hello"
// }
// console.log(greet());  //Promise { 'hello' }

// ভিতরে কী হচ্ছে?
// JavaScript আসলে এটা করছে—
// তুমি লিখেছ:
// async function greet() {
//     return "Hello";
// }
// JavaScript মনে মনে এটাকে বানিয়ে ফেলছে:
// function greet() {
//     return Promise.resolve("Hello");
// } 💡 এটাই async-এর আসল কাজ।

// async function add(a,b){
//     return a + b
// }

// add(2,1)
// .then((result) =>{
//     console.log(result);
// })
// কেন .then() ব্যবহার করতে পারলাম?কারণ...add(5, 10) Return করছে Promise.resolve(15)


// async function test() {
//     return 100;
// }

// console.log(test()); // Promise {100}

// Error-এর ক্ষেত্রে কী হয়?

// async function login() {
//     throw new Error("Login Failed");
// }

// login()
//     .catch(err => {
//         console.log(err.message);
//     }); //login failed


// async function word() {
//     return "React"
// }
// word().then((result) => console.log(result))

// async function errorReturn() {
//     throw new Error("invalid user")
// }
// errorReturn().catch((err) => console.log(err.message))


// আজকের Lesson শেষে তুমি যেন চোখ বন্ধ করে বলতে পারো:
// "Every async function always returns a Promise."

// একটা খুব Common Interview Question:


// ==============================================================================
// await কী?
// সহজ বাংলায়:
// await একটি Promise শেষ (resolve/reject) হওয়া পর্যন্ত অপেক্ষা করে।
// Promise Resolve হলে await সেই Value Return করে।

// await waits for a Promise to settle (resolve or reject). If it resolves, it returns the resolved value. If it rejects, it throws the error.

// প্রথম Example
// Promise দিয়ে:
// const promise = Promise.resolve(100);

// promise.then((value) => {
//     console.log(value);
// }); //100

// একই কাজ await দিয়ে:
// async function demo() {
//     const value = await Promise.resolve(100)
//     console.log(value);
// }
// demo()

// কী হলো এখানে? const value = await Promise.resolve(100);
// JavaScript ভিতরে ভিতরে বলে:
// "Promise Resolve না হওয়া পর্যন্ত অপেক্ষা করো। তারপর Result value-এ রাখো।"
// অর্থাৎ:
// Promise.resolve(100)
// ↓
// await
// ↓
// 100
// ↓
// value = 100

// 🌟 .then() vs await
// await is syntactic sugar over .then(). Both handle resolved promise values, but await makes asynchronous code easier to read and write.


// Promise.resolve("JavaScript")
//     .then((result) => {
//         console.log(result);
//     });

//     async function demo() {
//     const result = await Promise.resolve("JavaScript");
//     console.log(result);
// }

// demo();

// একটা Common Mistake অনেকে ভাবে— const value = await Promise.resolve(10);
// মানে পুরো Program থেমে যায়। ❌ না।
// পুরো JavaScript থামে না।
// শুধু ওই async Function-এর Execution Pause হয়, Promise Resolve হওয়া পর্যন্ত।

// async function demo() {
//     const value = await Promise.resolve("react")
//     console.log(value);
// }
// demo()

// async function age() {
//     const agePromise = await Promise.resolve(25)
//     console.log(agePromise);
// }
// age()

// 📚 আজকের Lesson-এর সারাংশ
// মনে রাখবে:
// async
// 👉 Function-কে Promise Return করায়।
// await
// 👉 Promise Resolve হওয়া পর্যন্ত অপেক্ষা করে এবং তার Value দেয়।


// ===========================
// ⭐ Very Important Interview Concept

// Every time JavaScript encounters an await:

// It pauses the current async function.
// It puts the remaining part of that function into the Microtask Queue.
// When the current synchronous work (or current microtask) finishes, it resumes from where it stopped.

// async function demo() {
//     console.log("A");

//     await Promise.resolve();

//     console.log("B");

//     await Promise.resolve();

//     console.log("C");
// }

// console.log("Start");

// demo();

// console.log("End"); 
// // Start A End B C


// async function demo() {
//     console.log("A");

//     const value = await Promise.resolve("B");

//     console.log(value);

//     console.log("C");
// }

// demo();

// console.log("D");   //A,D,b,c


// ==========================================================================
// try--catch 

// 🤔 Problem
// ধরো আমাদের একটি Promise আছে।

// const promise = Promise.reject("Network Error");
// // Promise দিয়ে Error Handle করি:
// promise
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))


// এখন একই কাজ await দিয়ে করতে চাই।

// async function loadData(params) {
//     try {
//         const data = await Promise.reject("network error")
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// loadData()


// try...catch কী?
// সহজ ভাষায়:
// try
// "এই Code চালাও।"
// catch
// "যদি Error হয়, তাহলে আমি Handle করব।"


// real life exple

// const loadData = async()=>{
//     try {
//         const response = await fetch("/user")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("something went wrong");
//         console.log(error);
//     }
// }
// loadData()

// কেন try...catch ব্যবহার করি?
// To handle errors when using await inside an async function.
// বাংলায়:
// await ব্যবহার করার সময় Error Handle করার জন্য try...catch ব্যবহার করা হয়।

// const demo = async() =>{
//     try {
//       const value=  await Promise.resolve("react")
//       console.log(value);
//     } catch (error) {
//         console.log(error);
//     }
// }
// demo()
// const demo = async() =>{
//     try {
//       const value=  await Promise.reject("Server Down")
//       console.log(value);
//     } catch (error) {
//         console.log(error);
//     }
// }
// demo()

// 📚 আজকের Lesson-এর Summary
// মনে রাখবে:
// ✅ await Error Throw করতে পারে।
// ✅ সেই Error Handle করার জন্য try...catch ব্যবহার করি।
// ✅ try → Code চালায়।
// ✅ catch → Error Handle করে।


// async function demo() {
//     try {
//         console.log("A");

//         await Promise.reject("Error");

//         console.log("B");

//     } catch (err) {
//         console.log(err);
//     }

//     console.log("C");
// }

// demo();

// console.log("D");  

// //a,d,error,c  console.log("B"); ❌ Never runs. Because once the promise rejects, control jumps directly to the catch block.

