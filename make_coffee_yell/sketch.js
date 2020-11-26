var img;

function preload() {
  img = loadImage('no.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CORNER);
  var scale = 0.8;
  imageMode(CENTER);
  image(img, 0.5*width, 0.5*height, scale*width, scale*img.height*width/img.width); 
}

