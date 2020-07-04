let x=100;
var im;

function preload(){
  im = loadImage('thingies/onpic.png');
  im2 = loadImage('thingies/beblm.png');
}


function setup(){
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  pg = createGraphics(200, 200);
  pg.textSize(12);

}

function draw(){

    x = x + 1;
  background('blue', 0, 18, 10);

  // transform(300,300);
  pg.background('blue');
  pg.text("med last night, because the doctor dreamed it too;differences, in which", x, 100);
  texture(pg);
  plane(1000,1000);


  beginShape();
  fill('yellow');
  noStroke();
  vertex(x,255);
  vertex(200,30);
  vertex(20,490);
  vertex(48,x-20);
  vertex(637,255);
  endShape();

  beginShape();
  //fill('green');
  texture(im2);
  noStroke();
  vertex(100,255, 0, 20);
  vertex(200,30, 200, 2);
  vertex(20,490, 203, 30);
  vertex(48, 80, 200, 30);
  vertex(637, 255, 200, 3);
  endShape();

  beginShape();
  texture(im);
  vertex(10, x, 0, 0);
  vertex(80, 5, 100, 0);
  vertex(95, 90, x-200, 100);
  vertex(40, 95, 0, 100);
  endShape();

}
