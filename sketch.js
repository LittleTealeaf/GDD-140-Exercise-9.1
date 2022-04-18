/// <reference path="./node_modules/@types/p5/global.d.ts" />


let player;

function setup() {
    createCanvas(windowWidth - 20,windowHeight - 20);
    player = createSprite(width/2,height/2,30,30);

    //Creates 10 random sprites
    for(var i = 0; i < 10; i++) {
        createSprite(random(0,width),random(0,height),20,20);
    }

}

function draw() {
    background(220);
    drawSprites();
    //Loops through all sprites
    for(var i = 0; i < allSprites.length; i++) {
        //If the player overlaps
        if(player.overlap(allSprites[i])) {
            //change player color and remove sprite
            player.shapeColor = allSprites[i].shapeColor;
            allSprites[i].remove();
        }
    }
}


//Key pressed
function keyPressed() {
    if(key == "a") {
        player.velocity.x = -4;
    } else if(key == "d") {
        player.velocity.x = 4;
    } else if(key == "w") {
        player.velocity.y = -4;
    } else if(key == "s") {
        player.velocity.y = 4;
    }
    return false;
}

//Reset only that axis if key is released
function keyReleased() {
    if(key == "a" || key == "d") {
        player.velocity.x = 0;
    } else if(key == "w" || key == "s") {
        player.velocity.y = 0;
    }
}
