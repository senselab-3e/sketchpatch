 let bubble1;
 let bubble2;
 let bubble3;
 // let images;
 // let vid;
 // let texts;

 function preload() {
   images = [loadImage('thingies/beige.png'),
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
             loadImage('thingies/prepillowcreature.png')
           ];
           // vid = createVideo('gifverse/cubeee.gif');

         }

 function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
   perspective(PI / 3.0, 2, -1000, 30000);
   bubble1 = new Bubble();
   bubble2 = new Bubble();
   bubble3 = new Bubble();

             pg = createGraphics(200, 200);
             pg.textSize(75);



   // vid = createVideo('gifverse/cubeee.gif');
   // // vid.elt.muted = true;
   // // vid.loop();
   // // vid.hide();



 }

 function draw() {
   background(0, 18, 120, 1);

             // pg.background(255, 18, 120, 1);
             // pg.text('zzZZZzzzZZZzz', 0, 100);

   orbitControl();
   // bubble1.move();
   translate(10, 10);
   bubble1.huge();

   // bubble2.move();
   push();
   translate(100, 100, 100);
   bubble2.show();
   pop();

             // texture(pg);
             // box();

   push();
   translate(-350, -350);
   bubble3.show();
   pop();
 }

 class Bubble {
   constructor(x, y, z, texture, box) {
     this.x = 200;
     this.y = 150;
     this.z = 200;
     this.texture = random(images);
   }

   // move() {
   //   this.x = this.x + random(-5, 5);
   //   this.y = this.y + random(-5, 5);
   // }

   show() {
     texture(this.texture);
     this.bx = box(this.x, this.y, this.z);
   }

   huge(){
     texture(this.texture);
     this.bx = box(this.x*4, this.y*3, this.z*4);
   }
 }
