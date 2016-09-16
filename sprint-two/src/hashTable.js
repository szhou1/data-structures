var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // console.log("INSERT")
  var index = getIndexBelowMaxForKey(k, this._limit);

  var node = {};
  node.key = k;
  node.value = v;
  node.next = null;
  // console.log(node, index)
  var firstNode = this._storage.get(index, k);
  // console.log(firstNode)
  if(!firstNode) {
    try {
      this._storage.set(index, node);
    } catch(e){
      console.log("CAUGHT ERROR")
      this.resize(this._limit * 2);
    }
  } else {
    var n = firstNode;
    while(n !== null) {
      if (n.key === k){
        console.log("keys are same")
        n.value = node.value;
        break;
      }
      else if(n.next === null) {
        console.log("INSERT NEXT NODE");
        n.next = node;
        this._storage.incrementCount();
        try {
          this._storage.checkMaxSize();
        } catch(e){
          console.log("CAUGHT ERROR")
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
  console.log("RESIZE to " + limit, this._limit);
  var oldStorage = [];
  // console.log(this._storage);
  this._storage.each(function(node, index, collection){
    oldStorage.push(node);
  });
  this._storage = LimitedArray(this._limit);
  console.log(oldStorage);
  console.log(this._storage);
  for(var i=0; i<oldStorage.length; i++){
    var node = oldStorage[i];
    while(node){
      // console.log(node);
      // console.log(node.value)
      this.insert(node.key, node.value);
      node = node.next;
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log("retrieve this hash: " + index, k, this._limit)
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
