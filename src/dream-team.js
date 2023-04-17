const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    console.log(false);
    return false;
  }

  let res = "";
  const newArr = members.map((e) => {
    if (typeof e == "string") {
      return e.replace(/\s+/g, "").toUpperCase();
    }
  });

  let arrEl = newArr.sort();

  arrEl.forEach((e) => {
    if (typeof e == "string") {
      res += e[0].toUpperCase();
    }
  });
  console.log(res);
  return res;
}

module.exports = {
  createDreamTeam,
};
