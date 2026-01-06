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


// -- Objects review --

// empty object:
let obj1 = {};
let obj2 = new Object();

// objects with key & value.

let user = {
    name:"Husniddin",
    age:18,
    "can fly":false,
};

let key_word = {
    let:"This is variable keyword",
};

// read, add, remove properties:

// use dot and key to read.

console.log(user.name);

// obj.key = value; to add new qproperties:

user.dead = false;
user.married = false;

console.log(user);

// delete obj.key to delete property

delete user.married;
delete user.dead;

console.log(user);

// multiword no dot.
// use obj["key"];

// read obj["key"]
// add obj["key"] = value;
// remove delete obj["key"];

user["hates the world"] = "true"
console.log(user["can fly"]);
console.log(user);

delete user["can fly"];

console.log(user);

let user2 = {
    "name":"Husniddin",
};

console.log(user2.name);
console.log(user2["name"]);

user2["name"] = "Die";

console.log(user2.name);

// benifits of [];
// You can use them to name a key.

let key_name = "key";
let key_name2 = "key2";

let dynamic_keys = {
    [key_name]:"value"
};

console.log(dynamic_keys);

dynamic_keys[key_name2] = "value2";

console.log(dynamic_keys);

// shorthand

let name = "Husniddin";
let age2 = 18;

let user3 = {
    name,
    age2
}

console.log(user3);

// in 

console.log("hell" in user3);       // false

let obj_loop = {
    name:"Husniddin",
    age:18
}

let obj_loop2 = {};

for(let key in obj_loop){
    obj_loop2[key] = obj_loop[key];
}

console.log(obj_loop, obj_loop2, obj_loop === obj_loop2);

let obj_first = {};
let obj_second = obj_first;
let obj_third = {};

console.log(obj_first === obj_second);      // true
console.log(obj_first === obj_third);       // false

let fruit1 = {
    name:"apple",
    color:"red",
}

let fruit2 = {
    name:"water-melon",
    color:"green",
    shape:"round",
}

let fruit3 = {
    "is fresh":true
};

Object.assign(fruit3, fruit2, fruit1)

console.log(fruit3);

let clone_obj = {
    message:"Hello",
};

let clone_obj2 = Object.assign({}, clone_obj);

console.log(clone_obj2, clone_obj, clone_obj === clone_obj2);

let nested_obj = {
    "child obj":{
        message:"I am child",
    }
}

let nested_obj2 = structuredClone(nested_obj);

console.log(nested_obj, nested_obj2, nested_obj["child obj"] === nested_obj2["child obj"]);



// create empty obj:
// {};
// new Object();

// read -> obj.key
// add or change -> obj.key = value;
// delete obj.key;

// read -> obj["key"]
// add or change -> obj["key"] = value;
// remove -> delete obj["key"];

// we can use [] to give dynamic keys.

// just writing key and not giving value means key:key.

// in checks property exist or not. "checking key" in obj;

// variable  stores only address of an object in memory. 
// let obj2 = obj; it takes only the address of the obj and 
// if we change either of them it will change the object in memory so 
// change will be on both of them.

// objects are equal if they refrence to the same address.

// we can change const objects because we are not changing the value which variable has.

// we can clone objects using loops.
// we can clone objects using assign method. Object.assign(obj1, obj2, ...)
// we can nested clone using structuredClone(obj);
