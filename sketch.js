const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function setup() 
{
  createCanvas(1536,600);

  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(650,550,400,20);
  ground2 = new Ground(1300,300,200,20);
  ground3 = new Ground(1300,570,200,20);

  box1 = new Box(650,500,50,50,90);
  box2 = new Box(700,500,50,50,90);
  box3 = new Box(750,500,50,50,90);
  box4 = new Box(600,500,50,50,90);
  box5 = new Box(550,500,50,50,90);
  box6 = new Box(500,500,50,50,90);
  box7 = new Box(675,450,50,50,90);
  box8 = new Box(725,450,50,50,90);
  box9 = new Box(625,450,50,50,90);
  box10 = new Box(575,450,50,50,90);
  box11 = new Box(525,450,50,50,90);
  box12 = new Box(550,420,50,50,90);
  box13 = new Box(600,420,50,50,90);
  box14 = new Box(650,420,50,50,90);
  box15 = new Box(700,420,50,50,90);
  box16 = new Box(675,390,50,50,90);
  box17 = new Box(625,390,50,50,90);
  box18 = new Box(575,390,50,50,90);
  box19 = new Box(600,360,50,50,90);
  box20 = new Box(650,360,50,50,90);
  box21 = new Box(625,330,50,50,90);
  box22 = new Box(1300,270,50,50,90);
  box23 = new Box(1250,270,50,50,90);
  box24 = new Box(1275,240,50,50,90);
  box25 = new Box(1300,540,50,50,90);
  box26 = new Box(1250,540,50,50,90);
  box27 = new Box(1275,510,50,50,90);

  polygon = new Polygon(150,160,50,50);

  slingshot = new Slingshot(polygon.body,{x:150,y:160});
  slingshot2 = new Slingshot(polygon.body,{x:150,y:180});

}

function draw() 
{
  background("black"); 
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  polygon.display();

  slingshot.display();
  slingshot2.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();

  push();
  textSize(30);
  fill("white");
  text("Press Space for second chances!!",768,50);
  pop();

  push();
  textSize(30);
  fill("white");
  text("Score:"+score,50,100)
  pop();

  drawSprites();
}


function mouseDragged()
{
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  slingshot.fly();
  slingshot2.fly();
}

function keyPressed()
{
  if(keyCode ===32){
      slingshot.attatched(polygon.body);
      slingshot2.attatched(polygon.body);
  }
}