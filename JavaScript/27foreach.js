//  forEach()


let number = [1,2,3,4,5];

// number.forEach(pow);
// number.forEach(square);
// number.forEach(triple);
// push each element of number into function cal one by one
number.forEach(double);
console.log(number);


function pow(element){
    console.log(element * 2);
}

function square(edge){
    console.log(edge * 4);
}

function triple(ele){
    console.log(ele * 3);
}

function double(element, index, array){
    array[index] = element * 2; //change the inside value
}


let fruits = ["orange", "banana", "mango"];
console.log(fruits);
function toUpperCase(element, index, array){
    array[index] = element.toUpperCase();
}
fruits.forEach(toUpperCase);
console.log(fruits);   // input: ["ORANGE", "BANANA", "MANGO"]
