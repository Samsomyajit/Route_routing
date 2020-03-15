function Network(x, y) {

    this.neurons = [];
    this.connections = [];
    this.position = createVector(x, y);
  
    this.addNeuron = function(n) {
      this.neurons.push(n);
    }
  
    this.connect = function(a, b) {
      var c = new Connection(a, b);
      a.addConnection(c);
      this.connections.push(c);
    }
  
    this.feedforward = function() {
          var n = this.neurons[0];
          n.feedforward(arguments[0]);
    }
  
    this.update = function() {
      for (var i = 0; i < this.connections.length; i++) {
        this.connections[i].update();
      }
    }
  
    this.display = function() {
      push();
      translate(this.position.x, this.position.y);
      for (var i = 0; i < this.neurons.length; i++) {
        this.neurons[i].display();
      }
  
      for (var i = 0; i < this.connections.length; i++) {
        this.connections[i].display();
      }
      pop();
    }
  }
  