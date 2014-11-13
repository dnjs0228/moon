var bg;
var y = 0;

function setup() {
  
  
  
  bg = loadImage("space.png");
  img = loadImage("earth.png");
  img2 = loadImage("moon.png");
  img3 = loadImage("neptune.png");
  img4 = loadImage("venus.png");
  img5 = loadImage("mars.png");
  img6 = loadImage("sun.png");
  img6 = loadImage("gee.png");
  
  createCanvas(500, 500);
}

function draw() {
   background(bg);
  
   fill(255,64,64);
   noStroke()
   image(img6, 140,140,270,270);
   
   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   fill(229,211,136);
   noStroke()
   image(img4,250 + Math.cos(timing*2*PI)*200,           
        250 + Math.sin(timing*2*PI)*200,       
        40,                                     
        40);                                    
   
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(87,96,255);
   noStroke()
   image(img3, 250 + Math.cos(timing*2*PI)*350,           
        250 + Math.sin(timing*2*PI)*200,       
        150,                                     
        150);                                    
   
   var duration = 8000;
   var timing = (new Date()%duration)/duration;

   fill(126,22,12);
   noStroke()
   image(img5, 250 + Math.cos(timing*2*PI)*250,           
        250 + Math.sin(timing*2*PI)*200,       
        60,                                     
        60);                                    
   
   var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(81,158,81);
   noStroke()
  image(img, 250 + Math.cos(timing*2*PI)*250,          
        250 + Math.sin(timing*2*PI)*200,       
        60,                                     
        60);                                   
   

    var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(209,192,70);
   noStroke()
   image(img2,250 + Math.cos(timing*2*PI)*250+Math.cos(timing*4*PI)*80,          
        250 + Math.sin(timing*2*PI)*200+Math.sin(timing*4*PI)*80,       
        20,                                    
        20);   

        var duration = 2000;
   var timing = (new Date()%duration)/duration;

   fill(209,192,70);
   noStroke()
   image(img2,250 + Math.cos(timing*2*PI)*250+Math.cos(timing*4*PI)*80,          
        250 + Math.sin(timing*2*PI)*200+Math.sin(timing*4*PI)*80,       
        20,                                    
        20);                                   
}