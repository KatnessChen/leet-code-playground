// Most Common Elements
// Write your solution here
function mostCommonElements(numbers, k) {
  // a object to record the frequency: <frequency: numbers[]>
  const frequencyMap = {
    // 7: 3
    // 8: 2
    // 9: 3
  };

  for (const n of numbers) {
    if (frequencyMap[n]) {
      frequencyMap[n] += 1;
    } else {
      frequencyMap[n] = 1;
    }
  }

  return Object.entries(frequencyMap)
    .sort((obj1, obj2) => {
      const [_key1, value1] = obj1;
      const [_key2, value2] = obj2;

      return value2 - value1;
    })
    .slice(0, k)
    .reduce((acc, cur) => {
      const [key, _] = cur;
      acc.push(Number(key));
      return acc;
    }, []);
}

module.exports = mostCommonElements;
