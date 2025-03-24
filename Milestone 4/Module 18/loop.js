/**
 * LOOPING TECHNIQUE
 * 1. for loop
 * 2. while loop
 * 3. do-while
 * 4. for-of: array loop (iterates values) --> only iterative array
 * 5. for-in: object loop (iterates keys/ indexes) --> both iterative or non-iterative
 * 6. forEach: array loop (iterates indexes and values) --> only iterative array
 */

/**
 * 1.
 * for(initialization, checking, update) {
 *      .. statement ..
 * }
 */
console.log('for loop: ');
for(let num = 0; num < 5; num++) {
    console.log(num);
}

// 2.
console.log('\nwhile loop: ');
num = 7;
while(num <= 10) {
    console.log(num);

    num++;
}

/**
 * initialization;
 * do {
 *      // statement
 *      update
 * } while(condition);
 * 
 * ==> minimum 1 time it will run
 */
console.log('\ndo-while loop: ');
let i = 10;
do {
    console.log(i);
    i++;
} while(i < 5);

// 4.
console.log('\nfor-of loop: ');
const mixedArray = [12, 'Alahbad', true, 45.566];
for(const i of mixedArray) {
    console.log(i);
}

// 5. 
console.log('\nfor-in loop: ');
for (const i in mixedArray) {
    console.log(i);
}

// 6.
console.log('\nforEach loop: ');
mixedArray.forEach((value, index) => {
    console.log(index, value);
})