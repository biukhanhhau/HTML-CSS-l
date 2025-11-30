//type conversion

let age = window.prompt("Type you age:");

age = Number(age);
age += 1;
console.log(age);


let x = `pizza`;
let y = `pizza`;
let z = `pizza`;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);       // NaN `number`
console.log(y, typeof y);       // pizza string
console.log(z, typeof z);       // true `boolean`



let e = ``;
let w = ``;
let q = ``;
let u = `0`;

e = Number(e);
w = String(w);
q = Boolean(q);
u = Boolean(u);

console.log(e, typeof e);       // 0 `number`
console.log(w, typeof w);       //  string
console.log(q, typeof q);       // false `boolean`
console.log(u, typeof u);       // true `boolean`