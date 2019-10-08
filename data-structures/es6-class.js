class Student {
  constructor(firstName, lastName, year) {
    // Inside of constructor, this -> refers to instance of the object
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

let firstStudentInst = new Student('Tejas', 'Sabunkar', 2016);

console.log(firstStudentInst);

console.log('____________________________________________________________');

// ! Instance Methods :- method which is related to specific Instance of the object.
// ! 'this' -> Inside all of our instance methods and constructor, the keyword 'this' refers to the object
// !           created from that class (also known as an instance)

class Person {
  constructor(personId, name) {
    this.pid = personId;
    this.personName = name;
  }

  adharCardDetails() {
    // Instance method
    return `Your Adhar Id is : ${this.pid}, welcome to India ${this.personName}`;
  }
}

let personName1 = new Person('123', 'Tejas');
let personName2 = new Person('153', 'Usha');

console.log(personName1);
console.log(personName1.adharCardDetails());

console.log(
  '______________________________________________________________________________'
);

// !Class Methods/'static method': - Method is which is more generic through out the class/ like a
// !utility method which is not specific to any instance of the object

/**
 * The static keyword defines a static method for a class. Static methods aren't called on instances
 *  of the class. Instead, they're called on the class itself. These are often utility functions,
 * such as functions to create or clone objects..
 *
 * - Static methods are not related to particular instance of object, but rather it is common/generic
 * throughout the Class
 */

class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());
