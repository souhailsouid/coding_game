const func = require('./findSmallestInterval')

describe('should create intervals', () => {
    it('it should firstly sort array', () => {
        const sort = [1, 2, 4, 6, 8]
        expect(func.sortArray([1, 4, 2, 8, 6])).toStrictEqual(sort)
    })
    it('it should slice elements in several intervals, [1, 2 ] will become [[1, 2]]', () => {
        const result = [[1, 2]]
        expect(func.createIntervals([1, 2])).toStrictEqual(result)
    })
    it('it should slice elements in several intervals, [1, 2, 3 ] will become [[1,2],[2,3]]', () => {
        const result = [[1, 2], [2, 3]]
        expect(func.createIntervals([1, 2, 3])).toStrictEqual(result)
    })
    it('it should slice elements in several intervals, [1,2, 3, 4] will become [[1,2],[2,3][3,4]]', () => {
        const result = [[1, 2], [2, 3], [3, 4]]
        expect(func.createIntervals([1, 2, 3, 4])).toStrictEqual(result)
    })
    it('it should slice elements in several intervals, [1, 5, 10, 12, 15] will become [[1,5],[5,10],[10,12],[12,15]]', () => {
        const result = [[1, 5], [5, 10], [10, 12], [12, 15]]
        expect(func.createIntervals([1, 5, 10, 12, 15])).toStrictEqual(result)
    })
    it('it should slice elements in several intervals, [1, 6, 4, 8, 2] will become [[1,6],[6,4],[4,8],[8,2]]', () => {
        const sort = [1,2, 4, 6, 8]
        const result = [[1,2 ], [2, 4], [4, 6], [6, 8]]
        expect(func.createIntervals([1, 6, 4, 8, 2])).toStrictEqual(result)
    })
})
describe('should return the difference between two number for each intervals', () => {
    it('it should calculate each interval  ', () => {
        const result = [5, 1 ]
        expect(func.calculateEachIntervals([2, 8, 7])).toStrictEqual(result)
    })
    it('it should calculate each interval  ', () => {
        const result = [1,2, 2, 2]
        expect(func.calculateEachIntervals([1,6,4,8,2])).toStrictEqual(result)
    })
    it('it should calculate each interval', () => {
        const result = [4, 5, 1, 4]
        expect(func.calculateEachIntervals([1, 5, 10, 11, 15])).toStrictEqual(result)
    })
})
describe('should return the smallest interval (value) ', () => {
   
// Steps
    //  sort = [1,2,4,6,8]
    //  intervals = [[1,2 ], [2, 4], [4, 6], [6, 8]]
    //  value of each intervals = [1 , 2, 2, 2]
    //  find smallest value = 1 , indexof 0
 
 
    it('it should finally return  the smallest interval ', () => {
            expect(func.findSmallestInterval([1, 6, 4, 8, 2])).toStrictEqual([1,2])
    })
    it('it should finally return  the interval ', () => {
        expect(func.findSmallestInterval([1, 5, 10, 12, 15])).toStrictEqual([10, 12])
    })
    
})


    //     const numbers = [1, 5, 10, 12, 15]
        // ecart [4, 5, 1, 4]
        // [1,5,10,12, 15]
        // [1,5][5, 10] [10, 11] [11, 15]
        // 1.  trier 
        // 2. 1 5 = 4
        // 5 10 = 5 no save
        // 10 12 = 2 save
        // 12 15 = 3 no save

        // parcourir 2 element par 2
        //  calc differenet entre les 2
        //  calc egal 1 break
        // expect(func.findSmallestInterval(numbers)).toStrictEqual([1,2])
    // })
    // [1,5,10,11,15]
    
