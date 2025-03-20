/*
    ---------- JS ---------
- Brenden Eich (1995)
- official name ecmascript
- it's an interpreted language
*/
console.log("Hello World");

/**
 *  variable: container to store data. which container allocate some storage in memory based on data type.
 * 
 * 
 * ### 5 things to declare a variable -
 *      1. keywords (var/ let/ const)
 *      2. variable name
 *      3. '=' to assign value
 *      4. variable value
 *      5. ;
 * 
 * 
 *  - js is a dynamically typed language
 */

var name = 'moon';
var weight = 20;
var age; // undefined

const pi = 3.1415; // value can't be changed

name = 'mkm'; // change the value
console.log(name);



/**
 *  ## Data Types
 */

// string
var name = "Maysha Khanom Moon";
console.log('\n'+name);

// boolean
var isRich = true;
console.log(isRich);

// number
var money = 5000;
console.log(money);

// to check the data-type
console.log(typeof(name));
console.log(typeof(isRich));
console.log(typeof(money));
console.log(typeof(pi));