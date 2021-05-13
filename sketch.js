
var spaceShip;
var bg1,bgImage;
var obstacles;
var spaceshipIMg;
var obstacleImg,obstacle;
var obstacleGroup;
var gameState=1;
var gameOverImg,gameOver;
function preload(){
  bgImage=loadImage("starry-night-sky.jpg");
  spaceshipIMg=loadImage("newnano/bluespaceship.png");
  obstacleImg=loadImage("newnano/obsasteriod1.png");
  gameOverImg=loadImage("newnano/gameOver.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1=createSprite(width/2,height/2)
  bg1.addImage(bgImage);
  spaceShip=createSprite(windowWidth/2, windowHeight/2, 25, 50);
  spaceShip.addImage(spaceshipIMg)
  spaceShip.scale=1.5;
  gameOver=createSprite(width/2,height/2);
  gameOver.addImage(gameOverImg)
  gameOver.scale=0.6;
  gameOver.visible=false;
  obstacleGroup=new Group();
}

function draw() {
  background("black");  
  //spaceShip.rotation=0
  if(gameState===1){
 spawnObstacles();
  infiniteBg();
  if(spaceShip.isTouching(obstacleGroup)){
    gameState=0;
    obstacleGroup.destroyEach();
    spaceShip.visible=false;
    bg1.velocityX=0;
    bg1.velocityY=0;

  }
  }
  else{
    gameOver.visible=true;
  }
  drawSprites();
  
}

function keyPressed(){

  if(keyCode===LEFT_ARROW){
    //bg1.velocityX=10;
    //bg1.velocityY=0
    bg1.velocityX=bg1.velocityX+2
    spaceShip.rotation=spaceShip.rotation-20
    
  }
  if(keyCode===RIGHT_ARROW){
    bg1.velocityX=bg1.velocityX-2
    //bg1.velocityX=-10;
    //bg1.velocityY=0
    spaceShip.rotation=spaceShip.rotation+20
  }
  if(keyCode===DOWN_ARROW){
    bg1.velocityY=bg1.velocityY-2
    //bg1.velocityY=-10;
    //bg1.velocityX=0
    spaceShip.rotation=spaceShip.rotation-20
  }
  if(keyCode===UP_ARROW){
    bg1.velocityY=bg1.velocityY+2
    //bg1.velocityY=+10;
    //bg1.velocityX=0
    spaceShip.rotation=spaceShip.rotation+20
  }
  
}
function spawnObstacles(){
  if(frameCount%10===0){
    obstacles=createSprite();
    obstacles.addImage(obstacleImg)
    if(bg1.velocityY>0){
    obstacles.x = random(0,width)
    obstacles.y =-20
    obstacles.velocityY=2;
    }
    obstacleGroup.add(obstacles);
    
  }
}

function infiniteBg(){
  
  if(bg1.x>bg1.width/2 || bg1.x<-(bg1.width/2-width)){
    bg1.x=width/2
  }
  
  if(bg1.y>bg1.height/2-height || bg1.y < -(bg1.height/2-height)){
    bg1.y=height/2
  }
  
  
}
function spawnAttackers(){
  if(frameCount%60===0){
    
}
}
