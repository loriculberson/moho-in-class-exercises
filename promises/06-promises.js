// resolve and reject example

const favColor = (color) => {
    return new Promise((resolve, reject) => {
        let getColor;
        setTimeout(() => {
            getColor = color;
            if (getColor === "red") {
                resolve(console.log(`color is ${color}`))
            } else {
                reject(console.log("That is not the right color"));
            }
        },3000);
    })
};

Promise.all([favColor("red"),favColor("blue"), favColor("purple")])
    .then((function (fulfilled) {
        return fulfilled
    })())
    .catch(rejected => rejected)