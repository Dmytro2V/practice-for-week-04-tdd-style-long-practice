// Your code here
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidSideLengths  () {
    return (this.side1 + this.side2 > this.side3) &&
           (this.side1 + this.side3 > this.side2) &&
           (this.side2 + this.side3 > this.side1);
  };

  validate() { //adds an isValid property
    this.isValid = this.hasValidSideLengths()
  }

  static getValidTriangles(...triangles) {
    return triangles.filter(triangle => triangle.hasValidSideLengths())
  }

}

class Scalene extends Triangle {
  constructor (side1, side2, side3) {
    super(side1, side2, side3)    
    this.isValidTriangle = Scalene.validate(side1, side2, side3)
  }
  static validate (side1, side2, side3) {//validates triangle
    return (side1 + side2 > side3) &&
           (side1 + side3 > side2) &&
           (side2 + side3 > side1);
  }
  isScalene() {
    return this.side1 !== this.side2 
           && this.side1 !== this.side3
           && this.side2 !== this.side  
  }
  validate() {
    this.isValidScalene = this.isScalene()
  }
}


class Isosceles extends Triangle {
  constructor (side1, side2, side3) {
    super(side1, side2, side3)    
    this.isValidTriangle = Isosceles.validate(side1, side2, side3)
  }
  static validate (side1, side2, side3) {//validates triangle
    return (side1 + side2 > side3) &&
           (side1 + side3 > side2) &&
           (side2 + side3 > side1);
  }
  isIsosceles() {
    return this.side1 === this.side2 
           || this.side1 === this.side3
           || this.side2 === this.side3  
  }
  validate() {
    this.isValidIsosceles = this.isIsosceles()
  }
}

//console.log(new Scalene(2,2,3));
/************************************************** 
****************************************************/
module.exports = {Triangle, Scalene, Isosceles}