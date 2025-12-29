// Array is data structure to store ordered collections.
// An array can store any types of data.

// -- Basics --

// There are two ways to create an empty array.

let arr = [];
let arr2 = new Array();

// We can store initial elements with first way.

let fruits = ["Apple", "Orange", "Banana"];

// Array's elements are numbered, starting with zero.
// We can get an element by its number in square brackets.

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// We can replace an element.

fruits[0] = "Grapes";
fruits[1] = "Watermelon";

console.log(fruits);

// Add new one in array.

fruits[3] = "Mango";

console.log(fruits);

// Total count of elements in the array is its length.

console.log(fruits.length);

// Array may end with comma.

let numbers = [1, 2, 3, 4,];

// The last element of the array.

console.log(fruits[fruits.length -1]);

// or shorter way.

console.log(fruits.at(-1));



// Methods Pop/Push, Shift/Unshift.


// Methods which work with the begining of the array

// Shift -> extracts the first element of the array and returns it.

let first_element = numbers.shift();
console.log(numbers);
console.log(first_element);

// Unshift -> adds the elements to the begining of the array.

numbers.unshift(10);
console.log(numbers);


// Methods which work with the end of the array

// Push -> adds the elements to the end of the array.

numbers.push(5);
console.log(numbers);

// Pop -> extracts the last element of the array and returns it.

let last_element = numbers.pop()
console.log(numbers);
console.log(last_element);



// Performance.

// Arrays are special kind of object. It is extended with special methods to work with 
// ordered collections of data and length property.

// The ways to misuse arrays:

// 1) Add non-numeric property like -> arr.name = "Husniddin".
// 2) Make holes like: arr[0] and then arr[1000] nothing in between them.

// Don't use arrays as objects even you can use them like that.

// Methods
// pop/push runs fast.  (it will just remove or add an element)
// shift/unshift runs slow. (after removing or adding an element with them all elements will need to renumbered)



// Loops.

// 1) For loop over indexes.

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// 2) for...of

for(let fruit of fruits){
    console.log(fruit);
}

// 3) for...in. This is optimized for objects so it is 10-100 times slower.

for(let key in fruits){
    console.log(fruits[key]);
}



// Length

// We can change the value of the length manually.
// When we make it smaller it removes elements and it is permanent.

let nums = [1, 2, 3, 4];

nums.length = 2;
console.log(nums);



// Multidimensional arrays.

// Arrays can have elements which are also arrays. We can use it for multidimensional arrays.
// For example to store matrices:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][1]);



// String.

// It returns comma separated list of elements.

console.log(String(nums));
console.log(String(nums) === "1,2")

console.log([]+"1");                // "1"
console.log([1]+"1");               // "11"
console.log([1, 2]+"1");            // "1,21"
console.log([1, 2, 3]+"1");         // "1,2,31"
