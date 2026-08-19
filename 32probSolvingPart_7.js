// Prime Number
// প্রথমে বুঝি Prime Number কী?
// একটি number যদি:
// শুধু 1 এবং নিজে দিয়ে নিঃশেষে ভাগ যায়, তাহলে সেটা Prime Number।

// খুব গুরুত্বপূর্ণ: 1 Prime নয়
// অনেক beginner এখানে ভুল করে।
// 1 → Not Prime ❌
// কারণ Prime Number-এর ঠিক দুইটি positive divisor থাকতে হয়:
// 1 এবং নিজে
// কিন্তু 1-এর divisor মাত্র একটি:
// 1
// তাই 1 prime নয়।

function isPrime(n){
    if(n < 2){
        return false
    }
    for(let i = 2 ; i < n ; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(13));
console.log(isPrime(1));
console.log(isPrime(0));