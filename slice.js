Array.prototype.customSlice = function (startNum = 0, endNum = this.length) {
  if (startNum < 0) {
    startNum = this.length + startNum;
  }

  if (endNum < 0) {
    endNum = this.length + endNum;
  }

  const slicedArr = [];

  for (let i = startNum; i < endNum; i++) {
    slicedArr[slicedArr[length]] = this[i];
  }

  return slicedArr;
};
