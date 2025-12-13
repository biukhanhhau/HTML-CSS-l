//Super: like you are calling constructor of superClass in subclass's constructor

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, jumpSpeed){
        super(name, age);
        this.jumpSpeed = jumpSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const hawk = new Hawk("little Boii", 1, 100);
console.log(hawk);

const rabbit = new Rabbit("rattyyy", 10, 20);
console.log(rabbit);