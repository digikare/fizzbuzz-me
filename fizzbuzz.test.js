const fizzbuzz = require("./fizzbuzz");

it("should return 'Fizz' for any integer multiple of 3", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

it("should return 'Buzz' for any integer multiple of 5", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

it("should return 'Fizzbuzz' for any integer multiple of 3 and 5", () => {
  expect(fizzbuzz(15)).toBe("Fizzbuzz");
});

it("should return non fizzbuzz related integers as a string", () => {
  expect(fizzbuzz(7)).toBe("7");
});

it("should return 0 as a string", () => {
  expect(fizzbuzz(0)).toBe("0");
});
