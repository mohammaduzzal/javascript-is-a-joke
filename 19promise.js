// Promise কী?
// Promise হলো এমন একটি Object যা ভবিষ্যতে কোনো Asynchronous Operation-এর Result (Success বা Failure) Represent করে।

// সহজভাবে মনে রাখো:
// Promise = ভবিষ্যতে Result দেওয়ার প্রতিশ্রুতি।

// Real-Life Example
// ধরো তুমি খাবার অর্ডার করলে।
// এখনই খাবার হাতে পাওনি।
// Restaurant বলল:
// "৩০ মিনিট পরে খাবার দেব।"
// এখন তিনটি সম্ভাবনা আছে।

// 1. Pending (অপেক্ষা)
// 2. Fulfilled (সফল)
// 3. Rejected (ব্যর্থ)

// Promise-এর ৩টি State
// Pending
// ↓
// Fulfilled

// or

// Pending
// ↓
// Rejected
// একটি Promise একবারই Fulfilled বা Rejected হয়। এরপর তার State আর পরিবর্তন হয় না।

// কেন Promise দরকার
// ধরো তুমি Server থেকে User Data আনছ।
// Browser
// ↓
// Server
// ↓
// Response আসতে ২ সেকেন্ড লাগবে
// JavaScript কি এই ২ সেকেন্ড দাঁড়িয়ে থাকবে?
// ❌ না।
// সে অন্য কাজ করবে।
// যখন Data আসবে, তখন Promise জানাবে:
// "আমি Ready!"


// Promise তৈরি করা

// const promise = new Promise((resolve,reject) =>{
//     const success = true

//     if(success){
//         resolve("data loaded successfully")
//     }else{
//         reject("something went wrong")
//     }
// })
// console.log(promise);


// Interview Ready Answer
// Promise কী?
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// const logPromise = new Promise((resolve,reject) =>{
//     const success = true
//     if(success){
//         resolve("Login Successful")
//     }else{
//         reject("something went wrong")
//     }
// })
// console.log(logPromise);


// const passPromise = new Promise((resolve,reject) =>{
//     const success = false
//     if(success){
//         resolve("login successful")
//     }else{
//         reject("invalid password")
//     }
// })
// console.log(passPromise);

// const promise = new Promise((resolve, reject) => {
//     resolve("Success");
// });

// console.log("Hello");

// const promise = new Promise((resolve, reject) => {
//     resolve("Success");
// });

// promise.then((data) => {
//     console.log(data);
// });

// console.log("Hello");

// 🧠 একটা খুব গুরুত্বপূর্ণ বিষয়
// অনেক Beginner ভাবে: resolve(); মানে সঙ্গে সঙ্গে Output আসবে।
// ❌ না।
// resolve() শুধু Promise-এর State পরিবর্তন করে।

// Result ব্যবহার করার জন্য লাগে: then()
// ==================================================

// এবার Promise Part 2 শুরু করি
// .then() কী?
// .then() ব্যবহার করা হয় Promise সফল (Fulfilled) হলে তার Result পাওয়ার জন্য।

// const promise = new Promise((resolve) =>{
//     resolve("welcome bright")

// })
//    promise.then((result) =>{
//         console.log(result);
//     })


// const promise = new Promise((resolve) => {
//     resolve({
//         name: "Bright",
//         age: 25
//     });
// });

// promise.then((user) =>{
//     console.log(user.name);
// })


// const promise = new Promise((resolve) =>{
//     resolve("javascript")
// })

// promise.then((result) =>{
//     console.log(result);
// })

// const promise1 = new Promise((resolve) =>{
//     resolve({
//     name: "Bright",
//     age: 25
// });
// })

// promise1.then((user) =>{
//     console.log(user.name);
// })


// -------------------------------------------------
// catch() কী?
// catch() ব্যবহার করা হয় Promise Reject হলে Error Handle করার জন্য।

// const promise = new Promise((resolve, reject) => {
//     reject("Wrong Password");
// });

// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// const promise = new Promise((resolve, reject) => {
//     reject("Email not found")
// });

// promise
// .then((result) =>{
//     console.log(result);
// })
// .catch((err) =>{
//     console.log(err);
// })

// const promise = new Promise((resolve, reject) => {
//     const success = false
//     if(success){
//         resolve("Login Successful")
//     }else{
//         reject("Login Failed")
//     }
// });

// promise
// .then((result) =>{
//     console.log(result);
// })
// .catch((err) =>{
//     console.log(err);
// })

