const func = require('./findSmallestInterval')

describe('should return the smallest interval in array', () => {
    it('it should calculate interval ', () => {
        const numbers = [2,8, 7]
        expect(func.findSmallestInterval(numbers)).toStrictEqual([7,8])
    })
    // it('it should return [1,2] if the array is equals [1,6,4,8,2]', () => {
    //     const numbers = [1,6,4]
    //     expect(func.findSmallestInterval(numbers)).toStrictEqual([[1,6][6,4]])
    // })
    // it('it should return [10,11] if the array is equals [1,5,10,11,15]', () => {
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
    
})