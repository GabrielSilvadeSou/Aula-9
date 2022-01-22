var byjus;
function setup() {
  createCanvas(1350,600);
  byjus=createSprite(675, 300, 200, 200)
  byjus.shapeColor=color("blue")
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW))  {
    byjus.y=byjus.y-3
  }
  if(keyIsDown(DOWN_ARROW))  {
    byjus.y=byjus.y+3
  }
  if(keyIsDown(LEFT_ARROW))  {
     byjus.x=byjus.x-3
  }
  if(keyIsDown(RIGHT_ARROW))  {
    byjus.x=byjus.x+3
 }
drawSprites()
}




