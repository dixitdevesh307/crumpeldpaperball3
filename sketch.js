
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
// var   world;
var slingShot;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	//Create a Ground
	slingshot = new SlingShot(paperObject.body,{x:182, y:52});

	// var render = Render.create({
	// 	element: document.body,
	// 	engine: engine,
	// 	options: {
	// 	  width: 1600,
	// 	  height: 700,
	// 	  wireframes: false
	// 	}
	//   });
  
        paperObject=new paper(200,450,70);
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	Engine.run(engine);
	// Render.run(render);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 

  
	

  
  
  
  
 
	
		
// 		slingshot = new SlingShot(paperObject.body,{x:182, y:52});
	 

  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  slingshot.display();  
}



function mouseDragged(){
	Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	slingshot.fly();
}
