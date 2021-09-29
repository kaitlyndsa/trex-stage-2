function preload(){
tximage=loadAnimation('trex1.png','trex3.png','trex4.png')
groundimage=loadImage('ground2.png')
cloudimage=loadImage('cloud.png')
obstacle1=loadImage('obstacle1.png')
obstacle2=loadImage('obstacle2.png')
obstacle3=loadImage('obstacle3.png')
obstacle4=loadImage('obstacle4.png')
obstacle5=loadImage('obstacle5.png')
obstacle6=loadImage('obstacle6.png')
}


function setup(){
createCanvas(400,400)
trex=createSprite(53,350,10,10)
trex.addAnimation('trex',tximage)
ground=createSprite(200,380,400,5)
ground.addImage('ground',groundimage)
edges=createEdgeSprites()
}

function draw(){
background('white')  
if(keyDown('space')){
trex.velocityY=-10
}
trex.velocityY=trex.velocityY+0.8
trex.collide(ground)
clouds()
drawSprites()
}
function clouds(){
if(frameCount%70===0){
cloud=createSprite(400,50,10,10)
cloud.addImage('cloud',cloudimage)
cloud.velocityX=-4
cloud.scale=0.1
cloud.y=random(0,200)
cloud.lifetime=100
}
}