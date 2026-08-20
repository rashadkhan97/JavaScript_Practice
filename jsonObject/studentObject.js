//------ for single object ---------
const student = {
  id: "1001",
  name: "Rahim",
  class: "10",
  department: "Science"
};

console.log("Id:", student.id);
console.log("Name:", student.name);

//---------- for multiple object ---------

let students = [
  {
    id: "1001",
    name: "Rahim",
    class: "10",
    department: "Science"
  },
  {
    id: "1002",
    name: "Karim",
    class: "10",
    department: "Science"
  }
];

console.log(students[0]);
console.log(students[1]);

console.log("First Student Name:", students[0].name);
console.log("Second Student Name:", students[1].name);