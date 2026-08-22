// Find Max Object

const products = [
    { name: "Phone", price: 30000 },
    { name: "Laptop", price: 80000 },
    { name: "Tablet", price: 45000 },
    { name: "Monitor", price: 25000 }
];


function findMaxProduct(products) {
    let maxProduct = products[0]

    for(const product of products){
        if(product.price > maxProduct.price){
            maxProduct = product
        }
    }
    return maxProduct
}
console.log(findMaxProduct(products));


const students = [
    { name: "Rahim", marks: 75 },
    { name: "Karim", marks: 92 },
    { name: "Sakib", marks: 85 }
];

function findTopStudent(students) {
    let top = students[0]

    for(const student of students){
        if(student.marks > top.marks){
            top = student
        }
    }
    return top
}
console.log(findTopStudent(students));