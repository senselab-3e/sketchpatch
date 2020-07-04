var hit = false;
var poly = [];
function setup() {
	createCanvas(windowWidth,windowHeight);
	collideDebug(true)
/*	poly[0] = createVector(123,231);     // set X/Y position
	poly[1] = createVector(10,111);
	poly[2] = createVector(20,23);
	poly[3] = createVector(390,33);
	*/

}

function draw() {

		background('blue');
	//	fill('yellow');
	//	blendMode(NONE);
	//	rect(30, 20, 55, 55);
		blendMode(EXCLUSION);
  //draw the polygon from the created Vectors above.

	rect(30, 20, 55, 55);
	fill('blue');

	text("The mode of abstraction produced in play does not respect the law of the excluded middle. Its logic is that of mutual inclusion. Two different logics are packed into the situation. Both remain present in their difference and cross-participate in their performative zone of indiscernibility. Combat and play come together—and their coming-together makes three. There is one, and the other—and the included middle of their mutual influence. The zone of indiscernibility that is the included middle does not observe the sanctity of the separation of categories, nor respect the rigid segregation of arenas of activity. (6)", 200, 200, 2000, 200);

	/*beginShape();
	for(i=0; i < poly.length; i++){
		vertex(poly[i].x,poly[i].y);
	}
	endShape(CLOSE);*/


noStroke();
	ellipse(mouseX,mouseY,45,45);

	hit = collideCirclePoly(mouseX,mouseY,45,poly);
	//enable the hit detection if the circle is wholly inside the polygon
	// hit = collideCirclePoly(mouseX,mouseY,45,poly,true);

	print("colliding? " + hit);
}
