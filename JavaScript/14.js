//String slicing = creating a substring from
//                 a portion of another string
// The same as Java, but can serve negative number


let user = "Hello My Name";

console.log(user.slice(0, 4));   // print: Hell

console.log(user.slice(-1));   //print: e
console.log(user.slice(-3));   //print: ame
console.log(user.slice(-3, -1));  //print: am

let email = "billng@gmail.com";

console.log(email.slice(0, email.indexOf("@")));    //print billng