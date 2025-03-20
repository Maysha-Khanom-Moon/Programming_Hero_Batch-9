const mixedArray = [12, 'Alahbad', true, 45.566];
console.log(mixedArray);

// length
console.log("Length:", mixedArray.length);

// push: add new value at the end
mixedArray.push('new value');

// add multiple value
mixedArray.push('new value1', 'new value2');
console.log(mixedArray);

// pop: remove last value
mixedArray.pop();
mixedArray.pop();
console.log(mixedArray);

// includes: check value is exist or not
console.log(mixedArray.includes('new value')); // true
console.log(mixedArray.includes('new value1')); // false