// -- Arithmetic operators --

// Operators:
// + -> addition of numbers or string concatenation
console.log(1+2);                   // 3
console.log("hello " + "world");    // hello world

// - * / % ** -> subtraction, multiplication, division, remainder, exponentiation
console.log(3-2);           // 1
console.log("3" - "2");     // 1. Js converts "3" to number and "2" too and subtracts it.

console.log(2*3);           // 6
console.log(6/2);           // 3
console.log(2**3);          // 8

// -- ++ -> increment, decrement by 1

// num++ or num-- -> returns original value
let num = 5;
console.log(num++);       // 5
console.log(num);         // 6

console.log(num--);       // 6
console.log(num);         // 5
// ++num or --num -> returns value after adding or subtracting 1
num = 3;
console.log(++num);       // 4
console.log(--num);       // 3



// -- Assignment operators --

// 1. Basic assingnmet:
// operator =
let fruit = "apple";
// Assigns the value on the right to the variable on the left.

// 2. Arithmetic assignment:
// Combines arithmetic operations with assignment.
// operator      example     equivalent to
// +=            num+=1      num=num+1
// -=            num-=1      num=num-1
// *=            num*=1      num=num*1
// /=            num/=1      num=num/1
// %=            num%=1      num=num%1
// **=           num**=1     num=num**1

// 3. Logical assignment:

// 3.1 ||=  (or)

// Assign if the left side is falsy.
// Falsy values: null, undefined, 0, "", NaN, false

let a = "";
let b = "";

// Same as:

if(!a){
    a = "Bye";
}

a ||= "HI";
b ||= "HI";

console.log(b);     // HI
console.log(a);     // Bye


// 3.2 &&=  (and)

// Assign if the left side is truthy.

let a2 = "HI2";
let b2 = "HI2";

// Same as:

if(a2){
    a2 = "Bye2";
}

b2 &&= "Bye2"

console.log(a2);
console.log(b2);



// 3.3 ??=  (nullish)

// Assign if the only left side is either null or undefined.

let a3 = undefined;
let b3 = null;

// Same as:

if( a3 === null || a3 === undefined){
    a3 = "HI " + a3;
}

b3 ??= "HI " + b3

console.log(a3);
console.log(b3);



// -- Comparison operators --

// Operators:
// ==, !=       -> equal to, not equal to
console.log(2 == 2);        // true
console.log(2 == "2");      // true
console.log(2 != 2);        // false
console.log(2 != "2");      // false

// ===, !==     -> equal value and equal type, not equal value and not equal type
console.log(2 === 2);        // true
console.log(2 === "2");      // false
console.log(2 !== 2);        // false
console.log(2 !== "2");      // true

// >, >=        -> greater than, greater than or equal
console.log(5>6);           // false
console.log(5>=5);          // true

// <, <=        -> less than, less than or equal
console.log(5<6);           // true
console.log(5<=5);          // true



// -- Logical operators -- 

// operators:

// && (and) -> returns first fasly value, or the last value if all are truthy.
console.log(true && false);      //  false
console.log(false && false);     //  false
console.log(false && true);      //  false
console.log(true && true);       //  true

console.log(true && "hello");    // "hello"
console.log(0 && true);          // 0
console.log("hello" && "hi");    // hi


// short circuit behavior
// if first one is false, Js does not care about second one.
function hi(msg){
    console.log("HI "+msg);
};

false && hi("false &&");      // hi will not be run
true && hi("true &&");       // hi will be run


//  || (or) -> returns first truthy value, or the last value if all are falsy.
console.log(true || false);      //  true
console.log(false || false);     //  false
console.log(false || true);      //  true
console.log(true || true);       //  true

console.log("true" || 0);       // "true"
console.log(0 || null);         // null
console.log("true" || true);    // "true"

// short circuit behavior
// if first one is true, Js does not care about second one.

true || hi("true ||");         // hi will not be run
false || hi("false ||");       // hi will be run

//  ! (not) -> true is false, false it true.
console.log(!true);     // false
console.log(!false);    // true



// -- Conditional(ternary) operators --

// operator: condition ? valueIfTrue : valueIfFalse

let age = 18;

let status = age >= 18 ? "adult" : "minor"
console.log(status);

// Nested ternary

let score = 72;

let grade = 
    score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" :
    "F"

console.log(grade);



// -- Spread operators --

// ... is spread operator.
// It takes one value and spreads it into many values.

// Copy and array.

let fruits = ["apple", "banana", "orange"];
console.log(...fruits);

let fruits_copy = [...fruits];
console.log(fruits_copy);

// Merge arrays.

let nums1 = [1, 2];
let nums2 = [3, 4];
let merge_nums = [...nums1, ...nums2]

console.log(merge_nums);

// Add elements wihile copying.

let copy_add_fruits = ["cherry", ...fruits]
console.log(copy_add_fruits);

// Copy an object.

let user = {
    name:"Husniddin",
    age:18
};

let user_copy = {...user};
console.log(user_copy);

// Override or extend object.

let updeted_user = {...user, age:20};
console.log(updeted_user);

let extended_user = {...user, canFly:true};
console.log(extended_user);

// Merge objects.

let fruit_obj = {
    f_name:"apple",
    f_color:"red"
}

let merged_obj = {...user, ...fruit_obj};
console.log(merged_obj);

// Function calls

function add(num1, num2, num3){
    return num1 + num2 + num3
};

let nums = [1, 2, 3];
console.log(add(...nums));

// Strings

let text = "Hello World";
let letters = [...text];
console.log(letters);


// -- Optional chaining operator --

// ?. -> If it exists continue, if not stop safely.

let user2 = {};

// console.log(user2.profile.name); -> TypeError 
console.log(user2.profile?.name);       // -> No error. undefined

// How it works:

// obj?.prop

// if obj exist get prop, else return undefined

// Use cases:

// 1. Accessing nested objects.

let user3 = {
    profile : {
        name : "Husniddin"
    }
}

console.log(user3.profile?.name);       // Husniddin
console.log(user3.settings?.mode);      // undefined

// 2. Accessing array items.

let colors = null;

console.log(colors?.[0]);       // undefined. No error.

// 3. Calling functions.

let admin = {};

admin.logout?.();       // Nothing happanes and no error.


// Without optional chaining. (old way)

if(user3 && user3.profile && user3.profile.name){
    console.log(user3.profile.name);
}else{
    console.log(undefined);
}



// -- Nullish coalescing operator --

// ?? -> is nullish coalescing operator.

// It returns the right hand value if the left hand value is either 
// null or undefined.

// let value = value ?? defaulValue

let value = null ?? "Hello World";
console.log(value);     // Hello World
