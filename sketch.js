var garden,rabbit;
var gardenImg,rabbitImg;
var select_sprites = Math.round(random(1,3));

if (frameCount % 80 == 0){
  if(select_sprites == 1) {
    createRed();
  }

}
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createRed  () {
  redL.y = createSprite(random(50,350),40, 10, 10);
  redL.addImage(redImg);
  redL.scale = 0.06;
  redL.velocityY = -3;
  redL.lifetime = 150;
 } 


function draw() {
  background(0);

 createRed()

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  if(keyDown("left")){
    rabbit.x = rabbit.x-10;
    
  }
  
  if(keyDown("right")){
    rabbit.x = rabbit.x+10;
    
  }
   



drawSprites()

}
