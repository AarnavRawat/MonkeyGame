
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  monkey = createSprite(40,160,10,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,190,600,5);
  ground.x = ground.width / 2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
  
}


function draw() {
  background(250);
  
  ground.velocityX = -4;
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 100){
     monkey.velocityY = -10
  }
  monkey.velocityY = monkey.velocityY + 0.8;  
  
  monkey.collide(obstacleGroup);
  if(monkey.isTouching(obstacleGroup)){
     ground.velocityX = 0;
     FoodGroup.velocityX = 0;
     obstacleGroup.velocityX = 0;
  }
  
  bananaFunc();
  obstacle();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  
  drawSprites();
  text("Survival Time: "+ survivalTime, 200,20);
}

function bananaFunc(){
  if(frameCount % 100 === 0) {
     var banana = createSprite(600,100,10,10);
     banana.velocityX = -4;
     banana.setLifeTime = 100;
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.y=Math.round(random(100,20));
     FoodGroup.add(banana);
     
  }
}

function obstacle(){
  if(frameCount % 225 === 0) {
     var obstacle = createSprite(600,170,10,10);
     obstacle.velocityX = -4;
     obstacle.setLifeTime = 100;
     obstacle.addImage(obstaceImage);
     obstacle.scale = 0.1;
     obstacleGroup.add(obstacle);
  }
}