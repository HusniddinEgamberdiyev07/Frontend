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



// -- Array methods --


// Add / remove items:

// 1) pop.
// 2) push.
// 3) shift.
// 4) unshift.

// 5) splice -> this method can add, remove or replace element. You can use positive and negative indexes

// remove elements:

let test_array = [1, 2, 3, 4, 5];

test_array.splice(1, 3);         // from 1 remove 3 elements. [1,5]
console.log(test_array);

// replace elements:

let test_array2 = [1, 2, 3, 4, 5];

test_array2.splice(1, 3, 10, 20, 30);       // from 1 remove 3 elements and put 10, 20, 30 in their position.
console.log(test_array2);                   // [1, 10, 20, 30, 5]


// add elements:

let test_array3 = [1, 2, 3];

test_array3.splice(3, 0, "apple", "banana");        // from 3 remove 0 element and add "apple", "banana"
console.log(test_array3);

// 6) slice -> copy elements from start to end and return new array. You can use positive and negative indexes

// .slice(start, end);

let test_array4 = [1, 2, 3, 4, 5];

let sub_test_array = test_array4.slice(1, 5);
console.log(sub_test_array);

// 7) Concat -> returns new array which includes elements from pther arrays and additional items.

// If the argument is array it is elements will be added individually.
console.log(test_array4.concat(["hello", "there"], {"name":"Husniddin", age : 18}));


// Iterate. For each.

let test_array5 = [1, 2, 3, 4, 5, 6];

test_array5.forEach(function(item, index, array){
    console.log(`Item: ${item} at ${index} in array ${array}`);
});

test_array5.forEach(item=>console.log(item));
test_array5.forEach((item, index)=>console.log(item, index));