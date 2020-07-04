var copey;
let canvas = 800;

function preload() {
  copey = loadSound('assets/minmov-soundz-copey.mp3');
}

function setup(){
  frameRate(60);
  createCanvas(canvas*1.5, canvas, WEBGL);
}

function mouseLure(){
  trigSound(copey);
  copey.loop();
}

function trigSound(buf) {
 buf.play(0, 1.0, 1.0, 0, buf.duration());
}

function draw(){
  var mouseNow = pow((pow(((mouseX*2)/(canvas*1.5)), 2)+pow(((mouseY*2)/canvas), 2)), 0.5);
  var mouseBefore = pow((pow(((pmouseX*2)/(canvas*1.5)), 2)+pow(((pmouseY*2)/canvas), 2)), 0.5);
  var deltaT = (10*abs(mouseNow-mouseBefore));

  if (deltaT>1){
    deltaT = 1;
  }

  copey.setVolume(deltaT, 0.5);
  copey.rate(1+(mouseNow-mouseBefore));
}
