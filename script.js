/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(myfunction);
  function myfunction(item) {
    if(item.marks > 50)
    console.log(item.name);
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(myfunction);
  function myfunction(item) {
    if(item.marks > 50)
    console.log(item.name);
  }
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name:"Raj",age:"23",marks:42 },
    { id: 6, name:"Ujjwal",age:"19",marks:98 },
    { id: 7, name:"Anjali",age:"22",marks:70 },
  ];
  let array = arr.concat(arr2);
  console.log(array);
}
