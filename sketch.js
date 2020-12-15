const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;
var paperSprite, paperImg;
var dustbinSprite, dustbinImg;

function preload()
{
	paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	paperSprite = createSprite(200,200,20,20,30);
	paperSprite.addImage(paperImg);
	paperSprite.scale=0.25;

	dustbinSprite = createSprite(805,290,70,100);
	dustbinSprite.addImage(dustbinImg);
	dustbinSprite.scale = 0.35;

	//Create the Bodies Here.
	ground = new Ground(500,350,1000,10);

	paper = new Paper(100,200,30);
	box1 = new Dustbin(770,305,20,100);
	box2 = new Dustbin(810,345,80,20);
	box3 = new Dustbin(840,305,20,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  paperSprite.x = paper.body.position.x;
  paperSprite.y = paper.body.position.y;
  
  ground.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:40, y:-40});
	}
}