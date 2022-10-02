// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Person= require("../problems/person");

describe("Person class", () => {
  let person1, person2, visit2Spy;
  
  beforeEach(() => {
    person1 = new Person("Kristen", 38);  
    person2 = new Person("Erin", 22);
    visit2Spy = chai.spy.on(person2, 'visit')
  });
  afterEach(() => {
    chai.spy.restore(person2);
  });


  describe("Person constructor", () => {
    it("should set the name property", () => {
      expect(person1).to.have.property("name");
      expect(person1.name).to.eql("Kristen");
    });

    it("should set the age property", () => {
      expect(person1).to.have.property("age");
      expect(person1.age).to.eql(38);
    });
  });

  describe("instance methods", () => {
    it("should call the sayHello method", () => {            
      expect(person1.sayHello()).to.eql(`Hello, I'm Kristen.`);
    });

    it("should call the visit(otherPerson) method", () => {
      expect(person1.visit(person2)).to.eql(`Kristen visited Erin.`);
    });

    it("switch - invoke the visit method of (otherPerson), passing in the current instance as the argument.", () => {         
      expect(person1.switchVisit(person2)).to.eql(`Erin visited Kristen.`);
      expect(visit2Spy).to.have.been.called.once.with(person1); 
      expect(person2.visit(person1)).to.eql(`Erin visited Kristen.`);

    });

    context("update(obj) instance method - arg is not a valid object", () => {      
      it("should throw an error if incoming argument is not an object", () => {            
        let badInput = "bad input";        
        expect(() => person1.update(badInput)).to.throw(TypeError,
          "update() only takes an object as an argument.");
      });

      it("incoming obj should have a name and an age property", () => {
        let badInput1 = {name: "Name"}
        let badInput2 = {age: 22}  
        expect(() => person1.update(badInput1)).to.throw(TypeError,
          "update() only takes an object with name and age properties");
        expect(() => person1.update(badInput2)).to.throw(TypeError,
            "update() only takes an object with name and age properties");        
      });
      context("update(obj) instance method - arg is ок", () => {      
        it("should update name and age with obj data", () => {                      
          person1.update(person2)
          expect(person1.name, person1.age).to.eql(`Erin`, 22);
        });
      });  
  

    });

    context("tryUpdate(obj) instance method - case of succesful invocation of update(obj)", () => {      
    
      it("should call update with obj, update and return true", () => {            
        tryUpdate1Spy = chai.spy.on(person1, 'update')
        let tryUpdatedPerson = person1.tryUpdate(person2)
        expect(tryUpdate1Spy).to.have.been.called.once.with(person2);         
        expect(person1.name, person1.age).to.eql(`Erin`, 22);
        expect(tryUpdatedPerson).to.eql(true);
        chai.spy.restore(person1)
      });
    })
    context("tryUpdate(obj) instance method - not succesful invoked update (Error)", () => {      
      it("should return false if Error on update", () => {                
        let badInput = "bad input";                
        let badInput1 = {name: "Name"}
        let badInput2 = {age: 22}  
        expect(person1.tryUpdate(badInput)).to.eql(false);
        expect(person1.tryUpdate(badInput1)).to.eql(false);
        expect(person1.tryUpdate(badInput2)).to.eql(false);
      });
    });  
  });
  describe('greetAll(arrObjs) static method', () => { 
    it ('' , () => {
      expect(Person.greetAll([person1, person2])).to.eql([`Hello, I'm Kristen.`, `Hello, I'm Erin.`]);
    });

  }) 
});