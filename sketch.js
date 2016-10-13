var n;
function setup() {
  createCanvas( 800 , 800 );
  n = random(50 , 100)
  fill ( 0 , 255 , 0 , 10 ); 
  noStroke();
}
function draw() {
  ellipse( mouseX , mouseY , n , n );
 
  

}
