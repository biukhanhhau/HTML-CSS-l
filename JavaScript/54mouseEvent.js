//  eventListener = Listen for specific events to create interactive web pages
//                  events: click, mouseover, mouseout
//                  .addEventListener("evenName", callback)

const button = document.getElementById("button");

button.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
})


button.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "orange";
})


button.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "lightblue";
})