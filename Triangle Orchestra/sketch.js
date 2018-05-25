let me;
let them;
var aragonaise;
var masquerade;
var knight;
var beauty;
var animal;
var fft;
var spectrum;
var counter = 0;
var button01;
var button02;
var button03;
var button04;
var button05;
var button06;
var button07;
var button08;
var button09;
var button10;
let on = false;
var started = false
var point = 0;
var go = false;



function preload() {
 mySound = loadSound('Triangle sound - 4_17_18, 11.04 AM.m4a');
 aragonaise = loadSound('_Waltz_ - 4_24_18, 3.02 PM.m4a');
 trombone = loadSound('trombone.m4a')
 masquerade = loadSound('Masquerade.m4a');
 knight = loadSound('knight.m4a');
 animal = loadSound('CarnivaloftheAnimals.m4a');
 beauty = loadSound('SleepingBeauty.m4a');
}


function setup(){
  resetSketch();
}

function resetSketch(){
  background(220);
  fft = new p5.FFT(0.9, 128);
  mySound.setVolume(0.1);
  createCanvas(500, 400);
  me = new Avatar(mouseX,mouseY);
  them = new Conductor(400, 100);
  frameRate(120);
  text('Triangle Game', 150, 10);
  text('You are star triangle player for the San Francisco Orchestra!', 10, 30);
  text('To play the triangle, hold the mouse over the triangle and hit SPACEBAR.', 10, 250);
  text('Hit the triangle when it is green. If you hit the triangle when it is red, you will make a mistake.', 10, 270);
  text('If you make more than 15 mistakes, you lose.', 10, 290);
  button01=createButton('play');
  button01.position(150, 150);
  button01.mouseClicked(SongMenu);
  button02=createButton('Masquerade Waltz');
  button02.position(100, 100);
  button02.mouseClicked(Song01);
  button02.hide();
  button03=createButton('Aragonaise');
  button03.position(100, 200);
  button03.mouseClicked(Song02);
  button03.hide();
  button04=createButton('Dance of the Knights');
  button04.position(100, 300);
  button04.mouseClicked(Song03);
  button04.hide();
  button05=createButton('pause');
  button05.position(480, 380);
  button05.mouseClicked(Stop);
  button05.hide();
  button06 = createButton('Sleeping Beauty Waltz');
  button06.position(100, 150);
  button06.mouseClicked(Song04);
  button06.hide();
  button07=createButton('Carnival of the Animals');
  button07.position(100, 250);
  button07.mouseClicked(Song05);
  button07.hide();
  button08=createButton('Quit');
  button08.position(100, 100);
  button08.mouseClicked(resetSketch);
  button08.hide();
  button09=createButton('Continue');
  button09.position(100, 150);
  button09.mouseClicked(keepgoing);
  button09.hide();
  button10=createButton('Choose new song');
  button10.position(100, 200);
  button10.mouseClicked(SongMenu);
  button10.hide();
}

function draw(){
  if (on == true){
     Cat();
  }
  if(started == true){
    aragonaise.pause();
    masquerade.pause();
    knight.pause();
    animal.pause();
    beauty.pause();
    Pause();
  }
}


function Pause(){
  button08.show();
  button09.show();
  button10.show();
}

function turnOn(){
  on = true;
}

function keepgoing(){
  started = false;
}

function SongMenu(){
    background(220);
    button01.hide();
    fill('black');
    text('Song Menu', 100, 50);
    text('Choose a song to play.', 100, 70);
    text('Break a leg!', 100, 350);
    button02.show();
    button03.show();
    button04.show();
    button06.show();
    button07.show();

}

function Song01(){
  masquerade.play();
  on = true;
}

function Song02(){
  aragonaise.play();
  on = true;
}

function Song03(){
  knight.play();
  on = true;
}

function Song04(){
  beauty.play();
  on= true;
}

function Song05(){
  animal.play();
  on = true;
}


function Cat(){
    button04.hide();
    button03.hide();
    button02.hide();
    button06.hide();
    button05.show();
    button07.hide();
    background(220);
    strokeWeight(0);
    text('Lives:'+(15-counter), 10, 10);
    text(point, 10, 30);
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
     if (spectrum[10]>170){
       strokeWeight(10);
       stroke("green");
       line(150, 114, 200, 200);
       line(200, 200, 100, 200);
       line(100, 200, 150, 114);
     }
     if(spectrum[10]<170){
       strokeWeight(10);
       stroke("red");
       line(150, 114, 200, 200);
       line(200, 200, 100, 200);
       line(100, 200, 150, 114);
     }
     if (spectrum[10]<135 && keyIsPressed){
       strokeWeight(5);
       stroke("red");
       arc(400, 150, 50, 50, 179.8, 100, PI);
       ellipse(375, 80, 5, 5);
       ellipse(425, 80, 5, 5);
       line(370, 70, 380, 75);
       line(420, 75, 430, 70);
     }
     if(counter>15){
       background('blue');
       Lose();
     }
}


  function Lose(){
    aragonaise.pause();
    trombone.play();
  }


  function Stop(){
    started = true;
  }


  function keyPressed(){
    if (spectrum[10]<170){
      strokeWeight(5);
      stroke("red");
      arc(400, 150, 50, 50, 179.8, 100, PI);
      ellipse(375, 80, 5, 5);
      ellipse(425, 80, 5, 5);
      line(370, 70, 380, 75);
      line(420, 75, 430, 70);
      counter=counter+1;
      print(counter);
    }
    if (spectrum[10]>170){
      point=point+1;
    }
  }




function keyPressed(){
  if (spectrum[10]<170){
    strokeWeight(5);
    stroke("red");
    arc(400, 150, 50, 50, 179.8, 100, PI);
    ellipse(375, 80, 5, 5);
    ellipse(425, 80, 5, 5);
    line(370, 70, 380, 75);
    line(420, 75, 430, 70);
    counter=counter+1;
    print(counter);
  }
  strokeWeight(10);
  stroke("black");
  line(150, 114, 200, 200);
  line(200, 200, 100, 200);
  line(100, 200, 150, 114);

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

