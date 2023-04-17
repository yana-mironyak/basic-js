const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let s11 = s1.split(""),
    s22 = s2.split("");
  let res = 0;
  s11.forEach((e) => {
    if (s22.includes(e)) {
      res++;
      s22.splice(s22.indexOf(e), 1);
      console.log(s22);
    }
  });
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
