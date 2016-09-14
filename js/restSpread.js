//rest and spread
// single element to array , or array to single element
function add(x, y) {
    console.log(arguments);
    var result = Array.prototype.reduce.call(arguments, function (memo, value) {
        return memo + value;
    })
    console.log(result);
}

add(2, 3);


function betterAdd(...values) {
    console.log(values);

    var result = values.reduce(function (memo, value) {
        return memo + value;
    })

    console.log(result);
}

betterAdd(2, 3, 4);

function talk(greeting, farewell, name) {
    console.log(`${greeting} ${name}`);
    console.log(`${farewell} ${name}`);
}

talk('hello', 'goodbye', 'phil');

function talk2(greeting, farewell) {
    var names = Array.prototype.slice.call(arguments, 2);
    console.log(names);
    names.forEach(function (name) {
        console.log(`${greeting} ${name}`);
        console.log(`${farewell} ${name}`);
    })
}

talk2('hello', 'goodbye', 'phil', 'sophie');


function talk3(greeting, farewell, ...names) {
    console.log(names);
    names.forEach(function (name) {
        console.log(`${greeting} ${name}`);
        console.log(`${farewell} ${name}`);
    })
}

talk3('hello', 'goodbye', 'phil', 'sophie');

var arr = ['hello', 'goodbye'];
talk3(...arr, 'phil', 'sophie');
