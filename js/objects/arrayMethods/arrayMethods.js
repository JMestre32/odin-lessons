// Q1: Camelize
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.
function camelize(str){

    str = str.split('-');

    for(let i = 1; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1); //NOTE: Strings in JS are immutable, you must change what the index holds, not the character in the string itself
    }

    return str.join('')
}



// Q2: filterRange

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.
function filterRange(arr, a, b){

    filteredArr = arr.filter((num) => num >= a && num <= b )
    return filteredArr
}





// Q3: filterRangeInPlace

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.



//My soln
// function filterRangeinPlace(arr, a, b){
  
//     arr.forEach((item, index, arr) =>{
//         if(item <= a || item >= b){
//             arr.splice(index, 1)
//         }
//         else if(item >= b){
//             arr.splice(index, 1)
//         }
//     })


// }

//My soln: I GUESS DO NOT USE FOREACH, JUST USE A FOR LOOP YOU GET AN ASSERTION ERROR





// Q4: Sort in decreasing order

function compareNumeric(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if (a < b) return -1;
}
function decreasingSort(arr){
    arr.sort(compareNumeric).reverse()
}

//NOTE: compareNumeric could be a one-liner





//Q5: Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr){
    let copy = arr.slice()

    return copy.sort()
}


//NOTE: you can return arr.slice.sort() instead of writing two lines and creating a variable




//Q6: Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

let names = []
for(let i = 0; i < users.length; i++){
    names.push(users[i].name)
}


//NOTE: Soln uses map, where you use an arrow function to map item.name ----> let names = users.map(item => item.name)




// Q7: Map to objects

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];


let usersMapped = users2.map(item => userMap = {fullName: item.name.concat(" ", item.surname), id: item.id})


//NOTE: let usersMapped = users2.map(item => ({fullName: item.name.concat(" ", item.surname), id: item.id}))
// THIS ALSO WORKS, IT'S THE ACTUAL SOLN


// Q8: Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

function sortByAge(arr){

    arr.sort((a,b) => a.age - b.age)

}

sortByAge(users)

//NOTE: I'm witewway fwicken him, witewway




// Q9: Shuffle an array

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  //This is the solution ^, Math.floor ALWAYS rounds down. 
  // So, since we're walking down the array:
  // Given arr = [1, 2, 3] AND arr.length = 3 (arr.length -1 = 2)
  // line 159: n (where 0 <= n < 1) * (2 + 1) WILL ALWAYS be either i or some value less than it (i.e. 0 or 1)
  // THEN, when we reassign at line 166 and decrement, we can NEVER access a value higher than i due to the nature of line 159 
  //IN THE EVENT WHERE WE SWAP, array[j] now holds the swapped value thus it is still available for shuffle (this handles the even odds of being shuffled)


  // Q10: Get average age

  let totalAge = users.reduce((sum, current) => sum + current.age, 0)/users.length


  //This is witewway the soln.

//Q: 11 Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.


function unique(arr){
    let compArr = []
    let len = arr.length
    let j =0

    for(let i = 0; i < len; i++){
        if(compArr.includes(arr[i])){
            continue
        }
        else{
            compArr[j] = arr[i]
            j++ 
        }
    }
    return compArr
}


//NOTE: this took me way longer than i thought it would lmao

// MY ORIGINAL APPROACH:
/*  
        function unique(arr){
                let compArr = []
                let len = arr.length

                for(let i = 0; i < len; i++){
                    if(compArr.includes(arr[i])){
                        arr.splice(i, 1)
                    }
                    else{
                        compArr[i] = arr[i]
                    }
                    
                    
                }
        } 
*/

//THIS APPROACH SKIPS OVER SOME ELEMENTS IN arr BECAUSE WE SPLICE AND NEVER ACCOUNT FOR THE CURRENT ELEMENT BEING SHIFTED LEFT 


// Q12: Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.


let q12Users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users){
    
    let newUsers = {}
    for(let i = 0; i < users.length; i++){

        newUsers[users[i].id] = users[i]

    }

    return newUsers
}



// NOTE: SOLUTION USES REDUCE