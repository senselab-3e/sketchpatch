function setup() {
createCanvas(window.innerWidth, window.innerHeight);
	collideDebug(true)
}
function draw() {



background(0,100,200);
blendMode(EXCLUSION);
fill(255);
noStroke();
rect(100, 100, 1000,100);
rect(150,150,150,150);
ellipse(mouseX,mouseY,45,45);

}
