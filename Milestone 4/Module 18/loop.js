/**
 * LOOPING TECHNIQUE
 * 1. for loop
 * 2. while loop
 * 3. do-while
 * 4. for-of: array loop
 * 5. for-in: object loop
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