
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var bobObject1;
var bobDiameter=20;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 685, 800, 10);
	roof = new Roof(400, 250, 300, 50);
	bobObject1 = new Bob(380,500,20);
	rope1 = new Rope(bobObject1.body,{x:300, y:500});
	bobObject2 = new Bob(390,500,20);
	rope2 = new Rope(bobObject2.body,{x:350, y:500});
	bobObject3 = new Bob(400,500,20);
	rope3 = new Rope(bobObject3.body,{x:400, y:500});
	bobObject4 = new Bob(410,500,20);
	rope4 = new Rope(bobObject4.body,{x:450, y:500});
	bobObject5 = new Bob(420,500,20);
	rope5 = new Rope(bobObject5.body,{x:500, y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



