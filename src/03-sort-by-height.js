/**
 * Given an newarr with heights, sort them except if the value is -1.
 *
 * @param {newarr} arr
 * @return {newarr}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newarr = arr;
  for (let i = 0; i < newarr.length - 1; i++) {
    if (newarr[i] !== -1) {
      let minIndex = i;
      for (let j = i + 1; j < newarr.length; j++) {
        if (newarr[j] !== -1) {
          if (newarr[j] < newarr[minIndex]) {
            minIndex = j;
          }
        }
      }
      [newarr[i], newarr[minIndex]] = [newarr[minIndex], newarr[i]];
    }
  }
  return newarr;
}

module.exports = sortByHeight;
