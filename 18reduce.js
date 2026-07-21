// What is reduce()?
// reduce() একটি Array-এর সব Element ব্যবহার করে শেষ পর্যন্ত একটি মাত্র Value তৈরি করে।
// 👉 Many Values ➜ One Value

// Syntax
// array.reduce((accumulator,currentValue) =>{

// },initialValue)
// currentValue = এটা হলো বর্তমান Element।
// accumulator = এটা হলো চলমান Result।

// const numbers = [10,20,30];

// const result = numbers.reduce((acc,curr) =>{
//     return acc + curr
// },0)
// console.log(result);


// যদি Multiplication করো? এখানে Initial Value হবে: 1
// const numbers = [10,20,30];

// const result = numbers.reduce((acc,curr) =>{
//     return acc * curr
// },1)
// console.log(result);


// Interview Ready Answer
// What is reduce()?

// reduce() iterates through an array and reduces all elements into a single value using an accumulator.

// Common Mistake
// অনেকে ভাবে:
// acc = curr
// ❌ না।
// accumulator হলো আগের Result।

// Quick Revision
// | Parameter      | Meaning         |
// | -------------- | --------------- |
// | `accumulator`  | Running Result  |
// | `currentValue` | Current Element |
// | `initialValue` | Starting Value  |


// --------------------------------------------

// const cart = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 1500 },
//   { name: "Keyboard", price: 2500 }
// ];

// const result = cart.reduce((acc,product) =>{
//     return acc + product.price
// },0)
// console.log(result);


// const words = ["I", "love", "JS"];

// const result = words.reduce((acc,curr) =>{
//     return acc + " " + curr
// })
// console.log(result);

// const employees = [
//     { name: "A", salary: 30000 },
//     { name: "B", salary: 45000 },
//     { name: "C", salary: 25000 }
// ];

// const totalSalary = employees.reduce((acc,employee) => acc + employee.salary , 0)
// console.log(totalSalary);

// reduce()-এ Initial Value না দিলে কী হয়?
// যদি Initial Value না দেওয়া হয়, তাহলে JavaScript Array-এর প্রথম Element-কে accumulator হিসেবে ব্যবহার করে এবং Loop দ্বিতীয় Element থেকে শুরু করে।

// ⚠️ তবে একটা গুরুত্বপূর্ণ বিষয় আছে।
// যদি Array খালি হয়: const arr = [];
// তাহলে কী হবে?
// ❌ Error
// কারণ প্রথম Element-ই নেই।
// এজন্য Interview এবং Production Code-এ Initial Value দেওয়া Best Practice।

// "When should I use map() and when should I use reduce()?"
// map()
// যখন প্রতিটি Element পরিবর্তন করে নতুন Array তৈরি করতে চাই।

// reduce()
// যখন পুরো Array থেকে একটি Final Result বের করতে চাই।


// --------------------------------------------------------------

// reduce() Advanced (Frequency Counter)

// Frequency Counter কী? Frequency মানে কতবার এসেছে।

// const fruits = [
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "banana",
//   "apple"
// ];

// const result = fruits.reduce((acc,fruit) =>{

//     if(acc[fruit]){
//         acc[fruit]++
//     }else{
//         acc[fruit] = 1
//     }

//     return acc


// },{})

// console.log(result);


// vote count

// const votes = [
//     "A",
//     "B",
//     "A",
//     "A",
//     "C",
//     "B"
// ];

// const voteCount = votes.reduce((acc,vote) =>{
//     if(acc[vote]){
//         acc[vote]++;
//     }else{
//         acc[vote] = 1
//     }

//     return acc
// },{})

// console.log(voteCount);

// const roles = [
//     "Admin",
//     "User",
//     "Admin",
//     "Guest",
//     "User",
//     "Admin"
// ];

// const roleCount = roles.reduce((acc,role) =>{
//     if(acc[role]){
//         acc[role]++;
//     }else{
//         acc[role] = 1
//     }

//     return acc
// },{})
// console.log(roleCount);

// const colors = [
//     "red",
//     "blue",
//     "red",
//     "green",
//     "blue",
//     "red"
// ];

