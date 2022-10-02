class Person {
  // Your code here
  constructor(name,age) {
    this.name = name;
    this.age = age;
  };

  sayHello = () => {
    return `Hello, I'm ${this.name}.`
  };

  visit = (otherPerson) => {      
    return `${this.name} visited ${otherPerson.name}.`
  };

  switchVisit = (otherPerson) => {      
    return otherPerson.visit(this)
  };

  update = (obj) => {      
    if (typeof obj !== 'object') {
      throw TypeError('update() only takes an object as an argument.');
    } else if (!Object.keys(obj).includes('name') || !Object.keys(obj).includes('age') ) {
      throw TypeError('update() only takes an object with name and age properties');
    } else {
      this.name = obj.name;
      this.age = obj.age;
    }    
  };

  tryUpdate = (obj) => {      
    try {
      this.update(obj)
    } catch(error) {
      return false;
    }
    return true
  };
  
  static greetAll(arrObjs) {
    let retArr = []

    for (const obj of arrObjs) {
      retArr.push(obj.sayHello())
    }

    return retArr;
  }
}

module.exports = Person;