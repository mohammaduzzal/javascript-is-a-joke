// Find Average
function findAverage(numbers) {
    let sum = 0
    for(const number of numbers){
        sum += number
    }
    return sum / numbers.length
}


console.log(findAverage([10, 20, 30, 40, 50]));
console.log(findAverage([5, 10, 15]));
console.log(findAverage([2, 4, 6, 8]));