// ==========================================
// .finally() কী?
// Promise সফল হোক বা ব্যর্থ হোক, .finally() সবসময় Execute হয়।
// finally() কখন ব্যবহার করা হয়?
// Promise সফল হোক বা ব্যর্থ হোক, যেই Code সবসময় চালাতে হবে, সেটা finally()-তে লিখি।

// success
// const promise = new Promise((resolve) => {
//     resolve("Data Loaded");
// });

// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .finally(() => {
//         console.log("Loading Finished");
//     });

//     // failure

//     const promise = new Promise((resolve, reject) => {
//     reject("Server Error");
// });

// promise
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Loading Finished");
//     });


    // promise flow
//             Promise
//                │
//        ┌───────┴────────┐
//        │                │
//    resolve()        reject()
//        │                │
//      then()         catch()
//        └───────┬────────┘
//                │
//            finally()



// const promise = new Promise((resolve) =>{
//     resolve("Payment Successful");
// })

// promise
// .then(res => console.log(res))
// .finally(()=> console.log("payment ongoing....."))

// const promise = new Promise((resolve,reject) =>{
//     reject("Payment Failed");
// })

// promise
// .catch(err => console.log(err))
// .finally(()=> console.log("payment ongoing....."))


// --------------------------------------------------------------


// Promise Chaining

// একটি Promise-এর Result ব্যবহার করে পরের কাজ করা এবং এভাবে একটার পর একটা .then() যুক্ত করাকে Promise Chaining বলে।

// const promise = new Promise((resolve) => {
//     resolve(5);
// });

// promise
// .then((num) =>{
//     console.log(num);
//     return num * 2
// })
// .then((result) =>{
//     console.log(result);
// })

// 🌟 সবচেয়ে গুরুত্বপূর্ণ Rule
// প্রতিটি .then() কী Return করে?
// উত্তর:
// প্রতিটি .then() একটি নতুন Promise Return করে।
// আর সেই Promise-এর Value হয়...
// 👉 আগের .then() থেকে Return করা Value।
// এটা Interview-তে খুব Common Question।


// const promise = new Promise((resolve) => {
//     resolve(2);
// });

// promise
// .then((num) =>{
//     return num + 3
// })
// .then((num) =>{
//     return num * 4
// })
// .then((num) =>{
//     console.log(num);
// })

// 🎯 Interview Ready Answer
// Promise Chaining কী?
// Promise Chaining is the process of connecting multiple .then() methods where each .then() receives the value returned by the previous one.
// বাংলায়:
// একটি .then()-এর Return Value পরের .then()-এ পাঠানো হলে তাকে Promise Chaining বলে।



// const promise = new Promise((resolve) => {
//     resolve(10);
// });

// promise.then((num) =>{
//     return num + 5
// })
// .then((num) =>{
//     return num * 2
// })
// .then((num) =>{
//     console.log(num);
// })


// ==================================================================
// Error Propagation (Promise-এর অন্যতম গুরুত্বপূর্ণ Concept)
// এটা React Project, Fetch API এবং Interview—সব জায়গায় কাজে লাগে।



// Promise.resolve(5)
//     .then((num) => {
//         return num * 2;
//     })
//     .then((num) => {
//         throw new Error("Calculation Error");
//     })
//     .then((num) => {
//         console.log(num);
//     })
//     .catch((err) => {
//         console.log(err.message); //Calculation Error
//     });



// 🔥 Golden Rule

// যদি Chain-এর কোনো .then()-এ Error হয়, তাহলে JavaScript বাকি .then() বাদ দিয়ে সরাসরি সবচেয়ে কাছের .catch()-এ চলে যায়।


// real life project

// fetch("/user")
// .then(res => res.json())
// .then(data =>{
//     if(!data){
//         throw new Error("user not found")
//     }
//     return data
// })
// .then((data) =>{
//     console.log(data);
// })
// .catch((error) =>{
//     console.log(error.message);
// })
// Promise.resolve(20)
//     .then((num) => {
//         return num + 10
//     })
//     .then((num) =>{
//         throw new Error("Wrong Calculation")
//     })
//     .catch((err) => {
//         console.log(err.message);
//     }); //oops


    // ইচ্ছাকৃতভাবে একটি Error তৈরি করে সেটিকে catch()-এ পাঠানোর জন্য throw new Error() ব্যবহার করা হয়।


    // Promise.resolve("Hi")
    // .then(() => {})  //কিছু Return করেনি।
    // .then(value => console.log(value)); //undefined

    // Promise Chaining-এ return কেন গুরুত্বপূর্ণ?
    // return passes the value to the next .then() in the promise chain. Without return, the next .then() receives undefined.



    // ===========================================================
    // আজ আমরা Promise-এর সবচেয়ে বেশি ব্যবহৃত Advanced Method শিখব।
    // Promise.all()

    // 🤔 Problem
    //  ধরো তোমার তিনটা API Call আছে।
