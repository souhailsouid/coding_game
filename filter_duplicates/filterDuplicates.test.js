const func = require('./filterDuplicates')

describe('should return an array with unique numbers', () => {
    it('should return [1,2,3] instead of [1,2,3,3]', () => {
        const arr = [1, 2, 3, 3]
        expect(func.filterDuplicates(arr)).toStrictEqual([1,2,3])
    })
    it('should return [3,1,2,6,9] instead of [3 ,1, 2, 3, 6, 9]', () => {
        const arr = [3 ,1, 2, 3, 6, 9]
        expect(func.filterDuplicates(arr)).toStrictEqual([3,1,2,6,9])
    })
    it('should return [7,3,6,4,9] instead of  [7,3, 6, 4, 3, 3, 4, 9]', () => {
        const arr = [7,3, 6, 4, 3, 3, 4, 9]
        expect(func.filterDuplicates(arr)).toStrictEqual([7,3,6,4,9])
    })
}) 