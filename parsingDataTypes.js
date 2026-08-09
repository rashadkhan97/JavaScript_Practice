// using toString()
let value = 100;

let result = value.toString();

console.log(result);
console.log(typeof result);

//using string
let num = 100;
let results = String(num);
console.log(results);
console.log(typeof results)

// parseInt () --> converting string into integer value
let input = "50";
let conv = parseInt(input);

console.log(conv);
console.log(typeof conv);

//parseFloat() 
let valuee = "50.75";

console.log(parseFloat(valuee));

//Math.ceil() and Math.floor() -- > converting floating number into integer

let example1 = 10.75;
let example2 = 10.25;

console.log(Math.floor(example1));
console.log(Math.ceil(example2));

// toFixed() --> fix how many digit we want after the decimal poit
let price = 10.56789;
let convert = price.toFixed(2);

console.log(convert);
console.log(typeof convert);

//quick comparison --> 
let comp = 10.75;

console.log(Math.floor(comp)); // 10
console.log(Math.ceil(comp));  // 11
console.log(Math.round(comp)); // 11
console.log(comp.toFixed(1));  // "10.8"