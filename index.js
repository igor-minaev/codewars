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
        arr[i - 1] = i
    }
    return arr
}

// 8 kyu - Grasshopper - Grade book


function getGrade(s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3
    if (score < 60) {
        return 'F'
    } else if (score < 70) {
        return 'D'
    } else if (score < 80) {
        return 'C'
    } else if (score < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

// 7 kyu - Square Every Digit

function squareDigits(num) {
    return Number(num.toString().split('').map(el => el * el).join(''))
}

console.log(squareDigits(45))

// 7 kyu - Descending Order


function descendingOrder(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

console.log(descendingOrder(3819))

// 7 kyu - Get the Middle Character

function getMiddle(s) {
    let middleLength = Math.floor(s.length / 2)
    if (s.length % 2 === 0) {
        return s.slice(middleLength - 1, middleLength + 1)
    } else {
        return s.slice(middleLength, middleLength + 1)
    }
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))

// 7 kyu - The highest profit wins!

/*function minMax(arr) {
    const arrSort = arr.sort((a, b) => a - b)
    if (arrSort.length === 1) {
        return [arrSort[0], arrSort[0]]
    } else {
        return [arrSort[0], arrSort[arrSort.length - 1]]; // fix me!
    }
}*/

function minMax(arr) {
    return [Math.min(...arr), Math.min(...arr)]
}


// 7 kyu - Friend or Foe?

function friend(friends) {
    return friends.filter(fr => fr.length === 4)
}

// 8 kyu - DNA to RNA Conversion

function DNAtoRNA(dna) {
    return dna.split('').map(el => el === 'T' ? el = 'U' : el).join('')
}

console.log(DNAtoRNA("GCAT"))


// 8 kyu - L1: Set Alarm
function setAlarm(employed, vacation) {
    return employed && !vacation
}

// 8 kyu - Quarter of the year

const quarterOf = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else {
        return 4
    }
}

// 8 kyu - Parse nice int from char problem

function getAge(inputString) {
// return the girl's correct age as an integer. Happy coding :)
    return parseInt(inputString)
}


var humanYearsCatYearsDogYears = function (humanYears) {
    // Your code here!
    return [0, 0, 0].map(el => el = humanYears);
}

console.log(humanYearsCatYearsDogYears(3))


// 7 kyu - List Filtering
function filter_list(l) {
    return l.filter(el=>typeof el === 'number')
}

console.log(filter_list([1,2,'a','b']))

