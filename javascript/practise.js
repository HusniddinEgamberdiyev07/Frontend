// -- Function review --

// functions can take outer variable and use it and change it, 
// but if there are local variable with exact same name it will not touch outer variable.

let variable = "HI";

function showVar(){
    let variable = "Bye"
    console.log(variable);
};

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


// functions can return values buy default they will return undefined

console.log(showMessage());

function addNums(num1=0, num2=0){
    return num1+num2
};
console.log(addNums(1, 2));
