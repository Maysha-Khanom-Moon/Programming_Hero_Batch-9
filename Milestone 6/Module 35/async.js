// synchronous: follow the sequence and wait for other to finish
// async: don't follow the sequence and don't wait for other

console.log(1);
doSomething();
console.log(3);

// setTimeout --> don't execute the function immediately
setTimeout(doSomething, 1000);
console.log(4);
setTimeout(doSomething2);

function doSomething() {
    console.log(2);
}
function doSomething2() {
    console.log(6);
}

/**
 * ------ PROMISE -------
 * - pending --> waiting
 * - resolve --> fulfilled
 * - reject --> rejected
 * 
 */

const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random()
        if(success <= 0.5) {
            resolve('success');
        }
        else {
            reject('failed');
        }
    })
}
myLoader()
.then(res => console.log(res))
.catch(err => console.log(err));