// destructuring = extract values from arrays and obj
//                 then assign them to variables in a convenient way
//                  [] = to perform array destructuring
//                  {} = to perfrom object destructuring

//              Swap the value of two variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

//              Swap 2 elements in an array
const colors = ["red", "green", "blue", "black", "Bloom"];

[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

//              Assign Array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//              Extract values from objects
const bill = {
    firstName : "Bill",
    lastName : "Nguyen",
    isStudent : true
}
const {firstName : name1, lastName : name2} = bill;
console.log(name1, name2);

const {firstName , lastName } = bill;
console.log(firstName, lastName);


//              Destructure in function Parameters
//                                            =17 set the defalt value
function displayBill({lastName, firstName, age=17}){
    console.log(`${lastName}`);
    console.log(`${firstName}`);
    console.log(`${age}`);
}

const Person = {
    lastName : "Bill",
    firstName : "Nguyen",
}
displayBill(Person);