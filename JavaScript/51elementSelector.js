// 1. document.getElementById()
//  Element or Null
const h1 = document.getElementById("h1doc");
h1.textContent = "Mr.beast";


// 2. document.getElementsByClassName()
const fruit = document.getElementsByClassName("fruit");
fruit[0].style.backgroundColor ="yellow";
for(let fruist of fruit){
    fruist.style.backgroundColor = "red";
}
// Cannot use forEach for array of class name 
//  Like fruit.forEach()(this one is called HTML collection)
Array.from(fruit).forEach(fruit =>{
    fruit.style.backgroundColor ="yellow";
})


// 3. document.getElementsByTagName
const h4Ele = document.getElementsByTagName("h4");
h4Ele[1].style.backgroundColor = "yellow";
for(let s of h4Ele){
    s.style.backgroundColor ="red";
}

const li = document.getElementsByTagName("li");
Array.from(li).forEach(ele => {ele.style.backgroundColor = "lightgreen"});

// 4. document.querySelector()
//  This one select first element by tag name or NULL
const sel = document.querySelector("h4");
sel.style.backgroundColor = "black";


// 5. document.querySelectorAll()
// can use ForEach() return NodeList instead of HTMLCollection
const foods = document.querySelectorAll("li");