//     Get Users
//     Get Posts
//     Get Comments
//     তুমি কী করবে?
//    ❌ প্রথমটা শেষ হওয়ার অপেক্ষা করবে?
//      getUsers()
//     .then(() => getPosts())
//     .then(() => getComments());
//     এতে সময় বেশি লাগবে।

// 🚀 Better Solution
// সবগুলো একসাথে শুরু করো।
// এটাই Promise.all()।
// Promise.all([
//     promise1,
//     promise2,
//     promise3,
// ])
// এটা একটি নতুন Promise Return করে।

// const p1 = Promise.resolve("HTML");
// const p2 = Promise.resolve("CSS");
// const p3 = Promise.resolve("JavaScript");
// Promise.all([p1,p2,p3])
// .then((result) =>{
//     console.log(result);
// })

// 🌟 Real Project Example
// ধরো Homepage Load হচ্ছে।
// একসাথে দরকার:
// User Info
// Notifications
// Products

// Promise.all([
//     getUser(),
//     getNotifications(),
//     getProducts()

// ])
// .then(([user,notification,products]) =>{
//     console.log(user);
//     console.log(notification);
//     console.log(products);
// })

// ⚠️ সবচেয়ে গুরুত্বপূর্ণ Rule
// যদি একটি Promise Reject হয়, তাহলে পুরো Promise.all() Reject হয়ে যাবে।

// const p1 = Promise.resolve("HTML");
// const p2 = Promise.reject("Server Error");
// const p3 = Promise.resolve("JS");

// Promise.all([p1, p2, p3])
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     }); //Server Error
//     // p3 সফল হলেও Promise.all() আর Result দেবে না।

//     কখন Promise.all() ব্যবহার করব?
// ✅ যখন একাধিক কাজ একসাথে শুরু করা যায়।
// যেমন:
// User Data
// Product List
// Notifications
// এগুলো একে অপরের উপর নির্ভর করে না।


// 🎯 Interview Ready Answer
// Promise.all() কী?
// Promise.all() runs multiple promises in parallel and resolves when all of them are fulfilled. If any promise rejects, it rejects immediately.
// বাংলায়:
// Promise.all() একসাথে একাধিক Promise চালায়। সব সফল হলে Result দেয়, কিন্তু একটি Fail হলেও পুরো Operation Fail হয়ে যায়।


// const u1 = Promise.resolve("Apple")
// const u2 = Promise.resolve("Banana")
// const u3 =Promise.resolve("Orange")

// Promise.all([u1,u2,u3])
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// const p1 = Promise.resolve(50)
// const p2 = Promise.resolve(100)
// Promise.all([p1,p2])
// .then((num) =>{
//     const sum = num.reduce((acc,curr) =>{
//         return acc + curr
//     },0)

//     console.log(sum);
// })



// =============================================
// Promise.race()
// Promise.race()-এ যে Promise প্রথমে Resolve বা Reject হবে, সেটার Result-ই পাওয়া যায়।
// এটা "Race" নামের মতোই—যে আগে Finish করবে, সেই Winner।

// 🏃 Real Life Example
// ধরো ৩ জন দৌড়াচ্ছে।
// Runner A
// Runner B
// Runner C
// যে প্রথম Finish Line-এ পৌঁছাবে, সেই Winner।
// বাকিদের Result আমরা আর ব্যবহার করছি না।
// JavaScript-এও ঠিক একই।

// const p1 = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("html")
//     },3000)
// })
// const p2 = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("css")
//     },1000)
// })
// const p3 = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("js")
//     },2000)
// })

// Promise.race([p1,p2,p3])
// .then(result =>{
//     console.log(result);
// })

// const p1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Success"), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Network Error"), 1000);
// });

// Promise.race([p1, p2])
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });
//     ⚠️ গুরুত্বপূর্ণ:
// Promise.race()-এ Resolve না, Reject-ও Winner হতে পারে, যদি সেটা আগে ঘটে।


// 🌟 Real Project Example
// ধরো তুমি Server-এ Request পাঠিয়েছ।
// কিন্তু তুমি চাও:
// ৫ সেকেন্ডের মধ্যে Response না এলে Timeout দেখাবে।

