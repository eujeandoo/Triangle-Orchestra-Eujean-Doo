//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var hand;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
hand = loadAnimation("hand001.png");

function setup() {
  createCanvas(800,300);
}

function draw() {
  background(255,255,255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(hand, 100, 100
}
