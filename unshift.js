Array.prototype.customUnshift = function () {
  const argsLen = arguments.length;

  for (let i = this.length + argsLen - 1; i >= argsLen; i--) {
    this[i] = this[i - argsLen];
  }

  for (let i = 0; i < argsLen; i++) {
    this[i] = arguments[i];
  }

  return this.length;
};
