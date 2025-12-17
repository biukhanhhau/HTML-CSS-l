//      firstElementChild
const ele = document.getElementById("fruits");
const firstEle = ele.firstElementChild;
firstEle.style.backgroundColor = "yellow";

const elem = document.getElementById("vegetables");
const firstElem = elem.firstElementChild;
firstElem.style.backgroundColor = "yellow";

//      lastElementChild
const elee = document.getElementById("desserts");
elee.lastElementChild.style.backgroundColor = "red";

const eleee = document.getElementById("vegetables");
eleee.lastElementChild.style.backgroundColor = "lightgrey";

//      nextElementSibling
const thisEle = document.getElementById("pie");
thisEle.nextElementSibling.style.backgroundColor = "lightblue";

//      previousElementSibling
const thisElee = document.getElementById("cake");
thisElee.previousElementSibling.style.backgroundColor = "lightgreen";

//      parent Element     
const parent = document.getElementById("apple");
const parentOf = parent.parentElement;
parentOf.style.backgroundColor = "lightblue";

//      children
const child = document.getElementById("vegetables");
console.log(child.children);