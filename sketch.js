
//supreme stuff
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

//chhote log
var myEngine, myWorld;
var box1, ground;
var box2;
var pig1;
var bird;
var box3, box4, log2, pig2;
var rope;

function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(700+100,320,70,70);
  box2 = new Box(920-100, 320, 70, 70);
  //pig1 = new Pig(810,320,20);
  log1 = new Log(810,230,220);
  bird = new Bird(100,100);

  rope = new Slingshot(bird.body,{x:150, y:100})
  ground = new Ground(600,390,800,20)

  

  box3 = new Box(700+100,200,70,70);
  box4 = new Box(920-100,200,70,70);
  log2 = new Log(810, 160,220);
  //pig2 = new Pig(810,220,20)
}

function draw() {
  background("yellow");  
  Engine.update(myEngine);
  box1.display();
  box2.display();
  //pig1.display();
  log1.display();
  bird.display();
  log2.display();
  box3.display();
  box4.display();
  //pig2.display();
  ground.display();
  rope.display();
  
}