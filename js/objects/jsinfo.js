// Write the code, one line for each action Q1:

//     1. Create an empty object user.
let user = {}
//     2. Add the property name with the value John.
user.name = "John"
//     3. Add the property surname with the value Smith.
user.surname = "Smith"
//     4. Change the value of the name to Pete.
user.name = "Pete"
//     5. Remove the property name from the object.
delete user.name



//CHECK FOR EMPTINESS Q2

//      6. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj){
    for(let key in obj){
        if(key in obj){
            return false;
        }
    }
    return true;
}

// SUM OBJECT PROPERTIES Q3

//      7. Write the code to sum all salaries and store in the variable sum. Should be 390. 
//      Given: 
//      let salaries = {
//          John: 100,
//          Ann: 160,
//          Pete: 130
//      }

function sumSalary(obj){

    let sumofSalaries = 0
    
    for(let key in obj){
        sumOfSalaries += obj[key]
    }
    return sumOfSalaries
}


// MULTIPLY NUMERIC PROPERTY VALUES BY 2 Q4

//      8. Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj){
    
    for(let key in obj){
        if(typeof obj[key] === number){
            // key = obj[key] *2; ***THIS WAS MY ORIGINAL SOLN. IT WAS NOT DOUBLING THE VALUE IN PLACE PROPERLY***
            obj[key] *= 2; 
        }
        else{
            continue;
        }
    }
}