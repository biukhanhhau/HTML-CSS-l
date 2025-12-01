
function happyBirthday(username, age){
    console.log(`Happy Birthday to you!!`);
    console.log(`Happy Birthday dear you!!`);
    console.log(`Happy Birthday to ${username}!!`);
    console.log(`You are ${age} years old!!`);
}

happyBirthday("Bill", 18);


function add(x,y){
    let result = x + y;
    return result;
}
console.log(add(2,5)) ;

function multiply(x,y){
    let result = x * y;
    return result;
}
console.log(multiply(2 , 5));

function checkAge(age){
    if (age >= 18){
        return true;
    }
    return false;
}
checkAge(17);