
function setup() {
  createCanvas( windowWidth , windowHeight );
  loop(n = random(50 , 100));
  fill ( 0 , 255 , 0 , 10 ); 
  noStroke();
  
}
var n;
function draw() {
 
ellipse( mouseX , mouseY , n , n );
 
 
  

}
