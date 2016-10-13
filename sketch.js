
var n;
var r;
function setup() {
  createCanvas( windowWidth , windowHeight ); 
  n = random(10 , 150);
  r = random(10 , 150);
  fill( 0 , r , n);
  noStroke();
  
}

function draw() {
ellipse( mouseX , mouseY , r , n);
  
 
 
  

}
