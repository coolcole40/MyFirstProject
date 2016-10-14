
var n;
var r;
function setup() {
  createCanvas( windowWidth , windowHeight ); 
  n = random(10 , 150) ;
 r = random(10 , 150) ;
  fill( 0 , r , n);
  noStroke();
  
}

function draw() {
  loop( n = random(10 , 150) ) ;
 loop(r = random(10 , 150) ) ;
ellipse( mouseX , mouseY , r , n);
  
 
 
  

}
