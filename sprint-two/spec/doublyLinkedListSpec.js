describe('DoublyLinkedList', function() {
  var dll;

  beforeEach(function() {
    dll = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dll).to.have.property('head');
    expect(dll).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(dll.addToTail).to.be.a('function');
    expect(dll.removeHead).to.be.a('function');
    expect(dll.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    dll.addToTail(4);
    expect(dll.tail.value).to.equal(4);
    dll.addToTail(5);
    expect(dll.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    dll.addToTail(4);
    dll.addToTail(5);
    expect(dll.head.value).to.equal(4);
    dll.removeHead();
    expect(dll.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    dll.addToTail(4);
    expect(dll.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    dll.addToTail(4);
    dll.addToTail(5);
    expect(dll.contains(4)).to.equal(true);
    expect(dll.contains(5)).to.equal(true);
    expect(dll.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    dll.addToTail(4);
    dll.addToTail(5);
    dll.removeHead();
    expect(dll.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of dll
  it('should return undefined when trying to remove node from empty linked list', function(){
    expect(dll.removeHead()).to.equal(undefined);
  });

  it('should return null after adding null', function(){
    dll.addToTail(null);
    dll.addToTail(4);
    expect(dll.contains(null)).to.equal(true);
    expect(dll.contains(4)).to.equal(true);
  });

  it('should have "addToHead","removeTail" methods', function(){
    expect(dll.addToHead).to.be.a('function');
    expect(dll.removeTail).to.be.a('function');
  });

  it('should add node to head when empty', function(){
    dll.addToHead(5);
    expect(dll.head.value).to.equal(5);
  });

  it('should add node to head', function(){
    dll.addToHead(5);
    dll.addToHead(4);
    expect(dll.head.value).to.equal(4);
    expect(dll.head.next.value).to.equal(5);
  });

  it('should remove tail for size of 1', function(){
    dll.addToHead(5);
    expect(dll.removeTail()).to.equal(5);
    expect(dll.head).to.equal(null);
  });

  it('should return undefined for empty linked list', function(){
    expect(dll.removeTail()).to.equal(undefined);
  });

  it('should remove tail for size of 3', function(){
    dll.addToHead(1);
    dll.addToHead(2);
    dll.addToHead(3);
    expect(dll.removeTail()).to.equal(1);
    expect(dll.head.value).to.equal(3);
    expect(dll.head.next.value).to.equal(2);
    expect(dll.contains(1)).to.equal(false);
  });

  it('', function(){
  });
  it('', function(){
  });
  it('', function(){
  });

});
