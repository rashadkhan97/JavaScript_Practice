// even odd calculation 
const number = 85;

if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// find grade 
//taking username as input 
const prompt = require("prompt-sync") ();
let marks = parseInt(prompt("Enter your mark:")) // parseInt --> prompt take input as string so parseInt used to convert into number

if (marks >= 80) {
    if (marks <= 100) {
        console.log("Grade: A+");
    }
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else if (marks >= 40) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// Maximum number among three numbers 
const x = 5;
const y = 10;
const z = 7;

let maxNumber;

if (x >= y && x >= z) {
    maxNumber = x;
} else if (y >= x && y >= z) {
    maxNumber = y;
} else {
    maxNumber = z;
}

console.log(`The maximum number is: ${maxNumber}`);