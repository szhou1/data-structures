var BinarySearchTree = function(value) {
  var node = Object.create(setBSTPrototype);
  node.value = value;
  node.left = null;
  node.right = null;
  // console.log(node)
  return node;
};

var setBSTPrototype = {};

setBSTPrototype.insert = function(value){
  // console.log(this.value);
  var traverseTree = function(node){
    if(!node){
      // insert
      // console.log("insert: ");
      // console.log(value)
      node = BinarySearchTree(value);
      // console.log(node)
      return node;
    }
    else if(node.value > value){
      if(!node.left){
        // console.log("insert: " + value)
        node.left = BinarySearchTree(value);
        return;
      } else{
        // go left
        // console.log("go left")
        traverseTree(node.left);
        // console.log(node.left)
      }
    }
    else if(node.value < value){
      if(!node.right){
        // console.log("insert: " + value)
        node.right = BinarySearchTree(value);
        return;
      } else{
        // go right
        // console.log("go right")
        traverseTree(node.right);
      }
    }
  }

  traverseTree(this);
};

setBSTPrototype.contains = function(value){

  var found = false;
  console.log("CONTAINS???: " + value)

  var traverseTree = function(node){
    // console.log(node)
    if(!node){
      return;
    }else if(node.value && node.value === value){
      found = true;
      return;
    }else if(node.left && node.left.value <= value && node.value > value){
      console.log("GO LEFT")
      traverseTree(node.left);
    }else if(node.right && node.right.value >= value && node.value < value){
      console.log("GO RIGHT")
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


// TreeNode = function(value){
//   var node = {};
//   node.value = value;
//   node.left = null;
//   node.right = null;
//   return node;
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */
