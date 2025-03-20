var orangPrice = 10;

//  typeof
console.log("typeof: ");
console.log(orangPrice);
console.log(typeof orangPrice);
console.log(typeof(orangPrice));


var priceTag = '12';
console.log(typeof priceTag);
console.log(priceTag + 2); // 122

/**
 * ---------------------------------------------------
 *                 parseInt, parseFloat 
 * ---------------------------------------------------
 * - string to number (left to right)
 * -stop when it get any character other than number (for float consider . also)
 * 
 * - number (yellow)
 * - string (white)
 */

console.log("\nParsing (string to number): ");
var price = '12.5a.d';
console.log(parseInt(price)); // 12

var price = '125a';
console.log(parseInt(price)); // 125
console.log(parseFloat(price)); // 125

var price = '124.2a'
console.log(parseFloat(price)) // 124.2


// round, floor, ceil, trunc: number --> integer
console.log("\nNumber to integer: ");
var price = 12.5;
console.log(Math.round(price)); // 13
console.log(Math.floor(price)); // 12   
console.log(Math.ceil(price)); // 13
console.log(Math.trunc(price)); // 12


/**
 *  ---- NaN: Not a Number ----
 * - NaN is a value representor, not a data type
 */
console.log("\nNot a Number: ");
var price = 'a125';
console.log(parseInt(price)); // NaN
console.log(typeof NaN); // number
console.log(2 + NaN); // NaN

// isNaN(x)
console.log("\nisNaN: "); 
console.log(isNaN(NaN)); // true
console.log(isNaN(2)); // false
console.log(isNaN('2')); // false
console.log(isNaN('a2')); // true


// Invalid
console.log("\nInvalid: ");
console.log(0.5/0); // Infinity
console.log(-1/0); // -Infinity
console.log(0/0); // NaN