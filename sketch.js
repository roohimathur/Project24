
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myGround,paper;
var log1,log2,log3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	myGround = new Ground(400,670,800,20);
	log1 = new Log(400,600,20,100);
	log2 = new Log(485,650,150,20);
	log3 = new Log(570,600,20,100);
	paper = new Ball(70,450);
	//Create the Bodies Here.

	//roohi whats the issue


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  myGround.display();
  log1.display();
  log2.display();
  log3.display();
  paper.display();
  Engine.update(engine);
 //
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



