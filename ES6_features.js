//Arrow functions
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));

// shorter of arrow functions 
const addx = (x, y) => x + y;
console.log(addx(5, 5));

//template literals
const name = "RASU";
const message = `Hello, ${name}`;

console.log(message);

//Destructuring Assignment - is used to extract values from arrays or objects in a clean way.

    //Object Example
const users = {
  F_name: "Rashadul Islam",
  F_age: 30
};

const { F_name, F_age } = users;

console.log(F_name);
console.log(F_age);

    // Array Example
const s_numbers = [10, 20, 30];

const [first, second, third] = s_numbers;

console.log(first);
console.log(second);
console.log(third);