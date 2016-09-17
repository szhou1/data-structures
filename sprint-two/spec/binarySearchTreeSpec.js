describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should execute callback function on values in increasing order', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,6,7,8,9]);
  });

  it('should not have duplicate values', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(5);
    binarySearchTree.insert(5);
    binarySearchTree.insert(5);
    binarySearchTree.insert(5);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5]);
  });

  it('should handle weird values', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(-1);
    binarySearchTree.insert(-2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(999999999999999999999999999);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,-1,-2,6,999999999999999999999999999]);
  });

  it('should find max depth of tree', function() {
    binarySearchTree.insert(20);
    expect(binarySearchTree.findMaxDepth()).to.equal(2);

    binarySearchTree.insert(30);
    expect(binarySearchTree.findMaxDepth()).to.equal(3);
    binarySearchTree.insert(40);
    expect(binarySearchTree.findMaxDepth()).to.equal(4);
  });

  it('should find depth of tree with no branches', function() {
    binarySearchTree = BinarySearchTree(5);
    expect(binarySearchTree.findMaxDepth()).to.equal(1);
  });

  it('should find min height of tree', function() {
    expect(binarySearchTree.findMinDepth()).to.equal(1);
    binarySearchTree.insert(2);
    expect(binarySearchTree.findMinDepth()).to.equal(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.findMinDepth()).to.equal(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.findMinDepth()).to.equal(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.findMinDepth()).to.equal(2);
  });

});
