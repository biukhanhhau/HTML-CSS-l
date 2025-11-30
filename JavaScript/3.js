// let name = window.prompt("What's your name: ");
// document.getElementById("name").textContent = `${name}`;
// console.log(name);

let username;
document.getElementById("submitName").onclick = function(){
    username = document.getElementById("myName").value;
    document.getElementById("myH1").textContent = `hello ${username}`;
}