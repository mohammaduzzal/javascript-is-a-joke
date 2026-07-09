// What is this in JavaScript?
// this হলো JavaScript-এর একটি special keyword যা বর্তমান execution context-এর object কে refer করে।

// this বলে দেয় — "এই মুহূর্তে কোন object-এর কথা বলা হচ্ছে।"

// 🌍 Real-Life Example
// ধরো একজন মানুষ বলছে:
// "আমি একজন Developer।"
// এখানে "আমি" কে?
// যে ব্যক্তি কথাটি বলছে, তার উপর নির্ভর করে।
// Bright বললে → "আমি" = Bright
// Alex বললে → "আমি" = Alex
// JavaScript-এ this অনেকটা এমন।
// this-এর value নির্ভর করে কোথায় এবং কীভাবে function call হচ্ছে তার উপর।

// সবচেয়ে গুরুত্বপূর্ণ Rule
// ❗ this Function কীভাবে লেখা হয়েছে তা দেখে না।
// ❗ this Function কীভাবে Call হয়েছে তা দেখে।
// এটি Interview-এর খুব গুরুত্বপূর্ণ Rule।
console.log(this);

let age = 25;

console.log(this.age); //undefined 
// কারণ let এবং const global object-এর property হয় না।

// 2️⃣ Object-এর ভিতরে this
// এখানে সবচেয়ে বেশি ব্যবহার হয়।
const person = {
    name : "bright",

    showName : function(){
        console.log(this.name);

    }


}
person.showName()

const user = {
    name : "b",

    geet(){
        console.log(this.name);
    }
}

// const fn = user.geet;
// fn()


// call
const person1 = {
    name: "Bright"
};

const person2 = {
    name: "Alex"
};

function greet() {
    console.log(this.name);
}
greet.call(person1)
greet.call(person2)

// 6️⃣ apply()
// call()-এর মতোই।
// Difference:
// Arguments দেওয়ার Style আলাদা।

function add(a,b){
    console.log(a+b);
}

add.call(null,10,20);
add.apply(null,[10,20]);

// 7️⃣ bind()

// bind() একটি নতুন Function Return করে।
// const person = {
//     name:"Bright"
// };

// function greet(){
//     console.log(this.name);
// }

// const newFunction = greet.bind(person);

// newFunction();

// call vs apply vs bind

// 🧠 Quick Revision
// ✅ this = current context reference
// ✅ Object method-এ this = object
// ✅ Regular function-এর নিজের this আছে
// ✅ Arrow function-এর নিজের this নেই
// ✅ call/apply/bind দিয়ে this change করা যায়


const per = {
    name : "br",

    // greet(){
    //     setTimeout(function() {
    //         console.log(this.name);
    //     }, 1000);
    // }
    greet(){
        setTimeout(()=> {
            console.log(this.name);
        }, 1000);
    }
}

per.greet()

// /-----------------------------------

// What are call(), apply(), and bind()?
// call(), apply(), এবং bind() হলো JavaScript-এর Function Method, যেগুলো ব্যবহার করে আমরা কোন Function-এর this value নিজের মতো সেট করতে পারি।

// এগুলো দিয়ে আমরা ঠিক করে দিতে পারি Function-এর ভিতরে this কে হবে।

// 1️⃣ call()
// Definition:

// call() Function-কে সাথে সাথে execute করে এবং প্রথম argument হিসেবে this সেট করে।
// const person = {
//     name: "Bright"
// };

// function greet() {
//     console.log(this.name);
// }

// greet.call(person); //bright

// function introduction(age,profession){
//     console.log(
//         this.name,
//         age,
//         profession
//     );
// }

// const user0 ={
//     name : "bright"
// }

// introduction.call(user0,26.6,"developer")

// // functionName.call(thisValue, arg1, arg2);



// 2️⃣ apply()

// apply() প্রায় call() এর মতো।

// Difference শুধু Arguments দেওয়ার পদ্ধতিতে।

// functionName.apply(thisValue,[arg1,arg2]);



// 3️⃣ bind()
// এটি একটু আলাদা।
// bind() Function-কে সাথে সাথে চালায় না।
// এটি একটি নতুন Function Return করে।


const person4 = {
    name: "Bright"
};

function greet(){
    console.log(this.name);
}

const newGreet = greet.bind(person4);

newGreet();


// call vs apply vs bind
// | Feature             | call  | apply | bind  |
// | ------------------- | ----- | ----- | ----- |
// | Execute immediately | ✅     | ✅     | ❌     |
// | Return new function | ❌     | ❌     | ✅     |
// | Arguments           | comma | array | comma |
// | Set this            | ✅     | ✅     | ✅     |


// 🧠 Quick Revision

// ✅ call → execute immediately

// ✅ apply → execute immediately + arguments array

// ✅ bind → returns new function

// ✅ তিনটিই this control করে

// ✅ Arrow Function-এর this change করা যায় না

const user0 = {
    name: "Bright"
};

function greet() {
    console.log(this.name);
}

const result = greet.bind(user0);

console.log(result); // [Function: bound greet]