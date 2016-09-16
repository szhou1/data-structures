/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];
  var count = 0;
  var limitedArray = {};
  limitedArray.get = function(index) {

    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
    count++;
    // console.log("count: " + count, "limit * 0.75: " + limit * 0.75);
    // console.log(JSON.stringify(storage));
    if(count > limit * 0.75){
      console.log("ERROR")
      throw new Error("Exceeded max count threshold!");
    }
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };
  limitedArray.checkMaxSize = function(){
    console.log("CHECK MAX SIZE")
    if(count > limit * 0.75){
      console.log("FOUND ERROR")
      throw new Error("Exceeded max count threshold!");
    }
  }
  limitedArray.incrementCount = function(){
    count++;
  };
  // limitedArray.resize = function(lim){
  //   var oldStorage = storage;
  //   limit = lim;
  //
  //   storage = [];
  //   storage.length = lim;
  //   oldStorage.forEach(function(item,i){
  //     // console.log(item)
  //     storage[i] = item;
  //   });
  //
  //   console.log(storage);
  // };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (this.limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
