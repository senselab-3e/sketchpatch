// function setup() {
//   createCanvas(800, 400);
// }

// function draw() {
//   background(0, 100, 220);
//   fill(100, 0, 255, 10);
//   ellipse(55, 46, 77, 55);
// }


//Dynamically drawn sprites
//sprite with a custom drawing function follows the mouse
//and changes shape according to its speed

var stretchy;
var face;
var bg;
var x = 0;
var speed = 3;
var lines, markov, data1, data2, x = 160, y = 240;

let avenir;

function preload() {
  avenir = loadFont('assets/Avenir.otf');
  data1 = loadStrings('assets/1.txt');
  data2 = loadStrings('assets/2.txt');
}


function setup() {
  bg = loadImage("background.jpg");
  createCanvas(windowWidth, windowHeight);
  face = loadImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9e/9e971856dedbf2348c2159eaa7d892c29381e7d8_medium.jpg');
  lines = ["click to (re)generate!"];

  // create a markov model w' n=4
  markov = new RiMarkov(4);

  // load text into the model
  markov.loadText(data1.join(' '));
  markov.loadText(data2.join(' '));


  //Sometimes image sequences are not enough and you may want to
  //use p5's drawing function while retaining the built-in features of the
  //sprite class
  stretchy = createSprite(400, 200, 10, 10);


  //To do so you can override (overwrite) the draw() function of the sprite
  //and make it display anything you want in its current position.
  //In javascript function and methods can be assigned like variables

  stretchy.draw = function() {

    //the center of the sprite will be point 0,0
    //"this" in this function will reference the sprite itself
    fill(237, 205, 0);

    //make the ellipse stretch in the sprite direction
    //proportionally to its speed
    push();
    rotate(radians(this.getDirection()));
    blendMode(OVERLAY);
    ellipse(0, 0, 100+this.getSpeed(), 100-this.getSpeed());
    pop();

    //this.deltaX and this.deltaY are the position increment
    //since the last frame, move the face image toward the direction
    image(face, this.deltaX*2, this.deltaY*2);
  };

  stretchy.maxSpeed = 10;
}

function draw() {
  background(bg);

  //mouse trailer, the speed is inversely proportional to the mouse distance
  stretchy.velocity.x = (mouseX-stretchy.position.x)/10;
  stretchy.velocity.y = (mouseY-stretchy.position.y)/10;
    drawText();
 

//   let s = 'Whenever a cock enters me every night three nights in a row, I ask myself regardless of who the cock belongs to should I let my SELF depend on this person or should I remain a closed entity. I say: I am beginning to love you I do not want to see you again. The man thinks I am crazy so he wants nothing to do with me. THE IMPORTANCE OF SEX BECAUSE IT BREAKS THE RATIONAL MIND.(Kathy Acker) ';
// fill(50);
// textSize(13);
// text(s, 200, 10, 214, 200);

// let j = 'As Henriksen (2016) discusses in her thesis, the so called “spectral turn” in the 1990s is somehow intertwined with “monster studies”, which itself suffered a subdivision in the past century after the common sense entitled “anatomical anomalies” started to be addressed by Biological and Medical Sciences, deconstructing or transforming a lot of monster myths. Ghosts or spectral entities were almost exclusively analyzed in terms of superstition or metaphors and were put in vogue again after a revival in humanities in the 1970s, and especially after Derrida’s re-ontologization of ghosts through his hauntology. However, the spectre being a figure that defies inter-categorical borders, both monsters and spectres still share a little bit of a common ground or strata, especially in the work discussed below.'
// fill(50);
// textSize(13);
// text(j, 500, 30, 214, 300);


function drawText() {

  background(bg);
  text(lines.join(' '), x, y, 400, 400);
}


function mouseClicked() {

  x = y = 50;
  lines = markov.generateSentences(10);
  drawText();
}

  drawSprites();
}



