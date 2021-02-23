function Person(fName, lName){
    let _name = fName
    this.lName = lName 
    
    this.getName = function(){
        if (_name === "Viola") {
            return _name = "Viola is awesome"
        } else {
            return _name = `${_name} is amazing!`
        }
    }
}

const viola = new Person('Viola', 'Davis')
// console.log(viola._name)   no no
// console.log(viola.getName())
// console.log(viola)
