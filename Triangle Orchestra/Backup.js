
let lumps = [drawPants, drawSkirt, drawPleats, drawOveralls];
let index = 0;


function setup() {
  createCanvas(1000, 1000);
  background("pink");


  for (let row = 5; row<width; row = row + 130){
    for(let col=5; col<height; col = col +110){

  lumps[index](row, col);
  index=index + 1;

  if (index == lumps.length) {
    index = 0;
  }
  }
}
}

function draw() {

}



function drawOveralls(x,y){
  noStroke();
  fill("pink");
  rect(x, y, 105, 130);
  fill("green");
	beginShape();
	strokeWeight(1);
  stroke("black");
	vertex(x+77, y+3);
	vertex(x+67, y+3);
	vertex(x+67, y+23);
	vertex(x+37, y+23);
	vertex(x+37, y+3);
	vertex(x+27, y+3);
	vertex(x+27, y+53);
	vertex(x+2, y+128);
	vertex(x+27, y+128);
	vertex(x+52, y+78);
	vertex(x+77, y+128);
	vertex(x+102, y+128);
	vertex(x+77, y+53);
	endShape(CLOSE);
	arc(x+52, y+28, 35, 45, 0, PI);
	line(x+69, y+27, x+34, y+27);
	line(x+27, y+53, x+77, y+53);
	line(x+25, y+58, x+78, y+58);

}

function drawSkirt(x,y){
  noStroke();
  fill("pink");
    rect(x, y, 105, 130);
  fill("blue");
	beginShape();
  strokeWeight(1);
  stroke("black");
	vertex(x+77, y+40);
	vertex(x+27, y+40);
	vertex(x+7, y+90);
	vertex(x+97, y+90);
	endShape(CLOSE);
  line(x+22, y+55, x+81, y+55);
  ellipse(x+52, y+45, 10, 10);

}

function drawPleats(x,y){
  noStroke();
  fill("pink");
    rect(x, y, 105, 130);
  fill("pink");
  beginShape();
  strokeWeight(1);
  stroke("black");
  vertex(x+77, y+40);
  vertex(x+27, y+40);
  vertex(x+12, y+88);
  vertex(x+92, y+88);
  endShape(CLOSE);
  fill("red");
  beginShape();
  vertex(x+77, y+40);
  vertex(x+27, y+40);
  vertex(x+7, y+90);
  vertex(x+17, y+90);
  vertex(x+22, y+80);
  vertex(x+27, y+90);
  vertex(x+37, y+90);
  vertex(x+42, y+80);
  vertex(x+47, y+90);
  vertex(x+57, y+90);
  vertex(x+62, y+80);
  vertex(x+67, y+90);
  vertex(x+77, y+90);
  vertex(x+82, y+80);
  vertex(x+87, y+90);
  vertex(x+97, y +90);
  endShape(CLOSE);
}

function drawPants(x,y){
  noStroke();
  fill("pink");
  rect(x, y, 105, 130);
  fill("grey");
	beginShape();
  strokeWeight(1);
  stroke("black");
vertex(x+77, y+25);
vertex(x+27, y+25);
vertex(x+2, y+100);
vertex(x+27, y+100);
vertex(x+52, y+50);
vertex(x+77, y+100);
vertex(x+102, y+100);
endShape(CLOSE);
line(x+22, y+40, x+81, y+40);
ellipse(x+52, y+30, 10, 10);
}
