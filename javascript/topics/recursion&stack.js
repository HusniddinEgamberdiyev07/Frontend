function pow(x, n){
    let result = 1;
    for(let i=0; i<x; i++){
        result *= n;
    }
    return result;
}

console.log(pow(3, 3));

function pow2(x, n){
    if(x === 1){
        return n;
    }else{
        return n * pow(x - 1, n)
    }
}
console.log(pow2(3,3));

// pow2(3, 3) => 3 * pow2(2, 3)
// pow2(2, 3) => 3 * pow2(1, 3)
// pow2(1, 3) => 3

// 3 * 3 * 3

// Recursion reduces a function call to simpler one, then even more simpler, 
// and until the result becomes obvious.

// Recursion is usually shorter.

function pow3(x, n){
    return x === 1 ? n : n * pow3(x-1, n) 
}

console.log(pow3(4, 2));

// Maximal number of nested calls (including first one) is called recursion depth.
// In pow function it will be x.
// Recursion depth is limited by Js engine. It should be 10000.


// pow(3, 2)

// pow(1, 2) -> x=1, x=2, line=1
// pow(2, 2) -> x=2, x=2, line=4
// pow(3, 2) -> x=3, x=2, line=4

// n=2 -> pow(1, 2);
// pow(2, 2); line 4 -> n * pow(1, 2) -> n * 2
// pow(3, 2); line 4 -> n * pow(2, 2) -> n * n * 2