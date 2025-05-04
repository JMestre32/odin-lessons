//How to import: 

import { greeting, farewell, greeting2, farewell2 } from "./modules.js";


console.log(greeting)
// The message will still appear in the console, despite greeting never being defined in this script. 
// This is due to both files being loaded one after the other.

// What this implies is even if we use multiple .js files, they will all share the same global scope. 

console.log(farewell)

console.log(greeting2)
console.log(farewell2)