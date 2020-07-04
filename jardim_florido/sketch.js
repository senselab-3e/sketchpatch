var contador = 0;
var dato = 1;
var rodatnoc = 0;
var otad = 1;
let hue = 0;

// noise field -

var ruido_inc = 0.004;
var density = 30;
var znoise = 0.0;

// offset

var angle = 0.0;
var speed = 0.0002;
var radius = 500.0;

var sx = 3.0;
var sy = 1.5;


// offset1

var angle1 = 0.0;
var speed1 = 0.0004;
var radius1 = 400.0;

var sx1 = 3.0;
var sy1 = 1.5;

//let value = 0;
/*
let value = false;
let value1 = false;
let value2 = false;
*/

let config = {
    sun: true,
    toyo: false,
    verde: true,
    papalotl: false,
    girasol: false,
    giraluna: true,
    astr: true,
    nieve: true,
    rumor: false,
    sombra: true,
    noche: false,
    dia: true,
    amanece: false,
    ratito: false,
    voce: true
}


function setup() {

    createCanvas(windowWidth, windowHeight);

}

function draw() {

    // 

    angle += speed;
    angle1 += speed1;


    hue = ++hue % 255;
    contador = contador + dato;
    rodatnoc = rodatnoc - dato;

    if (contador <= 0) {
        dato = 0.5;
        contador += 0.5;
    }


    if (contador >= 100) {
        dato = -0.5;
        contador -= 0.5;
    }



    if (rodatnoc <= 0) {
        otad = 0.5;
        rodatnoc -= 0.5;
    }


    if (rodatnoc >= 20) {
        otad = -0.5;
        rodatnoc += 0.5;
    }

    // background(contador, 170, contador);
    /*

        if (keyWentDown('x')) {
            value1 = true;
        }

    */
    var ruidoC4 = 0.00001;


    if (config.dia) {
        push();
        noiseField();
        pop();
    }

    if (config.noche) {
        push();
        noiseField_noche();
        pop();
    }

    if (config.amanece) {
        push();
        noiseField_amanece();
        pop();
    }


    //keyReleased();


    if (config.sun) {
        push();
        falling(); // el sol
        pop();
    }


    if (config.rumor) {
        push();
        fall4();
        pop();
    }


    if (config.toyo) {
        push();
        toyollo(); // el sol
        pop();
    }

    if (config.sombra) {
        push();
        fall_sombra();
        pop();
    }

    if (config.verde) {
        push();
        meumar(0, 0, 12, 140, 100);
        pop();
    }

    if (config.papalotl) {
        push();
        aguadebeber(0, 70, 212, 60, 150);
        pop();
    }

    if (config.girasol) {
        push();
        fall2();
        pop();
    }

    if (config.giraluna) {
        push();
		fall();
        pop();
    }

    if (config.astr) {
        push();
        weft3();
        pop();
    }

    if (config.nieve) {
        push();
        weft8();
        pop();
    }


    if (config.ratito) {
        push();
        quay();
        pop();
    }

    if (config.voce) {
        push();
        ondeandavoce(0, 0, 302, 590, 100);
        pop();
    }

    /*
           push();
           weft();
           pop();

           push();
           toyollo();
           pop();

           push();
           weft5();
           pop();

           push();
           weft7();
           pop();

           push();
           fall_sombra();
           pop();

           push();
           //weft1();
           pop();

           push();
           weft2();
           pop();

           push();
           weft3();
           pop();

           push();
           weft4();
           pop();

           push();
           weft8();
           pop();

           // meumar (px, py, numPart, rad, opaF) {

           push();
           meumar(0, 0, 12, 80, 100);
           pop();

           push();
           //aguadebeber(0, 0, 32, 90, 150);
           pop();

           push();
           aguadebeber(0, 70, 212, 50, 150);
           pop();
       */
}

function noiseField() {
    // noise field _
    push();

    var xnoise = 0.0;
    var ynoise = 0.0;

    for (var y = 0; y < height; y += density) {
        for (var x = 0; x < width; x += density) {
            var n = noise(xnoise, ynoise, znoise) * 255;
            noStroke();
            //fill(contador, n, contador);
            //fill(50, n, 200);
            fill(contador, 158, n);
            //fill(255, 178, n);

            rect(x, y, density, density);
            xnoise += ruido_inc;
        }
        xnoise += ruido_inc;
        ynoise += ruido_inc;
    }
    znoise += ruido_inc;
}

function noiseField_noche() {
    // noise field _
    push();

    var xnoise = 0.0;
    var ynoise = 0.0;

    for (var y = 0; y < height; y += density) {
        for (var x = 0; x < width; x += density) {
            var n = noise(xnoise, ynoise, znoise) * 255;
            noStroke();
            //fill(contador, n, contador);
            fill(50, n, 200);
            //fill(contador, 158, n);
            //fill(255, 178, n);

            rect(x, y, density, density);
            xnoise += ruido_inc;
        }
        xnoise += ruido_inc;
        ynoise += ruido_inc;
    }
    znoise += ruido_inc;
}

function noiseField_amanece() {
    // noise field _
    push();

    var xnoise = 0.0;
    var ynoise = 0.0;

    for (var y = 0; y < height; y += density) {
        for (var x = 0; x < width; x += density) {
            var n = noise(xnoise, ynoise, znoise) * 255;
            noStroke();
            fill(n, contador, contador);
            //fill(50, n, 200);
            //fill(contador, 158, n);
            //fill(255, 178, n);

            rect(x, y, density, density);
            xnoise += ruido_inc;
        }
        xnoise += ruido_inc;
        ynoise += ruido_inc;
    }
    znoise += ruido_inc;
}


function keyPressed() {

    if ((key == 'Q') || (key == 'q')) {
        config.giraluna = !config.giraluna;
    }

    if ((key == 'W') || (key == 'w')) {
        config.papalotl = !config.papalotl;
    }

    if ((key == 'E') || (key == 'e')) {
        config.verde = !config.verde;
    }

    if ((key == 'R') || (key == 'r')) {
        config.toyo = !config.toyo;

    }

    if ((key == 'T') || (key == 't')) {
        config.sun = !config.sun;
    }

    if ((key == 'Y') || (key == 'y')) {
        config.girasol = !config.girasol;
    }

    //

    if ((key == 'A') || (key == 'a')) {
        config.astr = !config.astr;
    }

    if ((key == 'S') || (key == 's')) {
        config.nieve = !config.nieve;
    }

    if ((key == 'D') || (key == 'd')) {
        config.rumor = !config.rumor;
    }

    if ((key == 'F') || (key == 'f')) {
        config.sombra = !config.sombra;
    }


    if ((key == 'H') || (key == 'h')) {
        config.ratito = !config.ratito;
    }

     if ((key == 'G') || (key == 'g')) {
        config.voce = !config.voce;
    }
    //

    if ((key == '1') || (key == '1')) {
        config.dia = !config.dia;
    }

    if ((key == '2') || (key == '2')) {
        config.noche = !config.noche;
    }

    if ((key == '3') || (key == '3')) {
        config.amanece = !config.amanece;
    }

    // 

    if (key == '9' || key == '9') {
        window.location.reload();
    }

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


/*

kindhom - youtube

let d x y z = delay x # delaytime y delaytime

d 0.2 0.4 0.5

*/