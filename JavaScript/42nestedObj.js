class Address{
    constructor(street, city, country){
        this.street =street;
        this.city=city;
        this.country = country;
    }
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age= age;
        this.address = new Address(...address);
    }
}

const bill = new Person("Bill", 18, "Ng Huynh Duc", "Tan An", "Viet Nam");

const cao = new Person("An", 18, "1A", "Tan An", "Viet Nam");

const son = new Person("Bi", 19, "Ng Minh Duong", "Tan An", "Viet Nam");

console.log(bill.address);
console.log(son);
console.log(cao.address.city);