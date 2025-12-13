class Animal{
    static alive = true;
    static sleep = function(){
        console.log(`${this.name} is sleeping~~`);
    }
    static run = function(){
        console.log(`${this.name} is running...`);
    }
}

class Rabbit extends Animal{
    static name = "rabbit";
}
class Cat extends Animal{
    static name = "cat";
}
class Fish extends Animal{
    name = "fish";
}
const fish = new Fish();
Fish.run();
const cat = new Cat();
Cat.run();

// need to understand that static belong to Class
// can not call a normal function without static by object name