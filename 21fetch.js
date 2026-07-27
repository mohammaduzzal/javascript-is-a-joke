// 🤔 fetch() কী?
// সহজ বাংলায় বললে,
// fetch() হলো JavaScript-এর একটি Built-in Function, যা Server-এর কাছে Data Request পাঠায়।
// ধরো তুমি একটি E-commerce Website বানিয়েছ।
// তোমার Website-এ ৫০০টা Product আছে।
// তুমি কি ৫০০টা Product JavaScript File-এ লিখে রাখবে?
// ❌ না।
// সব Product Server বা Database-এ থাকবে।
// যখন User Website-এ ঢুকবে, তখন JavaScript Server-কে বলবে—
// "আমাকে Product-গুলোর Data দাও।"
// এই Request পাঠানোর কাজটাই করে fetch()।

// Basic Syntax :fetch("https://jsonplaceholder.typicode.com/users");
// এখানে কী হলো?
// fetch() Server-এ Request পাঠালো।
// কিন্তু এখনও Data হাতে আসেনি।

// ⭐ সবচেয়ে গুরুত্বপূর্ণ Rule
// fetch() Data Return করে না।
// এটা Return করে...
// Promise

// 🤔 Promise কেন Return করে?
// ধরো Server অনেক দূরে।
// Data আসতে ২ সেকেন্ড লাগবে।
// যদি JavaScript অপেক্ষা করত, তাহলে পুরো Website Freeze হয়ে যেত।
// তাই JavaScript বলে—
// "আমি এখনই Data দিতে পারছি না। আপাতত একটা Promise নাও। Data এলে Promise Resolve করে দেব।"


// await দিয়ে Example
// async function getUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     console.log(response);
// }

// getUsers();
// এখানে response-এর ভিতরে কী আছে?
// ❌ User Data না।
// ✅ Response Object



// .then() দিয়ে Example
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//     console.log(response);
// });
// এখানেও response হচ্ছে—

// ✅ Response Object

// তাহলে User Data কোথায়?
// এই প্রশ্নটাই সবচেয়ে গুরুত্বপূর্ণ।
// fetch() শুধু Response দেয়।
// Response-এর ভিতর থেকে আসল JSON Data বের করতে হয়।


// fetch() কী?
// English (Interview):
// fetch() is a built-in JavaScript function that sends an HTTP request and returns a Promise that resolves to a Response object.
// বাংলায়:
// fetch() হলো JavaScript-এর একটি Built-in Function, যা Server-এ Request পাঠায় এবং একটি Promise Return করে। Promise Resolve হলে একটি Response Object পাওয়া যায়।


// async function demo() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
// }
// demo()


// 📌 আজকের Lesson থেকে শুধু এই ৩টি বিষয় মনে রাখবে
// ✅ fetch() Server-এ Request পাঠায়।
// ✅ fetch() Data নয়, Promise Return করে।
// ✅ Promise Resolve হলে আমরা Response Object পাই।


// why fetch return promise?

// Server থেকে Data আসতে সময় লাগে। তাই JavaScript অপেক্ষা না করে একটি Promise Return করে। যখন Server Response পাঠায়, তখন Promise Resolve হয়।


// ===================================================

// Response.json()

// async function demo() {

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();

//     console.log(data);

// }

// demo();

// কিন্তু আবার await কেন?
// এই লাইনটা দেখো—const data = await response.json();
// "আমরা তো একবার await ব্যবহার করেছি। আবার কেন?"

// Step by Step:
// Step 1 -const response = await fetch(url);
// এখানে JavaScript Server-এর কাছ থেকে Response আসার জন্য অপেক্ষা করছে।

// Step 2
// Response এসে গেছে।
// কিন্তু...
// Response-এর Body-এর ভিতরের JSON-কে JavaScript Object-এ Convert করতে সময় লাগে।
// তাই -- response.json() 
// এটাও Promise Return করে। 
// তাই আবার লিখতে হয়— await response.json();


// মনে রাখার Rule ⭐⭐⭐
// fetch() ----->   ➡️ Promise Return করে।
// response.json() -----> ➡️ এটাও Promise Return করে।

// তাই—
// await fetch()
// await response.json()
// দুই জায়গাতেই await লাগে।


// response.json() কী?
// English:
// response.json() reads the response body and converts JSON into a JavaScript object or array. It returns a Promise.
// বাংলায়:
// response.json() Response Body থেকে JSON Data পড়ে JavaScript Object বা Array-এ Convert করে। এটি একটি Promise Return করে।



