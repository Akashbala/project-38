var trex, trex_running
var ground
var o1,o2,o3,o4,o5,o6,c1,c2,c3,c4
var cloudImage;
var  obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6

localStorage["HighestScore"] = 0;

function preload(){
  trex_running =   loadAnimation("trex1.png","trex3.png","trex4.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  trex = createSprite(displayWidth/displayWidth+50,displayHeight/2-50,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5

  ground = createSprite(displayWidth/2,displayHeight/2,700,20)
  ground.addImage("ground",groundImage)
  ground.scale=2
  

  invisibleGround = createSprite(displayWidth/2,displayHeight/2,20000,10);
  invisibleGround.visible = false;

  o1 = createSprite(1300,displayHeight/2-30)
  o1.addImage(obstacle1)
  o1.scale=1
  o2 = createSprite(1750,displayHeight/2-30)
  o2.addImage(obstacle2)
  o2.scale=1
  o3 = createSprite(1900,displayHeight/2-30)
  o3.addImage(obstacle3)
  o3.scale=1
  o4 = createSprite(2450,displayHeight/2-30)
  o4.addImage(obstacle4)
  o4.scale=1
  o5 = createSprite(2700,displayHeight/2-30)
  o5.addImage(obstacle5)
  o5.scale=1
  o6 = createSprite(3350,displayHeight/2-30)
  o6.addImage(obstacle6)
  o6.scale=1

 if(o1.isTouching(trex)){
// trex.
 
 }
}

function draw() {
  background(225)
  if(keyDown("space") && trex.y >= 159) {
    trex.velocityY = -12;
  }
  if(keyWentDown("RIGHT_ARROW")) {
    trex.velocityX =4;
  }
  if(keyWentUp("RIGHT_ARROW")){
    trex.velocityX=0
  }

  camera.position.x=trex.x
  camera.position.y=trex.y

  trex.velocityY = trex.velocityY + 0.8
  trex.collide(invisibleGround);
  drawSprites();
}

