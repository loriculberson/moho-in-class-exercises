const foods = [
    { id: 1, name: "chicken wings", cost: "5.00" },
    { id: 2, name: "french fries", cost: "3.00" },
    { id: 3, name: "Diet Dr. Pepper", cost: "1.00" },
    { id: 4, name: "pecan pie", cost: "4.00" },
]

//simulate fetching data from a server
function getFood() {
    setTimeout(() => {
        let menu = ''
        foods.forEach(food => {
            menu+= `<div>${food.id}. ${food.name} $${food.cost}</div>`
        })
        document.body.innerHTML = menu
    }, 1000)
}

// data comes in from a form and posts to the db
function createMenuItem(food) {
    setTimeout(() => {
        foods.push(food)
        console.log('Yummy!!!')
    }, 2000)
}

getFood()

const poppers = { name: "Jalapeno poppers", cost: "$4.75"}
createMenuItem(poppers)
console.log('Time for some delicious treats!')