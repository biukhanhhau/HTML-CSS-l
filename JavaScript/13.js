//String method

let username = "BillNguyen";

username.charAt(3);    // Same as Java, count from 0

username.indexOf("l");    //place of first char

username.lastIndexOf("l");  // find the last place of the char

username.length;     // without ()

username.trim();     // delete the white space

username.toUpperCase();

username.toLowerCase();

username.repeat(3); 

let result = username.startsWith("Bill");     //return boolean. true
username.endsWith("n") // return boolean. true
username.includes(" ") // return boolean. false

let name = username.replaceAll("l", `@`);
console.log(name);       //Bi@@Nguyen

username.padStart(15, "X")   //XXXXXBillNguyen
username.padEnd(15, "X")     //BillNguyenXXXXX


