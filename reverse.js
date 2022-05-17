Array.prototype.customReverse = function () {
  let left = 0;
  let right = this.length - 1;

  while (left < right) {
    let temp = this[left];
    this[left] = this[right];
    this[right] = temp;

    left++;
    right--;
  }

  return this;
};
