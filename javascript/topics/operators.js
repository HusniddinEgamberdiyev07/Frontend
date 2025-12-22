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
// **=           num**=1      num=num**1



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

// && (and) -> returns true if only both are true.
console.log(true && false);      //  false
console.log(false && false);     //  false
console.log(false && true);      //  false
console.log(true && true);       //  true

// short circuit behavior
// if first one is false, Js does not care about second one.
function hi(msg){
    console.log("HI "+msg);
};

false && hi("false &&");      // hi will not be run
true && hi("true &&");       // hi will be run


//  || (or) -> returns true if only one of them is true.
console.log(true || false);      //  true
console.log(false || false);     //  false
console.log(false || true);      //  true
console.log(true || true);       //  true

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
// -- Optional chaining operators --
// -- Nullish coalescing operators --