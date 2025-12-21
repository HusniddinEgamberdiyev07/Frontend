// What is javascript.

// Javascript was created to make web pages alive.

// Today javascript ca(); can be runned any device which has The Javascript Engine.

// Different engines have different "code names"
// * V8 -> in Chrome, Edge and Opera.
// * SpiderMonkey -> in FireFox.
// * Chakra -> in IE.
// * JavascriptCore, Nitro, SquirrelFish -> in Safari.



// JavaScript Execution Explained

// 1) JavaScript engine reads the code as plain text.
// 2) It parses the code and creates an AST (tree structure)
//    so it understands what the code means.
// 3) It executes the code line by line (interpretation).
// 4) If some code runs many times, JIT compiles it
//    into machine code to make it faster.


// Memory & Execution

// Call Stack:
// - Keeps track of functions that are currently running.
// - Function starts  -> added to stack
// - Function ends    -> removed from stack
// - Works like a stack (Last In, First Out).

// Heap:
// - Stores objects, arrays, and big data.
// - Stack keeps references to heap data.

// Garbage Collector:
// - Automatically removes memory that is no longer used.


// Async & Event Loop

// JavaScript is single-threaded (one thing at a time).

// Some tasks take time (file reading, network, timers).
// JS does NOT wait for them.

// When JS starts an async task:
// - It starts the task in the background.
// - Skips it and continues running the next code.

// When the async task finishes:
// - Its callback is placed in the callback queue.

// Event Loop:
// - Constantly checks the call stack.
// - If stack is empty:
//     → takes a callback from the queue
//     → pushes it to the stack
//     → executes it.



// -- Call Stack --

// - Add to stack -> when a function starts
// - Remove from stack -> when it finishes

function a() { console.log('a'); }
function b() { a(); console.log('b'); }
b();

// Execution flow:
// 1. JS ignores code until it reaches b();
// 2. Adds b() to the call stack and runs its code
// 3. Encounters a() inside b(), adds a() to the stack and runs it
// 4. a() finishes -> removed from stack
// 5. Continues b() execution
// 6. b() finishes -> removed from stack


// JS code
// ↓
// AST
// ↓
// Bytecode (Interpreter runs this)
// ↓
// Hot code detected
// ↓
// Machine Code (JIT)
// ↓
// CPU executes
