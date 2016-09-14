var myFunction = name => {
    console.log(name);
};

myFunction('phil');

(() => {
    console.log('it works!')
})();

var numbers = [1, 2, 3, 4, 5];

var newNum = numbers.map(value => {
    return value * 2;
})

console.log(newNum);

var Person = function (name) {
    this.name = name;
}

/*Person.prototype.sayName = function () {
    var self = this;
    setTimeout(function () {
        console.log('hello ' + self.name)
    }, 1000)
}*/

Person.prototype.sayName = function () {
    setTimeout(() => {
        console.log(this.name);
    }, 1000)
}
var p1 = new Person('phil');
p1.sayName();
