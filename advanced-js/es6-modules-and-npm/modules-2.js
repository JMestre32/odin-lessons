//How to import: 

import { greeting, farewell, greeting2, farewell2 } from "./modules.js";


console.log(greeting)
// The message will still appear in the console, despite greeting never being defined in this script. 
// This is due to both files being loaded one after the other.

// What this implies is even if we use multiple .js files, they will all share the same global scope. 

console.log(farewell)

console.log(greeting2)
console.log(farewell2)


//KNOWLEDGE CHECK
/* 
Q1: Before ES6 modules, how would you privatize a variable from being accessible in other files?
- IIFE's

Q2: Before ES6 modules, how would you expose variables to be accessible in later files?
- Return the variables in the IIFE

Q3:What are some benefits of writing code in modules?
- It allows us to keep code clean, organized, and maintainable. 

Q4: What is the difference between default and named exports?
- default exports don't need a name and can be named when imported. named exports are accessed via the name they are imported with.

Q5: What is an entry point?
- the single link we provide in the HTML file for the browser to follow and load in all other dependent files 

Q6: How do you link a module script in HTML?
- <script type = "module" src="jsfile.js"></script>
*/