
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall1;
var wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	var ball_options={
        isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    
	var ground_options={
		isStatic:true
	}

	ball = Bodies.circle(200, 20, 20, ball_options);
    World.add(world, ball);

	ground = Bodies.rectangle(400, 800, 800, 300, ground_options);
	World.add(world, ground);

	wall1 = Bodies.rectangle(450, 625, 20, 50, ground_options);
	World.add(world, wall1);

	wall2 = Bodies. rectangle(550, 625, 20, 50, ground_options);
	World.add(world, wall2);
   
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 800, 300);
  rect(wall1.position.x, wall1.position.y, 20, 50);
  rect(wall2.position.x, wall2.position.y, 20, 50);
}


function keyPressed() { 
	if (keyCode === UP_ARROW) {

	console.log("apertei")
	Matter.Body.applyForce(ball, ball.position, {x:0.05, y:0});
   }
}
