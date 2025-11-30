//    =    assignment operator
//    ==   comparison operator (compare only the value)
//    ===  strict equality operator (compare both value and data type)
//    !=   inequality operator
//    !== strict inequality operator

let string = "5";
let number = 5;

console.log(string == number); // true

console.log(string === number);  // false


// !== compare both datatype and value.
// if one of them is false ==> return true


console.log(string !== number);  // true. not the same data type
console.log(5 !== 6);  //true. not the same value
console.log(5 !== 5); // false