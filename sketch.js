
var fixedRect,movingRect;
function setup(){
    createCanvas(800,500);
    fixedRect = createSprite(600,200,50,50);
    fixedRect.velocityX = -2
    fixedRect.shapeColor="blue";
    fixedRect.debug=true;
    movingRect = createSprite(200,200,50,50);
    movingRect.velocityX = +2
    movingRect.shapeColor="blue";
    movingRect.debug=true
}

function draw(){
    background(0);

    
bounce(fixedRect,movingRect);
    drawSprites();
}

function bounce(p1,p2){
    if(p1.x - p2.x <= p2.width/2 + p1.width/2 && p2.x -p1.x <= p2.width/2 + p1.width/2 ){

    p2.velocityX= p2.velocityX * (-1)
    p1.velocityX= p1.velocityX * (-1)

    }else 
    if(p1.y - p2.y <= p2.height/2 + p1.height/2 && p2.y -p1.y <= p2.height/2 + p1.height/2){

    p2.velocityY= p2.velocityY * (-1)
    p1.velocityY= p1.velocityY * (-1)

    }
}