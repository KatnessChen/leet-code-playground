const fn = require("./solution");

describe("Generated test cases for binary search", () => {
  const testCases = [
    // Edge cases
    {
      numbers: [5],
      target: 5,
      expected: 0,
      description: "Array with one element, target exists",
    },
    {
      numbers: [5],
      target: 3,
      expected: -1,
      description: "Array with one element, target does not exist",
    },
    {
      numbers: [-1, 0, 3, 5, 9, 12],
      target: 9,
      expected: 4,
      description: "Target is in the middle",
    },
    {
      numbers: [-1, 0, 3, 5, 9, 12],
      target: -1,
      expected: 0,
      description: "Target is the first element",
    },
    {
      numbers: [-1, 0, 3, 5, 9, 12],
      target: 12,
      expected: 5,
      description: "Target is the last element",
    },
    {
      numbers: [-1, 0, 3, 5, 9, 12],
      target: 2,
      expected: -1,
      description: "Target not in array, but within range",
    },
    {
      numbers: [1, 2, 3, 4, 5],
      target: 0,
      expected: -1,
      description: "Target smaller than all elements",
    },
    {
      numbers: [1, 2, 3, 4, 5],
      target: 6,
      expected: -1,
      description: "Target larger than all elements",
    },
    { numbers: [], target: 5, expected: -1, description: "Empty array" },
    {
      numbers: [1, 3, 5],
      target: 2,
      expected: -1,
      description: "Target between two elements",
    },
  ];

  // Function to generate a sorted array of unique numbers
  const generateSortedArray = (length, min, max) => {
    const set = new Set();
    while (set.size < length) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
  };

  // Generate 90 more random test cases
  for (let i = 0; i < 90; i++) {
    const length = Math.floor(Math.random() * 100) + 1; // Array length 1-100
    const numbers = generateSortedArray(length, -1000, 1000);
    let target;
    let expected;

    // 50% chance the target is in the array
    if (Math.random() > 0.5) {
      const targetIndex = Math.floor(Math.random() * length);
      target = numbers[targetIndex];
      expected = targetIndex;
      testCases.push({
        numbers,
        target,
        expected,
        description: `Random case ${
          i + 1
        }: target exists. Input: numbers=${JSON.stringify(
          numbers
        )}, target=${target}`,
      });
    } else {
      // Target is not in the array
      target = Math.floor(Math.random() * 2000) - 1000;
      // Ensure target is not in the array
      while (numbers.includes(target)) {
        target = Math.floor(Math.random() * 2000) - 1000;
      }
      expected = -1;
      testCases.push({
        numbers,
        target,
        expected,
        description: `Random case ${
          i + 1
        }: target does not exist. Input: numbers=${JSON.stringify(
          numbers
        )}, target=${target}`,
      });
    }
  }

  test.each(testCases)("$description", ({ numbers, target, expected }) => {
    expect(fn(numbers, target)).toBe(expected);
  });
});
