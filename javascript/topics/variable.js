// A variable is named storage for data

// Javascript variables can be declared in 4 ways.
// Modern Javascript            Old Javascript ( not recommended )
// using let                    using var
// using const                  automatically

// To create a variable use let, const, var keywords then name

// let name;
// const name;
// var name;

let fruit;

// Put value using assignment operator "="

// name = value;

fruit = "apple";
console.log(fruit);     // We can access value using variable name

// We can combine variable declaration and into one single line.

let user = "Husniddin";



// -- Declaring variables automatically --

// Undeclared variables are automatically declared when first used:

x=6;
y=7;
z=x+z;



// -- One statement many variables --

let person = "John Doe", car="Volvo", price=300;



// -- Variable naminrg --

// Variable name must contain only letters, numbers or symbols $ and _
// The first character must not be number.
// You can't use names which are used by language itself like let.



// -- When to use const & let & var --

// If the value should not be changed.
// If the type should not be changed. (Arrays, objects)
// Only use let when you cannot use const.
// Never use var.