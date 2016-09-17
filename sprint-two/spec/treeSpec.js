describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // it('should handle arrays', function() {
  //   tree.addChild([1]);
  //   expect(tree.contains([1])).to.equal(true);
  // });

  it('should have "removeFromParent" method', function() {
    expect(tree.removeFromParent).to.be.a('function');
  });

  it('should get child node', function() {
    tree.addChild(5);
    tree.addChild(1);
    expect(tree.get(1).value).to.equal(1);
    expect(tree.get(5).value).to.equal(5);
  });

  it('should detect parent', function() {
    tree.addChild(5);
    tree.addChild(1);
    expect(tree.get(5).parent).to.not.equal(undefined);
    expect(tree.get(1).parent).to.equal(tree.get(5).parent);
  });

  it('should remove one child from parent', function() {
    tree.addChild(5);
    tree.addChild(1);
    expect(tree.contains(1)).to.equal(true);
    tree.removeFromParent(1);
    expect(tree.contains(1)).to.equal(false);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should remove all children', function() {
    tree.addChild(10);
    tree.addChild(20);
    tree.addChild(30);
    tree.addChild(40);
    tree.removeFromParent(10);
    tree.removeFromParent(20);
    tree.removeFromParent(30);
    tree.removeFromParent(40);
    expect(tree.children.length).to.equal(0);
  });

  it('should remove nested children', function() {
    tree.addChild(10);
    tree.children[0].addChild(20);
    tree.children[0].addChild(30);
    tree.children[0].children[1].addChild(40);
    tree.removeFromParent(10);
    expect(tree.children.length).to.equal(0);
    expect(tree.contains(10)).to.equal(false);
    expect(tree.contains(20)).to.equal(false);
    expect(tree.contains(30)).to.equal(false);
    expect(tree.contains(40)).to.equal(false);
  });


    it('should remove nested children again', function() {
      tree.addChild(10);
      tree.children[0].addChild(20);
      tree.children[0].addChild(30);
      tree.children[0].children[1].addChild(40);
      tree.removeFromParent(20);
      tree.removeFromParent(30);
      expect(tree.children.length).to.equal(1);
      expect(tree.contains(10)).to.equal(true);
      expect(tree.contains(20)).to.equal(false);
      expect(tree.contains(30)).to.equal(false);
      expect(tree.contains(40)).to.equal(false);
    });

    it('should remove deeply nested children ', function() {
      tree.addChild(10);
      tree.children[0].addChild(20);
      tree.children[0].addChild(30);
      tree.children[0].children[1].addChild(40);
      tree.removeFromParent(40);
      expect(tree.children.length).to.equal(1);
      expect(tree.contains(10)).to.equal(true);
      expect(tree.contains(20)).to.equal(true);
      expect(tree.contains(30)).to.equal(true);
      expect(tree.contains(40)).to.equal(false);
    });

    it('should traverse the tree and execute a callback function on every value', function() {
      var add100ToValue = function(node) {
        node.value += 100;
      };
      tree.addChild(10);
      tree.children[0].addChild(20);
      tree.children[0].children[0].addChild(30);
      tree.traverse(add100ToValue);
      expect(tree.children[0].children[0].children[0].value).to.equal(130);

    });
});
