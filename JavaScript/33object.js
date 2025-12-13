//  object = {key : value,
//            functionName : function(){}}

const person = {
    firstName : "Bill",
    lastName : "Nguyen",
    age : 18,
    isStudent : false,
    sayHello : function(){
        console.log("Hello guysss")
    }
}
console.log(person.firstName);
console.log(person.isStudent);

const animal = {
    name : "cat",
    age : 3,
    isHunter : false,
    height : function(num){
        if (num < 10){
            return false
        }
        return true;
    }
}

console.log(animal.height(11));



