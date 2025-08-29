// End of Array Reachable
// Write your solution here
// ex: [0, 0, 100, 0, 0, 5] false
// ex: [3, 6, 0, 0, 0, 2, 0, 1, 98, 5]

function endOfArrayReachable(numbers) {
  // initiate a `credit` variable, which means the most steps that is able to move
  // loop the numbers array
  // when encounter zero, minus the credit by one
  // when encounter number other than zero, add credit by Math.max(number, credit)
  // when credit = 0 & not reach the end of the array yet, return false
  // otherwise, return true

  let result = true;

  let credit = numbers[0];

  for (let pointer = 0; pointer < numbers.length; pointer++) {
    const number = numbers[pointer];

    credit = Math.max(credit - 1, number);

    // means cannot move forward && not reached the end yet
    if (credit === 0 && pointer < numbers.length - 1) {
      result = false;

      break;
    }
  }

  return result;
}

module.exports = endOfArrayReachable;
