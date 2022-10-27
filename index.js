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

// 8 kyu - pick a set of first elements

function first(arr, n = 1) {
    return n === 0 ? [] : arr.slice(0, n)
}

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first(arr))

// 8 kyu - Return the day

function whatday(num) {

    switch (num) {
        case 1:
            return 'Sunday'
        case 2:
            return 'Monday'
        case 3:
            return 'Tuesday'
        case 4:
            return 'Wednesday'
        case 5:
            return 'Thursday'
        case 6:
            return 'Friday'
        case 7:
            return 'Saturday'
        default:
            return 'Wrong, please enter a number between 1 and 7'
    }
}

// 8 kyu - How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((acc, el) => acc + el, 0) / classPoints.length
}

// 8 kyu - Count the Monkeys!

function monkeyCount(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr[i-1] = i
    }
    return arr
}