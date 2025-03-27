// var: no reason to use anymore
// let: allow it to reassign
// const: do not allow it to reassign

// but mutable or not, it depends on data type 

// const a; // undefined
const b = 'ab'; // NaN


// ---------------- FUNCTION ----------------
// function declaration
function add (a, b) {
    return a+b;
}

// function expression
const add2 = function (a, b) {
    return a+b;
}

// arrow function with default parameter
const add3 = (a=0, b=0) => a+b

// default parameter
const doubleTem = (a = 0, b = 0) => [a*2, b*2];


// ## TEMPLATE STRING
// template literal for multiline string
const Name = 'Maysha \nKhanom \nMoon';
const cv = `My name is ${Name}. I am a web developer.`


// destructuring
// [..] = array
// {...} = object
const person = {
    name: 'Maysha',
    age: 20
}
const {name, age} = person;


// spread operator (...)
// expand into separate elements
const arr = [1, 2];
const arr2 = [...arr]; // copying
const arr3 = [...arr, 3, 4]; // merging
const sum = add(...arr); // spreading arguments
console.log('max:', Math.max(...arr));



// loops
// for, while, do-while --> indexing method
// for-of --> iterates over values (only array)
// for-in --> iterates over keys
// forEach --> iterates over alls + shortcut loop for dom


// object
const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false
}
console.log(bottle.brand); // 1.
console.log(bottle['price']); // 2.
const key = 'color';
console.log(bottle[key]); // 3.