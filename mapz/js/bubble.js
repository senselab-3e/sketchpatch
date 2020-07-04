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
   this.pln = plane(this.x+400, this.y+300);
 }

 huge(){
   texture(this.texture);
   this.bx = box(this.x*4, this.y*3, this.z*4);
 }

}
