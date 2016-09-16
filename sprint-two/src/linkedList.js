var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    var node = new Node(value);

    if(list.tail === null){
      list.head = node;
      list.tail = node;
      return;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if(list.head){      
      var head = list.head;
      list.head = list.head.next;
      return head.value;
    }
  };

  list.contains = function(target) {
    var node = list.head;
    while(node !== null){
      if(node.value === target){
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addToTail() => O(1) constant
 // removeHead() => O(1)
 // contains() => O(n) linear
