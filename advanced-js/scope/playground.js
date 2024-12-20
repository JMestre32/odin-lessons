/*
// NOT attached to the window && const variables cannot be reassigned (aka immutable)
const first = 'wes'; 
// NOT attached to the window
let second = "juno";
// IS attached to the window
var num = 100;

It is generally not a good idea to make global variables!
*/

// function sayHi(){
//     console.log("Hi!");
// }


const age = 100;

function go(){
    const hair = "blonde";
    console.log(age); // This works because the function goes up to look for an 'age' variable after not finding one within its scope
    const age = 200; // This is called a shadow variable and is not recommended as it limits you from accessing the global variable 'age'.
    console.log(age) // This outputs 200
}


// This causes an error
if(1===1){
    const constCool = true;
}


// This works, thus if you want to escape block scope use a var!
if (1===1){
    var varCool = true;
}


// This causes an error
if(1===1){
    let letCool = true;
}

/*

if you use a var here, there will be a variable 'i' leaking out. this is not preferred.
for(var i = 0; i<10; i++){
    console.log(i);
}

if you use a let here, the 'i' will not longer leak out
for(let i = 0; i < 10; i++){
    console.log(i);
}

GENERAL RULE OF THUMB:

1. Use const by default
2. Use let if you want to reassign the variable
3. Use var in specific cases when you need a variable to bypass block scoping
4. Try to avoid global variables
*/