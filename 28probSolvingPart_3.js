// Remove Duplicate

function removeDuplicate(numbers){
    let uniqueArray = [];
    for(const num of numbers){
        if(!uniqueArray.includes(num)){
            uniqueArray.push(num)
        }
    }
    return uniqueArray
}

console.log(removeDuplicate([5, 5, 10, 20, 10, 30, 20]));


function removeDupName(names){
    let uniqueArray =[];
    for(const name of names){
        if(!uniqueArray.includes(name)){
            uniqueArray.push(name)
        }
    }
    return uniqueArray
}


const names = ["Rahim", "Karim", "Rahim", "Sakib", "Karim", "Sakib"];
console.log(removeDupName(names));


const singlename = [...new Set(names)]
console.log(singlename);