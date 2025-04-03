function createMan(age, name){
    return{
        age: age,
        name: name,
        sayAge(){
            console.log("Hello! I am " + name, "and I am " + age + " years old!");
        }
    }
}

// This is a factory function, it's useful because you can create multiple instances of an object without having hundreds of different objects
// this makes debugging a lot easier on larger scale projects (say when an object has a bunch of different methods and all these methods are in 100 different objects)

const berry = createMan(24, "berry")
const lebron = createMan(40, "LeBron")

// We've created two separate objects without the need for a bunch of the same lines of code. Now if something goes wrong with either of the two, we know where to look. 

const calculator = (function (){
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b
    return{add, sub, mul, div};
})();

// This is an immediately invoked function expression or IIFE. It's an example of writing code, wrapping things away that we do not need as private variables/functions inside
// our factory function. What's neat is while these things are tucked inside our module, we can use the returned variables/functions outside the factory, as necessary. 
// Take for example add, there are multiple functions that may have the name add (i.e. adding two strings together or adding numbers together) Instead, of running into naming
// collisions, IIFE's allow us to explicitly call calculator.add(a,b)