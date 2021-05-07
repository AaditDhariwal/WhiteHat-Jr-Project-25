
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
  const Body = Matter.Body;

  var bin;

var ground;

var paperBall;

function preload()
{
}


function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

    paperBall=new Ball(100,100);

	ground= new Ground(500,380);

	bin=new Bin(720,325);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  paperBall.display();
  ground.display();
  bin.display();

keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1,y:-4});
	}
}

