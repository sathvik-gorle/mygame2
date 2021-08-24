var spaceship , ammo,  bg;
var spaceshipImage;

var redB, greenB, blueB, pinkB, ammoGroup;
var ammoImage;



var score=0;

function preload(){
  
  backgroundImage = loadImage("spacebg.jpg");
  spaceshipImage = loadImage("Spaceship_tut.png");
  asteroidImage = loadImage("asteroid-clipart-sprite-7.png");
  ammoImage = loadImage("bullet.png")
  
}


function setup() {
  
  createCanvas(600, 800);
  
  bg = createSprite(0,0,400,400);
  bg.addImage(backgroundImage);
  bg.scale = 2.5

  alienships = new Group();
  ammoGroup = new Group();
  
  spaceship = createSprite(width/2,600,20,50);
  spaceship.addImage(spaceshipImage); 
  spaceship.scale = 1;
  
   score = 0    
  
}

function draw() {
 background(0);

    if (bg.y < 400){
      bg.y = bg.width/2;
    }
  
    if (keyDown("space")){
      shoot()
    }
    
  drawSprites();
  text("Score: "+ score, 300,50);
}
function shoot() {
  var ammo= createSprite(spaceship.x, spaceship.y, 60, 10);
  ammo.addImage(ammoImage);
  ammo.x=spaceship.x;
  ammo.velocityY = -8;
  ammo.lifetime = 100;
  ammo.scale = 0.3;
  ammoGroup.add(ammo)
}


 


