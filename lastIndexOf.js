Array.prototype.customLastIndexOf = function (
  val,
  fromIndex = this.length - 1
) {
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] == val) {
      return i;
    }
  }

  return -1;
};
