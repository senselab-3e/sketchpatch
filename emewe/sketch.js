
let xspacing = 8; // How far apart should each horizontal position be spaced
let w; // Width of entire wave
let maxwaves = 200; // total # of waves to add together

var lines, markov;

let theta = 0;
let amplitude = []; // Height of wave
let dx = []; // Value for incrementing X, to be calculated as a function of period and xspacing
let yvalues; // Using an array to store height values for the wave (not entirely necessary)

var contador = 1;

var font,
  fontsize = 13;

var contacolor = 0;
var dato = 1;

function setup() {
  //console.log(txt);
  createCanvas(windowWidth, windowHeight);
  w = width;

//  textFont("Marta-Italic");
  textFont("Varela Round");
//textFont("Didact Gothic");

// create a markov model w' n=4


  for (let i = 0; i < maxwaves; i++) {
    amplitude[i] = 1;
    let period = 1500; // How many pixels before the wave repeats
    dx[i] = (TWO_PI / period) * xspacing;
  }
  yvalues = [];
}

function draw() {


      contacolor = contacolor + dato;

        if (contacolor <= 0) {
          dato = 0.5;
          contacolor+=0.5;
        }

        if (contacolor >= 255) {
          dato = -0.5;
          contacolor-=0.5;
        }


  contador++;
  //background(183, 245, 255);
  //background(67, 58, 103);
  //background(contacolor, 241, 245, 120);
  background(227, 253, 255);
  calcWave();

  push();
    weft();
  pop();

  if (contador <= 100) {



    wave();
  }


  if (contador >= 101) {


    wave1();
 
  }
  
  if (contador >= 201) {
    contador = 1;
  }

}


function calcWave() {
  // Increment theta (try different values for 'angular velocity' here
  theta += 0.0007;

  // Set all height values to zero
  for (let i = 0; i < w / xspacing; i++) {
    yvalues[i] = 0;
  }

  // Accumulate wave height values
  for (let j = 0; j < maxwaves; j++) {
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 === 0) yvalues[i] += tan(x) * amplitude[j];
      else yvalues[i] += sin(x) * amplitude[j];
      x += dx[j];
    }
  }
}

function wave() {



  var ruidoX = -0.0006;
  var posX = noise(millis() * ruidoX) * height;
  
  var ruidoC = 0.00008;
  var posC = noise(millis() * ruidoC) * 280;

  var ruidoC4 = 0.0001;
  var posC4 = noise(millis() * ruidoC4) * 12;   
  
  
  for (let x = 0; x < yvalues.length; x++) {
        //stroke(160, 237, 231);
       
  stroke(0, 207, 220);
        strokeWeight(1);
        //noStroke();
        line(x * xspacing, posX, x * xspacing, height / 2 + yvalues[x]);
  //  ellipse(x * xspacing, height / 2 + yvalues[x], 6, 6);

         var words = RiTa.tokenize("Zan o nicuicanitl hui ya, xochitl in noyollo ya, ' ")

      noStroke();
      textSize(fontsize);
      //fill(random(255), contacolor, 240);
      //fill(200, contacolor, 240);
            fill(random(255), contacolor, 240);

      for (var i=0, j = words.length; i<j; i++) {
        text(words[i], x * xspacing, x + yvalues[x] + i * posC);
    }
  }
}



function falling() {

  var ruidoC4 = 0.0001;
  var posC4 = noise(millis() * ruidoC4) * 2;

  var ruidoC = 0.0001;
  var posC = noise(millis() * ruidoC) * 124;

  var ruidoD = 0.0008;
  var posD = noise(millis() * ruidoD) * 25;

  var ruidoZ = -0.0001;
  var posZ = noise(millis() * ruidoZ) * 5;


  var fog = millis()/2009;

  var historyOfNothing = fog%5;

  var dust = tan(radians(historyOfNothing));

  var ruidoX = 0.00001;
  var posX = noise(millis() * ruidoX) * width;
  
  var ruidoY = 0.0008;
  var posY = noise(millis() * ruidoX) * height;

  
  translate(posX, posY);

  for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

          noStroke();
          rotate(radians(fog));
          fill(255, 170, 0, 20);
          rectMode(CENTER);
          scale(posC4);
//triangle(-20, 25, 8, -30, 36, 25);
ellipse(0, 0, 20, 20);

          noFill();
          strokeWeight(5);
          stroke(255, 255, 255, 200);
         // line(60, 60, 60, 60);

  }

}

function weft() {

  push();
  falling();
  pop();

}

function wave1() {

  

  var ruidoX = -0.0006;
  var posX = noise(millis() * ruidoX) * height;
  
  var colX = 0.001;
  var colorX = noise(millis() * colX) * 255;

  var ruidoC = 0.00008;
  var posC = noise(millis() * ruidoC) * 120;

  var ruidoC4 = 0.0001;
  var posC4 = noise(millis() * ruidoC4) * 12;   
  
  
  for (let x = 0; x < yvalues.length; x++) {
        //stroke(160, 237, 231);
        stroke(20, 25, 31);
        strokeWeight(0.5);
        //noStroke();
        line(x * xspacing, posX, x * xspacing, height / 2 + yvalues[x]);
  //  ellipse(x * xspacing, height / 2 + yvalues[x], 6, 6);

         var words = RiTa.tokenize("nicmana nocuic, a ohuaya, ohuaya.")

      noStroke();
      textSize(fontsize);
      fill(random(255), contacolor, 240);
      for (var i=0, j = words.length; i<j; i++) {
        text(words[i], x * xspacing, x + yvalues[x] + i * posC);
    }
  }
}



