// let angle = 0;
let kitten;
let train;
let thingie;
let rock;
let coffee;

let pictures;
let bubble1;
let bubble2;
let bubble3;
let bubble4;

let rand;

let picturesbrazil=[];
let fabb;

var value = 0;

function preload() {
  // kitten = loadImage('images/img2.png');
  // thingie = loadImage('images/artboard.svg');

  pictures = [loadImage('thingies/beige.png'),
            // loadImage('thingies/chairwbowl.png'),
            // loadImage('thingies/brownrck.png'),
            // loadImage('thingies/claybowl.png'),
            // loadImage('thingies/cephskin.png'),
            // loadImage('thingies/chairshark.png'),
            // loadImage('thingies/chairwbowl.png'),
            // loadImage('thingies/circlemetal.png'),
            // loadImage('thingies/claybowl.png'),
            // loadImage('thingies/compost.png'),
            // loadImage('thingies/pinkbowl.png'),
            // loadImage('thingies/corlarock.png'),
            // loadImage('thingies/drawerbox.png'),
            // loadImage('thingies/metaltape.png'),
            // loadImage('mmm/saopaulo/IMG_20190426_145135.png'),
            // loadImage('thingies/mirrortape.png'),
            // loadImage('thingies/onpic.png'),
            // loadImage('thingies/opurple.png'),
            // loadImage('thingies/pinkbowlsid.png'),
            // loadImage('images/artboard.svg'),
            loadImage('thingies/pinkpatch.png'),
            loadImage('thingies/plantplastic.png'),
            loadImage('thingies/polkaslink.png'),
            loadImage('thingies/posterpatch.png'),
            loadImage('thingies/posters.png'),
            loadImage('thingies/prepillowcreature.png')
            // loadImage('images/img0.jpg'),
            // loadImage('mmm/saopaulo/imagem.png')
          ];

          picturesbrazil = [
            loadImage('mmm/saopaulo/quilt1.png'),
            loadImage('mmm/saopaulo/04.26.2019-3.png'),
            loadImage('mmm/saopaulo/quilt2.png'),
            loadImage('mmm/saopaulo/quilt3.png'),
            loadImage('mmm/saopaulo/quilt4.png'),
            loadImage('mmm/saopaulo/04.26.2019-1.png'),
            loadImage('mmm/saopaulo/04.26.2019-2.png'),
            loadImage('mmm/saopaulo/04.26.2019-4.png'),
            loadImage('mmm/saopaulo/2019-04-27-17.01.02.png'),
            loadImage('mmm/saopaulo/20190428_110327.png'),
            loadImage('mmm/saopaulo/20190428_142444.png'),
            loadImage('mmm/saopaulo/20190428_110802.png'),
            loadImage('mmm/saopaulo/20190428_110822.png'),
            loadImage('mmm/saopaulo/imagem.png'),
            loadImage('mmm/saopaulo/image1.png')
                // loadImage('mmm/saopaulo/quilt5.png'),
                // loadImage('mmm/saopaulo/quilt6.png'),
                // loadImage('mmm/saopaulo/quilt7.png'),
                // loadImage('mmm/saopaulo/quilt8.png'),
                // loadImage('mmm/saopaulo/quilt9.png'),
                // loadImage('mmm/saopaulo/quilt10.png'),
                // loadImage('mmm/saopaulo/quilt11.png')
          ];

  // rock = loadModel('models/rocks-obj/rocks.obj');
  train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');
  // coffee = loadModel('models/cup-coffee.obj');

}

function setup() {
  fabb = createCanvas(windowWidth, windowHeight, WEBGL);
  fabb.parent('fabmap');

    // perspective(PI / 3.0, width / height, 0.1, -500);
    // perspective(PI/3.0, width/height, eyeZ/10.0, eyeZ10.0), where eyeZ is equal to ((height/2.0) / tan(PI60.0/360.0));

  // bubble1 = new Bubble();
  // bubble2 = new Bubble();
  // bubble3 = new Bubble();
  // bubble4 = new Bubble();

  rand = random(pictures);

}
function brazil() {
 pictures.length = 0;                  // Clear contents
 picturesbrazil.push.apply(pictures, picturesbrazil);  // Append new contents
  setup();
}

function thingies() {
  preload();
  setup();
}
function touchStarted() {
  if (value === 0) {
    value = translate(-cos(frameCount / 300 + PI) * 95, sin(frameCount / 30 + PI) * 95, -cos(frameCount / 300 + PI) * 95);
  } else {
    value = 0;
  }
}
function draw() {
  background(0, 0, 0, 0.2);
  orbitControl();
  noStroke();
  rotateY(frameCount * 0.01);


  for (let j = 0; j < 5; j++) {
   push();
   for (let i = 0; i < 2; i++) {
     translate(
       sin(frameCount * 0.02 + j) * 100,
       -cos(frameCount * 0.001 + j) * 100,
       sin(frameCount * 0.001 + j) * 100,

       // i * 0.1
     );
     rotateZ(frameCount * 0.002);

  push();
  noStroke();
  scale(100);
  texture(rand);
  model(train);
  pop();

  }
}



}
