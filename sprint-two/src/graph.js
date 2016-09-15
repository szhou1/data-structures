

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
  this.edges = [];
  this.counter = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var n = new GraphNode(node);
  this.graph[this.counter] = n;
  this.counter++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var key in this.graph){
    if(this.graph[key].value === node){
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var key in this.graph){
    if(this.graph[key].value === node){
      delete this.graph[key];
    }
  }
  // remove edges
  for(var i=0; i<this.edges.length; i++){
    if(this.edges[i][0] === node || this.edges[i][1] === node){
      this.edges.splice(i, 1);
    }
  };
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  for(var i=0; i<this.edges.length; i++){
    result = this.compareEdges(this.edges[i], [fromNode, toNode]);
    if(result){
      break;
    }
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.hasEdge(fromNode, toNode)) {
    return;
  }
  var newEdge = [fromNode, toNode];
  this.edges.push(newEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.hasEdge(fromNode, toNode)){
    for(var i=0; i<this.edges.length; i++){
      if(this.compareEdges(this.edges[i],[fromNode,toNode])){
        this.edges.splice(i,1);
      }
    }
  }
};

Graph.prototype.compareEdges = function(one, two){
  if(one[0] === two[0]) {
    if(one[1] === two[1]) {
        return true;
    }
  }
  else if(one[0] === two[1]){
    if(one[1] === two[0]){
      return true;
    }
  }
  return false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.graph){
    cb(this.graph[key].value);
  }
};

GraphNode = function(value){
  var node = {};
  node.value = value;
  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNode() => constant
// constains => linear
// remove => O(n + e)
// hasEdge => O(e)
// addEdge => constant
// removeEdge => O(e)
// forEachNode => O(n) * complexity of cb
