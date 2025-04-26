// rest and spread operator in objects;

//rest operator in case of array.

const numbers=[1,2,3,34,5];
function sum(num1,num2,...other){
  console.log("other elements are",other);
  return num1+num2;
}
console.log("sum of two number is",sum(1,2,3,4,5,6));

// spread operator in case of array.
const names=["adesh","tanya","tanuj"];
const getNames=(name1,name2,name3)=>{
   console.log("name 1 is",name1,"name 2 is",name2,name3);
   return;
}

getNames(...names);
const student={
    name:"adesh",
    age:24,
    hobbies:["cricket","chess"]
}

console.log(student);
// destructuring
const {age,...rest}=student;
console.log(rest);


// spread operator in case of object
const newStudent={...student,age:25}
console.log(newStudent)

