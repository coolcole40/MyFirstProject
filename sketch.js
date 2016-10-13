var n;
function setup() {
  createCanvas( windowWidth , windowHeight );
  n = random(50 , 100)
  fill ( 0 , 255 , 0 , 10 ); 
  noStroke();
  
}
function draw() {
  ellipse( mouseX , mouseY , n , n );
 
  

}
