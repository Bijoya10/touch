var movingRect, staticRect;

function setup() {
  createCanvas(windowWidth,windowHeight);
  staticRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200, 200, 50, 80);
}

function draw() {
  background(200);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-movingRect.width/2<staticRect.x+staticRect.width/2){
    staticRect.shapeColor="red"

  }else{
    staticRect.shapeColor="blue"
  }

  drawSprites();
}