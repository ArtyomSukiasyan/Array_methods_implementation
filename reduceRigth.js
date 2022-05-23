Array.prototype.customReduceRight = function (cb, initialValue) {
  let i = this.length - 1;

  if (initialValue === undefined) {
    initialValue = this[this.length - 1];
    i = this.length - 2;
  }

  for (; i >= 0; i--) {
    initialValue = cb(initialValue, this[i]);
  }

  return initialValue;
};

console.log([1, 2, 3, 4, 5].customReduceRight((acc, val) => acc + val));
console.log([1, 2, 3, 4, 5].reduceRight((acc, val) => acc + val));
