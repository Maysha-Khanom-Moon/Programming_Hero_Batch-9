/**
 * TERNARY OPERATOR --> three parts
 * 
 *  condition ? // when true : // when false;
 */

const age = 20;
// normal if-else
if(age >= 18) {
    console.log('you can vote');
}
else {
    console.log('Ghumai thako');
}

// ternary
age >= 18 ? console.log('vote dio') : console.log('Ghumai Thako');


// semi-advanced
let price = 500;
const isLeader = true;
price = isLeader === true ? 0 : price + 100;
console.log(price);


// advanced
price = 1000;
price = isLeader ? (price > 500 ? price / 2 : 0) : price + 100;
console.log(price);