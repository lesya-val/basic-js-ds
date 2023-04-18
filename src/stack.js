const { NotImplementedError } = require('../extensions/index.js');
const {assert} = require("chai");
class Stack {
  constructor() {
    this.stack = [];
  }
  
  push(item) {
    this.stack.push(item);
  }
  
  pop() {
    return this.stack.pop();
  }
  
  peek() {
    return this.stack[this.stack.length - 1];
  }
}
module.exports = {
  Stack
};
