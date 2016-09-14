function add(x, y, z) {
    console.log(arguments);

    Array.prototype.map.call(arguments, function (e) {
        console.log(e);
    })

    var result = Array.prototype.reduce.call(arguments, function (memo, value) {
        return memo + value;
    });
    return result;
}

console.log(add(2, 3, 4));
