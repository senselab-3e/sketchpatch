var pictures;
let bubble1;
let bubble2;
let bubble3;
let bubble4;

function preload(){

    // for (var i = 0, j = imageFiles.length; i < j; i++) {
    //     raw = new Image; //This is a placeholder
    //     raw.src = imageFiles[i]; //Set the src attribute (imageFiles[i] is the current filename in the loop)
    //     im = createImage(raw.width, raw.height);
    //     im.drawingContext.drawImage(raw, 0, 0);
    //     pictures.push(im); //Append the new image into the pictures array
    // }

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
              loadImage('thingies/mintwashu.png'),
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
              loadImage('images/img0.jpg')
            ];



}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  perspective(PI / 3.0, 2, 0, 30000);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();

  // frogs = random(pictures);
}

function draw(){
  background(0, 18, 120, 1);
  orbitControl();

  rotateY(radians(25));
  translate(10, 10, 10);
  bubble1.huge();


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
  // let jump = jump + 1;
  // beginShape();
  // fill('yellow');
  // noStroke();
  // vertex(jump,255);
  // vertex(200,30);
  // vertex(20,490);
  // vertex(48,jump-20);
  // vertex(637,255);
  // endShape();
  texture(pictures[0]);
translate(-50, -50);
beginShape();
vertex(-50, 0, 0, 0, 0);
vertex(100, 0, 0, 1, 0);
vertex(100, 100, 0, 1, 1);
vertex(0, 200, 0, 0, 1);
endShape(CLOSE);
  pop();

 }

 class Bubble {
  constructor(x, y, z, texture) {
    this.x = 200;
    this.y = 150;
    this.z = 200;
    this.texture = random(pictures);
  }

  // move() {
  //   this.x = this.x + random(-5, 5);
  //   this.y = this.y + random(-5, 5);
  // }

  show() {
    texture(this.texture);
    this.bx = box(this.x, this.y, this.z);
  }

  plan() {
    texture(this.texture);
    this.pln = plane(this.x+400, this.y+300, this.z);
  }

  huge(){
    texture(this.texture);
    this.bx = box(this.x*4, this.y*3, this.z*4);
  }
 }
