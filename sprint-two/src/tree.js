var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.removeFromParent = function(value) {
  var targetNode = this.get(value);
  var targetParent = targetNode.parent;
  targetNode.parent = null;
  var targetIndex = null;
  targetParent.children.forEach(function(child, i) {
    if(child.value === value) {
      targetIndex = i;
    }
  });
  targetParent.children.splice(targetIndex, 1);
};

treeMethods.get = function(target) {
  var found = null;

  var searchChildren = function(children, target){

    for(var i=0; i<children.length; i++){
      var child = children[i];
      // console.log(child);
      if(child.value === target){
        return child;
      }

      // recurse through children
      if(Array.isArray(child.children) && child.children.length > 0){
        found = searchChildren(child.children, target);
      }
    }

    return found;
  };

  return searchChildren(this.children, target);
};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
  // console.log(this.children)
};

treeMethods.contains = function(target) {
  return this.get(target) ? true : false;
};

treeMethods.traverse = function(cb) {
  var traverseTree = function(node) {
    if(node) {
      cb(node)
      for(var i = 0; i < node.children.length; i++) {
        var child = node.children[i];
        traverseTree(child);
      }
    }
  }
  traverseTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild() => O(1) constant time
// searchChildren() => O(log(n))
