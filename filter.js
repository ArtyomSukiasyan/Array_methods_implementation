Array.prototype.customFilter = function (cb) {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      results.push(this[i]);
    }
  }

  return results;
};
