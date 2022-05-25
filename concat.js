Array.prototype.customConcat = function () {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    res[i] = this[i];
  }

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (let j = 0; j < arguments[i].length; j++) {
        res[res.length] = arguments[i][j];
      }
    } else {
      res[res.length] = arguments[i];
    }
  }

  return res;
};
