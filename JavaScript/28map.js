//   .map() = accepts a callback and applies tthat function
//          to each element of an array, then return a new array

//          HAVE TO RETURN A NEW ARRAY

const numbers = [1,2,3,4,5];


function square(ele){
    return Math.pow(ele, 2);
}

function cube(ele){
    return Math.pow(ele, 3);
}

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);


const students = ["Bill", "Son", "Cao"];

function toUpper(ele){
    return ele.toUpperCase();
}

const upperStudent = students.map(toUpper);

console.log(upperStudent);

// BETTER WAY

const low = students.map(ele => ele.toLowerCase());
console.log(low);