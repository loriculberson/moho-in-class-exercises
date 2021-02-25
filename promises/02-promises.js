const foods = [
    { id: 1, name: "chicken wings", cost: "5.00" },
    { id: 2, name: "french fries", cost: "3.00" },
    { id: 3, name: "Diet Dr. Pepper", cost: "1.00" },
    { id: 4, name: "pecan pie", cost: "4.00" },
]
//Goal: Display all the foods! 
//simulate fetching data from a server
function getFood() {
    console.log('4. GET FOOD CALLED!')
    setTimeout(() => {
        let menu = ''
        foods.forEach(food => {
            menu+= `<div>${food.id}. ${food.name} $${food.cost}</div>`
        })
        console.log('5. MENU', menu)
        document.body.innerHTML = menu
    }, 1000)
}

/*
 data comes in from a form and posts to the db
 *** WHAT IS A PROMISE: an asynchoronous method that supplies 
      a value at some point in the future. It does this without blocking other processes. 
 *  a Promise object represents the eventual completion
     (or failure) of an asynchronous operation and its resulting value
 * the createMenuItem is a Promise
*/
function createMenuItem(food) {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {                             
            foods.push(food)                           
            console.log('3. Yummy!')                      
            const error = false
            if (!error){
                resolve()
            } else {
                reject('Error')
            }
        }, 2000)
    })
    
}

// getFood()   don't call this function first, invoke this function after the newest menu item is created

const poppers = { id: 5, name: "Jalapeno poppers", cost: "$4.75"}
createMenuItem(poppers)
    .then(console.log('1. booo'))     
    .then(getFood)     
/*
.then() 
    * called on a Promise and takes up to two arguments
    * the first argument is a callback function for the resolved case of the promise 
          => getFood function IS a callback function for the resolved case of the promise 

*/
console.log('2. Time for some delicious treats!')