const averageFunc = require('./average')


describe('should return average of a list', () => {
    it('it shoud return 5 if list is [0,1,2,.. , 7,8, 9 ,10] ', () => {
        const list = [0,1, 2, 3, 4,  6, 7, 8, 9, 10]
        expect(averageFunc.average(list)).toStrictEqual(5)
    })   
})