var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var found = false;

  var searchChildren = function(children, target){
    found = children.reduce(function(acc,child){
      if(acc) {return acc;};
      if(Array.isArray(child.children) && child.children.length > 0){
        acc = searchChildren(child.children, target);
      }
      else if(child.value === target){
        acc = true;
      }
      return acc;
    }, false);

    return found;
  };

  return searchChildren(this.children, target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild() => O(1) constant time
// searchChildren() => O(nlog(n))
