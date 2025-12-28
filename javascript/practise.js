"use strict"
// -- Function review --

// functions can take outer variable and use it and change it, 
// but if there are local variable with exact same name it will not touch outer variable.

let variable = "HI";

function showVar(){
    let variable = "Bye"
    console.log(variable);
}

showVar();
console.log(variable);

let letter = "A";

function changeLetter(){
    letter = "B";
}

changeLetter();
console.log(letter);

// function parametr will copy the argument value and it cannot change the variable.
// parameter is like varaible name and argument is like value.

let fruit = "apple";

function takeFruit(fruit){
    fruit = "banana";
    console.log(fruit);
}   
takeFruit(fruit);
console.log(fruit);

// if I don't give an argument for the parameter it wil have ubdefined value.

function showMessage(from, message){
    console.log(`from: ${from}, message: ${message}`);
}

showMessage("Husniddin");

// we can give default value with "="

function showMessage2(from, message="There was nothing"){
    console.log(`from: ${from}, message: ${message}`);
}

showMessage2("Husniddin")


// functions can return values buy default they will return undefined. Function with empty return returns undefined too.
// Empty return makes function to exit.

console.log(showMessage());

function addNums(num1=0, num2=0){
    return num1+num2
}
console.log(addNums(1, 2));

function addSomething(num1, num2){
    let sum = num1+num2;
    
    if(sum===10){
        return;
    }
    return sum;
}

console.log(addSomething(9, 1));
console.log(addSomething(8, 1));


// function declaration

function ask(agree, yes, no){
    if(agree){
        yes()
    }else{
        no()
    }
}

function yes(){
    console.log("You agreed");
}

function no(){
    console.log("You disagreed");
}

ask(true, yes, no);

// function expression.

function ask2(agree, yes, no){
    if(agree){
        yes();
    }{
        no();
    }
}

ask2(false, function(){
    console.log("You agreed");
}, function(){
    console.log("You disagreed");
});

// In js we have three function types.
// Function declaration, function expression, arrow function.

// Function expression is a value. It is created when execution reaches it and it is only usable after that moment.

// Function declaration can be called before it is defined.

sayHi();
function sayHi(){
    console.log("Hi");
}

// Function declaration only visible inside code block it resides.

let age = 18;
if(age>=18){
    function welcome(){
        console.log("Ou you are old");
    }
}else{
    function welcome(){
        console.log("Get lost");
    }
}
// welcome() -> Error in use strict

let welcome;

if(age>=18){
    welcome = function welcome(){
        console.log("Ou you are old");
    }
}else{
    welcome = function welcome(){
        console.log("Get lost");
    }
}

welcome();

// Arrow functions are like function expression but just shorter.

let add = (num1, num2) => num1 + num2;
let addLines = (num1, num2)=>{
    return (
        num1+num2
    );
}

console.log(add(1, 2));

console.log(addLines(1, 2));

let addOne = num => num+1;
console.log(addOne(2));
