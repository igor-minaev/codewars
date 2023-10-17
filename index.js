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


// 7 kyu - List Filtering
function filter_list(l) {
    return l.filter(el => typeof el === 'number')
}

console.log(filter_list([1, 2, 'a', 'b']))


// 7 kyu - Exes and Ohs
function XO(str) {
    const arr = str.toLowerCase().split('')
    let countO = 0
    let countX = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            countO += 1
        }
        if (arr[i] === 'x') {
            countX += 1
        }
    }
    return countO === countX
}


// 7 kyu - You're a square!

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n)); // fix me
}

// 7 kyu - Odd or Even?
function oddOrEven(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum % 2 === 0 ? 'even' : 'odd'

}

// 7 kyu - Sort array by string length
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
};


// 7 kyu - Count the divisors of a number
function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count += 1
    }
    return count
}

// 7 kyu - Shortest Word
function findShort(s) {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}

// 7 kyu - Jaden Casing Strings
String.prototype.toJadenCase = function () {
    return this.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
};


// 7 kyu - Find the next perfect square!
function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return Math.pow(Math.sqrt(sq) + 1, 2)
    }
    return -1;
}

// 7 kyu - Ones and Zeros

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
};

console.log(binaryArrayToNumber([0, 0, 0, 1]))
console.log(binaryArrayToNumber([0, 0, 1, 0]))
console.log(binaryArrayToNumber([1, 0, 1, 1]))

// 7 kyu - Reverse words
function reverseWords(str) {
    return str.split(" ").map(w => w.split('').reverse().join('')).join(' ')
}

console.log(reverseWords('double  spaced  words'))


var number = function (array) {
    //your awesome code here
}

// 7 kyu - Reverse a number in any base

function reverseNumber(n, b) {
    // Input n and b are provided as BigInt values
    let num = n.toString(2)

    return num
}

reverseNumber(12, 2)


const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

const isEmpty = (obj) => {
    for (let key in obj) {
        return false
    }
    return true
}

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// let salaries = {
//
// }
let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}

console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}
multiplyNumeric(menu);

console.log(menu)

// 8 kyu - Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
    return bool ? 'Yes' : 'No'
}

console.group(boolToWord(true), boolToWord(false))

// 8 kyu - Count by X

// function countBy(x, n) {
//     let result = [];
//     for (let i = x; i <= x * n; i += x) {
//         result.push(i)
//     }
//     return result;
// }
//
// console.log(countBy(1, 10))
// console.log(countBy(2, 5))


// 8 kyu - Remove exclamation marks

// function removeExclamationMarks(s) {
//     return s.replace(/!/g,'');
// }
//
// console.log(removeExclamationMarks('Hello World!!'))






