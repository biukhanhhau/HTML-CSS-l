// .filter() = creates a new array by filtering out elements


let numbers = [1,2,3,4,5,6,7,8,9];
function even(ele){
    return ele % 2 === 0;}
const afterEven = numbers.filter(even);
console.log(afterEven);

function odd(ele){
    return ele % 2 === 1;
}
const afterOdd = numbers.filter(odd);
console.log(afterOdd);