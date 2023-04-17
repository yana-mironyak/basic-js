const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  makers: [],

  getLength() {
    return this.makers.length;
  },

  addLink(value) {
    if (value !== undefined) {
      this.makers.push(`( ${value} )`);
    } else {
      this.makers.push(`( )`);
    }

    return chainMaker;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position % 1 !== 0 ||
      !this.makers[position - 1]
    ) {
      this.makers.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.makers.splice(position - 1, 1);
      return chainMaker;
    }
  },

  reverseChain() {
    this.makers.reverse();
    return chainMaker;
  },

  finishChain() {
    let maker = this.makers.join(`~~`);
    this.makers.length = 0;
    return maker;
  },
};

module.exports = {
  chainMaker,
};
