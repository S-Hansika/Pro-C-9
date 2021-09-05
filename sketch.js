var box;
var box1;


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor= "blue";
  box1= createSprite(150,150,30,30);
  box1.shapeColor= "red";
}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  if(keyDown("a")){
    box1.position.x-= 5;
  }

  if(keyDown("w")){
    box1.position.y-= 5;
  }

  if(keyDown("s")){
    box1.position.y+= 5;
  }

  if(keyDown("d")){
    box1.position.x+= 5;
  }

  drawSprites();
}




