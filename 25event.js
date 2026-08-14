// Event কী?
// Event মানে কী?

// সহজ বাংলায়:

// Browser-এ কোনো কিছু ঘটলে সেটাকে Event বলে।

// যেমন:

// User button-এ click করল
// Keyboard-এ key চাপল
// Mouse কোনো element-এর উপর গেল
// Form submit করল
// Page load হলো

// এসবই Event।


// Event কীভাবে কাজ করে?
// User
//  ↓
// Mouse Click
//  ↓
// Browser detects event
//  ↓
// Event Listener
//  ↓
// Callback function
//  ↓
// Code executes


// Event Listener
// "Button-এ click হলে এই function চালাও।"

// 5️⃣ Click ছাড়াও
// Mouseover
// Keydown
// Input

// Event-এর তিনটা গুরুত্বপূর্ণ অংশ
// element
//    ↓
// কোন element-এর উপর event হবে

// "click"
//    ↓
// কোন event

// callback
//    ↓
// event ঘটলে কী কাজ হবে

// ====================================
// Event Handler কী?
// Event Handler হলো এমন function/code যা কোনো event ঘটলে execute হয়।



// Event Listener কী?

// Event listener-এর জন্য আমরা ব্যবহার করি: addEventListener()



// Handler vs Listener — Table
// Event Handler	                         Event Listener
// onclick	                                  addEventListener()
// একটি handler assign করা যায়	            Multiple listener রাখা যায়
// নতুন assignment পুরনোটা replace করতে পারে	Multiple callback থাকতে পারে
// Remove করতে onclick = null করা যায়	         removeEventListener() ব্যবহার করা যায়
// পুরনো approach	                             বেশি flexible/modern approach


// Event Handler কী?

// কোনো event ঘটলে যে function execute হয় তাকে Event Handler বলা হয়।

// Event Listener কী?

// addEventListener() ব্যবহার করে কোনো element-এর নির্দিষ্ট event-এর জন্য callback function register করাকে event listening বলা যায়।


// =======================================
// Event Object কী?

// যখন কোনো event ঘটে, browser সেই event সম্পর্কে অনেক information তৈরি করে।

// সেই information-গুলো একটি object-এর মধ্যে থাকে।

// event.target ⭐⭐⭐

// এটা খুব important।

// event.target বলে:

// যে element-এর উপর event ঘটেছে সেই element-কে।


// event.currentTarget ⭐⭐⭐

// এটা একটু tricky।

// event.currentTarget হলো:

// যে element-এর উপর listener attach করা হয়েছে।


// target vs currentTarget

// এখন শুধু এইটা মনে রাখো:

// event.target
// ↓
// যেখানে actual event ঘটেছে

// event.currentTarget
// ↓
// যেখানে listener attached আছে

