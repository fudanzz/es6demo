var fs = require('fs');


function promiseFs(file) {
    // console.log(3);
    return new Promise((resolve, reject) => {
        //  console.log(4);
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(err);
            } else {
                //    console.log(6);
                resolve(data);
            }
        })
    })
}

//console.log(2);
promiseFs('./libFile.js').then(data => {
    console.log('file1 read');
    promiseFs('./module.js');
}).then(data => {
    console.log('file2 read');
})

.catch(err => {
        console.log(err);
    })
    //console.log(5);
