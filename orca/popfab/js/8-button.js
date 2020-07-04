//button callback example
var hit = false;
function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	noStroke();
	rect(400,100,200,100);

	hit = collidePointRect(mouseX,mouseY,400,100,200,100); //see if the mouse is in the rect

	if(hit){ //change color!
		background('yellow')
		fill('blue')
		text("The mode of abstraction produced in play does not respect the law of the excluded middle. Its logic is that of mutual inclusion. Two different logics are packed into the situation. Both remain present in their difference and cross-participate in their performative zone of indiscernibility. Combat and play come together—and their coming-together makes three. There is one, and the other—and the included middle of their mutual influence. The zone of indiscernibility that is the included middle does not observe the sanctity of the separation of categories, nor respect the rigid segregation of arenas of activity. (6)", 200, 200, 2000, 200)
	}else{
		background('blue')
	}
}
