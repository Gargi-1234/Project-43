var bg,bg2,form,system,code,security;
var score=0;
var wind, windImg
var confetti1, confetti2, confetti3, confetti4, confettiImg
var invisibleSprite, invisibleSprite2, invisibleSprite3, invisibleSprite4, invisibleSprite5
var invisibleSprite001, invisibleSprite002
var sandstorm, stormImg
var cave, caveImg, loinImg
var roarSound, arabianMusic

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  windImg = loadAnimation("Wind/1.png", "Wind/2.png",
                          "Wind/3.png", "Wind/4.png",
                          "Wind/5.png", "Wind/6.png",
                          "Wind/7.png", "Wind/8.png",
                          "Wind/9.png", "Wind/10.png",
                          "Wind/11.png")
  confettiImg = loadAnimation("confetti.png")
  stormImg = loadAnimation("sandStorm/1.png","sandStorm/2.png","sandStorm/3.png","sandStorm/4.png",
                           "sandStorm/5.png","sandStorm/6.png","sandStorm/7.png","sandStorm/8.png",
                           "sandStorm/9.png","sandStorm/10.png")
  caveImg = loadAnimation("cave/2.png","cave/3.png",
                          "cave/4.png","cave/5.png","cave/6.png",
                          "cave/7.png","cave/8.png","cave/9.png")
  loinImg = loadAnimation("cave/1.png")
  roarSound = loadSound("Roaring Lion.mp3")
  arabianMusic = loadSound("arabian nights.mp3")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  wind = createSprite(0,10)
  wind.addAnimation("swirl", windImg)
  wind.velocityX = 2
  wind.velocityY = 2

  confetti1 = createSprite(150,100)
  confetti1.addAnimation("Welldone",confettiImg)
  confetti1.velocityY = 0
  confetti1.visible = false

  confetti2 = createSprite(450,100)
  confetti2.addAnimation("Welldone",confettiImg)
  confetti2.velocityY = 0
  confetti2.visible = false

  confetti3 = createSprite(750,100)
  confetti3.addAnimation("Welldone",confettiImg)
  confetti3.velocityY = 0
  confetti3.visible = false

  confetti4 = createSprite(1050,100)
  confetti4.addAnimation("Welldone",confettiImg)
  confetti4.velocityY = 0
  confetti4.visible = false

  cave = createSprite(500,250)
  cave.addAnimation("tiger",loinImg)
 // cave.visible = false
  cave.scale = 3

  sandstorm = createSprite(500,250)
  sandstorm.addAnimation("storm",stormImg)
  sandstorm.visible = true
  sandstorm.scale = 1.1

  invisibleSprite = createSprite(0,100)
  invisibleSprite.velocityX = 2
  invisibleSprite.visible = false

  invisibleSprite2 = createSprite(135,100,10,100)
  invisibleSprite2.visible = false
  invisibleSprite3 = createSprite(45,100,5,100)
  invisibleSprite3.visible = false
  invisibleSprite4 = createSprite(215,100,10,100)
  invisibleSprite4.visible = false
 
  invisibleSprite5 = createSprite(0,100,5,100)
  invisibleSprite5.velocityX = 2
  invisibleSprite5.visible = false

  invisibleSprite001 = createSprite(20,200,5,100)
  invisibleSprite001.visible = false
  invisibleSprite002 = createSprite(10,200,5,100)
  invisibleSprite002.visible = false
  invisibleSprite002.velocityX = 5

}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(invisibleSprite.isTouching(invisibleSprite2)){
    sandstorm.visible = false
  }

  if(invisibleSprite2.isTouching(invisibleSprite5)){
    roarSound.play()
  }

  if(invisibleSprite.isTouching(invisibleSprite3)){
    cave.addAnimation("cave",caveImg)
    cave.changeAnimation("cave",caveImg)
  }

  if(invisibleSprite.isTouching(invisibleSprite4)){
   cave.visible = false 
  }

  if(invisibleSprite002.isTouching(invisibleSprite001)){
    arabianMusic.play()
  }

  if( wind.x > 300){
  wind.velocityY = -1
  }

  if( wind.x > 1500){
    wind.destroy()
  }

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    stroke("white")
    text("TREASURE UNLOCKED",250, 200);
    
    confetti1.visible = true
    confetti1.velocityY = 2
    confetti2.visible = true
    confetti2.velocityY = 2
    confetti3.visible = true
    confetti3.velocityY = 2
    confetti4.visible = true
    confetti4.velocityY = 2

  }

  drawSprites()
}