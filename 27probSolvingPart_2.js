// Count Vowels

// function countVowels(str){
//     const vowels = "aeiouAEIOU"
//     let count = 0;
//     for(const letter of str){
//         এই letter কি আমার vowel-এর মধ্যে আছে?
//         if(vowels.includes(letter)){
//             count ++;
//         }
//     }
//     return count
// }

// console.log(countVowels("hello"));
// console.log(countVowels("javascript"));
// console.log(countVowels("I love JavaScript"));


// function getVowels(str){
//     const vowels = "aeiouAEIOU";

//     let vowelsArray = [];
    // let vowelsStr = "";

//     for(const letter of str){
//         if(vowels.includes(letter)){
//             vowelsArray.push(letter)
            // vowelsStr =  vowelsStr + letter
//         }
//     }

//     return vowelsArray;
//     // return vowelsStr
// }
// console.log(getVowels("I love JavaScript"));

// letter + result     → সামনে যোগ → reverse order
// result + letter     → শেষে যোগ → same order
// result.push(letter) → array-এর শেষে যোগ → same order


// ================================================================
// Count Words

// Method 1 — split()
// JavaScript-এর split() method ব্যবহার করলে কাজটা খুব সহজ:

// function countWords(str) {
//     const words = str.split(" ");
//     return words.length;
// }

// console.log(countWords("I love JavaScript"));

// কিন্তু Interview-এ একটা সমস্যা আসতে পারে
// এখানে multiple spaces আছে।
// const sentence = "I  love   JavaScript";
// function countWords(str){
//     const word = str.trim().split(/\s+/)
//     return word.length
// }

// console.log(countWords("I  love   JavaScript"));


// function countWords(str){
//     if(str.trim() === ""){
//         return 0   // if have [""]
//     }
    
//     return str.trim().split(/\s+/).length;  // /\s+/ removing extra space
// }

// console.log(countWords("I love JavaScript"));
// console.log(countWords("JavaScript is awesome"));
// console.log(countWords("I am learning JavaScript"));


// এবার Interview Challenge 🔥
// এবার split() ব্যবহার করবে না।
// 🧠 মূল idea
// আমরা word গুনব space দেখে।
// 2 spaces + 1 = 3 words
// কিন্তু loop-এর ভিতরে আমরা space count করতে পারি।

// function countWords(str){
//     let spaceCount = 0
//     for(const letter of str){
//         if(letter === " "){
//             spaceCount ++
//         }
//     }

//     return spaceCount + 1

// }


// console.log(countWords("I love JavaScript"));




// Multiple spaces আছে।
// তখন শুধু space count করলে ভুল হবে।
// আর:countWords("")
// হলেও ভুল result হতে পারে।
// তাই real interview solution হিসেবে আমরা একটু better logic ব্যবহার করব।
// Better Logic: Word শুরু হচ্ছে কিনা detect করব

// space = inWord true and count ++

function countWords(str){
    let count = 0;
    let inWord = false
    for(const letter of str){
        if(letter !== " " && inWord === false){
            count ++;
            inWord = true;
        }else if(letter === " "){
            inWord = false;
        }
    }
return count

}


console.log(countWords("I love JavaScript"));
console.log(countWords("I  love   JavaScript"));
console.log(countWords(" "));

// if (letter !== " " && inWord === false)
// Characterটা space নয় এবং আমরা কোনো word-এর ভিতরে নেই → তাহলে নতুন word শুরু হয়েছে।






// recap part 1+2
// palindrome// Reverse String // Count Words // Count Vowels


// function reverseStr(str){
//     let reverse = "";
//     for(const letter of str){
//         reverse = letter + reverse
//     }
//     return reverse
// }
// console.log(reverseStr("bright"));


// function countVowel(str){
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for(const letter of str){
//         if(vowels.includes(letter)){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countVowel("i love javascript and python"));




// function palindrome(str){
//     let reverse = "";
//     for(const letter of str){
//         reverse = letter + reverse
//     }

//     return reverse === str
// }
// console.log(palindrome("bright"));
// console.log(palindrome("madam"));




// function getVowels(str){
//     const vowels = "aeiouAEIOU";
//     let vowelsArray = [];

//     for(const letter of str){
//         if(vowels.includes(letter)){
//             vowelsArray.push(letter)
//         }
//     }
//     return vowelsArray
// }
// console.log(getVowels("i love javascript and python and got fucked by bangladdesh"));



// function countWordss(str){
//     let count = 0
//     let inWord = false
//     for(const letter of str){
//         if(letter !== " " && inWord === false){
//             count ++
//             inWord = true
//         }else if(letter === " "){
//             inWord = false
//         }
//     }
//     return count

// }

// console.log(countWordss("i love getting fucked by our  country bitch "));
// console.log(countWordss(" "));