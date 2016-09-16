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
  if(!firstNode) {
    this._storage.set(index, node);
    try {
      this._storage.checkMaxSize();
    } catch(e){
      this.resize(this._limit * 2);
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
        this._storage.incrementCount();
        try {
          this._storage.checkMaxSize();
        } catch(e){
          this.resize(this._limit * 2);
        }
        break;
      }
      n = n.next;
    }
  }

};

HashTable.prototype.resize = function(limit){
  this._limit = limit;
  var oldStorage = [];
  this._storage.each(function(node, index, collection){
    oldStorage.push(node);
  });
  this._storage = LimitedArray(this._limit);
  for(var i=0; i<oldStorage.length; i++){
    var node = oldStorage[i];
    while(node){
      this.insert(node.key, node.value);
      node = node.next;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
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
    try {
      this._storage.checkMinSize();
    } catch(e) {
      this.resize(this._limit / 2);
    }
    return;
  }
  var node = firstNode;
  var previousNode = firstNode;
  while(!node){
    if(node.key === k){
      previousNode.next = null;
      this._storage.decrementCount();

      try {
        this._storage.checkMinSize();
      } catch(e) {
        this.resize(this._limit / 2);
      }
      break;
    }
    previousNode = node;
    node = node.next;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
