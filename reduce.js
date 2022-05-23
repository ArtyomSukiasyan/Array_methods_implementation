Array.prototype.customReduce = function (cb, initialValue) {
  let i = 0;

  if (initialValue === undefined) {
    initialValue = this[0];
    i = 1;
  }

  for (; i < this.length; i++) {
    initialValue = cb(initialValue, this[i]);
  }

  return initialValue;
};
