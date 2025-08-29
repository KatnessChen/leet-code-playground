// Maximum Product in Contiguous Array
// Dynamic Programming solution
// numbers: number[]
function maximumProductInContiguousArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;

  let maxProd = numbers[0];
  let minProd = numbers[0];
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const n = numbers[i];

    // Because negative * min could become new max
    const candidates = [n, maxProd * n, minProd * n];
    maxProd = Math.max(...candidates);
    minProd = Math.min(...candidates);
    result = Math.max(result, maxProd);
  }
  return result;
}

module.exports = maximumProductInContiguousArray;
