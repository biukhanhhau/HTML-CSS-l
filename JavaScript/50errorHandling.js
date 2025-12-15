try{
    console.log(x);
}
catch(error){
    console.error(error);
}
finally{
    //CLOSE FILES
    //CLOSE CONNECTIONS
    //RELEASE RESOURCES
    console.log(`This always executes`);
}

try{
    const dividend = window.prompt(`Enter a dividend: `);
    const divisor = window.prompt(`Enter a divisor: `);
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error(`Values must be a number`);
    }
    if(divisor === 0){
        throw new Error(`You can't divided by zero`);
    }
    const re = dividend / divisor;
    console.log(re);
}
catch(error){
    console.error(error);
}