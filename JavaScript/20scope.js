        //variable scope = where a variable is recognized and acessible


function one(){
    let x = 1;
    console.log(x);
}
        // They are isolated with each other ==> local
        // if you declear x out side both function, it's called global
function two(){
    let x = 2;
    console.log(x);
}

let x = 0;
two(); // print 2 because it's priority the local one