
//create a variable to hold your avatar
let me;
let them;

function preload() {
 mySound = loadSound('Triangle sound - 4_17_18, 11.04 AM.m4a');
}

function setup() {
  mySound.setVolume(0.5);
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(mouseX,mouseY);
  them = new Conductor(400, 100);
stroke(0);
frameRate(30);
textSize(20);
textSize(30);
textAlign(CENTER);

}

function draw(){
	background(220);
  strokeWeight(10);
  stroke("blue");
  line(150, 114, 200, 200);
  line(200, 200, 100, 200);
  line(100, 200, 150, 114);
  them.drawThem();
  me.drawMe();
  me.moveMe();
  me.bounceMe();
  me.angryMe();
  }




//avatar class
class Avatar {

	constructor(x,y){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;

	}

	drawMe(){  // draw the running person
    		stroke("blue");
        strokeWeight(20);
    		fill("blue");
		    line(this.x,this.y,this.x-40, this.y-40);


	}
  moveMe(){
    this.x=mouseX
    this.y=mouseY
	}

  bounceMe(){
    if (this.x-40 > 100 && this.x-40 < 200 && this.y-40 > 100 && this.y-40 < 200){
        mySound.play();

  }
}
  angryMe(){
    if(this.x-40 > 100 && this.x-40 < 200 && this.y-40 > 100 && this.y-40 < 200 && frameCount%2 ==0){
         strokeWeight(5);
         stroke("red");
         arc(400, 150, 50, 50, 179.8, 100, PI);
         ellipse(375, 80, 5, 5);
         ellipse(425, 80, 5, 5);
         line(370, 70, 380, 75);
         line(420, 75, 430, 70);
       }
    }
  }



class Conductor {

	constructor(x,y){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;

	}

	drawThem(){  // draw the running person
    		stroke("blue");
        strokeWeight(5);
		    ellipse(400, 100, 100, 100)

	}





}
