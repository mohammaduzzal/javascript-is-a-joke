// Largest Number
// আমরা যদি জানি না কোন number সবচেয়ে বড়, তাহলে একটা number-কে শুরুতে temporary largest ধরে নিতে পারি।


function findLargest(numbers){
    let max = numbers[0]
    for(const number of numbers){
        if(number > max){
            max = number
        }
    }
    return max
}

console.log(findLargest([10, 5, 30, 17, 8]));
console.log(findLargest([100, 25, 75, 200, 50]));
console.log(findLargest([-10, -5, -20, -2]));

// একটা Interview Question
// Interviewer যদি জিজ্ঞেস করে:
// Why didn't you use let max = 0?
// তুমি বলতে পারো:
// কারণ array-তে negative numbers থাকতে পারে। তাই প্রথম element-কে initial maximum হিসেবে নেওয়া safer।
 

// es6 short
const numbers = [5, 12, 8, 23, 17];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));


// ====================================
// Smallest Number

function findSmallest(numbers) {
    let min = numbers[0]
    for(const num of numbers){
        if(num < min){
            min = num
        }
    }
    return min
}

console.log(findSmallest([10, 5, 30, 17, 8]));
console.log(findSmallest([100, 25, 75, 200, 50]));
console.log(findSmallest([-10, -5, -20, -2]));

