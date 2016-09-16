var BinarySearchTree = function(value) {
  var node = Object.create(setBSTPrototype);
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

var setBSTPrototype = {};

setBSTPrototype.insert = function(value){
  var traverseTree = function(node){
    if(!node){
      // insert
      node = BinarySearchTree(value);
      return node;
    }
    else if(node.value > value){
      if(!node.left){
        node.left = BinarySearchTree(value);
        return;
      } else{
        // go left
        traverseTree(node.left);
      }
    }
    else if(node.value < value){
      if(!node.right){
        node.right = BinarySearchTree(value);
        return;
      } else{
        // go right
        traverseTree(node.right);
      }
    }
  }

  traverseTree(this);
};

setBSTPrototype.contains = function(value){

  var found = false;

  var traverseTree = function(node){
    if(!node){
      return;
    }else if(node.value && node.value === value){
      found = true;
      return;
    }else if(node.left && node.left.value <= value && node.value > value){
      traverseTree(node.left);
    }else if(node.right && node.right.value >= value && node.value < value){
      traverseTree(node.right);
    }
  }
  traverseTree(this);
  return found;
};

setBSTPrototype.depthFirstLog = function(cb){

  var traverseTree = function(node){
    if(node){
      cb(node.value);
      traverseTree(node.left);
      traverseTree(node.right);
      return;
    }
    else{
      return;
    }
  }
  traverseTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert - O(log(n))
// contains - O(log(n))
// depth - O(n)
