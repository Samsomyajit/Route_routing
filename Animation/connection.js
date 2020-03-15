
function Connection(from, to) {

    this.a = from;
    this.b = to;
    this.sending = false;
    this.sender = null;
    this.output = 0;


    this.feedforward = function(val) {
      this.output = val;
      this.sender = this.a.position.copy();
      this.sending = true;
    }
    
  
    this.update = function() {
      if (this.sending) {
        //dynamics of the packets
        this.sender.x = lerp(this.sender.x, this.b.position.x, 0.1);
        this.sender.y = lerp(this.sender.y, this.b.position.y, 0.1);
        var d = p5.Vector.dist(this.sender, this.b.position);
        if (d < 8) {//speed of the packets in the network
          this.b.feedforward(this.output);
          this.sending = false;
        }
      }
    }
  
    this.display = function() {
     /*//this is for the edge lines 
     stroke(0);
      strokeWeight(1);
      line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);
     */
      if (this.sending) { // This is the packet sending
        fill('red');//blue packet 
        strokeWeight(1);
        //Size of the packets
        ellipse(this.sender.x, this.sender.y, 10, 10); 
      }
    }
  }
  