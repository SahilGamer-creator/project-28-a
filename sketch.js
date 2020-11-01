
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var tree,ground,stone,boy;
var mango1,mango2,mango3;
var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(1000,350,400,700);
	ground = new Ground(600,690,1200,35);
	stone = new Stone(80,530,50,50);
	boy = new Boy(150,600,250,350);
	mango1 = new Mango(500,130,80,100);
	mango2 = new Mango(530,100,80,100);
	mango3 = new Mango(440,140,80,100);
	slingshot = new SlingShot(stone.body,{x: 80, y:530});


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(117, 250, 153);
  Engine.update(engine);
  
  //drawSprites();
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  slingshot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);

 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function detectCollision(stone,mango){
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<-mango.r+stone.r){
   Matter.Body.setStatic(mango.body,false);
  }
}
