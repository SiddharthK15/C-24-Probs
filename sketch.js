var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground=createSprite(width/2, 650, width,10);
	ground.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;
	World.add(world, ground)
	//Create the Bodies Here.
	box1 = new Box(600,650,200,20);
	box2 = new Box(500,610,20,100);
	box3 = new Box(700,610,20,100);

	paper1 = new Paper(50,300,50,50);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  drawSprites();
  
}



