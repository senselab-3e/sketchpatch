var canvas;
var ctx;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  ctx = canvas.drawingContext;
  noStroke();
   background('red');
}

function draw() {

  //push();
  //translate(width / 2, height / 2);
 // var gradX = mouseX - width / 2;
  //var gradY = mouseY - height / 2;

  var gradient = ('blue');
  //gradient.addColorStop(0, "black");
 //gradient.addColorStop(1, "white");
  ctx.fillStyle = gradient;
    if (mouseIsPressed === true) {
  ellipse(mouseX, mouseY, 100, 100);}

  fill('red');
  text("The mode of abstraction produced in play does not respect the law of the excluded middle. Its logic is that of mutual inclusion. Two different logics are packed into the situation. Both remain present in their difference and cross-participate in their performative zone of indiscernibility. Combat and play come together—and their coming-together makes three. There is one, and the other—and the included middle of their mutual influence. The zone of indiscernibility that is the included middle does not observe the sanctity of the separation of categories, nor respect the rigid segregation of arenas of activity. (6)", 300, 200, 2000, 200)

  //pop();
}
