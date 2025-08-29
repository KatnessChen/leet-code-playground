const fn = require("./solution");

test("End of Array Reachable", () => {
  expect(fn([2, 0, 3])).toBe(true);
  expect(fn([5])).toBe(true);
  expect(fn([1, 2, 1, 2, 100, 0, 0, 5])).toBe(true);
  expect(fn([1, 0, 0, 0])).toBe(false);
  expect(fn([2, 3, 1, 1, 4])).toBe(true);
  expect(fn([0, 1, 2])).toBe(false);
  expect(fn([1, 0, 0])).toBe(false);
});
