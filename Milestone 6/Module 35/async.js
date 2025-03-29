// synchronous follow the sequence and wait for other to finish

console.log(1);
doSomething();
console.log(3);

function doSomething() {
    console.log(2);
}