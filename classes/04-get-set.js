class Person {
    constructor(name) {
      this.name = name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  }
  
  let goodGuy = new Person("Jim Gordon");
  
  // `goodGuy.name` will call the `get name()` method
  console.log(goodGuy.name); // Jim Gordon
  
  // `goodGuy.name = ` will call the `set name()` method
  goodGuy.name = "James Gordon";
  console.log(goodGuy.name); // James Gordon