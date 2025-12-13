class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
//  This "set" check all inputs even the constructor 
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error(`width must be better than 0`);
        }
    }
    get width(){
        return this._width;
    }

    set height(newH){
        if(newH > 0){
            this._height = newH;
        }
        else{
            console.error(`height must be better than 0`);
        }
    }
    get height(){
        return this._height.toFixed(1);
    }
}

const shape1 = new Rectangle(50,100);
console.log(shape1.height);
console.log(shape1.width);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    set name(nN){
        if (typeof nN === "string" && nN.length > 0){
            this._name = nN;
        }
        else{
            console.error("Name must be a String and longer than 0");
        }
    }
    get name(){
        return this._name;
    }

    set age(nA){
        if(nA > 0){
            this._age = nA;
        }
        else{
            console.error(`Your age must be a number and more than 0`);
        }
    }
    get age(){
        return this._age;
    }
}

const bill = new Person('Thach', 18);
console.log(bill);