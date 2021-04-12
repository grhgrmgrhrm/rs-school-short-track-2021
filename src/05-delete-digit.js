/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString();
  let number;
  const numArr = [];
  for (let i = 0; i < arr.length; i++) {
    number = arr.replace(arr[i], '');
    numArr.push(number);
  }
  let result = numArr.sort((a, b) => a - b);
  result = result[result.length - 1];
  return +result;
}

module.exports = deleteDigit;
