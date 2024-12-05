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