// Promise.all

function slowAdder(a, b) {
    console.log('a+b', a, b)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

const promises = [slowAdder(1, 2), slowAdder(3, 4), slowAdder(5, 6)];
Promise.all(promises)
    .then(data => {
        console.log('data:', data)
        const sum = data.reduce((a, b) => a + b, 0);
        console.log('sum here', sum);                               // 21
});