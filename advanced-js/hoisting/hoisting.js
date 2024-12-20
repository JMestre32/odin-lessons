sayHi();


// The way js works is it takes all your function declarations and moves them to the top so they are all available for use before you use them!
function sayHi(){
    console.log('hey');
    console.log(add(1, 2));
}

function add(a, b){
    return a + b;
}

/* 

Variable declarations are moved to the top, but the setting of those variables are not.

console.log(num);
const num = 10;
*/

// Hoisting is when variable and function declarations are 'hoisted' to the top of the file