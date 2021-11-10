var engine, world;
var Play=1;
var END=0;
var gameState=1;
var gardenImage;
var garden;
var boy;
var gameOverSound;
var boyImage;
var stoneImage;
var coinImage;
var stoneGroup, coinGroup, birdGroup;
var treasure;
var gameoverImage;
var birdImage;
var treasure =0;
var pathImg;
var level =1;
var scene2;
var garden2;
var track;
var scene1;
var invisibleground;
var gameState = "play";
var backgroundScene0, backgroundScene1, scene1, scene2;
var level = 1;
var score = 0;
var l = "level0";
var boy, boyColliderLine;
var object1Group;
var gameOverImage;
var confetti;
var gameOver;
var gameWinImage;
var confettiImage;
var coinSound;
var confetti;
var gameWinSound;
var restart;
function preload(){
pathImg = loadImage("track.png"); 
scene1 = loadAnimation("Garden.png");
boyImage = loadAnimation("boy1.png","boy2.png");
stoneImage = loadImage("stone.png");
coinImage = loadImage("coin.png");
//gameoverImage = loadImage("GameOver.png");
gameOverSound = loadSound("gameOver.mp3");
//birdImage = loadImage("BirdBlue.png");
//birdImage = loadAnimation("redbird1.png","redbird2.png","redbird3.png","redbird4.png","redbird5.png","redbird6.png","redbird7.png","redbird8.png");
scene2 = loadAnimation("garden4.jpg");
birdImage = loadAnimation("redBirdReal1.png","redBirdReal2.png","redBirdReal3.png","redBirdReal4.png","redBirdReal5.png","redBirdReal6.png","redBirdReal7.png","redBirdReal8.png");
gameOverImage = loadImage("gameover2.jpg");
scene0 = loadImage("s2.jpg");
scene2 = loadImage("scene2.png");
scene1 = loadImage("s1.png");
confetti = loadAnimation("confettiforgame1.png","confettiforgame2.png","confettiforgame3.png","confettiforgame4.png","confettiforgame5.png");
gameWinImage = loadImage("final.jpg");
gameWinSound = loadSound("gameWin.mp3");
//confettiImage = loadImage("confetti.gif");
coinSound = loadSound("coinSound.wav");
restartImg = loadImage("restart.png");
}
/*function setup() {
 
createCanvas(windowWidth, windowHeight);
garden = createSprite(width/2,height/2);
garden.addAnimation("level1",scene1);
//garden.addAnimation("level3",scene3);
garden.scale = 0.8;

garden2 = createSprite(width+width/2,height);
garden2.addAnimation("level2",scene2);
//garden2.addAnimation("level4",scene4);
//garden2.scale = 0.8;
garden2.visible = false;

track = new Track(80, height-200,50,45);

//garden.scale =2.5;

invisibleground = createSprite(70, height-130, 500, 10);

boy = createSprite(70,height-200,20,20);
boy.addAnimation("Joe Running", boyImage);
boy.scale=1.5;


 //path=createSprite(80,height-200, 500,100);
 //path.width = windowWidth;
 //path.height = windowHeight-100;
 //path.addImage(pathImg);
 //path.scale = 0.5;



stoneGroup = createGroup();
coinGroup = createGroup();
birdGroup = createGroup();
}

function draw() {
if(gameState == Play )
{

background(0);
if(garden.visible)
{
    garden.velocityX = -3;
    if(garden.x<width/2)
    {
        garden2.velocityX = -3;
        garden2.visible = true;
    }
}

if(level == 1)
{
    garden.changeAnimation("level1");
    garden.scale = 0.8;
    
}
else if(level == 2)
{
    garden.changeAnimation("level2");
    garden.scale = 2.5;
    boy.scale =2;
invisibleground.y = height-60;
}


var r = Math.round(random(1,3));
if (World.frameCount % 150 == 0)
{
if(r==1)
{
createStone();
}
else if(r==2)
{
createCoin();
}
else {
createBird();
}
}

//if(path.y > 400 ){
    //path.y = height/2;
 // }
if(coinGroup.isTouching(boy))
{
coinGroup.destroyEach();
treasure = treasure + 10;
}

if(keyDown== UP_ARROW && boy.y >= 100) {
    boy.velocityY = -10;
  }
boy.velocityY = boy.velocityY + 0.8;
boy.collide(invisibleground);


}
else{
    if(stoneGroup.isTouching(boy)){
        gameState = END;
        garden.changeAnimation("game over");
        coinGroup.destroyEach();
    }
    
}

imageMode(CENTER);

drawSprites();
textSize(20);
fill(260);
push();
fill("black");
text("Total Coins: "+ treasure ,150,30);
pop();
}
*/

