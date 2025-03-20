/**
 * MULTI_LEVEL_CONDITION
 * 
 * if(condition1) {
 *      // condition1 true
 * }
 * else if(condition2) {
 *      // condition1 false
 *      // condition2 true
 * }
 * else {
 *      // condition1 false
 *      // condition2 false
 * }
 */

const price = 4999;

if(price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmout = price - discount;
    console.log(payAmout);
}
else if(price >= 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmout = price - discount;
    console.log(payAmout);
}
else {
    console.log(price);
}