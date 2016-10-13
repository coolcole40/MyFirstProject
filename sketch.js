
function setup() {
  createCanvas( windowWidth , windowHeight ); 
  noStroke();
  fill(0 , 255 , 255);
}
var n;
function draw() {
loop(n = random(50,100)); 
ellipse( mouseX , mouseY , n , n );
  
 
 
  

}
