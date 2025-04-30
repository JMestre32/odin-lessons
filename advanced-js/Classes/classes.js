// Objectives of this lesson:

/* 

    - Explain the differences between an object constructor and a class.
    A: Classes are somewhat syntactic sugar. They were added in ES6 and are considered cleaner that constructor functions.
    Classes keep all of the code together. Pre-ES6, developers had to write more verbose code and methods had to be added manually.
*/

// Classes:
class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    }
  }
  
  const p = new Person("Barry");
  p.greet();

// Constructors
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
  
  const p = new Person("Barry");
  p.greet(); // "Hi, I'm Barry"
  



  
/*
    - Explain what getters and setters are.
    - Describe basic class syntax.
    - Use inheritance with classes.
    - Explain how to implement private class fields and methods.
    - Explain what static properties and methods are.

*/