// const request = fetch("/user")
// const timeout = new Promise((_,reject) =>{
//     setTimeout(()=>{
//         reject("request timeout try again")
//     },5000)
// })
// Promise.race([request,timeout])
// .then((data)=>{
//     console.log("data received");
// })
// .catch((err)=> console.log(err))
// যদি Server ৫ সেকেন্ডের আগে Response দেয় → Success।
// যদি না দেয় → "Request Timeout"।
// এটা বাস্তব Project-এ খুব Common Pattern।


// 🎯 Interview Ready Answer
// Promise.race() কী?
// Promise.race() returns a promise that settles as soon as the first promise settles, whether it resolves or rejects.
// বাংলায়:
// যে Promise সবার আগে Resolve বা Reject হয়, Promise.race() তার Result দেয়।




// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");

// Promise.race([p1, p2])
//     .then(console.log); A
// কিন্তু একটা গুরুত্বপূর্ণ Note
// দুটো Promise-ই already resolved।
// এক্ষেত্রে Promise.race() যে Promise array-তে আগে আছে, সেটাই Winner হয়।



// const p1 = new Promise((resolve) =>{
//     setTimeout(() => {
//         resolve("slow")
//     }, 2000);
// })
// const p2 = new Promise((resolve) =>{
//     setTimeout(() => {
//         resolve("first")
//     }, 1000);
// })

// Promise.race([p1,p2])
// .then((result) =>{
//     console.log(result);
// })


// const p1 = new Promise((resolve) =>{
//     setTimeout(() => {
//         resolve("slow")
//     }, 3000);
// })
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//        reject(new Error("Request Timeout"));
//     }, 1000);
// })

// Promise.race([p1,p2])
// .then((result) =>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })


// // 🧠 Interview Tip
// // অনেক Interview-তে তারা জিজ্ঞেস করে:
// // "কখন Promise.race() ব্যবহার করবে?"
// // ভালো উত্তর হবে:
// // যখন একাধিক Promise-এর মধ্যে যে আগে Complete হবে তার Result দরকার, যেমন Request Timeout Implement করতে।


// ===============================================================
// 🎯 একটা ছোট Challenge তোমার জন্য (উত্তর এখনই দিতে হবে না)
// ধরো তোমার ১০টা ছবি Upload হচ্ছে।
// ৮টা সফল হয়েছে
// ২টা ব্যর্থ হয়েছে
// তুমি কি পুরো Process Fail করতে চাও?
// 👉 না।
// তুমি জানতে চাও—
// কোনগুলো Success?
// কোনগুলো Failed?
// এই Problem-টাই Promise.allSettled() Solve করে।


// Promise.allSettled() কী?
// সহজ বাংলায়:
// Promise.allSettled() সব Promise শেষ হওয়া পর্যন্ত অপেক্ষা করে, তারপর প্রত্যেকটির Result দেয়—সফল হোক বা ব্যর্থ।

// const p1 = Promise.resolve("HTML");
// const p2 = Promise.reject("Network Error");
// const p3 = Promise.resolve("JavaScript");

// Promise.allSettled([p1,p2,p3])
// .then((results)=>{
//     console.log(results);
// })

// Real Project Example
// ধরো একটি Dashboard Load হচ্ছে।
// একসাথে তিনটি Request পাঠানো হলো:
// User Info
// Products
// Notifications
// Notifications API Fail করল।
// তুমি কি User Info-ও দেখাবে না?
// ❌ না।
// তুমি User Info এবং Products দেখাবে, আর Notifications-এর Error Handle করবে।
// এটাই Promise.allSettled()-এর ব্যবহার।

// const user = Promise.resolve("Bright");
// const posts = Promise.resolve(25);
// const comments = Promise.reject("Comments Error");

// Promise.allSettled([user,posts,comments])
// .then((results) =>{
//     console.log(results);
// })

// 🎯 Interview Ready Answer
// Promise.allSettled() কী?
// Promise.allSettled() waits for all promises to settle and returns the result of each promise, whether fulfilled or rejected.
// বাংলায়:
// সব Promise শেষ হওয়ার পর প্রত্যেকটির Result দেয়, Success বা Failure যাই হোক।


// const p1 = Promise.resolve("Apple")
// const p2 = Promise.reject("Banana Error")
// const p3 = Promise.resolve("Orange")

// Promise.allSettled([p1,p2,p3])
// .then((results) =>{
//     console.log(results);
// })


