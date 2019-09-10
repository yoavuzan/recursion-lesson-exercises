const ex = require('../../src/app')
const findFactorial = ex.findFactorial.bind(ex)
console.log(findFactorial(10))

describe('Exercise 1', function () {
    it('The function should return the factorial of the argument that has been passed to it', function () {
        const param = 10
        const expectedResult = 3628800
        const factorial = jest.fn(findFactorial)
        const result = factorial(param)

        expect(result, `the function did not return the correct value, when passing ${param} to the function expected ${expectedResult} got  ${result}`).toBe(expectedResult)
        expect(factorial).toHaveBeenCalledTimes( param - 1 )
    })
} )