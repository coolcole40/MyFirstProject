var v2 = createVector(40,50)
var v1 = createVector(40,50)
function setup() {
  createCanvas( windowWidth , windowHeight );
  
}

function draw() {
  background(51);
  var q = random(50,255);
  var w = random(50,255);
  var e = random(50,255);
  fill(10,10,255);
  ellipse(v1.x,v1.y,100,100);
  if(v1.x < 0){
    ballSPD = 13;
  }
  if(v1.x > width){
    ballSPD =-13;
  }
  if(v1.y > windowHeight){
    ballSPD2 = -12;
  }
  if(v1.y < 0){
    ballSPD2 = 12;
  }
  
  ballX+=ballSPD;
  ballY+=ballSPD2;
  
}

