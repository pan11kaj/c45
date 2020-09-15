
var player,player2;
var life = 100;
var complife = 100;
var buton,title;
var play =1,end = 0;
var gameState =0;
var punch;
function preload(){
  backimg = loadImage("ring.jpg");
  playerimg = loadImage("plaimg/man1.png");
  playerimg2 = loadImage("plaimg/man2.png");
  playerimg3 = loadImage("plaimg/man3.png");
  playerimg4 = loadImage("plaimg/man4.png");
  compimg = loadImage("compimg/1.png");
  compimg2 = loadImage("compimg/2.png");
  compimg3 = loadImage("compimg/3.png");
  compimg4 = loadImage("compimg/4.png");
  compimg5 = loadImage("compimg/5.png");
  compimg5 = loadImage("compimg/comp.png");
  punch = loadSound("punch2.mp3");
   bgsound = loadSound("bg.mp3");
  hr = hour();
}


function setup() {
  createCanvas(1200,600);
  player = createSprite(200,400,10,10);
  player.addImage(playerimg4);
  player.scale = 0.5;
  player2 = createSprite(700,400,10,10);
  player2.addImage(compimg5);
  player2.scale = 0.5;
  
   
   buton = createButton("play");
   buton.position(400,200);   
   fill("red");
   title = createElement('h1');
   title.html("Real Boxing Game")
   title.position(400,20);       
}

function draw() {
  player.depth = player.depth+2;
    player2.depth = player.depth-4;
  
   buton.mousePressed(()=>{
 
    title.hide();
    buton.hide();
     gameState = play;
   });

  
   if(gameState === play){
    background(backimg);
    textSize(23);
    fill("green");
    text("Your Life:"+life,180,40);
    textSize(23);
    fill("red");
    text("Comp Life:"+complife,780,40);
    drawSprites();
    if(player.isTouching(player2) && keyDown(75)){
      complife = complife-1;
    }
    
   }
   playercontrols(); 
   compcontrols();

}


function playercontrols(){
if(keyDown(75)){
  player.addImage(playerimg3);
  punch.play();
}
else{
  player.addImage(playerimg4);
}
if(keyDown(RIGHT_ARROW)){
  player.x+=7;
  player2.x+=-7;
    }
    else{
   player.x+=0;
   player2.x+=0;
    }

  if(keyDown(LEFT_ARROW)){
  player.x+=-7
  player2.x+=7
  }
   else{
       player.x+=0;
       player2.x+=0;
        }  
    if(player.x<=0){
      player.x = 200;
    }

}

function compcontrols(){
// if(player.x >= 300){
//   player2.x-=4;
// }
// else{
//   player2.x+=4;
// }
if(player2.x <= player.x+100){
  player2.addImage(compimg3);
  life = life-1;
}
else{
  player2.addImage(compimg5);
}
if(player2.x >=1200 || player2.x<=0){
  player2.x = 500;
}

if(player.x<= 300){

}

}
