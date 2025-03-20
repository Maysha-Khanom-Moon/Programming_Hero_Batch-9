const num1 = [1, 43, 9, 3]
const num2 = [4, 5, 6, 7]

// spread operator (...)
const num3 = [...num1, ...num2]; // merging
console.log('\nspread operator: ');
console.log(num3);

const word = 'hello';
wordArray = [...word];
console.log(wordArray);


// concat: merge array
const num4 = num1.concat(num2);
console.log('\nconcat: ');
console.log(num4);

const num5 = num1.concat(num2, [8, 9, 10]); // multiple arrays
console.log(num5);


// join: convert array to string
console.log('\njoin: ');
console.log(num1.join('-'));
console.log(num1.join(' '));
console.log(wordArray.join(''));


// sort: consider items as a string 
// followed by lexicographical order (ascii values)
console.log('\nsort: ');
num1.sort();
console.log(num1);

/**
 * comparator function(=>): compare two value and decide the order
 * array.sort((a, b) => someExpression);
 * 
 * - someExpression <= 0: no change in order
 * - someExpression > 0: swap
 */
// sort: consider items as a number
console.log(num1.sort((a, b) => a - b)); // ascending
console.log(num1.sort((a, b) => b - a)); // descending


// split: convert string to array
const num6 = '1,2,3,4,5';
const num7 = num6.split(',');
console.log('\nsplit: ');
console.log(num7);


// slice: extract a part of an array
// array.slice(start, upto)
console.log('\nslice: ');
console.log(num1);
console.log(num1.slice(1));
console.log(num1.slice(1, 3));


// splice: remove a part of an array
// array.splice(start, deleteCount)
console.log('\nsplice: ');
console.log(num1);
num1.splice(2, 1);
console.log(num1);