// Calculates the product of all elements in an array except for the element at the current index.
function arrayProductExcludingCurrent(numbers) {
  const zeroIndex = numbers.indexOf(0);
  const lastZeroIndex = numbers.lastIndexOf(0);

  // Initialize the result array with zeros.
  const result = new Array(numbers.length).fill(0);

  // Case 1: If there are two or more zeros, the result is an array of all zeros.
  // The initialized array is already correct, so we can return it.
  if (zeroIndex !== -1 && zeroIndex !== lastZeroIndex) {
    return result;
  }

  // Case 2: If there is exactly one zero.
  if (zeroIndex !== -1) {
    // Calculate the product of all non-zero elements.
    const productOfOthers = numbers.reduce((acc, cur) => {
      return cur === 0 ? acc : acc * cur;
    }, 1);
    // The result at the index of the zero is the product of all other elements.
    result[zeroIndex] = productOfOthers;
    return result;
  }

  // Case 3: If there are no zeros.
  // Calculate the product of all elements.
  const totalProduct = numbers.reduce((acc, cur) => acc * cur, 1);

  // For each element, the result is the total product divided by the element itself.
  for (let i = 0; i < numbers.length; i++) {
    result[i] = totalProduct / numbers[i];
  }

  return result;
}

module.exports = arrayProductExcludingCurrent;
