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
console.log(sum, '\n');

// swap
// 1.
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log(a, b);

// 2. destructing
let c = 'abc';
let d = 40;
[c, d] = [d, c];
console.log(c, d);