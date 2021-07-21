const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  b1=Bodies.circle(350,10,10,ball_options)
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
  World.add(world,b1);
  
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      c1 = Matter.Constraint.create({
        bodyA:ball,
        bodyB:b1,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,c1);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(b1.position.x,b1.position.y,10);
  

  //push();
  strokeWeight(2);
  stroke("red");
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,b1.position.x,b1.position.y);
  //pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0});
    }
}

