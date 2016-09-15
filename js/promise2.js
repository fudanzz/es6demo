function myPromiseReadFile(file) {

}

console.log(1);
var myPromise = new Promise((resolve, reject) => {

    console.log(2);
    var noError = true;
    if (noError) {
        console.log(3);
        resolve();
    } else {
        reject();
    }
})

console.log(4);
myPromise.then(() => {
    console.log(5);
    console.log('success');
}).catch(() => {
    console.log('fail');
})
