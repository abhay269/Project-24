//declaring the variable
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var metal1, metal2, metal3;
var ball;
var gameState;

//creating setup function
function setup() {
	createCanvas(800, 700);

	//creating and adding engine
	engine = Engine.create();
	world = engine.world;
	
	//make game state to start
	gameState = "start";

	//creating objects
	ground = new Ground(400, 670, 800, 20);
	metal1 = new Dustbin(680, 653, 170, 15);
	metal2 = new Dustbin(590, 585.5, 15, 150);
	metal3 = new Dustbin(765, 585.5, 15, 150);
	ball = new CrumpedBall(50, 500, 25);

	//running engine
	Engine.run(engine);
  
}

//creating draw function
function draw() {

	//fill the background
	background("yellow");

  //update the engine
  Engine.update(engine);

  //giving condition when game state is in start state
  if (gameState === "start") {

    background("black");
    textSize(20);
    fill("red");
	text("This is small game that will teach you the importance of throwing away your trash. \n                 Press Space Arrow to Start, and Up to throw to the trash.", 50, 200)
	
    if (keyCode === 32) {

      gameState = "play"
    }
  }

  //giving condition when game state is in play state
  if (gameState === "play") {
    rectMode(CENTER);
    background("yellow");
	ground.display();
	metal1.display();
	metal2.display();
	metal3.display();
    ball.display();

  }


}

//creating key pressed function
function keyPressed() {

	  //apply force when up arrow is pressed
      if(keyCode === UP_ARROW) {

          Matter.Body.applyForce(ball.body, ball.body.position, {x: 90, y: -90});

	  }

}