// const colorCount = colors.reduce((acc,color) =>{
//     acc[color] = (acc[color] || 0) + 1
//     return acc
// },{})
// console.log(colorCount);

// const numbers = [1,2,2,3,1,1,4];

// const numCount = numbers.reduce((acc,num) =>{
//     acc[num] = (acc[num] || 0) + 1;
//     return acc
// },{})
// console.log(numCount);

// acc[fruit]++ কী করে?
// acc[fruit]++ increases the count of an existing key in the accumulator object.

// acc[color] = (acc[color] || 0) + 1; Explain every part of this line.

// First Iteration
// color ="red"
// obj acc ={}

// JavaScript দেখে acc["red"]
// output : undefined
// এখন
// undefined || 0
// output : 0
// তারপর : 0+1
// output : 1
// obj : {red : 1}
// এভাবেই Count বাড়তে থাকে।

// const numbers = [10,20,30];

// const result = numbers.reduce((acc, num) => {

//     return acc;

// }, []);

// console.log(result);

// const numbers = [1, 2, 3];

// const result = numbers.reduce((acc, num) => {
//     acc.push(num * 2);
//     return acc;
// }, []);

// console.log(result);

// const numbers = [1, 2, 3];

// const result = numbers.reduce((acc, num) => {
//     return acc + [num];
// }, []);


// console.log(result);

// [] + [1]  =ans : "1"
// যখন + Operator Array দেখে, তখন JavaScript Array-কে String-এ Convert করে।
// console.log([] + [1]);

// console.log([1,2] + [3,4]);

// console.log([] + {});



// const colors = [
//     "red",
//     "blue",
//     "red",
//     "green",
//     "blue",
//     "red"
// ];


// const countColor = colors.reduce((acc,color) =>{
//     acc[color] = (acc[color] || 0) + 1;
//     return acc
// },{})
// console.log(countColor);


// ------------------------------------------------------
// Pattern 1: Maximum Value

// const numbers = [10, 50, 20, 80, 40];

// const maxValue = numbers.reduce((acc,num) =>{
//     return num > acc ? num : acc
// })
// console.log(maxValue);

// Pattern 2: Minimum Value

// const numbers = [10, 50, 20, 80, 40];
// const minValue = numbers.reduce((acc,num) =>{
//     return num < acc ? num : acc
// })

// console.log(minValue);

// Pattern 3: Group By ⭐⭐⭐⭐⭐

// const people = [
//     { name: "Bright", city: "Dhaka" },
//     { name: "Alex", city: "Dhaka" },
//     { name: "Emma", city: "Chittagong" },
//     { name: "John", city: "Khulna" }
// ];

// const grouped = people.reduce((acc,person) =>{

//     if(!acc[person.city]){
//         acc[person.city] = []
//     }

//     acc[person.city].push(person)


//     return acc
// },{})

// console.log(grouped);


// Pattern 4: Flatten Array

// const numbers = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// const flat = numbers.reduce((acc,arr) =>{
//     return acc.concat(arr)
// },[])
// console.log(flat);


// Golden Rule
// | কাজ                      | Best Method          |
// | ------------------------ | -------------------- |
// | নতুন Array               | `map()`              |
// | Filter                   | `filter()`           |
// | Find One                 | `find()`             |
// | Find Index               | `findIndex()`        |
// | Boolean Check            | `some()` / `every()` |
// | One Final Value / Object | `reduce()`           |



// const employees = [
//     {name:"A", salary:30000},
//     {name:"B", salary:70000},
//     {name:"C", salary:50000}
// ];
// const highestSalary = employees.reduce((acc,employee) =>{
//     return employee.salary > acc ? employee.salary : acc
// },0)
// console.log(highestSalary);

const employees = [
    {name:"A", department:"IT"},
    {name:"B", department:"HR"},
    {name:"C", department:"IT"},
    {name:"D", department:"Sales"}
];
const groupedInDept = employees.reduce((acc,employee) =>{

    if(!acc[employee.department]){
        acc[employee.department] = []
    }

    acc[employee.department].push(employee)


    return acc
},{})

console.log(groupedInDept);

