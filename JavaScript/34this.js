// this . Not for arrow function

const baby = {
    lastName : "Chien",
    firstName : "Than",
    saySometh : function(){console.log(`Hi my name is ${lastName} ${firstName}`)}
}


const baby1 = {
    lastName : "Nguyen",
    firstName : "Bao",
    saySometh : function(){console.log(`Hi my name is ${this.lastName} ${this.firstName}`)}
}


baby1.saySometh();

const baby2 = {
    name : "Arrow function",
    saySometh : () => {console.log(`my name is ${this.name}`)}
}
x   
baby2.saySometh();