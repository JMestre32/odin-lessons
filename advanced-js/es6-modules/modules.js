// const greeting = "Hello, Berry!";


//Trying to access this in modules-2.js will result in an error

/*
(() => {
    const greeting2 = "Hello, Jacob!";
})(); 
*/

//If we wanted some variables to be accessible, we would just have to return it in the IIFE

/*
const farewell = (() => {
    const farewellString = "Farewell, dear friend! See you next time.";
    return farewellString
})();
*/



// With ESM, we no longer need IIFE's to simulate this kind of behavior. We can choose what we want to import/export and where we want to import/export it. Here's how:

// Method 1 (sticking an export in front of the declaration):
export const greeting = "Hello, Odinite!";
export const farewell = "Bye bye, Odinite!";


// Method 2 (export on a separate line, typically at the end of a file)
const greeting2 = "Hey, Odinite!";
const farewell2 = "See ya, Odinite!";
export { greeting2, farewell2 };
