class Shape{
    static PI = 3.14;
    static getDiameter(radius){
        return radius *2;
    }
    static getCircumference(a){
        return 2 * this.PI * a;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(Shape.getDiameter(2));
console.log(Shape.getCircumference(3));
console.log(Shape.getArea(3));


class User{
    static userCount = 0;
    constructor(name, age){
        User.userCount++;
        this.name = name;
        this.age = age;
    }
    static showUsers(){
        console.log(this.userCount);
    }
}

const bill = new User("Bill", 12);
User.showUsers();
const Thach = new User("Thach", 18);
User.showUsers();