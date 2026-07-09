// What is a Closure?

// Closure হলো এমন একটি Feature যেখানে একটি Function তার Parent Function-এর Variable মনে রাখতে পারে, এমনকি Parent Function Execute শেষ হওয়ার পরেও।

// Closure = Function নিজের বাইরের (Lexical Scope-এর) Variable মনে রাখতে পারে।

// একটি Inner Function, Outer Function শেষ হয়ে যাওয়ার পরও তার Variable মনে রাখতে পারে।
// এটাই Closure।

function outer(){
    let name = "bright"

   return function (){
        console.log(name);
    }
}
// const result = outer()

// result()

function counter(){
    let count = 0

    return function(){
        count ++
        console.log(count);
    }
}

// const increment1 = counter()
// const increment2 = counter()
// increment1()
// increment1()
// increment2()
// increment2()


// 🌍 Real-Life Example
// ধরো দুটি Piggy Bank আছে।
// একটিতে ১০০ টাকা।
// আরেকটিতে ০ টাকা।
// দুটো আলাদা।
// একটির টাকা অন্যটিতে যায় না।
// Closure-ও ঠিক এমন।
// প্রতিটি Call-এর নিজস্ব Memory থাকে।


// Private Variable --Closure-এর সবচেয়ে বড় ব্যবহার।

function bankAccount(){
    let balance  = 1000;

    return function(){
        balance += 500
        console.log(balance);
    }
}

const deposit = bankAccount()

deposit()
deposit()
deposit()

// প্রশ্ন আমরা কি বাইরে থেকে balance Access করতে পারি? 
// console.log(balance); //ReferenceError  কারণ balance Private। শুধু Closure-এর ভিতর থেকে Access করা যায়।


// কেন Closure ব্যবহার করা হয়?
// ✅ Private Variable তৈরি করতে।
// ✅ Data Hide করতে।
// ✅ State Maintain করতে।
// ✅ Event Handler-এ।
// ✅ React Hooks (useState) বুঝতে সাহায্য করে।

function greeting(message){

    return (name)=>{
        console.log(message + " " + name);

    }
}

const sayHello = greeting("hello")

sayHello("bright")
sayHello("rik")


function test(){
    let x = 10

    return function(){
        return x
    }
}

const fn = test()
console.log(fn()); // 10
// কেন?
// কারণ Inner Function, x-কে Closure-এর মাধ্যমে মনে রেখেছে।

// Interview Ready Answer

// A Closure is a feature in JavaScript where an inner function remembers and can access variables from its outer lexical scope, even after the outer function has finished executing. Closures are commonly used for data privacy, maintaining state, and creating private variables.

// Common Interview Questions


// Q2. Closure কেন দরকার?
// Private Variable
// State Maintain
// Data Hiding
// Q3. Closure কি Memory Leak করতে পারে?

// 👉 হ্যাঁ।

// যদি অপ্রয়োজনীয়ভাবে বড় Object বা DOM Reference ধরে রাখে, তাহলে Memory Release হতে দেরি হতে পারে।

// Q4. Closure কি শুধু Function-এর ভিতরেই হয়?

// ✅ Closure Function-এর সাথেই সম্পর্কিত, কারণ Function Lexical Scope Capture করে।

// Common Mistakes

// ❌ ভাবা যে outer() শেষ হলে সব Variable মুছে যায়।

// ✔️ যদি Returned Function Variable ব্যবহার করে, তাহলে JavaScript সেই Variable ধরে রাখে।

// ❌ Closure মানে শুধু Nested Function।

// ✔️ না।

// Nested Function থাকলেই Closure নয়। যখন Inner Function Outer Scope-এর Variable Capture করে, তখন Closure-এর আসল ব্যবহার দেখা যায়।

// 🧠 Quick Revision

// ✅ Closure = Inner Function remembers Outer Variable.

// ✅ Lexical Scope-এর উপর ভিত্তি করে কাজ করে।

// ✅ Outer Function শেষ হলেও Variable মনে থাকে।

// ✅ Private Variable তৈরি করা যায়।

// ✅ প্রতিটি Function Call আলাদা Closure তৈরি করে।



function createMultiplier(multiplier) {

    return (num)=>{
        return multiplier * num
    }

}

const double = createMultiplier(2);

console.log(double(5));
console.log(double(10));