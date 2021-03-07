const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj, paperObject,groundObject, launcherObject	
var world;
var launchingForce=100;
var lastMouseX=null;
var lastMouseY=null;


function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(400,300,70);
	groundObject=new ground(width/2,400,width,10);
	dustbinObj=new dustbin(600,370,70,10);
	
	launcherObject=new launcher(paperObject.body,{x:300,y:300})
	


	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 70,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  //rectMode(CENTER);

 

  background("skyblue");
 
  Engine.update(engine)
  
    paperObject.display();
 
  
  groundObject.display();
  dustbinObj.display();
 
  launcherObject.display();
  
 
  
  
 
}

function mouseDragged()
{
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcherObject.fly();
 
}



function gameState(play){


	if (gameState === "start") {
		background("green ");
		textSize(60);
		fill("cyan");
		text("so yeah just play the game", 50, 200)
		if (keyCode === RIGHT_ARROW) {
		  gameState = "play"
		}
	}
}
	
