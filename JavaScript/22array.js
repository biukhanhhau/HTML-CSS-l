// Array


let fruit = ["apple", "orange", "banana", "watermelon"];

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
// if we can an element out of range ==> value : undefined

fruit[0] = "coconut";
console.log(fruit[0]);

fruit.push("dragon");     // add an element to the end

fruit.unshift("mango");  // add an element to the begin

fruit.pop();      // remove the last element

fruit.shift();      // remove the first element

console.log(fruit.length);

console.log(fruit.indexOf("banana"));  // return 2
                    // if it's not existed ==> return -1


for (const ob of fruit){        //enhanced for loop
    console.log(ob);
}

fruit.sort();    // sort by alphabet
fruit.sort().reverse();    // sort and reverse