class Person {
    constructor(name, job) {
      this.name = name;
      this.job = job;
    }
  
    getName() {
      return this.name;
    }
  
    getJob() {
      return this.job;
    }
  }
  
  class SuperHero extends Person {
    // SuperHero extends (inherits from) Person
    constructor(name, heroName, superPower) {
      super(name); // call the Person constructor
      this.heroName = heroName;
      this.superPower = superPower;
    }
  
    secretIdentity() {
      // add a method for SuperHeroes
      return `${this.heroName} is ${this.name}!!!`;
    }
  }
  let batman = new SuperHero("Bruce Wayne", "Batman");
  
  console.log(batman.secretIdentity()); // Batman is Bruce Wayne!!!