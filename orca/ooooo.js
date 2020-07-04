// A2Z F17
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F17
// http://shiffman.net/a2z

// Adapted from: http://p5js.org/examples/examples/Dom_Input_and_Button.php

let input, button, greeting;

function setup() {

  // create canvas
  // createCanvas(710, 400);
  // background(51);

  // Create interface
  input = createInput();
  button = createButton('oOo0ooo');
  button.mousePressed(greet);
}

// When the user clicks the mouse, the canvas is redrawn
// Could you do this sketch a different way with draw()
// and have the elements animate?
// function greet() {
//   background(51);
//   let name = input.value();
//   greeting.html('hello '+name+'!');
//   input.value('');
//
//   for (let i=0; i < 200; i++) {
//     push();
//     fill(random(255), 255, 255);
//     translate(random(width), random(height));
//     rotate(random(2*PI));
//     textAlign(CENTER)
//     textSize(50);
//     text(name, 0, 0);
//     pop();
//   }
// }

function greet(){
  let name = input.value();
  input.value('');

  createP(name).addClass('text').hide();

  texts = selectAll('.text');

//   for (let i = 0; i < texts.length; i++) {
//     const paragraph = texts[i].html();
//     const words = paragraph.split('');
//     for (let j = 0; j < words.length; j++) {
//       if (words[j]=='o'){
//       var jumpingo = createA('#', words[j]);
//       jumpingo.mousePressed(becomeApple);
//     } else if(words[j]==' '){
//       var spacer = createA('#', words[j]);
//       spacer.mousePressed(becomeApple2);
//     } else {
//       const spannedWord = createSpan(words[j]);
//     }
//   }
// }

for (let i = 0; i < texts.length; i++) {
  const paragraph = texts[i].html();
  const words = paragraph.split('');
  for (let j = 0; j < words.length; j++) {
    if (words[j]=='o'){
    var jumpingo = createSpan(words[j]);
    var n =random(4, 19);
    jumpingo.style('font-size', n + 'px');
  } else {
    const spannedWord = createSpan(words[j]);
    spannedWord.style('font-size', '14px');
  }
}
}

}


// function becomeApple(){
//  this.addClass('growing');
// }
// function becomeApple2(){
//  this.addClass('spacing');
// }


// function draw() {
// background(160);
//
// let gap = 50;
// let margin = 10;
// let counter = 35;
// }
// }

// fontsize = 32;
//
// let dancingWords = [];
// var jumpingo;
// var texts;
//
// // function preload() {
// //   // Ensure the .ttf or .otf font stored in the assets directory
// //   // is loaded before setup() and draw() are called
// //   font = loadFont('assets/SourceSansPro-Regular.otf');
// // }
//
// function setup() {
// createCanvas(710, 400);
// textSize(fontsize);
// textAlign(CENTER, CENTER);
//
//       createP(
//         'I learn in this Letter, that Don Peter of Aragon, ' +
//           ' comes this night to Messina'
//       ).addClass('text').hide();
//
//       texts = selectAll('.text');
//
//       for (let i = 0; i < texts.length; i++) {
//         const paragraph = texts[i].html();
//         const words = paragraph.split('');
//         for (let j = 0; j < words.length; j++) {
//           if (words[j]=='o'){
//           var jumpingo = createA('#', words[j]);
//           jumpingo.mousePressed(becomeApple);
//         } else if(words[j]==' '){
//           var spacer = createA('#', words[j]);
//           spacer.mousePressed(becomeApple2);
//         } else {
//           const spannedWord = createSpan(words[j]);
//         }
//       }
//     }
//
//    }
//
//
//    function becomeApple(){
//      this.addClass('growing');
//    }
//    function becomeApple2(){
//      this.addClass('spacing');
//    }
//
//
// function draw() {
// background(160);
//
// let gap = 50;
// let margin = 10;
// let counter = 35;
// }
