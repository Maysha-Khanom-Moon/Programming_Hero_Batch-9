/**
 * ----- HOISTING -----
 * - var and functions are moved to the top of the current scope before code execution
 * - but only var declaration is hoisted. so it stays undefined until reached the declaration point
 * 
 * - let and const are hoisted but remain in temporary dead zone (tdz) until reached the declaration point
 */


/**
 * ----- CLOSURE -----
 * 1. a function is defined inside another function
 * 2. inner function reference the variable of outer function
 * 3. inner function is returned by the outer function
 * 
 * - used in: encapsulation, data privacy, function factory,  event handlers & callbacks
 */

function outer() {
    let counter = 0;
    return () => {
        counter++;
        return counter;
    };
}
const inner = outer();
console.log(inner()); // 1
console.log(inner()); // 2
console.log(inner()); // 3

// function factory - custom function
function multiplier(n) {
    return (num) => num * n;
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(10)); // 30