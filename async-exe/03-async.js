const foods = [
    { id: 1, name: "chicken wings", cost: "5.00" },
    { id: 2, name: "french fries", cost: "3.00" },
    { id: 3, name: "Diet Dr. Pepper", cost: "1.00" },
    { id: 4, name: "pecan pie", cost: "4.00" },
]
//Goal: Display all the foods! 
//How to fix? Force the order or the function execution by using "callback functions"
//simulate fetching data from a server
function getFood() {
    setTimeout(() => {
        let menu = ''
        foods.forEach(food => {
            menu+= `<div>${food.id}. ${food.name} $${food.cost}</div>`
        })
        console.log('3. MENU', menu)
        document.body.innerHTML = menu
    }, 1000)
}

// data comes in from a form and posts to the db
function createMenuItem(food, callback) {
    setTimeout(() => {
        foods.push(food)
        callback()
        console.log('2. Yummy!')
    }, 2000)
}

// getFood()   don't call this function first, invoke this function after the newest menu item is created

const poppers = { id: 5, name: "Jalapeno poppers", cost: "$4.75"}
createMenuItem(poppers, getFood)
console.log('1. Time for some delicious treats!')