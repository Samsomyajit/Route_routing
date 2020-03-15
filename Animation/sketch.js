var network;

function setup() { 

  createCanvas(700,700);
  network = new Network(width/2, height/2);
  nodes = 16;
  

  /*
  //single loop approach
  for (i=0; i<nodes; i++)
  {
    n[i] = new Neuron(0,i*100);
    if (i!=0)
    network.connect(n[i-1],n[i]);

    network.addNeuron(n[i]);
    
  }
  */
 //multi loop approach
 /*
  for(i = 0; i < 4; i++ )
  {
    for (j=0; j < 4; j++)
    {
      n[m] = new Neuron((i*100)-200,(j*100)-200);
      m++;
    }  }
  for (k=1;k<=nodes;k++)
  {
    network.connect(n[k-1],n[k]);
    network.connect(n[k],n[k+1]);
    network.addNeuron(n[k]);
  }
  network.addNeuron(n[0]);*/





//generating the nodes

  var a = new Neuron(-200, -200);
  var b = new Neuron(-200, -100);
  var c = new Neuron(-200, 0);
  var d = new Neuron(-200, 100);
  var e = new Neuron(-100, -200);
  var f = new Neuron(-100, -100);
  var g = new Neuron(-100, 0);
  var h = new Neuron(-100, 100);
  var i = new Neuron(0, -200);
  var j = new Neuron(0, -100);
  var k = new Neuron(0, 0);
  var l = new Neuron(0, 100);
  var m = new Neuron(100, -200);
  var n = new Neuron(100, -100);
  var o = new Neuron(100, 0);
  var p = new Neuron(100, 100);

  //connecting the nodes
  network.connect(a, b);    
  network.connect(b, c);
  network.connect(c, d);
  network.connect(a, e);
  network.connect(b, f);
  network.connect(c, g);
  network.connect(d, h);
  network.connect(e, f);
  network.connect(f, g);
  network.connect(g, h);
  network.connect(e, i);
  network.connect(f, j);
  network.connect(g, k);
  network.connect(h, l);
  network.connect(i, j);
  network.connect(j, k);
  network.connect(k, l);
  network.connect(i, m);
  network.connect(j, n);
  network.connect(k, o);
  network.connect(l, p);
  network.connect(m, n);
  network.connect(n, o);
  network.connect(o, p);
  
  //adds the nodes to the canvas
  network.addNeuron(a);
  network.addNeuron(b);
  network.addNeuron(c);
  network.addNeuron(d);
  network.addNeuron(e);
  network.addNeuron(f);
  network.addNeuron(g);
  network.addNeuron(h);
  network.addNeuron(i);
  network.addNeuron(j);
  network.addNeuron(k);
  network.addNeuron(l);
  network.addNeuron(m);
  network.addNeuron(n);
  network.addNeuron(o);
  network.addNeuron(p);
} 

function draw() 
{ 
  background(255);
  network.update();
  network.display();
  
  if (frameCount % 30 == 0) 
  {
    network.feedforward(1);
  }
}