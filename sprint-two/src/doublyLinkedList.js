var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var node = new Node(value);

    if(!list.head){
      list.head = node;
      list.tail = node;
      return;
    } else {
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeTail = function(){
    var node;
    if(!list.tail){
      // empty LL
      return;
    }
    else if(!list.tail.previous){
      // only one node
      node = list.tail;
      list.head = null;
      list.tail = null;
    } else {
      node = list.tail;
      list.tail = list.tail.previous;
      list.tail.next = null;
    }
    return node.value;
  };


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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addToHead() => O(1)
 // removeTail() => O(1)
 // addToTail() => O(1) constant
 // removeHead() => O(1)
 // contains() => O(n) linear
