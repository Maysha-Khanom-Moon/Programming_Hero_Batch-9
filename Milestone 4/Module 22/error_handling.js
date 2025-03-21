// js: left to right
// js follows PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction)

// add: (concatenation)
console.log(2 + 2 + 'a'); // 4a
console.log('a' + 2 + 2); // a22
console.log(2 + 'a' + 2 + '\n'); // 2a2

// multiplication
console.log('a' * 2); // NaN (yellow)
console.log(2 * 'a', '\n'); // NaN (white)


// ----- ERROR HANDLING ------
function multi(a, b) {
    return isNaN(a * b) ? 'give a number' : a * b;
}
console.log(multi(5, 7)); // 35
console.log(multi([5], 7)); // 35
console.log(multi(5, '7')); // 35
console.log(multi([5], '7')); // 35
console.log(multi([5, 7], 8)); // give a number
console.log(multi(5, 'seven'), '\n'); // give a number