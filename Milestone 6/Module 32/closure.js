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


/**
 * ----- CALLBACK -----
 * - a function is passed as an argument to another function
 * - and it executed later
 */
function greetMorning(name) {
    console.log('Good Morning ' + name);
}
function greetEvening(name) {
    console.log('Good Evening ' + name);
}
function greet(func, name) {
    func(name);
}
greet(greetMorning, 'Brenden');
greet(greetEvening, 'Eich');


/**
 * ----- ARGUMENTS -----
 * - arguments is an array-like object
 * - it contains all the arguments passed to the function
 */
function sum(a, b) {
    console.log(arguments);
    console.log(arguments[2]);
    console.log([...arguments]);
    return a + b;    
}
console.log(sum(1, 2, 10));


/**
 * - primitive: pass by value
 * - non-primitive: pass by reference
 */
let num1 = 4;
function add(a) {
    a = a + 1;
}
add(num1); // no change in num1
console.log(num1);

let obj1 = { name: 'Brenden' };
function change(obj) {
    obj.name = 'Eich';
}
change(obj1); // change in obj1
console.log(obj1);