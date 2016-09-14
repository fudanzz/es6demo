//map --> new same size array
//filter --> new different size array
//reduce --> reduce array to one singele value

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(function (number) {
    console.log(number);
})

var newNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] * 2;
}

console.log(newNumbers);

var newNumbers2 = [];

var newNumbers2 = numbers.map(function (number) {
    return number * 2;
})
console.log(newNumbers2);


var newArray = numbers.filter(function (value) {
    return value % 2 == 0;
})

console.log(newArray);

var sum = numbers.reduce(function (memo, value) {
    return memo + value;
})

console.log(sum);
