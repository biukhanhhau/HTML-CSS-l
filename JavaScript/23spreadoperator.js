// spread operator = ...  allows an iterable such as an array
//            or string to be expanded into seperate elements


let numbers = [1 , 2 ,3 ,4 ,5];
let max = Math.max(...numbers);
console.log(max);
console.log(...numbers);



let username = "Bill Nguyen";
let userName = [...username];
console.log(username[1]);
console.log(userName);      //String is iterable so can use spread

// let number = 123123123;
// let numBer = [...number];       // Can not
// console.log(numBer);

let mix = [...numbers, ...username];
console.log(mix);