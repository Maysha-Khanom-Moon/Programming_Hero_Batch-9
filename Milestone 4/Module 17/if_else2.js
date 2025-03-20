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


// Nested if-else
const money = 500;

if(money > 300) {
    console.log('bro you are rich!!!');
}
else {
    if(money > 100) {
        console.log('tui gorib o na borolok o na');
    }
    else {
        if(money > 0) {
            console.log('dosto kola kha. calcium bara');
        }
        else {
            console.log('tui amr bondhu nah');
        }
    }
}