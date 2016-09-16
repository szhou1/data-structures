var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);

  var node = {};
  node.key = k;
  node.value = v;
  node.next = null;

  var firstNode = this._storage.get(index, k);

  if(firstNode === undefined || firstNode === null) {
    try {
      this._storage.set(index, node);
    } catch(e){
      console.log("CAUGHT ERROR")
      this._limit *= 2;
      this._storage.resize(this._limit);
    }
  } else {
    var n = firstNode;
    while(n !== null) {
      if (n.key === k){
        n.value = node.value;
        break;
      }
      else if(n.next === null) {
        n.next = node;
        break;
      }
      n = n.next;
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log("retrieve this hash: " + index, k, this._limit)
  var node = this._storage.get(index, k);

  while(node !== null && node !== undefined) {
    if(node.key === k) {
      return node.value;
    }
    node = node.next;
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var firstNode = this._storage.get(index, k);
  if(firstNode && firstNode.next === null){
    this._storage.set(index, undefined);
    return;
  }
  var node = firstNode;
  var previousNode = firstNode;
  while(node !== null && node !== undefined){
    if(node.key === k){
      previousNode.next = null;
      return;
    }
    previousNode = node;
    node = node.next;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
