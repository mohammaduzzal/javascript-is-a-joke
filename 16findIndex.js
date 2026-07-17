// What is findIndex()?
// সহজ বাংলায়:
// findIndex() Condition অনুযায়ী প্রথম Matching Element-এর Index Return করে।
// এখানে খেয়াল করো:
// find() → Element Return করে
// findIndex() → Index Return করে

// const numbers = [5, 10, 15, 20];
// const number = numbers.findIndex(number => number > 10)
// console.log(number); //2
// যদি কিছু না পায়?  return -1

// মনে রাখবে:
// find() → undefined
// findIndex() → -1

// const users = [
//     { id: 101, name: "Bright" },
//     { id: 102, name: "Alex" },
//     { id: 103, name: "Emma" }
// ];
// const index = users.findIndex(user => user.id === 102)
// console.log(index);

// const mobiles = [
//     { name: "iPhone" },
//     { name: "Samsung" },
//     { name: "Pixel" }
// ];

// const index = mobiles.findIndex(mobile => mobile.name === "Samsung")
// console.log(index);


// ⭐ Interview Tip
// অনেক সময় findIndex() ব্যবহার করে কোনো Item Remove করা হয়।

// const fruits = ["Apple", "Banana", "Orange"];

// const index = fruits.findIndex(fruit => fruit === "Banana")

// if(index !== -1){
//     fruits.splice(index,1)
// }
// console.log(fruits);

// 👉 এখানে:
// findIndex() → Index বের করল
// splice() → সেই Index-এর Item Remove করল
// React-এর State update বা সাধারণ JavaScript Project-এ এই Pattern অনেক দেখা যায়।




// যদি তোমাকে id = 2-এর User update করতে বলা হয়, তাহলে কোন Method ব্যবহার করবে?

const users = [
    { id: 1, name: "Bright" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Emma" }
];

const index = users.findIndex(user => user.id ===2)

if(index !== -1){
    users[index].name ="balex chad"
}
console.log(users);