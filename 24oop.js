// Class, Object, Constructor, Inheritance আগে শিখেছ, তাই এগুলো আবার শুরু থেকে টেনে নিয়ে যাব না। এখন OOP-এর বাকি গুরুত্বপূর্ণ concept-গুলোতে focus করব।


// Encapsulation কী?
// Encapsulation মানে হলো data এবং সেই data নিয়ে কাজ করার methods-কে একসাথে রাখা এবং data-কে সরাসরি access করা থেকে নিয়ন্ত্রণ করা।

// Data
//  +
// Methods
//  ↓
// একসাথে class-এর ভিতরে রাখা


// 🧠 Real-life Example
// ধরো একটা Bank Account:
// তোমার balance আছে: Balance = 50000
// তুমি চাইবে না যে যে-কেউ সরাসরি লিখে দিক: account.balance = -100000;
// বরং তুমি চাইবে:account.withdraw(5000);
// তারপর withdraw() check করবে:
//   টাকা যথেষ্ট আছে?
//        ↓
//     হ্যাঁ → withdraw
//     না → reject
// এটাই Encapsulation-এর idea।



// class BankAccount{
//     #balance
//     constructor(owner,balance){
//         this.owner = owner;
//         this.#balance = balance

//     }


//     deposit(amount){
//         this.#balance += amount
//     }

//     withdraw(amount){
//         if(amount<= this.#balance){
//             this.#balance -=amount
//         }else{
//             console.log("insufficient balance");
//         }
//     }

//     getBalance(){
//         return this.#balance
//     }
// }


// const account = new BankAccount("bright", 5000)

// console.log(account);


// account.deposit(2000)

// console.log(account.getBalance());

// account.withdraw(100)
// console.log(account.getBalance());

// এখানে Encapsulation কোথায়?
// #balance
// private।

// বাইরে থেকে: account.#balance করা যায় না।
// কিন্তু public method:
// getBalance()
// deposit()
// withdraw()
// দিয়ে controlled access করা যায়।
// অর্থাৎ:   
// Outside
//    ↓
// Public Methods
//    ↓
// Private Data

// ⭐ 5️⃣ কেন Encapsulation ব্যবহার করি?
// 1. Data protection

// Sensitive data সরাসরি পরিবর্তন করা যায় না।

// 2. Controlled access

// কীভাবে data পরিবর্তন হবে সেটা class ঠিক করে।

// 3. Maintainability

// ভেতরের implementation পরিবর্তন করলেও বাইরের code একইভাবে method ব্যবহার করতে পারে।




// =======================================================
// 🤔 Polymorphism কী?

// Poly = অনেক
// Morph = form / রূপ

// অর্থাৎ:

// একই method বা interface বিভিন্ন object-এর ক্ষেত্রে বিভিন্নভাবে কাজ করা = Polymorphism।


// একই নাম
//   ↓
// ভিন্ন object
//   ↓
// ভিন্ন behavior


    //          Animal
    //             │
    //          speak()
    //             │
    //     ┌───────┴───────┐
    //     ↓               ↓
    //    Dog             Cat
    //  speak()          speak()
    //    ↓                ↓
    //  Woof!            Meow!
//  দুই object-এর method-এর নাম একই:
// speak()
// কিন্তু behavior আলাদা।
// এটাই Polymorphism।


// Inheritance
// → কে কার থেকে features পায়?

// Polymorphism
// → একই method কে কীভাবে different behavior দেয়?



// ===============================================================

// Abstraction কী?
// সহজ বাংলায়:
// Abstraction হলো unnecessary/complex implementation details লুকিয়ে রেখে user-কে শুধু প্রয়োজনীয় interface দেওয়া।


// একদম সহজ উদাহরণ:

// তুমি গাড়ি চালানোর সময়:

// Start button
// Brake
// Accelerator
// Steering

// ব্যবহার করো।

// কিন্তু গাড়ির ভিতরে:

// Engine কীভাবে fuel burn করছে
// Gearbox কীভাবে কাজ করছে
// ECU কীভাবে সিদ্ধান্ত নিচ্ছে

// এসব তোমাকে জানতে হয় না।

// তুমি শুধু যেটা দরকার সেটা ব্যবহার করছো।

// এটাই Abstraction-এর basic idea।


// Encapsulation
// → Data hiding

// Abstraction
// → Implementation hiding


// JavaScript-এ Abstraction

// JavaScript-এ Java/C++-এর মতো traditional abstract class keyword নেই।

// তাই আমরা সাধারণত:

// methods
// classes
// private fields
// interfaces-এর মতো patterns

// ব্যবহার করে abstraction তৈরি করি।


// class CoffeeMachine {

//     makeCoffee() {
//         this.#boilWater();
//         this.#grindCoffee();
//         this.#addCoffee();
//         console.log("Coffee is ready!");
//     }

//     #boilWater() {
//         console.log("Boiling water...");
//     }

//     #grindCoffee() {
//         console.log("Grinding coffee...");
//     }

//     #addCoffee() {
//         console.log("Adding coffee...");
//     }

// }

// এখন user শুধু:

// const machine = new CoffeeMachine();

// machine.makeCoffee();

// করবে।

// User-কে জানতে হচ্ছে না:

// কীভাবে পানি boil হলো?
// কীভাবে coffee grind হলো?
// কীভাবে coffee add হলো?

// সে শুধু জানে:

// machine.makeCoffee();

// এটাই abstraction।

// 🧠 এখানে কী লুকানো হয়েছে?

// এই methods:

// #boilWater()
// #grindCoffee()
// #addCoffee()

// private।

// User এগুলো সরাসরি call করতে পারবে না।

// কিন্তু:

// makeCoffee()

// public।

// তাই:

// User
//  ↓
// makeCoffee()
//  ↓
// Complex internal process
//  ↓
// Coffee

// ⭐ Abstraction-এর সুবিধা
// 1. Complexity কমে

// User-কে অনেক internal details জানতে হয় না।

// 2. Code সহজে ব্যবহার করা যায়
// payment.pay(500);

// এর মতো simple interface পাওয়া যায়।

// 3. Internal code পরিবর্তন করা যায়

// ধরো আজ:

// #process()

// একভাবে payment করছে।

// আগামীকাল implementation পরিবর্তন করলে user-এর code:

// payment.pay(500);

// পরিবর্তন করতে হবে না।

// Encapsulation vs Abstraction

// এটা Interview-এর জন্য খুব গুরুত্বপূর্ণ। ⭐

// Encapsulation	                          Abstraction
// Data hide/protect করে	                Implementation details hide করে
// Access control-এর উপর focus	            Simplicity-এর উপর focus
// #balance	                                   makeCoffee()
// কীভাবে data access হবে	                  কী functionality ব্যবহার করা যাবে



// সহজে মনে রাখো:

// Encapsulation
// = "আমার data-তে সরাসরি হাত দিও না"

// Abstraction
// = "ভেতরে কীভাবে হচ্ছে সেটা তোমার জানার দরকার নেই"

// চারটি OOP Concept একসাথে

// এখন তোমার roadmap-এর চারটি প্রধান OOP concept:

// 1. Encapsulation
// Data hiding
// 2. Abstraction
// Implementation hiding
// 3. Inheritance
// Parent → Child
// 4. Polymorphism
// Same method → Different behavior