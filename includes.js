Array.prototype.customIncludes = function (el, indexFrom) {
  for (let i = indexFrom; i < this.length; i++) {
    if (this[i] === el) {
      return true;
    }
  }

  return false;
};
