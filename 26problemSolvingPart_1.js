// Reverse String

// const sentence = "JavaScript";

// let reverse = "";
// for(const char of sentence){
//     reverse = char + reverse
// }
// console.log(reverse);


// Interview Tip

// যদি interviewer জিজ্ঞেস করে:

// "How can you reverse a string without using reverse()?"

// তুমি তোমার এই approach explain করতে পারবে:

// আমি string-এর প্রতিটি character for...of loop দিয়ে নিই এবং প্রতিটি নতুন character-কে existing reversed string-এর সামনে যোগ করি।


// const sentence = "I love JavaScript";

// let reverse = "";

// for(const char of sentence){
//     reverse =char + reverse
// }
// console.log(reverse);

// const str = "madam";
// let reverse = "";

// for(const letter of str){
//     reverse = letter + reverse
// }
// console.log(reverse);


// palindrome

// যদি original string আর reversed string একই হয়, তাহলে কী বোঝা যায়?
// str === reverse
// হয়, তাহলে string-টাকে বলা হয় Palindrome।
// সহজ বাংলায়:

// Palindrome হলো এমন word/string যেটাকে সামনে থেকে পড়লেও এবং পিছন থেকে পড়লেও একই পাওয়া যায়।

// function isPalindrome(str){
//     let reverse = ""
//     for(const letter of str){
//         reverse = letter + reverse
//     }

    // if(str === reverse){
    //    return true
    // }else{
    //     return false
    // }
//      return str === reverse;
// }

// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));


function isPalindrome(str){
    let reverse = "";
    for(const letter of str){
        reverse = letter + reverse
    }

    return str === reverse  //এখানে === comparison করার পরে সরাসরি true অথবা false দেয়।
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("javascript"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("12321"));