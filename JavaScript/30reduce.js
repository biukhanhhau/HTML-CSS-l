//    .reduce()


const numbers = [ 20, 15 ,63, 123,61];

const total = numbers.reduce(add);

function add(accumulator, nextEle){
    return accumulator + nextEle;
}

console.log(total);

const grades = [75,50,90,80,65,95];

const max = grades.reduce(findMax);

function findMax(curr, next){
    return Math.max(curr, next);
}

console.log(max);
console.log(Math.max(...grades));    //spread operator remind