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
        console.log('mmm menu', menu)
        document.body.innerHTML = menu
    }, 1000)
}

getFood()
console.log('Time for some delicious treats!')