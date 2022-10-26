// 8 kyu - Count Odd Numbers below n

function oddCount(n) {
    return Math.floor(n / 2)
}

console.log(oddCount(6))
console.log(oddCount(7))


// 8 kyu - The 'if' function

function _if(bool, func1, func2) {
    return bool ? func1() : func2()
}

// 8 kyu - Power

function numberToPower(number, power) {
    console.info(Math.log2(1024));
    let result = number
    for (let i = 1; i < power; i++) {
        result *= number
    }
    return power === 0 ? 1 : result
}

console.log(numberToPower(4, 2))
console.log(numberToPower(10, 0))

