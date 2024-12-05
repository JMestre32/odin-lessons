// It is often best to define objects using the object literal sytax:

const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function(){
        // do stuff
    }
}

// To access information in an object you can use either dot or bracket notation. myObject."obnoxious property" won't work due to the space in the string

myObject.property; // 'Value!'
myObject["obnoxious property"]; // [Function]

const variable = 'property';

// myObject.variable is INVALID, it is trying to access a property named 'variable' in myObject

myObject[variable]; //This works the same as just saying myObject['property'] 


// OBJECTS AS A DESIGN PATTERN

//ex. 1

const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

//ex. 2

const playerOne = {
    name: "tim",
    marker: 'X'
};

const playerTwo = {
    name: "jenn",
    marker: "O"
};

function printName(player){
    console.log(player.name);
}

//This type of function could prove useful when printing the winner!

function gameOver(winningPlayer){
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!");
}


/* For more complicated infrastructures such as online shops where we need to keep track an item's name, price, description, etc.
 objects are not feasible. */
 
 //OBJECT CONSTRUCTORS

//  Usecase: when you have a specific type of object that you must duplicate 

function Player(name, marker){
    this.name = name;
    this.marker = marker;
    // You can add functions to object constructors too
    this.sayName = function(){
        console.log(this.name)
    };
}

const player = new Player('steve', 'X');
const player2 = new Player('also steve', 'O')

//Exerise make a book constructor with a function info() that displays the book information

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        console.log(this.title);
        console.log(this.author);
        console.log(this.pages);
        console.log(this.read);
    }
}

const theHobbit = new Book('The Hobbit', 'J.R. Tolkien', 180, false);

//NOTE ON PROTOTYPES:

// 1. All objects in JavaScript have a prototype
// (i.e. player1 and player2 created with Player(name, marker) have a prototype)...what does it mean though?

// To check the objects prototype use: Object.getPrototypeOf(player). The reurn value refers to the prototype of Player(name, marker)


// 2. The prototype is another object
// (i.e. just as player1 and player2 have properties and functions, the prototype can have properties and functions)

// 3. The original object inherits all of its prototype's methods and properties
// (i.e. if there were a function sayHello() in the prototype for player1 and player2, they could also use the sayHello() function)

// Object.getPrototypeOf(player) === Object.getPrototypeOf(player2) returns true.

// Example of defining on the prototype

Player.prototype.sayHello = function(){
    console.log("Hello, I'm a player!");
}
