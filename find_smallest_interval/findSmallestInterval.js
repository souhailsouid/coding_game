function findSmallestInterval(numbers) {
    numbers.sort()
    const findInterval = []
    // [2,8, 7] [2,7,8]  [2,7] [ 7, 8]
    const min = Math.min.apply(null, numbers)
    const max = Math.max.apply(null, numbers)
    const nextArray =  numbers.filter((number) => number !== numbers[0])
    console.log(nextArray)
    numbers.map((number) => number ).forEach((previousNumber, index) => {
        nextArray.forEach((nextNumbers,index) => {
            if (previousNumber !== nextNumbers && previousNumber < nextNumbers ){
                const interval = nextNumbers - previousNumber  
                    findInterval.push([previousNumber, nextNumbers])
                
            }
        })
    })

     

  return findInterval
    // numbers.pop() - numbers.shift()
        
}
// return data.reduce(
//     (unique, item) => unique.includes(item) ? unique : [...unique, item], []
// ) 
exports.findSmallestInterval = findSmallestInterval
// const numbers = [1,6,4]
// [1,6]