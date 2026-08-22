// Challenge 1 — Reverse String

function reverseString(str){
    let reverse = ""
    for(const letter of str){
         reverse = letter + reverse
    }
    return reverse
}

console.log(reverseString("javascript"));

// Challenge 2 — Palindrome

function isPalindrome(str){
    let reverse = ""
    for(const char of str){
        reverse = char + reverse
    }
    return reverse === str
}
console.log(isPalindrome("racecar"));

// Challenge 3 — Count Vowels

function countVowels(str){
    const vowels = "aeiouAEIOU"
    let count = 0
    for(const char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(countVowels("i love python and phitron"));


// Challenge 4 — Remove Duplicate

function removeDuplicate(numbers){
    let unique = []

    for(const number of numbers){
        if(!unique.includes(number)){
            unique.push(number)
        }
    }
    return unique
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

// Challenge 5 — Largest

function findLargest(numbers){
    let max = numbers[0]

    for(const number of numbers){
        if(number > max){
            max = number
        }
    }
    return max
}
console.log(findLargest([45, 12, 89, 34, 67]));

// Challenge 6 — Smallest

function findSmallest(numbers){
    let min = numbers[0]

    for(const number of numbers){
        if(number < min){
            min = number
        }
    }
    return min
}
console.log(findSmallest([45, 12, 89, 34, 67]));


// Challenge 7 — Factorial
function factorial(number){
    let result = 1

    for(let i = 1; i<= number; i++){
        result *= i
    }
    return result
}

console.log(factorial(6));


// Challenge 8 — Fibonacci
function fibonacci(n){
    let a = 0
    let b = 1
    let result =[]

    for(let i = 0; i < n ; i++){
        result.push(a)
        let next = a + b
        a=b
        b=next
    }
    return result
}
console.log(fibonacci(8));

// Challenge 9 — Prime

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
console.log(isPrime(29));


// Challenge 10 — Max Object

function findMaxProduct(products){
    let max = products[0]
    for(const product of products){
        if(product.price > max.price){
            max = product
        }
    }
    return max
}
console.log(findMaxProduct([
    { name: "A", price: 250 },
    { name: "B", price: 800 },
    { name: "C", price: 500 }
]));


// Challenge 11 — Average

function findAverage(numbers){
    let total = 0
    for(const num of numbers){
         total += num
    }
    return total / numbers.length
}
console.log(findAverage([10, 20, 30, 40]));


// Challenge 12 — Frequency Counter

function frequencyCounter(numbers){
    let frequency = {}

    for(const num of numbers){
        if(frequency[num]){
            frequency[num]++
        }else{
            frequency[num] = 1
        }
    }
    return frequency
}

console.log(frequencyCounter(["a", "b", "a", "c", "b", "a"]));