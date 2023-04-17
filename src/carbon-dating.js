const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let num = +sampleActivity;
  let rad = Math.ceil(
    Math.log(MODERN_ACTIVITY / num) * (HALF_LIFE_PERIOD / Math.LN2)
  );

  if (
    typeof sampleActivity !== "string" ||
    isNaN(num) ||
    !/^[\d.]+$/.test(sampleActivity) ||
    num <= 0 ||
    num >= MODERN_ACTIVITY
  )
    return false;

  return rad;
}

module.exports = {
  dateSample,
};
