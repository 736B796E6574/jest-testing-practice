const {
    fizzBuzz
} = require('./script')

describe("testing the fizzbuzz use cases", () => {
    test("does a multiple of 3 return fizz", () => {
        expect(fizzBuzz([3])).toBe('fizz')
    });
    test("does a multiple of 5 return buzz", () => {
        expect(fizzBuzz([5])).toBe('buzz')
    });
    test("does a multiple of 5 and 3 return fizzbuzz", () => {
        expect(fizzBuzz([30])).toBe('fizzbuzz')
    })
    test("does a number that is neither a multiple of 5 or 3 return itself", () => {
        expect(fizzBuzz([2])).toBe("2")
    })
})