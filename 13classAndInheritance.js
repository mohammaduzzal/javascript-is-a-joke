// Does JavaScript support Classes?
// হ্যাঁ, JavaScript-এ class আছে।

// কিন্তু গুরুত্বপূর্ণ বিষয় হলো:
// JavaScript class আসলে Prototype-এর উপর তৈরি একটি syntactic sugar।

// মানে:
// class লিখলে ভিতরে JavaScript আসলে Prototype ব্যবহার করে।

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHello = function(){
//     console.log(" hello "  +  this.name);
// }

// const person1 = new Person("bright",26) 
// person1.sayHello()


// এখন একই জিনিস Class দিয়ে লিখি।

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHello(){
//         console.log("hello " + this.name);
//     }
// }

// const person1 = new Person("uzzal" ,26)
// person1.sayHello()

// এখানে কী হলো?

// class Person {

// }
// একটি Blueprint তৈরি করলো।

// যেমন:
// বাড়ির নকশা = Class
// বাস্তব বাড়ি = Object

// Class-এর Structure
// class ClassName {

//     constructor(){

//     }


//     method(){

//     }

// }

// constructor() কী?
// constructor() হলো special method।
// এটি object তৈরি হওয়ার সময় automatically execute হয়।


// যখন:
// new Person("uzzal" ,26)
// চলবে তখন:
// constructor()
// নিজে থেকে call হবে।


// Class Method কোথায় থাকে?

// এখানে একটি গুরুত্বপূর্ণ Interview Point।
// এই Code:
// class Person {

//     sayHello(){
//         console.log("Hello");
//     }

// }
// person1 object-এর ভিতরে কি sayHello() থাকে?
// ❌ না।
// এটি থাকে: Person.prototype এর ভিতরে।


// Inheritance কী?
// একটি Class অন্য একটি Class-এর Properties এবং Methods ব্যবহার করতে পারবে।
// সহজভাবে:
// Parent-এর জিনিস Child ব্যবহার করতে পারবে।

// JavaScript Inheritance 
// ব্যবহার করি: extends

// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     eat(){
//         console.log(this.name + " is eating");
//     }
// }


// class Dog extends Animal{
//     bark(){
//         console.log(this.name + " is barking");
//     }
// }

// const dog = new Dog("tom")
// dog.eat()
// dog.bark()

// এখানে কী হলো?
// class Dog extends Animal

// মানে:
// Dog হলো Animal-এর child।
// তাই Dog পেয়ে গেছে: eat()  method

// এখন আসি super()

// Problem:
// class Dog extends Animal {

//     constructor(name){
//         this.name = name;
//     }

// }
// এটা কাজ করবে না।
// কারণ Child class constructor-এ Parent constructor call করতে হবে।
// class Dog extends Animal {

//     constructor(name){
//         super(name);
//     }

// }
// super() কী করে?
// super() Parent class-এর constructor call করে।

// class Animal {

//     constructor(name){
//         this.name = name;
//     }

// }

// class Dog extends Animal{
//     constructor(name,color){
//         super(name)
//         this.color = color
//     }
// }

// const dog = new Dog("tommy", "black")
// console.log(dog);

// Method Overriding
// Child চাইলে Parent-এর method পরিবর্তন করতে পারে।

// class Animal {

//     sound(){
//         console.log("Animal sound");
//     }

// }


// class Dog extends Animal {

//     sound(){
//         console.log("Bark");
//     }

// }


// const dog = new Dog();

// dog.sound();

// Interview Questions

// Q1. Class কি Prototype ব্যবহার করে?

// ✅ হ্যাঁ।

// Q2. extends কী করে?

// একটি class থেকে অন্য class inherit করে।

// Q3. super() কেন লাগে?

// Parent constructor call করার জন্য।

// Q4. Method কোথায় থাকে?

// Class-এর method prototype-এ থাকে।

// Q5. JavaScript কি classical inheritance নাকি prototype inheritance?

// সঠিক উত্তর:

// JavaScript uses prototype-based inheritance.

// Common Mistakes
// class Dog extends Animal {

// constructor(){
//  this.name="Tom";
// }

// }
// ভুল।

// কারণ আগে: super() call করতে হবে।

// ❌

// ভাবা:

// Class মানেই অন্য language-এর মতো।

// না।

// JavaScript class হলো Prototype-এর উপর তৈরি syntax।

// 🧠 Quick Revision

// ✅ Class = Blueprint

// ✅ Object = Class-এর instance

// ✅ constructor() = object তৈরি হওয়ার সময় চলে

// ✅ extends = inheritance

// ✅ super() = parent constructor call

// ✅ Methods থাকে prototype-এ

// ✅ JavaScript inheritance = Prototype based



// class Dog extends Animal {

//     constructor(name){
//         this.name = name;
//     }

// }

// In a derived class, super() must be called before using this. Otherwise, JavaScript throws a ReferenceError because the parent constructor hasn't initialized the object yet.