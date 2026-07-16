// What is an Object in JavaScript?

// Object হলো এমন একটি Data Structure যেখানে আমরা Key-Value pair আকারে data store করি।

const mobile = {
     brand: "Samsung",
    model: "S25",
    price: 80000,

    call : function (){
        console.log("calling....");
    }

}

console.log(mobile.brand);
mobile.call()

// Object তৈরি করার বিভিন্ন উপায়
// 1️⃣ Object Literal (সবচেয়ে Common)

const person = {
    name: "Bright",
    age: 25
};

console.log(person);

// 2️⃣ Object Constructor
const boy = new Object();

boy.name = "mort";
boy.age = 75;
console.log(boy);

// 3️⃣ Constructor Function
// যখন অনেকগুলো একই ধরনের Object তৈরি করতে হয়।

function Person (name,age){
    this.name = name;
    this.age = age;
}

const person1 = new Person("BRIGHT",26.5) //NEW -> new obj refer & this refer obj
const person2 = new Person("MAX",26.5)
console.log(person1);
console.log(person2);

// Prototype কী?
// Prototype হলো একটি Object যেখান থেকে অন্য Object properties এবং methods পেতে পারে।
// একটি Object-এর নিজের কোনো property না থাকলে JavaScript তার Prototype-এ খুঁজে দেখে।

const person00 = {
    name:"Bright"
};
console.log(person00.toString());

// Prototype Chain

// JavaScript কোনো property খুঁজলে এভাবে খোঁজে:
// Object
//   |
//   ↓
// নিজের Property
//   |
//   ↓
// Prototype
//   |
//   ↓
// Prototype-এর Prototype
//   |
//   ↓
// null
// console.log(Array.prototype);

// Important Interview Difference
// prototype vs proto

// prototype
// এটি Function-এর property।
function Work(){

}
console.log(Work.prototype);

// proto

// এটি Object-এর internal link।

const book = {}
console.log(book.__proto__);


// Constructor Function + Prototype Example
function Work1(name){
this.name = name

}

const w1 = new Work1("cleaning")

Work1.prototype.sayHello = function(){
    console.log(" hello do the "  +  this.name);


}

w1.sayHello()

// কেন Prototype-এ Method রাখি?

// ১০০০টি object বানালে:

// প্রতিটির জন্য আলাদা function তৈরি হবে।

// Memory বেশি লাগবে।

// Prototype ব্যবহার করলে:

// একটি method সবার জন্য share হয়।


// Interview Ready Answer

// Prototype is an object from which other objects inherit properties and methods. Every JavaScript object has a prototype, and JavaScript uses the prototype chain to search for properties and methods.


// Quick Revision

// ✅ Object = key-value pair data

// ✅ new creates new object

// ✅ Constructor function creates multiple objects

// ✅ Prototype provides shared properties/methods

// ✅ Prototype Chain is how JavaScript finds missing properties

// ✅ Array methods come from Array.prototype