// a concise way to write function expressions good for
// simple functions that you use only once


const hello = (name) => console.log(`hello ${name}`)
                        console.log(`You are a kid`);
hello(`Bill`);


setTimeout(() => console.log(`My name is Bill`), 3000);


const numbers = [1,2,3,4,5,6];

const evenNum = numbers.filter(ele => ele%2 === 0);
console.log(evenNum);

const triple = numbers.map((ele) => ele * 3);
console.log(triple);

const sum = numbers.reduce((curr, next) => curr + next);
console.log(sum);