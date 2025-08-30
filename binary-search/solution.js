// binary search
// Write your solution here
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
function binarySearch(numbers, target) {
  // initiate pointers
  // low represent the smallest index and high represent the biggest index
  let low = 0;
  let high = numbers.length - 1;

  while (low <= high) {
    // Halve the array each time to get closer to the target in a log N manner
    let mid = Math.floor((high + low) / 2);
    let midValue = numbers[mid];

    if (target === midValue) {
      // Target found
      return mid;
    } else if (target > midValue) {
      // Target is in the right half
      low = mid + 1;
    } else {
      // Target is in the left half
      high = mid - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
