Array.prototype.customPop = function () {
    const results = [];
  
    for (let i = 0; i < this.length; i++) {
      results.push(cb(this[i], i, this));
    }
  
    return results;
  };
  