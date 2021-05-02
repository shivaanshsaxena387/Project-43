//gloable variables
var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  //loading images for diffrent required backgrounds
  bg= loadImage("aladdin_cave.jpg");
  bg2=loadImage("treasure.jpg");
  click = loadSound("S.mp3", false);
}

function setup() {
  createCanvas(1000,500);

 security = new Security();
 system = new System();
  
}

function draw() {
  background(bg);
  //calling diffrent classes
  clues();
  security.display();

  //text display
  textSize(20);
  fill("white");
  text("Correct Answers: " + score, 450, 50);  
  if(score === 3) {
    clear()
    background(bg2)
    stroke("black")
    strokeWeight("5")
    fill("white")
    textSize(35);
    text("Bravo! You just unlocked the Genie's Treasury !!",150, 450);
  }
   
  //output dispplay
  drawSprites()
}

/*
#DhRiTiD
#DD
*/
