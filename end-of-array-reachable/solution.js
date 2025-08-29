// End of Array Reachable
// Write your solution here
// ex: [0, 0, 100, 0, 0, 5] -> false
// ex: [3, 6, 0, 0, 0, 2, 0, 1, 98, 5] -> true

function endOfArrayReachable(numbers) {
  // `credit` represents the maximum number of steps we can still move forward.
  // We iterate through the array, and at each position, we update our credit.
  // The new credit is the larger of:
  //   1. The current credit minus 1 (since we used one step to get to the current position).
  //   2. The value at the current position (which could be a new, larger number of steps).
  // If credit becomes 0 before we reach the last element, it means we are stuck.

  let result = true;
  let credit = numbers[0];

  for (let pointer = 0; pointer < numbers.length; pointer++) {
    const number = numbers[pointer];

    credit = Math.max(credit - 1, number);

    // means cannot move forward anymore && have not yet reached the end
    // break the loop immediately and return false
    if (credit === 0 && pointer < numbers.length - 1) {
      result = false;

      break;
    }
  }

  return result;
}

module.exports = endOfArrayReachable;
