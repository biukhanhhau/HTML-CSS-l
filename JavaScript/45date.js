const date = new Date();  // Take the current date
console.log(date); 

const datePlus = new Date(100); // current date + 100ms

date.setDate(10);
date.setFullYear(2020);

const second = date.getSeconds();
const minute = date.getMinutes();
const hour = date.getHours();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
