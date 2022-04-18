
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rock, ball, rockImg, ballImg, rockS, ballS;
var button, buttonImg;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;

var btn1;
var btn2;

function preload(){
  rockImg = loadImage("Rock.png");
  ballImg = loadImage("Ball.png");
  buttonImg = loadImage("restart.png");
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    //write a code to set value of restitution such that:
//Ball (white circle) bounces more when it hits the bottom.
restitution: 1,
friction:0.2

  }

  var rock_options = {
   // write a code to set value of restitution such that:
   // Rock (Red Circle) bounces less when it hits the bottom.
   restitution: 0.1,
   friction: 0.01
  }
   
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  
  

  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world, ground);
 
  rockS = createSprite(rock.position.x,rock.position.y);
  rockS.addImage(rockImg);
  rockS.scale = 0.5;

ballS = createSprite(ball.position.x,ball.position.y);
ballS.addImage(ballImg);
ballS.scale = 0.5;

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  //background(51);
  background("skyblue")
  Engine.update(engine);
  
  fill("brown");
rect(ground.position.x,ground.position.y,400,20);
//ellipse(ball.position.x,ball.position.y,20);
push();
//ellipse(rock.position.x,rock.position.y,20);
pop();

textFont("Cooper Black");
fill("red");
textSize(20);
text("Press the 'Up button' to move the ball",10,100);
text("Press the 'Restart button' to play again",10,140)

rockS.x= rock.position.x;
rockS.y= rock.position.y;

ballS.x= ball.position.x;
ballS.y = ball.position.y;

button = createSprite(370,180);
button.scale = 0.3;
button.addImage(buttonImg);
if(mousePressedOver(button)){
  restart();
}
  
drawSprites();
}

function vForce()
{
 //write a code to move ball up when the button is clicked.
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

function restart(){
  ball.position.x= 100;
  ball.position.y = 10;

  rock.position.x= 250;
  rock.position.y=10;
}


  


