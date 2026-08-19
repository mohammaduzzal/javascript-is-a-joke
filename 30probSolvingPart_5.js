// Factorial
// 5! = 5 × 4 × 3 × 2 × 1
//    = 120

function factorial(n){
    let result = 1
    for(let i = 1 ; i <= n ; i++){
        result *= i
    }


    return result
}


console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(0));