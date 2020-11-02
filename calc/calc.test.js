const calcFunc = require('./calc')
const array = [0, 1, 2, 3, 4, 5, 3]

describe('it should return sum of integers between an interval', () => {
    it('should return 1 if interval is [0, 1]', () => {
        expect(calcFunc.calc(array, 0, 1)).toStrictEqual(1)
    })
    it('should return 15 if interval is [0, 5]', () => {
        expect(calcFunc.calc(array, 0, 5)).toStrictEqual(15)
    })
    it('should return 0 if interval is [0, 0]', () => {
        expect(calcFunc.calc(array, 0, 0)).toStrictEqual(0)
    })
    it('should return 16 if interval is [0, 6]', () => {
        expect(calcFunc.calc(array, 0, 6)).toStrictEqual(18)
    })
})

