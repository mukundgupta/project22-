var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	helicopterSprite=createSprite(width/2, -21, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityY = 3
	

	packageSprite=createSprite(1300, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	packageSprite.velocityY = helicopterSprite.velocityY;
	packageSprite.visible = false;


	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	var packageSprite_options ={
		restitution: 0.7, isStatic: true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageSprite_options);
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if (helicopterSprite.y>190){
	  helicopterSprite.velocityY=0;
	  packageSprite.visible = true;
	  helicopterSprite.depth = packageSprite.depth;
	  helicopterSprite.depth = helicopterSprite.depth+1;
	  packageSprite.x = helicopterSprite.x
	 if (packageSprite.y<400){
       
	 
	  if(keyCode === RIGHT_ARROW){
		  helicopterSprite.x = helicopterSprite.x +3;
	  }
	  if(keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x -3;
	}
}
  }
  
  //keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	packageBody.x = helicopterSprite.x
    
  }
}



