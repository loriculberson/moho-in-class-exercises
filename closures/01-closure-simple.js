function Person(fName, lName){
    let _name = fName
    this.lName = lName 

    this.getName = function(){
        return _name
    }
}

const denzel = new Person('Denzel', 'Washington')
console.log(denzel)
// console.log(denzel.lName = "Smith")
// console.log(denzel)

// console.log(denzel._name)      //no no. Do not directly access private methods or variables
console.log(denzel.getName())
