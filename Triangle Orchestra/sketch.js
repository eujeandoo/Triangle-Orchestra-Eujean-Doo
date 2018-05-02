
//create a variable to hold your avatar
let me;
let them;
var song;
var fft;
var spectrum;
var button;
var started;



function preload() {
 mySound = loadSound('Triangle sound - 4_17_18, 11.04 AM.m4a');
 song = loadSound('_Waltz_ - 4_24_18, 3.02 PM.m4a');
}

function setup() {
  started = false;
  fft = new p5.FFT(0.9, 128);
  mySound.setVolume(0.1);
  createCanvas(500, 400);
  me = new Avatar(mouseX,mouseY);
  them = new Conductor(400, 100);
frameRate(120);
  song.play();

}

function draw(){
  button = createButton('click me');
 button.position(19, 19);
 button.mousePressed(flag);
 if (started== true){
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
   spectrum = fft.analyze();
   console.log(spectrum);
   if (spectrum[10]<135 && keyIsPressed){
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

function flag(){
  started = true;
}

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
    if (this.x-40 > 100 && this.x-40 < 200 && this.y-40 > 100 && this.y-40 < 200 && keyIsPressed){
              mySound.play();
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
