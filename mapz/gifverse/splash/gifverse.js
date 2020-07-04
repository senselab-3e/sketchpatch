// JavaScript Document


var gifverse;

function randomverse (){
	
document.getElementById("demo").innerHTML = "0"+
Math.floor(Math.random() * 10) + ".html";
	
gifverse = "0"+
Math.floor(Math.random() * 10) + ".html";	
	
}

function loadgifverse (){
	window.open(gifverse);
	/*alert ("Hello World!");*/
	
}


/*
var x = document.getElementById("button2");

x.addEventListener("click", loadgifverse2);

function loadgifverse2 (){
	alert ("Hello World!")
window.open(gifverse);
}
*/
