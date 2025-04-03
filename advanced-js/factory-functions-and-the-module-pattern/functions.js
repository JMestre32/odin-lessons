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