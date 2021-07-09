var path;
var runningBoy;
var invisibleBoundary;
function preload(){
  //pre-load images
  path = loadAnimation("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runningBoy=createSprite(150,170);
  runningBoy.addAnimation("Runner-1.png,Runner-2.png")
  
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocity = 4;
  path.scale=1.2;
  //code to reset the background
  if(path.y > 400){
    path.y = height/2;
  }
  //create invisible boundary
  invisibleBoundary=createSprite(200,190)
invisibleBoundary=screenLeft,screreenRight;
  invisibleBoundary=visible=false;
}

function draw() {
  background(0);
runningBoy.collide(invisibleBoundary);
  drawSprites();
}
