
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1;
var mango1,mango2,mango3,mango4;
var boy;
var stone1;
var chain;
var boy;

function preload()
{
	
 boyimage = loadImage("boy.png");


}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(900,300,400,400);
	mango1 = new Mango(800,300,40,40);
	mango2 = new Mango(900,160,40,40);
	mango3 = new Mango(990,200,40,40);
	mango4 = new Mango(900,300,40,40);

	boy = new Boy(300,400,300,300);

	ground = new Ground(600,height,1200,20);

	stone1 = new Stone(600,400,60,60);
	

    chain = new Chain(stone1.body,{x:200,y:100});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  
 tree1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();

  
 ground.display();
 
 stone1.display();

 chain.display();
  
 boy.display();
  

 

}


function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
   
   
   
	 }
   
	 function mouseReleased(){
	
		chain.fly()
	 
   
   
   
	 }
   
   
   



