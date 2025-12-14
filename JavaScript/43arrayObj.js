const fruits = [{name:"orange", color:"orange", calo:55},
                {name:"banana", color:"yellow", calo:70},
                {name:"dragon", color:"red", calo:80},
                {name:"apple", color:"green", calo:75},
                {name:"grape", color:"purple", calo:55}];

// add an element at the end of the array
fruits.push({name:"kiwi", color:"grey", calo:90});

// delete an element at the end of the array
fruits.pop();

// the number of element that will be removed
// fruits.splice(2,3);

//          FOR EACH
// fruits.forEach(ele => console.log(ele.name));
// fruits.forEach(ele => console.log(ele.color));
// fruits.forEach(ele => console.log(ele.calo));

//          FILTER
// const fruitsHCalo = fruits.filter(ele => ele.calo >= 60);
// console.log(fruitsHCalo);

//          MAP
// const fruitsName = fruits.map(ele => ele.name);
// const fruitsColor = fruits.map(ele => ele.color);
// const fruitsCalo = fruits.map(ele => ele.calo);
// console.log(fruitsName);
// console.log(fruitsColor);
// console.log(fruitsCalo);

//          REDUCE
const minFruits = fruits.reduce((curr, next) => next.calo < curr.calo ? next : curr);
console.log(minFruits);
const maxFruits = fruits.reduce((curr, next) => next.calo > curr.calo ? next : curr);
console.log(maxFruits);