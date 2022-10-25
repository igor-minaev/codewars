// 8 kyu - Count Odd Numbers below n

function oddCount(n) {
    return n % 2 === 0 ? n / 2 : Math.floor(n / 2)
}
console.log(oddCount(6))
console.log(oddCount(7))