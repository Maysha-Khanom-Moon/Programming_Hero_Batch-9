// var: no reason to use anymore
// let: allow it to reassign
// const: do not allow it to reassign

// but mutable or not, it depends on data type 

// const a; // undefined
const b = 'ab'; // NaN


// function declaration
function add (a, b) {
    return a+b;
}

// function expression
const add2 = function (a, b) {
    return a+b;
}

// arrow function
const add3 = (a, b) => a+b