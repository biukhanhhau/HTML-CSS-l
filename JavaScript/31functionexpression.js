// FUNCTION DECLARATION
// FUNCTION EXPRESSIONS
// Like use a function instead of an argument



const hello = function(){
    console.log(`hello`);
}
hello();

setTimeout(function(){
    console.log("This is delayed")
}, 3000);


//      Create a new function instead of using an existed argument
const numbers = [1,2,3,4,5];
const newNumber = numbers.map(function(ele){
    return Math.pow(ele,2);
});
console.log(newNumber);


const arrowFunction = numbers.map(ele => Math.pow(ele, 2));
console.log(arrowFunction);


const evenNum = numbers.filter(function(ele){
    return ele % 2 ==0;
})
console.log(evenNum);


numbers.forEach(function(ele){
    console.log(`This is number ${ele}`);
});


const subtract = numbers.reduce(function(curr, next){
    return curr - next;
})
console.log(subtract);