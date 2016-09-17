var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!this.contains(item)){
    if(this.checkObject(item)){
      this._storage[JSON.stringify(item)] = true;
    } else{
      this._storage[item] = true;
    }
  }
};

setPrototype.contains = function(item) {
  if(this.checkObject(item)){
    return this._storage.hasOwnProperty(JSON.stringify(item)) ? true : false;
  } else {
    return this._storage.hasOwnProperty(item);
  }

};

setPrototype.remove = function(item) {
  if(this.contains(item)){
    if(this.checkObject(item)){
      delete this._storage[JSON.stringify(item)];
    } else{
      delete this._storage[item];
    }
  }
};

setPrototype.checkObject = function(item){
  if(typeof item === 'object' && Array.isArray(item)===false){
    return true;
  } else{
    return false;
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
// add - constant
// contains - constant
// remove - constant
