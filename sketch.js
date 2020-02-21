var bg,bg_img

var bg2,bg2_img

var bg3,bg3_img

var  pic1,pic1_img

var  pic2,pic2_img

var  pic3,pic3_img

var  pic4,pic4_img

var  pic5,pic5_img

var  txt1,txt1_img

var  txt2,txt2_img

var  txt3,txt3_img

var  txt4,txt4_img

var  txt5,txt5_img

var  txt6,txt6_img

var  ui,ui_img

var  oi,oi_img

var  gameState = "start"


function preload(){

  bg_img=loadImage("a6.jpg");
  pic1_img=loadImage("a1.png");
  pic2_img=loadImage("a2.png");
  pic3_img=loadImage("a3.png");
  pic4_img=loadImage("a4.png");
  pic5_img=loadImage("a5.png");
  txt1_img=loadImage("txt1.png");
  txt2_img=loadImage("txt2.png");
  txt3_img=loadImage("txt3.png");
  ui_img=loadImage("ui.png");
  oi_img=loadImage("oi.png");
  bg2_img=loadImage("solar.jpg");
 bg3_img=loadImage("get.jpg");
 txt4_img=loadImage("txt4.png");
 txt5_img=loadImage("txt5.png");
 txt6_img=loadImage("txt6.png");
}

function setup(){

  createCanvas(displayWidth,displayHeight);
  pic1=createSprite(800,400,50,50);
  pic1.addImage("img",pic1_img);
  pic1.scale=0.15;

  pic2=createSprite(600,400,50,50);
  pic2.addImage("img",pic2_img);
  pic2.scale=0.15;

  pic3=createSprite(500,400,50,50);
  pic3.addImage("img",pic3_img);
  pic3.scale=0.25;

  txt1=createSprite(650,200,50,50);
  txt1.addImage("img",txt1_img);

  txt2=createSprite(210,450,50,50);
  txt2.addImage("img",txt2_img);

  txt3=createSprite(400,300,50,50);
  txt3.addImage("img",txt3_img);

  bg3=createSprite(displayWidth/2,displayHeight/2,displayWidth*4,displayHeight*4);
  bg3.addImage("img",bg3_img);
  bg3.scale=2;

  ui=createSprite(400,450,50,50);
  ui.addImage("img",ui_img);
  ui.scale=0.8;

  oi=createSprite(800,500,50,50);
  oi.addImage("img",oi_img);

  bg2=createSprite(displayWidth/2,displayHeight/2,displayWidth*4,displayHeight*4);
  bg2.addImage("img",bg2_img);
  bg2.scale=2;
  bg2.visible=false;

  pic4=createSprite(675,450,50,50);
  pic4.addImage("img",pic4_img);
  pic4.scale=0.15;

  pic5=createSprite(950,500,50,50);
  pic5.addImage("img",pic5_img);
  pic5.scale=0.5;

  txt4=createSprite(200,200,50,50);
  txt4.addImage("img",txt4_img);


  txt5=createSprite(400,200,50,50);
  txt5.addImage("img",txt5_img);

  txt6=createSprite(400,200,50,50);
  txt6.addImage("img",txt6_img);

   

  textSize(20);
  fill("orange");
 
}

function draw(){

  background(bg_img);
  
  if(gameState ==="start"){
    txt1.visible=false;
    txt2.visible=false;
    txt3.visible=false;
    txt4.visible=false;
    txt5.visible=false;
    txt6.visible=false;
    pic4.visible=true;
    bg3.visible=false;
    bg2.visible=false;
    pic3.visible=true;
    pic2.visible=true;
    pic1.visible=true;
    pic5.visible=true;
    ui.visible=true;
    oi.visible=true;
    text("Press space to start nd 1&2 in order to start conversation.",100,100);
    text("Press 'Q' to reset and 'o' to go to level 2 nd 'p' for level 3.",100,150);
    text("Press left arrow to use car nd right arrow to use bicycle.",100,200);
  }

  if(gameState ==="solar"){
    pic5.visible=false;
    pic4.visible=true;
    pic3.visible=false;
    pic2.visible=false;
    pic1.visible=false;
    txt5.visible=false;
    bg3.visible=false;
    txt6.visible=false;
    ui.visible=false;
    oi.visible=false;
    bg2.visible=true;
    txt4.visible=true;
  }

  if(gameState ==="bulb"){
    pic5.visible=false;
    pic4.visible=true;
    bg3.visible=true;
    pic3.visible=false;
    pic2.visible=false;
    pic1.visible=false;
    txt5.visible=false;
     txt6.visible=false;
    ui.visible=false;
    oi.visible=false;
    bg2.visible=false;
    txt4.visible=false;
    
  }

  if(keyDown("space")){
    gameState = "play";
    txt1.visible=true;
    txt4.visible=false;
  }

  if(keyDown("1")){
    gameState = "play";
    txt1.visible=false;
    txt2.visible=true;
    txt3.visible=false;
    txt4.visible=false;
    text("Press space to start nd 1&2 in order to start conversation.",100,100);
    text("Press 'Q' to reset ",100,150);
    text("Press left arrow to use car nd right arrow to use bicycle.",100,200);
  }

  if(keyDown("Q")){
    gameState = "start";
  }

  if(keyDown("2")){
    txt1.visible=false;
    txt2.visible=false;
    txt3.visible=true;
    txt4.visible=false;
  }

  if(keyDown(LEFT_ARROW)){
    move(-1,0);
    txt3.visible=false;
    txt4.visible=false;
    txt5.visible=true; 
    txt6.visible=false;
  }
  
  if(keyDown(RIGHT_ARROW)){
   move(1,0);
    pic4.visible=true;
    txt3.visible=false;
    txt4.visible=false;
    txt5.visible=false;
    txt6.visible=true;
  }
 
  if(keyDown("o")){
    gameState="solar";
  }

  if(keyDown("p")){
    gameState="bulb";
  }

  drawSprites();
 
}

function move(x,y){
  pic4.x=pic4.x+x;
  pic4.y=pic4.y+y;
  //pic4.visible=false;
 
}



//Making function to move pic4 sprite

function isTouching(){

  if(pic4.x-ui.x<pic4.width/2+ui.width/2 
    && ui.x-pic4.x<pic4.width/2+ui.width/2){
     return true
   
  }

  else{
    return false
  }
}