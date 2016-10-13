var n;
function setup() {
  createCanvas( 800 , 800 );
  n = random(100)
  fill ( n , n , n , 50 ); 
  noStroke();
}
function draw() {
  ellipse( mouseX , mouseY , 100 , 100 );
 
  

}
