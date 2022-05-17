Array.prototype.customIndexOf = function (val, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] == val) {
      return i;
    }
  }

  return -1;
};
