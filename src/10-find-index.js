/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
const findIndex = (array, value) => {
  let start = 0;
  let finish = array.length - 1;
  while (finish - start > 1) {
    const mid = Math.round((start + finish) / 2);
    if (array[mid] > value) {
      finish = mid;
    } else {
      start = mid;
    }
  }
  return array[start] === value ? start : finish;
};

module.exports = findIndex;
