Array.prototype.customJoin = function (seperator = ",") {
  let res = this[0];

  for (let i = 1; i < this.length; i++) {
    res += seperator + this[i];
  }

  return res;
};
