function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function increment(n) {
    n += 1
    return n
}

function decrement(n) {
    n--
    return n
}

function makeInt(n) {
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    return parseFloat(n)
}

//let x = 1
//let y = 2

//x + y // non desrtructive because the values of x and y don't chagne
//1 + 3
//1 + x

//x++ //increments and saves into the same variable
//x += 2 // add 2 to x but also save that new value into x

//function add(x, y){
    //using x and y instead of real numbers like 1 or 2
//}
//add(1,3)