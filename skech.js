var bg;
var y = 0;

function setup() {
  
  
  
  bg = loadImage("space.png");
 
}

function draw() {
   background(bg);
  
   fill(255,64,64);
   noStroke()
   image(img6, 140,140,270,270);
   
   var duration = 4000;
   var timing = (new Date()%duration)/duration;
                                   
}