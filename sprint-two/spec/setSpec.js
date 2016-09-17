describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should contain remaining values after removing one', function() {
    set.add('5');
    set.add('10');
    set.remove('5');
    expect(set.contains('5')).to.equal(false);
    expect(set.contains('10')).to.equal(true);
  });

  it('should contain only unique values', function() {
    set.add('5');
    set.add('5');
    set.remove('5');
    expect(set.contains('5')).to.equal(false);
  });

  it('should work with numbers', function() {
    set.add(1);
    set.add(-1);
    set.add(1.5);
    set.add(99999999999999999999);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(-1)).to.equal(true);
    expect(set.contains(1.5)).to.equal(true);
    expect(set.contains(99999999999999999999)).to.equal(true);
  });

  it('should work with arrays', function() {
    set.add([1]);
    set.add([13,2]);
    set.add([1,[2,3]]);
    expect(set.contains([1])).to.equal(true);
    expect(set.contains([13,2])).to.equal(true);
    expect(set.contains([1,[2,3]])).to.equal(true);
  });

  it('should contain only unique arrays', function() {
    set.add([1]);
    set.add([1]);
    set.remove([1]);
    expect(set.contains([1])).to.equal(false);
  });
  it('should work with adding objects', function() {
    set.add({a : 1});
    set.add({b : 2});
    expect(set.contains({a:1})).to.equal(true);
    expect(set.contains({b:2})).to.equal(true);
  });
  it('should work with removing objects', function() {
    set.add({a : 1});
    set.remove({a : 1});
    expect(set.contains({a:1})).to.equal(false);
  });

  it('should work with objects', function() {
    set.add({a : 1});
    set.add({b : 2});
    expect(set.contains({a:1})).to.equal(true);
    expect(set.contains({b:2})).to.equal(true);

    set.remove({a : 1});
    expect(set.contains({a:1})).to.equal(false);
    expect(set.contains({b:2})).to.equal(true);
  });

});
