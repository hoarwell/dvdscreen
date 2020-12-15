let x;
let y;
let xspseed;
let yspeed;
let logo;
let red, green, blue;

function preload(){
  logo = loadImage("dvd.jpeg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  x = random(width);
  y = random(height);
  xspeed = 4;
  yspeed = 4;
  logoWidth = innerWidth
  changeColor();
  windowResized();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function changeColor(){
  red = random(100);
  green = random(100);
  blue = random(100);
}

function draw() {
  background(0);
  //rect(x, y, 80, 60);
  //draw logo
  tint(red, green, blue);
  image(logo, x, y, 120, 100);
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x + 120 >= width){
    xspeed = xspeed * -1;
    x = width - 120;
    changeColor();
  }else if (x <= 0){
    xspeed = xspeed * -1;
    x = 0;
    changeColor();
  }
  if (y + 100 >= height){
    yspeed = yspeed * -1;
    y = height - 100;
    changeColor();
  }else if (y <= 0){
    yspeed = yspeed * -1;
    y = 0;
    changeColor();
  }
}
