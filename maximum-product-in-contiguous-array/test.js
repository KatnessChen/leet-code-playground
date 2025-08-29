const fn = require("./solution");

test("Maximum Product in Contiguous Array", () => {
  // Example test
  // expect(fn(/* input */)).toBe(/* expected output */);
});
test("Maximum Product in Contiguous Array - positive numbers", () => {
  expect(fn([-1, 3, 4, 5])).toBe(60);
});
