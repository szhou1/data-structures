describe('BinarySearchTree', function() {
  var bst;

  beforeEach(function() {
    bst = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(bst.insert).to.be.a('function');
    expect(bst.contains).to.be.a('function');
    expect(bst.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    expect(bst.left.right.value).to.equal(3);
    expect(bst.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    expect(bst.contains(7)).to.equal(true);
    expect(bst.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    bst.insert(2);
    bst.insert(3);
    bst.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should execute callback function on values in increasing order', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    bst.insert(6);
    bst.insert(7);
    bst.insert(8);
    bst.insert(9);
    bst.depthFirstLog(func);
    expect(array).to.eql([5,6,7,8,9]);
  });

  it('should not have duplicate values', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    bst.insert(5);
    bst.insert(5);
    bst.insert(5);
    bst.insert(5);
    bst.depthFirstLog(func);
    expect(array).to.eql([5]);
  });

  it('should handle weird values', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    bst.insert(-1);
    bst.insert(-2);
    bst.insert(6);
    bst.insert(999999999999999999999999999);
    bst.depthFirstLog(func);
    expect(array).to.eql([5,-1,-2,6,999999999999999999999999999]);
  });

  it('should find max depth of tree', function() {
    bst.insert(20);
    expect(bst._findMaxDepth()).to.equal(1);

    bst.insert(30);
    expect(bst._findMaxDepth()).to.equal(2);
    bst.insert(40);
    expect(bst._findMaxDepth()).to.equal(3);
  });

  it('should find depth of tree with no branches', function() {
    expect(bst._findMaxDepth()).to.equal(0);
  });

  it('should find min height of tree with one left leaf', function() {
    expect(bst._findMinDepth()).to.equal(0);
    bst.insert(2);
    expect(bst._findMinDepth()).to.equal(0);
  });

  it('should find min height of tree', function() {
    expect(bst._findMinDepth()).to.equal(0);
    bst.insert(2);
    expect(bst._findMinDepth()).to.equal(0);
    bst.insert(1);
    expect(bst._findMinDepth()).to.equal(0);
    bst.insert(7);
    expect(bst._findMinDepth()).to.equal(1);
    bst.insert(3);
    expect(bst._findMinDepth()).to.equal(1);
  });

  it('should get array of sorted elements', function() {
    expect(bst._treeToArray()).to.eql([5]);
    bst.insert(5);
    bst.insert(2);
    bst.insert(1);
    bst.insert(7);
    expect(bst._treeToArray()).to.eql([1,2,5,7]);
    bst.insert(3);
    expect(bst._treeToArray()).to.eql([1,2,3,5,7]);
  });

  it('should _rebalance tree of 3 nodes', function() {
    bst.insert(2, true);
    bst.insert(1, true);
    expect(bst._treeToArray()).to.eql([1,2,5]);
    // bst._rebalance();
    expect(bst._findMinDepth()*2 >= bst._findMaxDepth()).to.equal(true);
  });


  it('should rebalance tree of 5 nodes in a line', function() {
    bst.insert(2, true);
    bst.insert(1, true);
    bst.insert(3, true);
    bst.insert(4, true);
    expect(bst._treeToArray()).to.eql([1,2,3,4,5]);
    expect(bst._findMinDepth()*2 >= bst._findMaxDepth()).to.equal(true);
    expect(bst.value).to.equal(3);
    expect(bst.left.value).to.equal(2);
    expect(bst.left.left.value).to.equal(1);
    expect(bst.right.value).to.equal(5);
    expect(bst.right.left.value).to.equal(4);
  });

  it('should rebalance tree of 6 nodes', function() {
    bst = BinarySearchTree(1);
    bst.insert(2, true);
    bst.insert(3, true);
    bst.insert(5, true);
    bst.insert(4, true);
    bst.insert(6, true);
    expect(bst._treeToArray()).to.eql([1,2,3,4,5,6]);
    // bst._rebalance();
    expect(bst._findMinDepth()*2 >= bst._findMaxDepth()).to.equal(true);
  });

  // it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
  //   var array = [];
  //   var func = function(value) { array.push(value); };
  //   bst.insert(2);
  //   bst.insert(3);
  //   bst.depthFirstLog(func);
  //   expect(array).to.eql([5, 2, 3]);
  // });
});
