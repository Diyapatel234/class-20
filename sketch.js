var movingrect,fixedrect;

function setup(){
createCanvas(1200,800);
  movingrect = createSprite(455,88,40,25);
  movingrect.shapeColor="lightblue";

  fixedrect = createSprite(500,285,40,25);
  fixedrect.shapeColor="lightblue";

}

function draw(){
  background("black");
movingrect.x=mouseX;
movingrect.y=mouseY;

if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && 
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && 
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2  ){
  movingrect.shapeColor="pink";
  fixedrect.shapeColor="pink";
}
else{
  movingrect.shapeColor="lightblue";
  fixedrect.shapeColor="lightblue";
}
drawSprites();

}
