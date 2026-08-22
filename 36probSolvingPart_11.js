// Frequency Counter

function frequencyCounter(items) {
    const frequency = {}
    for(const item of items){
        if(frequency[item]){
            frequency[item]++
        }else{
            frequency[item] = 1
        }
    }
    return frequency
   
}


console.log(
    frequencyCounter([1, 2, 2, 3, 3, 3, 4])
);
console.log(
    frequencyCounter(["apple", "banana", "apple", "orange", "banana", "apple"])
);
console.log(
    frequencyCounter(["a", "b", "a", "c", "b", "a"])
);