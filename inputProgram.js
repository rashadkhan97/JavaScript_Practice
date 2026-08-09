//taking username as input 
const prompt = require("prompt-sync") (); // this line imports the prompt-sync package so that we can take input from the terminal.

let name = prompt("Ener username here: ");
console.log("Hello, "+ name);

//two number as input and show sum
let number1 = parseInt(prompt("Enter the first number: "));
let number2 = parseInt(prompt("Enter the second number: "));

let sum = number1 + number2;
//console.log("The sum of given two number: "+sum);
console.log(`Sum of ${number1} and ${number2} is ${sum}`);