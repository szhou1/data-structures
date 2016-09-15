var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(index);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, storage) {
    console.log(index + " - " + i);
    if(index === i) {
      storage[i] = undefined;
      console.log(value);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
