
var n;
function setup() {
  createCanvas( windowWidth , windowHeight ); 
  noStroke();
  fill ( 0 , 255 , 0);
  
}

function draw() {
 
    n = random(10 , 80);   
  ellipse( mouseX , mouseY , n , n);
 
 
 
  

}
