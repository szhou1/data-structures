var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.counter = 0;
  stackInstance.storage = {};
  return stackInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    if(this.counter > 0) {
      this.counter--;
      var value = this.storage[this.counter];
      delete this.storage[this.counter];
      return value;
    }
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};
