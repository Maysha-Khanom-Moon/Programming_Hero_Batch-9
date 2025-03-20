/**
 * Parameters: variables declared in a function definition
 * Arguments: actual values passed to the function (when call)
 */

// ----- FUNCTION DECLARATION ----
// 1.
function first () {
    console.log('first');
}

// 2.
let second = function () {
    return 2;
}

// call
first();
console.log(second());