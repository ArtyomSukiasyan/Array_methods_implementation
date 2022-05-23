Array.prototype.customPop = function () {
  const lastEl = this[this.length - 1];
  this.length = this.length - 1;

  return lastEl;
};