// const p1 = Promise.resolve(100)
// const p2 = Promise.reject("Calculation Failed")

// Promise.allSettled([p1,p2])
// .then(([firstResult, secondResult]) =>{
//   console.log(firstResult.status);
    // console.log(secondResult.status);
// })

// 🧠 Interview Tip
// অনেক Interview-তে এই প্রশ্নটা আসে:
// কখন Promise.allSettled() ব্যবহার করবে?
// ভালো উত্তর:
// যখন সব Promise-এর Result দরকার, এমনকি কিছু Promise Fail করলেও।

// Promise.allSettled() সব Promise fulfill করে না।
// বরং—
// It waits for all promises to settle and returns every result.
// কারণ Reject হওয়া Promise Reject-ই থাকে।


// ================================================================
// Promise 1 ❌
// Promise 2 ❌
// Promise 3 ✅

// Promise.all()
// ❌ Reject
// Promise.race()
// যে আগে শেষ হবে।
// Promise.allSettled()
// সব Result।
// Promise.any()
// আমি প্রথম Successful Promise-টাই চাই।
// যদি প্রথম দুটো Fail করে, তবুও সমস্যা নেই।
// তৃতীয়টা Success হলে সেটাই Return করবে।


// 🤔 Promise.any() কী?
// সহজ বাংলায়:
// Promise.any() প্রথম Successful (fulfilled) Promise-এর Result Return করে।
// এখানে একটা বড় পার্থক্য আছে।
// ❌ কে আগে Finish করল, সেটা গুরুত্বপূর্ণ না।
// ✅ কে আগে Successfully Resolve করল, সেটাই গুরুত্বপূর্ণ।

// const p1 = Promise.reject("Error 1");
// const p2 = Promise.resolve("JavaScript");
// const p3 = Promise.resolve("React");
// Promise.any([p1,p2,p3])
// .then((results) =>{
//     console.log(results);
// })

// ⚠️ সবচেয়ে গুরুত্বপূর্ণ Rule
// যদি সব Promise Reject হয়, তাহলে Promise.any() Reject করবে।
// Promise.any([
//     Promise.reject("Error 1"),
//     Promise.reject("Error 2")
// ])
// .catch(err => {
//     console.log(err);
// });
// Output হবে একটি AggregateError।এর ভিতরে সব Error-এর তথ্য থাকে।


// 🌟 Real Project Example
// ধরো তোমার একই Image তিনটি Server-এ আছে।
// Server A
// Server B
// Server C
// তুমি শুধু যে Server আগে সফলভাবে Image দেবে, সেটাই চাও।
// এখানে Promise.any() খুব কাজে লাগে।

// 🆚 সব Utility Method একসাথে
// | Method                 | কী অপেক্ষা করে?          | Reject হলে কী হয়?        |
// | ---------------------- | ------------------------ | ------------------------- |
// | `Promise.all()`        | সব Promise Success       | একটি Reject = পুরো Reject |
// | `Promise.race()`       | প্রথম Resolve বা Reject  | প্রথম যেটা Finish করবে    |
// | `Promise.allSettled()` | সব Promise শেষ           | সব Result দেয়            |
// | `Promise.any()`        | প্রথম Successful Promise | সব Reject হলে Reject      |


// Promise.any([
//     Promise.reject("X"),
//     Promise.reject("Y")
// ])
// .catch(err => {
//     console.log(err.name);
// });


// const p1 = Promise.reject("Server 1")
// const p2 = Promise.resolve("Server 2")
// const p3 = Promise.resolve("Server 3")

// Promise.any([p1,p2,p3])
// .then((results) =>{
//     console.log(results);
// })

// const p1 = Promise.reject("Login Failed")
// const p2 = Promise.reject("Wrong Password")
// Promise.any([p1,p2])
// .catch((err) =>{
//     console.log(err.name);
// })

// 🎓 Promise Cheat Sheet (Interview Revision)
// | Method                 | কী করে?                                   |
// | ---------------------- | ----------------------------------------- |
// | `then()`               | Success Handle করে                        |
// | `catch()`              | Error Handle করে                          |
// | `finally()`            | সবসময় Execute হয়                        |
// | `Promise.all()`        | সব Promise Success হলে Result দেয়        |
// | `Promise.race()`       | প্রথম Settled Promise (Resolve বা Reject) |
// | `Promise.allSettled()` | সব Promise-এর Result দেয়                 |
// | `Promise.any()`        | প্রথম Successful Promise দেয়             |
