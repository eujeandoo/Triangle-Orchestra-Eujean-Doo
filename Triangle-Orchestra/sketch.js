
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
var button10;

let on = false;
var started = false;
var point = 0;
var go = false;
var start = false;

let currentSong = 0;



function preload() {
 mySound = loadSound('Triangle sound - 4_17_18, 11.04 AM.m4a');
 aragonaise = loadSound('_Waltz_ - 4_24_18, 3.02 PM.m4a');
 masquerade = loadSound('Masquerade.m4a');
 knight = loadSound('knight.m4a');
 animal = loadSound('CarnivaloftheAnimals.m4a');
 beauty = loadSound('SleepingBeauty.m4a');
 //preload all the songs and triangle sound
}


function setup(){
//set a few things that remain constant throughout the game
    createCanvas(500, 400);
    frameRate(120);

//initialize object values
  fft = new p5.FFT(0.9, 128);
  mySound.setVolume(0.1);
  me = new Avatar(mouseX,mouseY);
  them = new Conductor(400, 100);

//make and hide all buttons besides "play"
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
  button05.mouseClicked(togglePlaying);
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

  button10=createButton('Choose new song');
  button10.position(100, 150);
  button10.mouseClicked(SongMenu);
  button10.hide();

  resetSketch();
}

function draw(){
  if (on == true){
     Cat();//function that starts the game
  }
  if(start == true){//if you get more than 100 points, start = true
    Win();
  }
 if (started == true){//pause button
    button08.show();
    button10.show();
    aragonaise.pause();
    masquerade.pause();
    knight.pause();
    animal.pause();
    beauty.pause();
  }
}

function resetSketch(){
  on = false;
  started = false;
  counter = 0;
  point = 0;
  fill(0);
  background(220);
  stroke(0);
  text('Triangle Game', 150, 10);//starting page
  text('You are star triangle player for the San Francisco Orchestra!', 10, 30);
  text('To play the triangle, hold the mouse over the triangle and hit SPACEBAR.', 10, 250);
  text('When you hit the triangle when it is green, you get one point.', 10, 270);
  text('Try to get 100 points before the song ends.', 10, 290);
  text('If you hit the triangle when it is red, you will make a mistake.', 10, 310);
  text('If you make more than 15 mistakes, you lose.', 10, 330);
  button01.show();
  button08.hide();
  button10.hide();
  print("reset");
  print("on = "+on);
  print("started = "+started);
}


function togglePlaying() {
  if (started == false) {
    started = true;
    button05.html("play");
  }
  else {
    on = true;
    started = false;
    button05.html("pause");
    button08.hide();
    button10.hide();
    print(currentSong);
    if (currentSong == 1){
      masquerade.play();
    }
    else if (currentSong == 2){
      aragonaise.play();
    }
    else if (currentSong == 3){
      knight.play();
    }
    else if (currentSong == 4){
      beauty.play();
    }
    else if (currentSong == 5){
      animal.play();
    }
    else {
      print("no song to play");
    }
  }
}

function keepgoing(){
  started = false;
  on = true;

  button08.hide();
  button10.hide();

  print("keepgoing");
  print("started = "+started);
  print("on = "+on);
}

function SongMenu(){
    on = false;
    started = false;
    background(220);
    button01.hide();
    button08.hide();
    button10.hide();

    fill(0);
    stroke(0);
    strokeWeight(0);
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
  currentSong = 1;
}

function Song02(){
  aragonaise.play();
  on = true;
  currentSong = 2;
}

function Song03(){
  knight.play();
  on = true;
  currentSong = 3;
}

function Song04(){
  beauty.play();
  on = true;
  currentSong = 4;
}

function Song05(){
  animal.play();
  on = true;
  currentSong = 5;
}


function Cat(){//function for game
    button04.hide();
    button03.hide();
    button02.hide();
    button06.hide();
    button05.show();
    button07.hide();
    background(220);
    strokeWeight(0);
    text('Lives:'+(15-counter), 10, 10);
    text('Points:'+ (point), 10, 20);
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
    // console.log(spectrum);
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
     if (spectrum[10]<170 && keyIsPressed){
       strokeWeight(5);
       stroke("red");
       arc(400, 150, 50, 50, 179.8, 100, PI);
       ellipse(375, 80, 5, 5);
       ellipse(425, 80, 5, 5);
       line(370, 70, 380, 75);
       line(420, 75, 430, 70);
     }
     if(counter>15){
       Lose();
     }
     if(point>100){
       start=true;
     }
}


  function Lose(){
    aragonaise.pause();
    masquerade.pause();
    knight.pause();
    beauty.pause();
    animal.pause();
    background(220);
    strokeWeight(0);
    text('You screwed up the entire performance! You are a disgrace to this orchestra!', 50, 20);
    stroke("blue");
    strokeWeight(5);
    ellipse(400, 100, 100, 100)
    strokeWeight(5);
    stroke("red");
    arc(400, 150, 50, 50, 179.8, 100, PI);
    ellipse(375, 80, 5, 5);
    ellipse(425, 80, 5, 5);
    line(370, 70, 380, 75);
    line(420, 75, 430, 70);
  }

  function Win(){
    aragonaise.pause();
    masquerade.pause();
    knight.pause();
    beauty.pause();
    animal.pause();
    background(220);

  }

  function keyPressed(){
    strokeWeight(10);
    stroke("black");
    line(150, 114, 200, 200);
    line(200, 200, 100, 200);
    line(100, 200, 150, 114);
    if (spectrum[10]>170){
      point=point+1;
    }
    if (spectrum[10]<170){
      strokeWeight(5);
      stroke("red");
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
  }


class Avatar {//triangle stick

	constructor(x,y){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;

	}

	drawMe(){  // triangle stick
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
	drawThem(){
    		stroke("blue");
        strokeWeight(5);
		    ellipse(400, 100, 100, 100)
	}
}
