// const : value will not change
// let : value can change
// var : we should not use it

/**
switch(expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if no case matches
    }
 */
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("I love bananas!");
        break;
    case "apple":
        console.log("Apples are great!"); // ✅
        break;
    default:
        console.log("I love all fruits!");
}

// continue: continue the loop
// break: break the loop
console.log('continue:');
i = 10;
while (i <= 20) {
    if(i == 15 || i == 18) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
console.log('\n');