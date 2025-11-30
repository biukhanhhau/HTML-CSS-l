// let x = '';
// x = Number(x);
// z = x + 2;
// console.log(x);

// let y = `hello `;
// console.log(y * 2);


//const = A variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * radius * PI;
    document.getElementById("result").textContent = `the result is ${circumference}cm`;
}
