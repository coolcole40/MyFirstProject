
function setup() {
  createCanvas( windowWidth , windowHeight );
  fill ( 0 , 255 , 0 , 10 ); 
  noStroke();
  
}
var n;
function draw() {
 n = random(50,100);
ellipse( mouseX , mouseY , n , n );
  loop();
 
 
  

}
