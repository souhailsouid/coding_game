const func = require('./optimisated')

describe('should create intervals', () => {
    it('it should firstly sort array', () => {
        const sort = [1, 2, 4, 6, 8]
        expect(func.sortArray([1, 4, 2, 8, 6])).toStrictEqual(sort)
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

