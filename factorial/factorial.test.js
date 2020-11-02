const factorialFunc = require('./factorial')

describe('should return factorial of n', () => {
    it('should return 1 if n equals 1', () => {
        expect(factorialFunc.factorial(1)).toStrictEqual(1)
    })
    it('should return 2 if n equals 2', () => {
        expect(factorialFunc.factorial(2)).toStrictEqual(2)
    })
    it('should return 24 if n equals 4', () => {
        expect(factorialFunc.factorial(4)).toStrictEqual(24)
    })
    it('should return 120 if n equals 5', () => {
        expect(factorialFunc.factorial(5)).toStrictEqual(120)
    })
    it('should return 720 if n equals 6', () => {
        expect(factorialFunc.factorial(6)).toStrictEqual(720)
    })
})