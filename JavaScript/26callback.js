// call back = a function that is passed as an argument
//              to another function.

hello(bye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function bye(){
    console.log("Good bye");
}

sum(4,6,show);

function sum(x, y, callbac){
    let re = x + y;
    callbac(re);
}

function show(result){
    console.log(result);
}