var m;
function setup() {
  createCanvas(400, 400);
  m = new Mario();
  frameRate(20);
}

function draw() {
  background(220);
  m.show();
  if(keyIsPressed && keyCode == RIGHT_ARROW){
    m.derecha();
  }
}



class Mario{
constructor(){
  this.x = width/2;
  this.y = height/2;
  this.imgs = [];
  this.frame = 0;
  for( var i = 0; i < 12; i ++){
    this.imgs[i] = loadImage('marioR/' +i+'.gif');
    
   }
  

 }


show(){
  imageMode(CENTER);
  image(this.imgs[this.frame], this.x, this.y);
}
  
 
  derecha(){
    this.frame++;
    this.x = this.x + 10;
    if(this.frame> 11){
      this.frame= 0;
    }
    
  }

}
