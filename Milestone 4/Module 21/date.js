/**
 * Date() and new Date().toString() ---> same format
 */

// Fri Mar 21 2025 05:26:06 GMT+0600 (Bangladesh Standard Time)
console.log(Date()); // current date and time

// 2025-03-20T23:26:06.793Z
console.log(new Date()); // current date and time
console.log(new Date().toString(), '\n');


// get
const date = new Date('2062-10-19');
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

// set
const date1 = new Date();
console.log(date1);
date1.setFullYear(2022);
console.log(date1, '\n');


/**
 * ## toLocaleString()
 * - GB: day, month, year  ------- Great Britain
 * - US: month, day, year  ------- United States
 */
console.log(date.toLocaleString('en-GB'));
console.log(date.toLocaleString('en-US'));