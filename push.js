Array.prototype.customPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }

  return this.length;
};

const a = [1, 2, 3, 4];

console.log(a.customPush([2, 3], 2, 3));
console.log(a);
