// magicSquare.js

const s = [ [ 4, 5, 8 ], [ 2, 4, 1 ], [ 1, 9, 7 ] ]

function formingMagicSquare(s) {
    // Complete this function
    const sums = findSums(s)
    const rowSums = sums[0]
    const columnSums = sums[1]
    let counter = 0


    function bumpUp() {
        let lowestRowIndex = findLowestIndex(rowSums)
        let lowestColumnIndex = findLowestIndex(columnSums)
        columnSums[lowestColumnIndex]++
        rowSums[lowestRowIndex]++
        counter++
        console.log(columnSums, rowSums)      
    }

    function bumpDown() {
        let highestRowIndex = findHighestIndex(rowSums)
        let highestColumnIndex = findHighestIndex(columnSums)
        columnSums[highestColumnIndex]--
        rowSums[highestRowIndex]--
        counter++
        console.log(columnSums, rowSums)      
    }
    
    console.log(columnSums, rowSums)      
    while (!rowSums.every(equal15) && !columnSums.every(equal15)){

        if (rowSums.find((el) => el < 15)) {
            bumpUp()       
        }
        if (rowSums.find((el) => el > 15)) {
            bumpDown()
        }

    }   

    return counter
}

function equal15(el) {
    return el == 15
}

function findLowestIndex(ar) {
    let lowest = 1000
    let lowestIndex = 0
    for (let i=0; i < ar.length; i++) {
        if (ar[i] < lowest) {
            lowest = ar[i]
            lowestIndex = i
        }
    }
    return lowestIndex
}

function findHighestIndex(ar) {
    let highest = 0
    let highestIndex = 0
    for (let i=0; i < ar.length; i++) {
        if (ar[i] > highest) {
            highest = ar[i]
            highestIndex = i
        }
    }
    return highestIndex
}

function findSums(s) {
    let sums = []
    let rowSums = s.map((row) => {
        return row.reduce((el, next) => {
            return el + next
        })
    })
    let columnSums = [0, 0, 0];
    for (i=0; i < s.length; i++) {
        columnSums[i] 
            += s[0][i]
            += s[1][i]
            += s[2][i]
    }
    sums.push(rowSums, columnSums)
    return sums
}

console.log(formingMagicSquare(s))