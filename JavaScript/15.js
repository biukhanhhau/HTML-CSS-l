// Method chaining

//--- No method Chaining  ---//

let username = window.prompt("Enter your name:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

//--- Method Chaining ---//

name = name.trim().charAt(0).toUpperCase(); + name.trim().slice(1).toLowerCase();
console.log(name);