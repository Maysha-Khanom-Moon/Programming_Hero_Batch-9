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

// 3. arrow function
let third = (name) => {
    console.log("Hello " + name);
}
let fourth = name => console.log("Hello " + name + "\n");

// call
first();
console.log(second());
third('Brenden');
fourth('Eich');

// example
function sumOfNumbers (array) {
    console.log(array);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const sum = sumOfNumbers([1, 2, 3, 4, 5]);
console.log(sum);