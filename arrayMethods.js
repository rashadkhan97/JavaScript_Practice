const numbers = [10, 20, 30]

// ---------- Push, Pop, Shift, unshift, slice, splice PART ----------
numbers.push(50, 60, 70);
console.log("After push numbers: " + numbers) // [10,20,30,50,60,70]

numbers.pop();
console.log("After pop numbers: " + numbers) // 70 removed → [10,20,30,50,60]

numbers.shift()
console.log("After shift numbers: " + numbers) // 10 removed → [20,30,50,60]

numbers.unshift(5)
console.log("After unshift numbers: " + numbers) // 5 added at first → [5,20,30,50,60]

let a = numbers.slice(2, 4);
console.log("slice numbers: " + a) // index 2,3 → [30,50]

numbers.splice(2, 0, 65) // index 2 e kichu remove na kore 65 add
console.log("After splice numbers: " + numbers) // [5,20,65,30,50,60]

numbers.splice(1, 2, 66, 76) // index 1 theke 2 ta remove (20,65), replace with 66,76
console.log("After splice part - 2 numbers: " + numbers) // [5,66,76,30,50,60]

// ---------- MAP PART ----------

// 1. প্রতিটা value কে double করা
let doubled = numbers.map(n => n * 2);
console.log("After map (double): " + doubled) // [10,132,152,60,100,120]
console.log("Original numbers: " + numbers)   // [5,66,76,30,50,60] — অপরিবর্তিত

// 2. index সহ ব্যবহার
let withIndex = numbers.map((n, i) => `${i}-->${n}`);
console.log("With index: " + withIndex) // ["0--> 5","1--> 66","2--> 76","3--> 30","4--> 50","5--> 60"]

// 3. number → string
let asText = numbers.map(n => "Value-" + n);
console.log("As text: " + asText) // ["Value-5","Value-66", ...]

// 4. condition সহ
let evenOdd = numbers.map(n => n % 2 === 0 ? "Even" : "Odd");
console.log("Even/Odd: " + evenOdd) // ["Odd","Even","Even","Even","Even","Even"]

// 5. object array বানানো
let objArr = numbers.map((n, i) => ({ index: i, value: n }));
console.log(objArr) // [{index:0, value:5}, {index:1, value:66}, ...]

// 6. filter + map chain
let bigDoubled = numbers.filter(n => n > 50).map(n => n * 2);
console.log("Filter + map: " + bigDoubled) // [132,152,120]


// ---------- find and Filter PART ----------