var ball;
function setup() {
  createCanvas(800,800);
  ball = createSprite(200, 200);

}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    ball.x = ball.x + 5
   }
drawSprites()
}





