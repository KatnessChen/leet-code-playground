const fn = require("./solution");

test("Array Product Excluding Current", () => {
  expect(fn([1, 2, 3])).toStrictEqual([6, 3, 2]);
  expect(fn([2, 0, 3])).toStrictEqual([0, 6, 0]);
  expect(fn([0, 0, -1, 1])).toStrictEqual([0, 0, 0, 0]);
});
