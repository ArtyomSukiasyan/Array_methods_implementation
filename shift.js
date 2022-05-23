Array.prototype.customShift = function () {
  const firstEl = this[0];

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  this.length = this.length - 1;

  return firstEl;
};
