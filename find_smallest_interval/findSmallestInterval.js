function sortArray(array) {
    array.sort( (a, b) => {
        return a - b;
    })
    return array
}
function createIntervals(numbers) {
    const createIntervals = []
    numbers = sortArray(numbers)
    for (let i = 0; i < numbers.length - 1; i++) {
        const nextNumber = numbers[i + 1]
        const createAnInterval = [numbers[i], nextNumber]
        createIntervals.push(createAnInterval)
    }
    return createIntervals
}
function calculateEachIntervals(numbers) {
    const array = createIntervals(numbers)
    const calculateEachIntervals = []
    for (let i = 0; i < array.length; i++) {
        calculateEachIntervals.push(array[i][1] - array[i][0] )
    }
    return calculateEachIntervals
}

function findIndexOfSmallestValueInArray(numbers) {
    const array = calculateEachIntervals(numbers)
    Array.min = function( numbers ){
        return Math.min.apply( Math, numbers );
    };
    smallestValue = Array.min(array) 
   return array.indexOf(smallestValue) 
}

function findSmallestInterval(numbers) {
    return createIntervals(numbers)[findIndexOfSmallestValueInArray(numbers)]

}

exports.sortArray = sortArray
exports.createIntervals = createIntervals
exports.calculateEachIntervals = calculateEachIntervals
exports.findIndexOfSmallestValueInArray = findIndexOfSmallestValueInArray
// exports.findIndexOfSmallestValue = findIndexOfSmallestValue
exports.findSmallestInterval = findSmallestInterval

