/**
 * Finds the maximum product of a contiguous subarray within a given array of numbers.
 * This solution uses a dynamic programming approach.
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number} The maximum product of a contiguous subarray.
 */
function maximumProductInContiguousArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  // Initialize `maxSoFar` and `minSoFar` with the first element.
  // `maxSoFar` tracks the maximum product of a subarray ending at the current position.
  // `minSoFar` tracks the minimum product, which is crucial because a negative number
  // multiplied by a minimum (negative) product can become a new maximum.
  let maxSoFar = numbers[0];
  let minSoFar = numbers[0];
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];

    // When we encounter a negative number, the roles of max and min product are swapped.
    // A temporary variable is needed to hold the old maxSoFar value before it's updated.
    const tempMax = Math.max(current, maxSoFar * current, minSoFar * current);
    minSoFar = Math.min(current, maxSoFar * current, minSoFar * current);
    maxSoFar = tempMax;

    // Update the overall result if the new max product is greater.
    result = Math.max(result, maxSoFar);
  }

  return result;
}

module.exports = maximumProductInContiguousArray;
