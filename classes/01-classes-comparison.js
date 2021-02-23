/*
instantiate obj with a class must happen after the class is created 
because classes do not get hoisted whereas constructor functions do
*/

function Rectangle(height, width) {
    this.height = height
    this.width = width
}

Rectangle.prototype.calcArea = function () {
    return this.height * this.width
}

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
      }

      calcArea(){
          return this.height * this.width
      }
    
}


    
const rec = new Rectangle (10, 20)
console.log(rec.calcArea())