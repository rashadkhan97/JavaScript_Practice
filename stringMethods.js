//string length
let text = "Hello World";

console.log(text.length);

//upperCase and lowerCase
let name = "Md Rashadul islam Rabbi";

console.log(name.toUpperCase());
console.log(name.toLowerCase());

//Trim() method removes extra whitespace from the beginning and end of a string.
let word = "   Hello World   ";

console.log("Before Trim Length - ",word.length);
console.log("After Trim Length - ",word.trim().length);

//slice(start, end) --> The slice() method is used to extract a part of a string.
let text_name = "JavaScript";

console.log(text_name.slice(0, 4));
console.log(text_name.slice(4));

//indexOf() — Find the Position of Text --> The indexOf() method is used to find the starting index position of a specific text inside a 

let fullName = "Md. Rashadul Islam Rabbi";
let startIndex = fullName.indexOf("Ras");
let endIndex = fullName.indexOf("Rab");

let firstName = fullName.slice(startIndex, endIndex);
console.log(firstName);

//  String Concatenation
// 1. Using plus (+) operator
let initialtName = "Rashad";
let lastName = "Khan";

console.log("Your name is: ",initialtName + " " + lastName);

//Using Template Literals --> Template literals are a modern and cleaner way to combine variable values inside a string.
let userName = "Rahim";
let userLastName = "Khan";

console.log(`${userName} ${userLastName}`);


// All combined Examples -- 
let yourName = "Rahim";
let yourLastName = "Khan";
let message = "   welcome to javascript   ";

console.log(yourName + " " + yourLastName);
console.log(`${yourName} ${yourLastName}`);
console.log(message.trim());
console.log(message.toUpperCase());
console.log(message.trim().toUpperCase());
console.log(message.slice(3, 10));