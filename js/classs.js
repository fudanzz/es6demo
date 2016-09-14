'use strict'
class Person {
    constructor(name){
        this.name=name;
    }
    
    sayName(){
        console.log(`my name is ${this.name}`);
    }
}

console.log(Person);

console.log(new Person('phil'));

var p1=new Person('sophie');

p1.sayName();

console.log(p1.__proto__ === Person.prototype);

console.log(p1.sayName === Person.prototype.sayName);

var sayName1=p1.sayName.bind(p1);

sayName1();

class Employee extends Person{
    constructor(name,job){
        super(name);
        this.job=job;
    }
}

var e1=new Employee('philzhao','software engineer');

console.log(e1.name);
console.log(e1.job);
console.log(e1.sayName===Person.prototype.sayName);

