// Error handling

function slowAdder(a, b) {
    console.log('a, b', a, b)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof(a) !== 'number') {
                reject(new TypeError(`${a} is not a number.`));        // report an error
            }
            else if (typeof(b) !== 'number') {
                reject(new TypeError(`${b} is not a number.`));        // report an error
            }
            else {
                resolve(a + b);
            }
        }, 1000);
    });
}

slowAdder(3, 5)
    .then(first => slowAdder(first, 'banana'))              // we encounter an error here, due to `banana` not being a number
    .then(second => slowAdder(second, 20))                  // this line is never executed as `banana` caused an error
    .then(third => console.log(third))                       // this line is never executed as well
    .catch(error => console.log('ERROR:', error));          // the error handler