function setup()
{
  var canvas = createCanvas(windowWidth,windowHeight);
  
  scene0.resize(width,height-30);
  scene1.resize(width,height+270);
  scene2.resize(width,height+100);
  backgroundScene0 = createSprite(width/2, 30+height/2, width, height);
  backgroundScene0.shapeColor = "pink";
  backgroundScene0.addImage("level0", scene0);
  backgroundScene0.addImage("level1", scene1);
  backgroundScene0.addImage("level2", scene2);
  backgroundScene0.velocityX = -7;

  stoneGroup = createGroup();
  coinGroup = createGroup();
  birdGroup = createGroup();
  
  
  backgroundScene1 = createSprite(width+width/2, 30+height/2, width, height);
  backgroundScene1.shapeColor = "lightblue";
  backgroundScene1.addImage("level0", scene0);
  backgroundScene1.addImage("level1", scene1);
  backgroundScene1.addImage("level2", scene2);
  
  backgroundScene1.velocityX = -7;
  gameOver = createSprite(width/2,height/2);

  gameOver.addImage("Game Over",gameOverImage);
  gameOverImage.resize(width,height);
  gameOver.scale  = 1;
  gameOver.visible = false;

  boy = createSprite(60, height-200, 20,60);
  boy.addAnimation("Joe",boyImage);
  boy.scale = 1.5;
 boyColliderLine = createSprite(50,height-120,100,10);
 boyColliderLine.visible = false;
 //boyColliderLine = createSprite(80,height-110,200,10);
    imageMode(CENTER);
    restart = createSprite(width/2,height/2);
    restart.addImage(restartImg);
    

    restart.scale = 0.5;
  
    
    restart.visible = false;
}
function draw()
{
    background(0);
    textSize(30);
    fill(255);
    textAlign(CENTER);
    if(gameState == "play")
    {
        console.log(l);
    if(keyDown("space") && boy.y>=300)
    {
            boy.velocityY = -15;
    }

    if(backgroundScene0.x<=-width/2)
    {
         backgroundScene0.x = backgroundScene1.x+width;
    }
    if(backgroundScene1.x<=-width/2)
    {
         backgroundScene1.x = backgroundScene0.x+width;
    }
    if(touches.length > 0 && boy.y  >= height-120) {
       
        boy.velocityY = -10;
         touches = [];
      }
      boy.velocityY = boy.velocityY + 0.8
    var r = Math.round(random(1,4));
//var r=3;
   if(frameCount%50 == 0)
    {
    if(r==1)
    {
        
    }

    else if(r==2)
    {
        createStone();
    }
    else if(r==3){
        createCoin();
    }
    else{
        createBird();
    }
}
    /*if(frameCount%30 == 0)
    {
            createStone();
           
            createCoin();
    }
    if(frameCount%50 == 0)
    {
        createBird();
    }  */      
  if(score%5 == 0)  
  {
    if(l == "level0")
        {
                
        }
    else if(l == "level1")
        {
    boyColliderLine.y = height-60;
    backgroundScene0.y= height-400;
    backgroundScene1.y = height- 400;
   // backgroundScene1.y = height-400;

        }
        else if(l== "level2")
        {
    boyColliderLine.y = height-60;
    backgroundScene0.y= height-400;
    backgroundScene1.y = height- 400;
    
        }
    else
        {
     //l = "level2";
     gameState = "win";
         }
    
    l="level"+floor(score/5);
    backgroundScene0.changeImage(l);
    backgroundScene1.changeImage(l);
     } 

    boy.collide(boyColliderLine);
    //boy.isTouching(coinGroup, d)
 if(boy.isTouching(coinGroup))
 {
     coinSound.play();
 }
   boy.overlap(coinGroup,removeCoin);
    }
    if(boy.isTouching(stoneGroup)||(boy.isTouching(birdGroup)))
    {
        gameState = "end";
        gameOverSound.play();
     
    }

   if(score == 15)
   {
     gameState ="win";
     gameWinSound.play();
    score=16;
   }
  
   if(gameState == "win")
   {
 var gameWin = createSprite(width/2-20,height/2-50);
gameWinImage.resize(width,height);
imageMode(CENTER);
 gameWin.addImage("Game Win",gameWinImage);
 gameWin.scale = 1.25;
   // background("blue");
  //this.showRank();
   
   }

  
    else if(gameState == "end")
{
     imageMode(CENTER);
   
   gameOver.visible = true;
   restart.visible = true;
    boy.velocityY = 0;
    boy.remove();
    stoneGroup.setVisibleEach(false);
    birdGroup.setVisibleEach(false);
    stoneGroup.setVelocityEach(0);
   coinGroup.setVisibleEach(false);
    //stoneGroup.destroy();
    birdGroup.setVelocityEach(0);
    
   
if(touches.length>0 || mousePressedOver(restart)) {      
    location.reload();
   // reset();
    touches = []
  }
}
if(keyDown("space")&& boy.y>=120)
{
    boy.velocityY=-10;

}
boy.velocityY = boy.velocityY + 0.8;
drawSprites();
if(gameState != "win")
{
   text("Score : "+score,80,35);
}


}

