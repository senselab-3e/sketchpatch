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


function preload() {
  kitten = loadImage('images/img2.png');
  thingie = loadImage('thingies/cephskin.png');

  pictures = [loadImage('thingies/beige.png'),
            loadImage('thingies/chairwbowl.png'),
            loadImage('thingies/brownrck.png'),
            loadImage('thingies/claybowl.png'),
            loadImage('thingies/cephskin.png'),
            loadImage('thingies/chairshark.png'),
            loadImage('thingies/chairwbowl.png'),
            loadImage('thingies/circlemetal.png'),
            loadImage('thingies/claybowl.png'),
            loadImage('thingies/compost.png'),
            loadImage('thingies/pinkbowl.png'),
            loadImage('thingies/corlarock.png'),
            loadImage('thingies/drawerbox.png'),
            loadImage('thingies/metaltape.png'),
            loadImage('mmm/saopaulo/IMG_20190426_145135.png'),
            loadImage('thingies/mirrortape.png'),
            loadImage('thingies/onpic.png'),
            loadImage('thingies/opurple.png'),
            loadImage('thingies/pinkbowlsid.png'),
            loadImage('thingies/pinkpatch.png'),
            loadImage('thingies/plantplastic.png'),
            loadImage('thingies/polkaslink.png'),
            loadImage('thingies/posterpatch.png'),
            loadImage('thingies/posters.png'),
            loadImage('thingies/prepillowcreature.png'),
            loadImage('images/img0.jpg'),
            loadImage('mmm/saopaulo/imagem.png')
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

  rock = loadModel('models/rocks-obj/rocks.obj');
  train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');
  coffee = loadModel('models/cup-coffee.obj');

}

function setup() {
  fabb = createCanvas(windowWidth, windowHeight, WEBGL);
  fabb.parent('fabmap');

  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();

  rand = random(pictures);

}

function draw() {
  background(0, 18, 120, 1);
  orbitControl();

  push();
  noStroke();
  translate(0, 0, 0);
  scale(100);
  rand;
  model(train);
  pop();

  push();
  noStroke();
  translate(10, 10, 10);
  scale(100);
  texture(thingie);
  // noFill();
  model(rock);
  pop();


  push();
  rotateY(radians(25));
  translate(100, 100, 100);
  bubble1.huge();
  pop();


  push();
  translate(100, 100, 100);
  bubble2.show();
  pop();

  push();
  translate(-350, -350);
  bubble3.show();
  pop();

  push();
  translate(250, -400);
  rotateY(radians(45));
  bubble3.plan();
  pop();

  push();
  texture(pictures[0]);
  translate(-50, -50);
  beginShape();
  vertex(-50, 0, 0, 0, 0);
  vertex(100, 0, 0, 1, 0);
  vertex(100, 100, 0, 1, 1);
  vertex(0, 200, 0, 0, 1);
  endShape(CLOSE);
  pop();

  push();
  rand;
  scale(100);
  model(coffee);
  pop();
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
