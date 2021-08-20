const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1, wall2, ground;
var Stone = [];


zombie = createSprite(width/2, height-110);
zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
zombie.scale= 0.1;
zombie.velocityX= 10;

breakButton= createButton("")
breakButton.position(width-299, height/2-50);
breakButton.class("breakbutton");
breakButton.mousePressed(handleButtonPress);

function preload(){
  zombie1= loadImage("./assets/zombie1.png");
  zombie2= loadImage("./assets/zombie2.png");
  
  zombie3= loadImage("./assets/zombie3.png");
  zombie4= loadImage("./assets/zombie4.png");
  
  backgroundImage= loadImage("./assets/background.png");
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Ground(200,680,600,20);
  wall1 = new wall1(200,700,600,20);
  wall2 = new wall2(200,710,600,20);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink= new Link( bridge, jointPoint);

  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(51);

  ground.show();
  wall1.show();
  wall2.show();

  zombie.setVelocityX=10;

  Engine.update(engine);
  drawSprites()
}

function stones(){
  for(var i=0; i<=8; i++){
    var x = random(width/2-200, width/2 + 300);
    var y= random(-10, 140);
    var stone= new Stone(x,y,80,80);
    stones.push(stone);
    }
}

function handleButtonPress(){
  jointLink.detach();setTimeout(() => {
  bridge.break();
  },1500);
  }