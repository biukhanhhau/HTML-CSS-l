const nums = [1,5,2,6,7,8,3,9,4,10];
nums.sort();
console.log(nums);  // input: 1 10 2 3 4 5 6 7 8 9
//Sorts element as lexicographic

nums.sort((a,b) => a - b);
console.log(nums);  //input 1 2 3 4 5 6 7 8 9 10

const students = [{name:"Cao", age:17, grade:4.0},
                {name:"Son", age:19, grade:3.999},
                {name:"Binh", age:18, grade:3.75},
                {name:"Fat", age:18, grade:36}]

students.sort((a,b) => a.grade - b.grade);
console.log(students);
