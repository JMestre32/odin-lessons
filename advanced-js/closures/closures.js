// A closure is the ability to access a parent level scope from a child scope, even after the parent function has terminated.


/* this works, but it isn't really a closure
function outer(){
    const outerVar = "I love mangoes!";
    function inner(){
        const innerVar = "I love guitar!";
        console.log(innerVar);
        // outerVar is reachable due to the nature of scope, since it is not found within inner, outerVar is then looked for (and found) a level up.
        console.log(outerVar);
    }
    inner();
} */



// Here we see, with innerFn, that we run the function outer and stick it's value in innerFn, thus giving us access to parent-level scope despite the parent function terminating. So, when we run innerFn() we still see
// outerVar get printed. This is the essence of closures. 

/*
function outer(){
    const outerVar = "Hey, I am the outer variable";
    function inner(){
        const innerVar = "Hello, I am the inner variable";
        console.log(innerVar);
        console.log(outerVar);
    }

    return inner;
}

const innerFn = outer();
*/


//Here is a more realistic usecase, we can use closures to create functions based off whichever greeting we like!
function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();
  
    return function(name) {
      return `${myGreet} ${name}`;
    };
  }

  const sayHello = createGreeting("Hello,");
  const saySup = createGreeting("Wazzaaap,");



//PRIVATE VARIABLES

function createGame(gameName){
    let score = 0;
  
    return function win(name){
      score ++;
      return `${name}'s ${gameName} score is ${score}`
    }
  }
  
  //So how is this useful? It allows us to keep track of multiple games!
  const hockeyGame = createGame('Hockey');

  const myBasketballGame = createGame('Basketball');

  // The private variable here is score, it is not accessible through the console and is unique to the closures we create.

  