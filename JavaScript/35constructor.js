// constructor = special method for defining the properties and 
//                 methods of objects

function person(name, age, isStudent){
    this.name = name,
    this.age = age,
    this.isStudent= isStudent,
    this.getInfo = function(){console.log(`${this.name} is ${age} years old`)}
}
// only using const whenever create variable or obj 
const s1 = new person(`Bill`, 18, true);
const s2 = new person(`Cao`, 17, true);
const s3 = new person(`Dad`, 54, false);

console.log(s1.name);
console.log(s1.age);
console.log(s1.isStudent);
s1.getInfo();

console.log(s2.name);
console.log(s2.age);
console.log(s2.isStudent);

console.log(s3.name);
console.log(s3.age);
console.log(s3.isStudent);