let canvas = 800;
let rOut, gOut, bOut, deltaT;

function setup(){
  frameRate(60);
  createCanvas(canvas*1.5, canvas, WEBGL);
}
///allloo
// criii
//suppp
// Y
// follow meeee.....
function stopBuffers(){
  if(copey.isPlaying()){
    copey.stop();
  }
  if(amsty.isPlaying()){
    amsty.stop();
  }
  if(helsi.isPlaying()){
    helsi.stop();
  }
}
// uppp hereeeeee
function loopBuf(buf){
  buf.play(0, 1.0, 1.0, 0, buf.duration());
  buf.loop();
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function changeCo(r, g, b){
  if (minmov) {
    var hexCo = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    title.style.color = hexCo;
    title.style.opacity = deltaT;
    for (var i = 0; i < ae.length; i++) {
          ae[i].style.color= hexCo;
          ae[i].style.opacity = deltaT;
      }
  }
}
// hehheheeeehehhehehe
function draw(){
  var mouseNow = pow((pow(((mouseX*2)/(canvas*1.5)), 2)+pow(((mouseY*2)/canvas), 2)), 0.5);
  var mouseBefore = pow((pow(((pmouseX*2)/(canvas*1.5)), 2)+pow(((pmouseY*2)/canvas), 2)), 0.5);

  deltaT = (20*abs(mouseNow-mouseBefore));
  if (deltaT>1){
    deltaT = 1;
  }
  copey.setVolume(deltaT, 0.5);
  copey.rate(1+(0.5*(mouseNow-mouseBefore)));
  amsty.setVolume(deltaT, 0.5);
  amsty.rate(1+(0.5*(mouseNow-mouseBefore)));
  helsi.setVolume(deltaT, 0.5);
  helsi.rate(1+(0.5*(mouseNow-mouseBefore)));

  rOut = floor(173-((mouseNow-mouseBefore)*50));
  gOut = floor(216-((mouseNow-mouseBefore)*100));
  bOut = floor(230-((mouseNow-mouseBefore)*100));

  if (deltaT==0 && 0<title.style.opacity){
    title.style.opacity = 0;
    for (var i = 0; i < ae.length; i++) {
          ae[i].style.opacity = 0;
      }
  }


}



// criiiiii
// i can't believe it!! ! ! !
// wowowoowowwwww
// i love this so much
// yes yesyesyes
// this would b sooo goood for luring creaturess!!!!!!!!!!
// we can nudge from inside!!!!
// inCRED
// when they r writinggg no???
// mmmm letsss slERPRPRPRPRPR
// slurp
// c // HACK:
// lets slerp??? hehehe okie!!!!
// lets slerp
// babe, lets // DEBUG: // IDEA:
// haha
// i lov v v v
// im green
// oh  i lov these traces inn the code!! r u blue?
// metooooooooo
// WOW and i love that it's join portal

// with little chat chat?????
// over here criiii
// omggggggggggg hehehe
//crichiii can u share a whole folder?
// heere?


//
//
//
//
// can u follow me to another tabbb?
// we'll tryy?
// trytry



// let cb = document.getElementById('copeyBlue');
// cb.style('background-color', rgb(floor(173+(output*50)), floor(216-(output*50)), floor(230-(output*50))) );
//rgb(173, 216, 230)HEY

// how do i make this a string???
// .... hmmm creaccch what do you want the string to be?

// hehehehe
// ohhh that's not what a string is!
//yesss butttt...
// u need to pass it to the dom element as a string
// OH
//no?? makes sense?
// TRY NIOW> r u trying
 // but whaaaT
