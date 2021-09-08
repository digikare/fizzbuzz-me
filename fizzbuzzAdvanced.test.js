const fizzbuzzAdvanced = require("./fizzbuzzAdvanced");

it("should return an empty tuple list for 0...5", () => {
  const result = fizzbuzzAdvanced([0, 1, 2, 3, 4, 5], [3, "Fizz"], [5, "Buzz"]);

  expect(result).toEqual([]);
});

it("should return an one tuple for 0...6", () => {
  const result = fizzbuzzAdvanced(
    [0, 1, 2, 3, 4, 5, 6],
    [3, "Fizz"],
    [5, "Buzz"]
  );

  expect(result).toEqual([[5, 6]]);
});

it("should return the correct list of continuous tuple for 0...100", () => {
  const range = Array.from(new Array(101).keys());
  const result = fizzbuzzAdvanced(range, [3, "Fizz"], [5, "Buzz"]);

  expect(result).toEqual([
    [9, 10],
    [24, 25],
    [39, 40],
    [54, 55],
    [69, 70],
    [84, 85],
    [99, 100],
    [5, 6],
    [20, 21],
    [35, 36],
    [50, 51],
    [65, 66],
    [80, 81],
    [95, 96],
  ]);
});
