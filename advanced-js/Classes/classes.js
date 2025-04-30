// Objectives of this lesson:

/* 

    - Explain the differences between an object constructor and a class.
    - Describe basic class syntax
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


//   BASIC CLASS SYNTAX
  class ClassName {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    method1() {
      // your code here
    }
  
    method2() {
      // you can add more methods too
    }
  }
  

// Constructors
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
  
  const p = new Person("Barry");
  p.greet(); // "Hi, I'm Barry"
  


//   Explain what getters and setters are

// Getters and setters are ways to access and update class properties in a controlled way
class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (newName.length < 2) {
        console.log("Name too short!");
      } else {
        this._name = newName;
      }
    }
  }
  
  const p = new Person("Barry");
  p.name = "B";     // Name too short!
  p.name = "Ben";   // Works
  console.log(p.name); 
  
  




/*

    - Use inheritance with classes.
    - Explain how to implement private class fields and methods.
    - Explain what static properties and methods are.

*/