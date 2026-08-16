///// sum calculation of an array/////
// const numbers = [10, 20, 30]
// let sum=0; 

// for(let i =0; i<numbers.length; i++){
//     sum = sum+numbers[i];
// }
// console.log(sum)


///// value finding from an array/////
const numbers = [10, 20, 30]
let key=30;

let isFound = false;

for(let i = 0; i<numbers.length; i++){
    if(numbers[i]==key){
        isFound = true;
    }
}
if(isFound){
    console.log(key+" is found")
}
else{
    console.log(key+" is not found")
}