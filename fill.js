Array.prototype.customFill = function (val, startNum = 0, endNum = this.length) {
    if (startNum < 0) {
      startNum = this.length + startNum;
    }

    if (endNum < 0) {
      endNum = this.length + endNum;
    }

    const res = [];
    
    for (let i = startNum; i < endNum; i++) {
      res[i] = val;
    }
    
    return res;
  }