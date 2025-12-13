class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.displayInfo();
    }   

    displayInfo(){
        console.log(`This is ${this.name}`);
        console.log(`${this.name} Years old`);
        console.log(`Have ${this.grade} at the lastest exam`);
    }

    birthdayCal(currY){
        console.log(`This student borned at ${currY - this.age}` );
    }   
}


const s1 = new Student("Bill Nguyen", 18, 20.50);
s1.birthdayCal(2025);