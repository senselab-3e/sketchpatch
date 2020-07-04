var lines, markov, data1, data2, x = 160, y = 240;
var mySound;
let myCanvas;
var randomImageLocation;
var img = [];
var index = 0;

function preload() {

  data1 = loadStrings('assets/1.txt');
  data2 = loadStrings('assets/2.txt');
  mySound = loadSound('assets/bell.mp3');
  img[0] = loadImage("img/img0.png");
  img[1] =  loadImage("img/img1.png");
}

function setup() {

  let createcanvas = createCanvas(window.innerWidth /2 , window.innerHeight );
  createcanvas.parent('mycanvas');
  bg = loadImage("background.jpg");
  textFont('avenir');
  textSize(20 + (mouseX / width)*72);
  image(img[index], 200, 200, 100, 200);
  // textAlign(LEFT);
  frameRate(30);
 
   
   fill('beige');
    lines = ["place your order!"];
    

  // create a markov model w' n=4
  markov = new RiMarkov(8);

  // load text into the model
  markov.loadText(data1.join(' '));
  markov.loadText(data2.join(' '));
  drawText();
  // var firstPDF = createA('pdfs/humanbutnonhuman.pdf', 'They are not human but they are not non-human', 1000, 700);
  // firstPDF.class("btn btn-dark rounded float-top");
  // var secondPDF = createA('pdfs/anarchivalcinema.pdf', 'Anarchival Cinema', 1000, 700);
  // secondPDF.class("btn btn-dark rounded ml-1 float-right");

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
   line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
  ellipse(mouseX, mouseY, 03, 03);
  
}


function drawText() {

  background(bg);
  textSize(20 + (mouseX / width)*33);
  text(lines.join(' '), x, y, 600, 400);
  // text('PDF1', 1000, 700);
  // text('PDF2', 1080, 700);
  
}

function mouseClicked() {

  x = 100;
  y = 220;
  lines = markov.generateSentences(10);
  drawText();
  mySound.setVolume(0.1);
  mySound.play();
  image(img);
  
}

function mouseReleased(){
           index = index + 1;
          if (index == img.length){
              index = index - img.length;
             
    }
     
}
