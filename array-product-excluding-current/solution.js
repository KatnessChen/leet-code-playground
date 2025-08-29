// Array Product Excluding Current
// Write your solution here
function arrayProductExcludingCurrent(numbers) {
  const zeroIndex = numbers.indexOf(0); // -1
  const lastZeroIndex = numbers.lastIndexOf(0); // -1

  // init result array -> [0, 0, 0]
  const result = Array.from({ length: numbers.length }).fill(0);

  if (zeroIndex > -1 && lastZeroIndex > -1 && zeroIndex !== lastZeroIndex) {
    // case 1: has more than one zeros -> return [0, 0, ...]
    // do nothing
  } else if (zeroIndex > -1) {
    // case 2: has one zero
    const allPrd = numbers.reduce((acc, cur) => {
      if (cur !== 0) {
        acc = acc * cur;
      }

      return acc;
    }, 1);

    result[zeroIndex] = allPrd;
  } else {
    // case 3: no zeros
    const allPrd = numbers.reduce((acc, cur) => acc * cur, 1); // 6

    // loop the number array, divide current number by allPrd -> [6, 3, 2]
    for (let i = 0; i < numbers.length; i++) {
      // i = 1
      result[i] = allPrd / numbers[i];
    }
  }

  return result;
}

module.exports = arrayProductExcludingCurrent;
