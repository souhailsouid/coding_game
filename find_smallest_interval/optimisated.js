function sortArray(array) {
    array.sort( (a, b) => {
        return a - b;
    })
    return array
}

function findSmallestInterval(numbers) {
    let minimum = null
    numbers = sortArray(numbers)
    for (let i = 0; i < numbers.length - 1; i++) {
        const nextNumber = numbers[i + 1]
        const previousNumber = numbers[i]
        const interval =  nextNumber - previousNumber 
        if (interval === 1) {
            return [ previousNumber, nextNumber]
        }
        if (minimum === null || interval < minimum.interval) {
             minimum = { value: [ previousNumber, nextNumber ], interval }
        }  
    }
    return minimum.value
}

exports.sortArray = sortArray
exports.findSmallestInterval = findSmallestInterval