const mixedArray = [12, 'Alahbad', true, 45.566];
console.log(mixedArray);

// length
console.log("Length:", mixedArray.length);

// push: add new value at the end
mixedArray.push('new value');

// add multiple value
mixedArray.push(12, 'new value1', 'new value2');
console.log(mixedArray);

// pop: remove last value
mixedArray.pop();
mixedArray.pop();
console.log(mixedArray);

// includes: check value is exist or not
console.log('\nincludes: ');
console.log(mixedArray.includes('new value')); // true
console.log(mixedArray.includes('new value1')); // false


// indexing: start from 0
console.log('\nindexing:');
console.log(mixedArray[0]); // 12

/**
 * indexOf(x): return index of x
 * lastIndexOf(x): return last index of x
 * ---> if x is not exist return -1
 */
console.log(mixedArray.indexOf(true)); // 2
console.log(mixedArray.lastIndexOf(12)); // 5

// indexOf(x, y): return index of x starting search from index-y
console.log(mixedArray.indexOf(true, 2)); // 2
console.log(mixedArray.indexOf(true, 3)); // -1


// isArray: check array or not
console.log("\nisArray: ");
console.log(Array.isArray(mixedArray)); // true
console.log(Array.isArray('My name is Khan')); // false


// shift: remove first value
console.log("\nshift: ");
console.log(mixedArray.shift()); // 12
console.log(mixedArray);


// unshift: add new value at the start
console.log("\nunshift: ");
mixedArray.unshift('new value');
console.log(mixedArray);

mixedArray.unshift(true, false);
console.log(mixedArray);


mixedArray.shift();
mixedArray.shift();
console.log(mixedArray);


// reverse: reverse the array   
console.log("\nreverse: ");
mixedArray.reverse();
console.log(mixedArray);


/**
 * LOOPING TECHNIQUE
 * 1. for loop
 * 2. while loop
 * 3. do-while
 * 4. for-of: array loop
 * 5. for-in: object loop
 */
// reverse (using unshift)
let rev = [];
for (const i of mixedArray) {
    rev.unshift(i);
}
console.log(rev);

// reverse indexing
rev = []
for(let i = mixedArray.length - 1; i >= 0; i--) {
    rev.push(mixedArray[i]);
}
console.log(rev);