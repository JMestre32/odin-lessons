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
  
  





  //Inheritance with classes

  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // calls Animal's constructor
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks. It's a ${this.breed}.`);
    }
  }
  
  const d = new Dog("Rex", "Labrador");
  d.speak(); // Rex barks. It's a Labrador.

  
  //Private class fields and methods
  //Use # to declare private fields or methods. They can only be accessed inside the class.
  class BankAccount {
    #balance = 0; // private field
  
    constructor(owner) {
      this.owner = owner;
    }
  
    deposit(amount) {
      if (amount > 0) this.#balance += amount;
    }
  
    #formatBalance() { // private method
      return `$${this.#balance.toFixed(2)}`;
    }
  
    showBalance() {
      console.log(`${this.owner}'s balance is ${this.#formatBalance()}`);
    }
  }
  
  const acct = new BankAccount("Barry");
  acct.deposit(100);
  acct.showBalance(); // Barry's balance is $100.00
  // acct.#balance => SyntaxError: Private field '#balance' must be declared in an enclosing class
  

  //Static properties and methods
  class MathHelper {
    static PI = 3.14159; // static property
  
    static square(x) {   // static method
      return x * x;
    }
  }
  
  console.log(MathHelper.PI);        // 3.14159
  console.log(MathHelper.square(5)); // 25
  
  const m = new MathHelper();
  // m.square(5) =>  Error: square is not a function on instance
  