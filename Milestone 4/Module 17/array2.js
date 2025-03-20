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