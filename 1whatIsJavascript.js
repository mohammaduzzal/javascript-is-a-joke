// What is JavaScript?

// JavaScript হলো একটি High-Level, Interpreted (JIT-compiled), Dynamic Programming Language, যা মূলত Web Page-এ interaction এবং dynamic behavior যোগ করার জন্য ব্যবহার করা হয়।

// Can JavaScript run without a browser?

// হ্যাঁ।

// আগে JavaScript শুধুমাত্র Browser-এ চলত।

// কিন্তু এখন Node.js ব্যবহার করে Browser ছাড়াও Server-এ JavaScript চালানো যায়।

// Is JavaScript compiled or interpreted?
// JavaScript-কে সাধারণত interpreted language বলা হয়।

// তবে আধুনিক JavaScript Engine (যেমন Google Chrome-এর V8 Engine) Just-In-Time (JIT) Compilation ব্যবহার করে। অর্থাৎ, কোড চলার সময়ই (runtime) প্রয়োজন অনুযায়ী compile করে, ফলে execution অনেক দ্রুত হয়।

// Chrome কোন Engine ব্যবহার করে?
// v8 engine


// V8 Engine কী?

// V8 হলো Google-এর তৈরি JavaScript Engine।

// এটি—

// JavaScript execute করে
// অনেক দ্রুত কাজ করে
// Node.js-ও V8 ব্যবহার করে

// JavaScript Engine-এর দুইটি প্রধান অংশ:-(Engine-এর ভিতরে অনেক কিছু থাকে।)

// 1️⃣ Memory Heap- 
// Memory Heap হলো JavaScript Engine-এর সেই অংশ যেখানে Variables, Objects, Arrays,func এবং অন্যান্য Data Store করা হয়।

// সহজভাবে,
// Memory Heap = Storage Room

// 2️⃣ Call Stack

// Call Stack -Call Stack হলো JavaScript Engine-এর সেই অংশ যেখানে Function Call-গুলোর Execution Order Maintain করা হয়।এটি LIFO (Last In, First Out) নিয়মে কাজ করে।

// যে Function আগে Call হয়,

// সেটি Stack-এর উপরে যায়।

// কাজ শেষ হলে বের হয়ে যায়।


// JavaScript Single Threaded বলতে কী বোঝায়?

// JavaScript এক সময়ে একটি মাত্র কাজ execute করতে পারে।অর্থাৎ,

// একটি Call Stack থাকে।একসাথে দুইটি Function execute করতে পারে না।
// এজন্য JavaScript-কে
// Single Threaded Language বলা হয়।

// ----------------------
// What is Execution Context?

//Execution Context হলো JavaScript-এর এমন একটি Environment যেখানে JavaScript কোড Execute হয়।

// JavaScript কি সব কোড একসাথে Execute করে?
// ❌ না।
// JavaScript আগে Execution Context তৈরি করে।
// তারপর Code Execute করে।

// Code
// ↓
// Execution Context তৈরি
// ↓
// Memory তৈরি
// ↓
// Execution শুরু
// ↓
// Output

// Execution Context কত প্রকার?
// মাত্র দুই প্রকার।
// 1️⃣ Global Execution Context (GEC)
// 2️⃣ Function Execution Context (FEC)

// 1. Global Execution Context
// যখন JavaScript File Run হয়,
// সবার প্রথমে JavaScript
// একটি Global Execution Context তৈরি করে।
// এটি পুরো Program-এর জন্য মাত্র একবার তৈরি হয়।

// মনে রাখো
// প্রত্যেক JavaScript Program-এর
// ✅ একটি Global Execution Context থাকে।

// 2. Function Execution Context
// যখন কোনো Function Call হয়,
// তখন JavaScript
// সেই Function-এর জন্য
// একটি নতুন Execution Context তৈরি করে।

// Global Execution Context
// ↓
// greet() call the func
// ↓
// Function Execution Context তৈরি
// ↓
// console.log()
// ↓
// Function শেষ
// ↓
// Function Context Delete

// Function Call হলে কী হয়?
// উত্তর
// যখন Function Call হয়,
// JavaScript
// একটি নতুন Function Execution Context তৈরি করে।
// Function শেষ হলে সেই Context নষ্ট হয়ে যায়।

// Execution Context-এর দুইটি Phase:-
// এটি Interview-এ খুবই গুরুত্বপূর্ণ।
// Execution Context দুই ধাপে কাজ করে।
// Execution Context :-
// │
// ├── Creation Phase
// └── Execution Phase

// 1️⃣ Creation Phase :-
// এই Phase-এ JavaScript
// Code Execute করে না।
// বরং প্রস্তুতি নেয়।
// এখানে JavaScript
// ✅ Memory Allocate করে।
// ✅ Variable-এর জন্য জায়গা রাখে।
// ✅ Function Store করে।

// 2️⃣ Execution Phase
// এখন JavaScript
// Line by Line Code Execute করে।

// JavaScript File
// ↓
// Global Execution Context
// ↓
// Creation Phase
// ↓
// Memory তৈরি
// ↓
// Execution Phase
// ↓
// Code Execute

// Common Mistakes
// ❌ Execution Context = Call Stack
// না।
// ExecutionContext এবং Call Stack এক জিনিস নয়।
// Execution Context হলো Environment।
// Call Stack হলো যেখানে Execution Context-গুলো রাখা হয়।

// ❌ Function Context Program শুরুতেই তৈরি হয়।
// না।
// Function Call না করলে Function Execution Context তৈরি হয় না।

// ❌ Creation Phase-এ Code Execute হয়।
// না।
// Creation Phase-এ শুধু Memory Allocate হয়।
// Execution হয় Execution Phase-এ।

// 🧠 Quick Revision
// ✅ Execution Context = Code চালানোর Environment।
// ✅ দুই ধরনের Execution Context আছে:
// Global Execution Context (GEC)
// Function Execution Context (FEC)
// ✅ প্রতিটি Execution Context-এর দুইটি Phase:
// Creation Phase
// Execution Phase
// ✅ Creation Phase → Memory Allocate করে।

// ✅ Execution Phase → Code Execute করে।