/*function d(boy,object1)
{
    object1.destroy();
    score=score+1;
  
}*/


function removeCoin(boy, coin){
    score+=1;
    
    coin.remove();
    coin.destroy();
    }

function createStone()
{

  var stone = createSprite(width+10,height/2+260, 10, 10);
  stone.addImage(stoneImage);
  stone.scale=0.5;
  stone.velocityX = -5;
  stone.lifetime =(width+100)/5;

  stoneGroup.add(stone);

    }
function createCoin()
{
    var coin;
   //var coin = createSprite(width,height-350, 10, 10);
   var r = Math.round(random(1,5));
   switch(r)
   {
        case 1:
            coin = createSprite(width,height-200, 10, 10);
            break;
        case 2: 
             coin = createSprite(width,height-250, 10, 10);
             break;

        case 3: 
             coin = createSprite(width,height-300, 10, 10);
             break;

        case 4: 
             coin = createSprite(width,height-350, 10, 10);
             break;
        
       case 5: 
             coin = createSprite(width,height-250, 10, 10);
             break;
   }
    coin.addImage(coinImage);
    coin.scale=0.12;
    coin.velocityX = -5;
    coin.lifetime = (width+100)/5;
    coinGroup.add(coin);
}

function createBird()
{
   // var bird = createSprite(width,height-500,10,10);
   var bird;
    //bird.addImage(birdImage);
   // bird.scale = 0.1;
   // bird.velocityX = -5;
   // bird.lifetime =(width+100)/5;
    var r = Math.round(random(1,5));
    switch(r)
    {
        case 1:
            bird = createSprite(width,height-350,10,10);
                break;

        case 2:  bird = createSprite(width,height-300,10,10);
                break;
        
        case 3:  bird = createSprite(width,height-250,10,10);
                break;

        case 4:  bird = createSprite(width,height-200,10,10);
                break;
        
        case 5:  bird = createSprite(width,height-400,10,10);
                break;

    }
   // bird.addImage(birdImage);
   bird.addAnimation("flying",birdImage);
    bird.scale = 0.7;
    bird.velocityX = -5;
    bird.lifetime =(width+100)/5;
    birdGroup.add(bird);
}

/*function reset(){
    gameState = play;
    gameOver.visible = false;
    restart.visible = false;
    l ="level0";
    coinGroup.destroyEach();
    stoneGroup.destroyEach();
    birdGroup.destroyEach(); 
    score = 0;
    
  }*/
  
/*showRank()
 {
    swal({
      title: `Awesome!`,
      text: "You won the game",
      //imageUrl:
        //"https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    //  imageUrl: "https://dx5683gi1tv0w.cloudfront.net/dtrjyhj9q/image/upload/w_1080,h_1080,c_pad,b_auto/s3/img0be16e8d8",
  // imageUrl:" https://image.shutterstock.com/image-vector/trophy-cup-award-vector-illustration-260nw-603371879.jpg",
   imageUrl: "https://static.vecteezy.com/system/resources/previews/003/090/132/original/trophy-winning-cup-vector.jpg",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }
  */
/*  function gameOver() 
  {
    swal({
      title: `Game Over`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
}*/


       
