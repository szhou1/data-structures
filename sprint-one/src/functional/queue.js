var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if(counter > 0) {
      var removedVal = storage[Object.keys(storage)[0]];
      delete storage[Object.keys(storage)[0]];
      return removedVal;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
