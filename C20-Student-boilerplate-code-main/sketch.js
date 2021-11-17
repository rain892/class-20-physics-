
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var ground1
var ground2

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
   var rock_options = {
    restitution: 0.90
   }
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   var ground1_options ={
     isStatic: true
   }
   var ground2_options ={
    isStatic: true
  }
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ground1 = Bodies.rectangle(100,100,100,5,ground1_options);
  World.add(world,ground1);

  ground2 = Bodies.rectangle(300,200,100,5,ground1_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  rock = Bodies.circle(50,200,50,rock_options)
  World.add(world,rock);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(rock.position.x,rock.position.y,20) 
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground1.position.x,ground1.position.y,400,20);
  rect(ground2.position.x,ground2.position.y,400,20);

 
}

