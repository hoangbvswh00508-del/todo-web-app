
function hello() {
    console.log("to-do List app installed succesfully")
}

function sum(a, b) {
    let result = a + b;
    return result;
}

hello();
let sum2num = sum(2, 1);
console.log("Sum 2 and 1 are: " + sum2num);

function inMauSo() {
    for ( let i = 1; i <= 5; i++) {
        if (i % 2 === 0) {
            console.log(`[Done] The work number ${i}: Check the code.`);
        } else {
            console.log(`[Done] The work number ${i}: write the document`);
        }
    }
}
inMauSo();