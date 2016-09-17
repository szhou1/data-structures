var BinarySearchTree = function(value) {
  var node = Object.create(setBSTPrototype);
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

var setBSTPrototype = {};

setBSTPrototype.rebalance = function(){
  if(this.findMinDepth() * 2 < this.findMaxDepth()){
    var sortedArr = this.treeToArray();

    var buildTree = function(arr, tree){
      if(arr.length > 0){
        var midIndex = Math.floor(arr.length / 2);

        tree = BinarySearchTree(arr[midIndex]);
        var leftSlice = arr.slice(0,midIndex);
        var rightSlice = arr.slice(midIndex+1);
        if(leftSlice.length > 0){
          tree.left = buildTree(leftSlice, tree.left);
        }
        if(rightSlice.length > 0){
          tree.right = buildTree(rightSlice, tree.right);
        }
      }
      return tree;
    };


    var balancedTree = buildTree(sortedArr, this);
    this.value = balancedTree.value;
    this.left = balancedTree.left;
    this.right = balancedTree.right;
  }
};

setBSTPrototype.treeToArray = function(){
  var arr = [];
  var traverseTree = function(tree){
    if(!tree){
      return;
    }
    traverseTree(tree.left);
    arr.push(tree.value);
    traverseTree(tree.right);
  };

  traverseTree(this);
  return arr;
};

setBSTPrototype.findMinDepth = function(){

  var traverseTree = function(tree){
    if(tree.left && tree.right){
      return 1+ Math.min(traverseTree(tree.left), traverseTree(tree.right));
    } else {
      return 0;
    }
  };

  var minDepth = traverseTree(this);
  // console.log("min depth: " + minDepth)
  return minDepth;
}

setBSTPrototype.findMaxDepth = function(){
  // var depth = 0;
  var traverseTree = function(tree){
    if(!tree){
      // node is empty
      return 0;
    } else {
      return Math.max(traverseTree(tree.left), traverseTree(tree.right)) + 1;
    }
  };
  var depth = traverseTree(this) - 1;
  // console.log("max depth: " + depth)
  return depth;
};

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
// findMinDepth - O(n)
// findMaxDepth - O(n)
// treeToArray - O(n)
// rebalance - O(n)
// insert - O(log(n))
// contains - O(log(n))
// depth - O(n)
//
