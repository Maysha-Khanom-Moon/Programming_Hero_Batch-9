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
 * for(initial, checking, update) {
 *      .. statement ..
 * }
 */
for(let num = 0; num < 5; num++) {
    console.log(num);
}

// 2.
num = 1;
while(num <= 10) {
    console.log(num);

    num++;
}