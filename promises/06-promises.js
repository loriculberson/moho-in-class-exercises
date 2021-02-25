// resolve and reject example

const favColor = (color) => {
    return new Promise((resolve, reject) => {
        let getColor;
        setTimeout(() => {
            getColor = color;
            if (getColor === "red") {
                resolve(console.log(`My favorite color is ${color}.`))
            } else {
                reject(console.log(`${color} is NOT my favorite color.`));
            }
        },3000);
    })
};


Promise.all([favColor("red"), favColor("blue"), favColor("purple")])
    .then(fulfilled => fulfilled)
    .catch(rejected  => rejected)