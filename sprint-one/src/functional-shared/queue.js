var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};
  queueInstance.counter = 0;
  queueInstance.storage = {};

  _.extend(queueInstance, queueMethods);

  return queueInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  dequeue: function() {
    if(this.counter > 0) {
      var value = this.storage[Object.keys(this.storage)[0]];
      delete this.storage[Object.keys(this.storage)[0]];
      return value;
    }
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};
