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
 *    - abs, round, floor, ceil, trunc
 *    - pow, sqrt, cbrt
 *    - min, max
 *    - random
 *    - sin, cos, tan, asin, acos, atan
 *    - log, log10, exp
 *    - PI, E
 */

var orangPrice = 10;

//  typeof
console.log('\n' + orangPrice);
console.log(typeof orangPrice);
console.log(typeof(orangPrice));


var priceTag = '12';
console.log(typeof priceTag);
console.log(priceTag + 2); // 122

// parseInt: string --> integer
// parseFloat: string --> float
priceTag = parseInt(priceTag);
console.log(typeof priceTag);
console.log(priceTag + 2); // 14

// round, floor, ceil, trunc: number --> integer
var price = 12.5;
console.log('\n' + Math.round(price)); // 13
console.log(Math.floor(price)); // 12   
console.log(Math.ceil(price)); // 13
console.log(Math.trunc(price)); // 12