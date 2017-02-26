var ballX=1000;
var ballY=1000;
var ballSPD=13;
var ballSPD2=12;

function setup() {
  createCanvas( windowWidth , windowHeight );
  
}

function draw() {
  background(51);
  var q = random(50,255);
  var w = random(50,255);
  var e = random(50,255);
  fill(10,10,255);
  ellipse(ballX,ballY,100,100);
  if(ballX < 0){
    ballSPD = 13;
  }
  if(ballX > width){
    ballSPD =-13;
  }
  if(ballY > windowHeight){
    ballSPD2 = -12;
  }
  if(ballY < 0){
    ballSPD2 = 12;
  }
  
  ballX+=ballSPD;
  ballY+=ballSPD2;
  
}

