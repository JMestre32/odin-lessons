const greeting = "Hello, Berry!";


//Trying to access this in modules-2.js will result in an error
(() => {
    const greeting2 = "Hello, Jacob!";
})(); 


//If we wanted some variables to be accessible, we would just have to return it in the IIFE

const farewell = (() => {
    const farewellString = "Farewell, dear friend! See you next time.";
    return farewellString
})();