// একটা Important Example
/**<div id="parent">
    <button id="child">Click Me</button>
</div>**/

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {

//     console.log("target:", event.target);
//     console.log("currentTarget:", event.currentTarget);

// });

// এখন button-এ click করলে:

// target: button
// currentTarget: div

// কেন?

// কারণ:

// Listener attached → div

// Actual click → button

// 🔥 এই concept-টাই পরে Event Bubbling এবং Event Delegation বুঝতে খুব কাজে লাগবে।

// 🧠 সহজ Shortcut
// target
// ↓
// "কোথায় click হয়েছে?"

// currentTarget
// ↓
// "কোথায় listener লাগানো আছে?"



// =================================================


// Event Bubbling কী?

// সহজ বাংলায়:

// Child element-এ event ঘটার পর সেই event তার parent → grandparent → আরও উপরের parent-এর দিকে যেতে থাকাকে Event Bubbling বলে।

// অর্থাৎ event:

// Child
//   ↑
// Parent
//   ↑
// Grandparent
//   ↑
// Document

// দিকে উপরে ওঠে।



// Event Bubbling কেন দরকার?

// এখানেই এর আসল power আসে।

// ধরো তোমার কাছে 100টা button আছে:

// <button>Apple</button>
// <button>Orange</button>
// <button>Banana</button>
// ...

// তুমি চাইলে প্রতিটা button-এ আলাদা listener দিতে পারো।

// কিন্তু সেটা সবসময় efficient নয়।

// Event bubbling ব্যবহার করে আমরা parent-এর উপর একটা listener দিতে পারি।

// এটাই পরে:

// ⭐ Event Delegation

// বুঝতে সাহায্য করবে।


// Event Bubbling বন্ধ করা

// কখনো আমরা চাই না event parent-এর দিকে যাক।

// তখন ব্যবহার করি:

// event.stopPropagation();

// Example:

// child.addEventListener("click", (event) => {

//     console.log("Child");

//     event.stopPropagation();

// });

// parent.addEventListener("click", () => {

//     console.log("Parent");

// });

// Button click করলে:

// Child

// শুধু এটুকুই হবে।

// Parent execute হবে না।

// কারণ:

// event.stopPropagation();

// event-এর bubbling বন্ধ করে দিয়েছে।


// what is Event Bubbling?"

// তুমি বলতে পারো:

// Event bubbling is the process where an event starts from the target element and propagates upward through its parent elements.

// বাংলায়:

// কোনো child element-এ event ঘটার পর সেই event parent elements-এর দিকে উপরে propagate করাকে Event Bubbling বলে।



// Bubbling vs Capturing
// Bubbling	                               Capturing
// Child → Parent	                           Parent → Child
// Default behavior	                       true দিয়ে activate করা যায়
// নিচ থেকে উপরে	                          উপর থেকে নিচে
// Event Delegation-এ খুব গুরুত্বপূর্ণ	            তুলনামূলক কম ব্যবহৃত


// ====================================================

// Event Delegation কী?

// সহজ বাংলায়:

// প্রতিটি child element-এ আলাদা event listener না দিয়ে, parent element-এ একটি মাত্র listener ব্যবহার করে child-এর event handle করাকে Event Delegation বলে।

// ধরো তোমার 100টা button আছে।

// সাধারণ পদ্ধতিতে:

// Button 1 → listener
// Button 2 → listener
// Button 3 → listener
// ...
// Button 100 → listener

// Event Delegation-এ:

// Parent
//   ↓
// একটা listener

//   ├── Button 1
//   ├── Button 2
//   ├── Button 3
//   └── Button 100

// 🔥 একটা parent listener দিয়েই সব child handle করা যায়।



// Event Delegation দিয়ে

// আমরা শুধু parent-এর উপর listener দেব:

// const container = document.querySelector("#container");

// container.addEventListener("click", (event) => {

//     console.log(event.target.textContent);

// });

// এখন:

// Apple click:

// Apple

// Orange click:

// Orange

// Banana click:

// Banana

// 🔥 মাত্র একটা listener দিয়ে সব button handle করছি।

// 4️⃣ এটা কাজ করছে কেন?

// কারণ Event Bubbling।

// Button-এ click হলে:

// Button
//   ↑
// Container

// Event bubble হয়ে parent-এ যায়।

// তাই parent-এর listener event ধরতে পারে।

// 🧠 Event Delegation = Event Bubbling-এর সুবিধা নেওয়া

// এটা খুব important:

// Event Bubbling
//        ↓
// Event child থেকে parent-এ যায়
//        ↓
// Parent event ধরতে পারে
//        ↓
// Event Delegation


// খুব Important Problem ⚠️

// ধরো:

// <div id="container">

//     <button>Apple</button>

//     <span>Some text</span>

// </div>

// আমরা লিখলাম:

// container.addEventListener("click", (event) => {

//     console.log(event.target);

// });

// এখন button click করলে ঠিক আছে।

// কিন্তু span click করলেও event trigger হবে।

// আমরা যদি শুধু button-এর click চাই?

// তখন matches() ব্যবহার করতে পারি:

// container.addEventListener("click", (event) => {

//     if (event.target.matches("button")) {
//         console.log(event.target.textContent);
//     }

// });

// এখন:

// Button click → কাজ করবে
// Span click   → কাজ করবে না



// Event Delegation-এর সুবিধা
// ✅ 1. কম Event Listener
// 2. Performance ভালো হতে পারে

// অনেক child থাকলে unnecessary listener কমে যায়।

// ✅ 3. Dynamic elements কাজ করে

// পরে নতুন child তৈরি হলেও parent listener সেটা handle করতে পারে।

// ✅ 4. Code সহজ হয়

// এক জায়গায় event handling করা যায়।



// সবচেয়ে গুরুত্বপূর্ণ Connection

// এই তিনটা একসাথে মনে রাখো:

// Event Bubbling
//       ↓
// Child → Parent
//       ↓
// Parent event ধরতে পারে
//       ↓
// Event Delegation

// ====================================
// preventDefault() কী?

// সহজ বাংলায়:

// Browser কোনো element-এর জন্য যে default কাজ করে, সেই default কাজ বন্ধ করতে preventDefault() ব্যবহার করা হয়।



// link.addEventListener("click", (event) => {

//     event.preventDefault();

//     console.log("Clicked");

// });



// preventDefault() vs stopPropagation()

// দুটোকে গুলিয়ে ফেলবে না।

// preventDefault()

// Browser-এর default action বন্ধ করে।


// stopPropagation()

// Event-এর propagation বন্ধ করে।

// Shortcut
// preventDefault()
// ↓
// Browser-এর default কাজ আটকাও


// stopPropagation()
// ↓
// Event-এর propagation আটকাও

// preventDefault() কখন ব্যবহার করব?
// 🔹 Form submit
// 🔹 Custom form validation
// 🔹 Link navigation


// stopPropagation() কী?

// সহজ বাংলায়:

// একটি event যেন parent বা অন্য ancestor element-এর দিকে আর propagate না করে, সেটা বন্ধ করার জন্য stopPropagation() ব্যবহার করি।