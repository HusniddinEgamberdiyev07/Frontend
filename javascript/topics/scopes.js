// -- Function scope --

// Variables declared inside a function.
// Only usable inside that function.

function sayHI(){
    let user = "Husniddin";
    var item = "knife";
    console.log(user);
}

// console.log(item); -> Reference Error
// console.log(user); -> Reference Error



// -- Block scope --

// Blocks are {}
// let and const are block scoped

{
    let number = 10;
}

// console.log(number); -> Reference Error


// var is not block scoped

{
    var fruit = "apple"
}

console.log(fruit);     // apple



// -- Global scope --

// Variables declared outside any block or function.
// Accessible everywhere.

let globalVar = "I am global and you are a bot";



// -- Scope chain --

// Inner scopes can access outer scopes, but not opposite.

let outer = "Outer";

function inner(){
    let innerVar = "Inner"
    function innerChild(){
        console.log(outer);
        console.log(innerVar);
    }

    innerChild()
}
inner()

// inner scope -> outer scope -> global scope.
// Js looks for variable from inside to outside.