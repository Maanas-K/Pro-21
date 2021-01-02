var canvas;
var redS, blueS, yellowS, greenS;
var ball;
var music;

function preload(){
    song = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redS= createSprite(100,550,100,10);
    redS.shapeColor= "red";
    redS.depth=box.depth

    blueS= createSprite(250,550,100,10);
    blueS.shapeColor="blue";
    blueS.depth=box.depth

    yellowS= createSprite(400,550,100,10);
    yellowS.shapeColor="yellow";
    yellowS.depth=box.depth

    greenS= createSprite(550,550,100,10);
    greenS.shapeColor="green";
    greenS.depth=box.depth

    ball=createSprite(random(20,750),535,30,30);
    ball.velocityX=3;
    ball.shapeColor="white";
   



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    
    
    

    if(redS.isTouching(ball)//&&ball.bounceOff(redS)
    ){
        
        ball.shapeColor="red";
        song.play();
         
    }else{
        song.stop(); 
    }

    if(blueS.isTouching(ball)//&&ball.bounceOff(blueS)
    ){
        ball.shapeColor="blue";
        song.play();
        
    }else{
        song.stop(); 
    }


    if(ball.isTouching(greenS)//&&ball.bounceOff(greenS)
    ){
        ball.shapeColor="green";
        song.play();
        
    }else{
        song.stop(); 
    }


    if(ball.isTouching(yellowS)//&&ball.bounceOff(yellowS)
    ){
        ball.shapeColor="yellow";
        song.stop();
        ball.velocityX=0;
        
    }



    //add condition to check if box touching surface and make it box

   /* if((touch(box,red))&&(bounce(box,red))){
        box.shapeColor="red";
        music.play();
    }

    if((touch(box,blue))&&(bounce(box,blue))){
        box.shapeColor="blue";
        music.play();
    }

    if((touch(box,yellow))&&(bounce(box,yellow))){
        box.shapeColor="yellow";
        music.play();
    }

    if((touch(box,green))&&(bounce(box,green))){
        box.shapeColor="green";
        music.play();
    }*/
    


    drawSprites();
}

/*function touch(ob1,ob2){
  
    if((ob1.y-ob2.y<ob1.y/2 + ob2.y/2)&&(ob2.y-ob1.y<ob1.y/2+ob2.y/2)){
        return true;


    }else{
        return false;
    }
}

function bounce(ob3, ob4){

    if(touch(ob3, ob4)){
        ob3.velociyY=ob3.velociyY*-1;
    }
}*/