// const demo = async()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
// }
// demo()
// const demo = async()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data[0].name);
// }
// demo()


// await fetch()
//         ↓
// Response Object

// await response.json()
//         ↓
// JavaScript Object / Array

// async function demo() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     console.log(1);

//     const users = await response.json();

//     console.log(2);

//     console.log(users.length);
// }

// console.log(0);

// demo();

// console.log(3);

// =================================================================
// response.ok এবং Error Handling

// response.ok কী?
// response.ok একটি Boolean Property।
// এটি বলে-
// Request সফল হয়েছে কি না।
// response.ok একটি Boolean Property, যা জানায় HTTP Request সফল হয়েছে কি না।

// console.log(response.ok); //true

// Common Status Codes
// | Status | Meaning               |
// | ------ | --------------------- |
// | 200    | Success               |
// | 201    | Created               |
// | 400    | Bad Request           |
// | 401    | Unauthorized          |
// | 403    | Forbidden             |
// | 404    | Not Found             |
// | 500    | Internal Server Error |



// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if (!response.ok) {
//             throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err.message);

//     }
// }



// async function demo() {

//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         // এখানে response.ok Check করো
//         if(!response.ok){
//             throw new Error("Users Not Found")
//         }

//         const data = await response.json();

//         console.log(data);

//     } catch (err) {

//         console.log(err.message);

//     }

// }

// demo();

// 📚 আজকের Lesson Summary
// মনে রাখবে—
// ✅ fetch() Network Error হলে Reject করে।
// ✅ 404 সবসময় catch-এ যায় না।
// ✅ response.ok Check করা Professional Practice।
// ✅ response.status দিয়ে HTTP Status জানা যায়।


// fetch() শুধুমাত্র 404 পেলেই Promise Reject করে।
// False
// ✅ একদম ঠিক।
// কারণ:
// ❌ 404 = Server Response দিয়েছে।
// ✅ Network Error = Promise Reject হবে।

// কেন response.ok Check করা ভালো Practice?
// fetch() 404 বা 500-এর জন্য Promise Reject করে না। তাই response.ok Check করে আমরা নিজেই Error Throw করি, যাতে catch Block সেটি Handle করতে পারে।

// ⭐⭐⭐ সবচেয়ে গুরুত্বপূর্ণ Difference
// Situation	response পাওয়া যাবে?    	response.ok	      catch
// 200           ✅ Yes                    true           ❌ No

// 404           ✅ Yes                    false        ❌ (যতক্ষণ না তুমি throw করো)

// 500           ✅ Yes                    false       ❌ (যতক্ষণ না তুমি throw করো)

// Internet নেই   ❌ No                     —           ✅ Yes

// Domain নেই     ❌ No                    —             ✅ Yes

// ===============================================================================

// API থেকে Data Display করা (map())

// Method 1: for...of
// const response = await fetch("https://jsonplaceholder.typicode.com/users");

// const users = await response.json();

// for (const user of users) {
//     console.log(user.name);
// }


// Method 2: forEach()
// users.forEach((user) => {
//     console.log(user.name);
// });

// Method 3: map()
// const names = users.map((user) => user.name);

// console.log(names);

// ⭐ Interview Question
// API থেকে Data Display করতে React-এ কোনটা বেশি ব্যবহার হয়?
// 👉 map()
// কারণ React-এ আমরা JSX Return করি।



// const users = [
//     { name: "Bright" },
//     { name: "Alex" }
// ];

// const result = users.forEach(user => user.name);

// console.log(result);

// why use map()?
// React uses map() because it returns a new array of JSX elements that React can render to the UI.


// ===============================================

// Fetch API
// ⭐ Real Project Pattern

{/* <body>

    <h1>Users</h1>

    <ul id="user-list">

    </ul>

    <script src="21fetch.js"></script>

</body> */}

// async function loadUser() {
//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         if(!response.ok){
//             throw new Error("user not found")
//         }


//         const data = await response.json()


//         const userList = document.getElementById("user-list")

//         data.forEach(user => {
//             const li = document.createElement("li")
//             li.innerText = `${user.name} - ${user.email}`
            
//             userList.appendChild(li)
//         });

        
//     } catch (error) {
//         console.log(error.message);
//     }
// }











