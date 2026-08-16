const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) { // for --- of --> value 
    console.log(fruit);
}

for (const fruit in fruits){  // for---- in --> array index
    console.log(fruit);
}


// for each 
const numbers = [10, 20, 30];

numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});