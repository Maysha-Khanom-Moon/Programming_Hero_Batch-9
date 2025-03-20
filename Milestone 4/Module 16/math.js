/**
 ***********************************
 *               MATH             
 ***********************************
 * 1. number: integer, float
 *    - integer: +ve, -ve, 0
 *    - float: 5.6, 2.2
 * 
 * 2. operators: +, -, *, /, %, ++, --
 * 
 * 3. Math object contains various functions:
 *    - abs, round(up for 5), floor, ceil, trunc
 *    - pow, sqrt, cbrt
 *    - min, max
 *    - random
 *    - sin, cos, tan, asin, acos, atan
 *    - log, log10, exp
 *    - PI, E
 */

var eggPrice = 10;
var onionPrice = 20;

// addition: +
console.log(eggPrice + onionPrice);

// subtraction: -
console.log(eggPrice - onionPrice);

// multiplication: *    
console.log(eggPrice * onionPrice);

// division: /
console.log(eggPrice / onionPrice);

// modulus: %
console.log(eggPrice % onionPrice);

// shorthand
eggPrice += 3;
eggPrice -= 3;
eggPrice *= 3;  
eggPrice /= 3;
eggPrice %= 3;

eggPrice++; // increment 1
eggPrice--; // decrement 1

console.log(eggPrice);