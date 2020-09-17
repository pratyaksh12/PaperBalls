const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);   
    side1 = new dustbin(900,515,150, PI/1);
    side2=  new dustbin(1100,515,150, PI/1);   
    side3 = new dustbin(1000,580,180, PI/2);   
    paperball_new = new paperball(100,100);

}
function draw(){
    background(0);
    Engine.update(engine);    
    ground.display();    
    side1.display();   
    side2.display();    
    side3.display(); 
    paperball_new.display();
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paperball_new.body,paperball_new.body.position,{x:140,y:-205});
    }
}