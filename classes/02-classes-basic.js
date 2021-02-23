class Person {
    // class names are capitalized
    constructor(name, job) {
      // the constructor method initializes the objects state
      this.name = name;
      this.job = job;
    }
  
    getName() {
      // a method shared across all instances of this class
      return this.name;
    }
  
    getJob() {
      // a method shared across all instances of this class
      return this.job;
    }
  }
  
  let goodGuy = new Person("Jim Gordon", "Commissioner");
  console.log(goodGuy); // prints "Jim Gordon"