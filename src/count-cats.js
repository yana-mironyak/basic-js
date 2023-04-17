const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let newArr = matrix.flat();
  let res = 0;
  newArr.forEach((e) => {
    if (e == "^^") res++;
  });
  return res ? res : 0;
}

module.exports = {
  countCats,
};
