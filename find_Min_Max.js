let numbers = [5, 9, 8, 3, 6, -1];

// max value finding from array
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

// min value finding from array
let min = numbers[0];
for (let i =1; i<numbers.length; i++){
  if(numbers[i]<min){
    min = numbers[i]
  }
}

console.log("Maximum value: "+max); // 9
console.log("Minimum value: "+min); // 3