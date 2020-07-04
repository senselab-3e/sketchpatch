function fall() {

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 80;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 124;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 25;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 2009;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.0008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 24; inYourFall++) {

        noFill();
        strokeWeight(2);
        rotate(radians(fog));
        stroke(80, 47, 144, 60);
        rectMode(CENTER);
        ellipse(posD, posD, posC4, posC4);
        noFill();
        strokeWeight(5);
        stroke(255, 255, 255, 200);
        line(60, 60, 60, 60);

    }

}

function fall_sombra() {
 var ruidoC4 = 0.0001;
        var posC4 = noise(millis() * ruidoC4) * 320;

        var ruidoC = 0.0001;
        var posC = noise(millis() * ruidoC) * 204;

        var ruidoD = 0.00008;
        var posD = noise(millis() * ruidoD) * 39;

        var ruidoZ = -0.0001;
        var posZ = noise(millis() * ruidoZ) * 5;


        var fog = millis() / 2009;

        var historyOfNothing = fog % 5;

        var dust = tan(radians(historyOfNothing));

        var ruidoX = 0.0000081;
        var posX = noise(millis() * ruidoX) * windowWidth;

        var ruidoY = 0.0000008;
        var posY = noise(millis() * ruidoX) * windowHeight;


        translate(posX, posY);

        for (var inYourFall = 0; inYourFall < 124; inYourFall++) {

            noFill();
            strokeWeight(2);
            rotate(radians(fog));
            stroke(200, hue, 270, 30);
            rectMode(CENTER);
            //triangle(100, 25, posD, -30, 36, 25);
            ellipse(posD, posD, posC4, posC4);
            /*
            noFill();
            strokeWeight(5);
            stroke(255, 255, 255, 200);
            line(60, 60, 80, 80);
            */

        }


}

function falling() {

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 2;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 124;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 25;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 2009;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.0008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

        noStroke();
        rotate(radians(fog) * -7);
        fill(255, 160, 0, 15);
        rectMode(CENTER);
        scale(posC4);
        //triangle(-20, 25, 8, -30, 36, 25);
        ellipse(0, 0, 20, 20);

    }

}

function quay() {
    var ruidoC4 = 0.00008;
    var posC4 = noise(millis() * ruidoC4) * 50;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 45;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 4009;

    var historyOfNothing = fog % 20;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.000006;
    var posX = noise(millis() * ruidoX) * 500;

    var ruidoY = 0.000008;
    var posY = noise(millis() * ruidoX) * 400;
    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 180; inYourFall++) {

        strokeWeight(3);
        rotate(radians(fog));
        stroke(255, 255, 255, 26);
        noFill();
        line(10, 10, posD, posD);
    }
    for (var inYourFall = 0; inYourFall < 10; inYourFall++) {

        noFill();
        strokeWeight(3);
        stroke(0, 0, 0, 9);
        line(0, 0, 4, 4);

    }
}

function cayendo() {
    var fog = millis() / 129;
    var between = random(30);
    var between2 = random(7);
    // rotate(radians(fog%random(10222)));
    var ruidoX = -0.00002;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoY = 0.0002;
    var posY = noise(millis() * ruidoX) * height;

    translate(posX, posY);

    var historyOfNothing = fog % width / 2;
    var dust = tan(radians(historyOfNothing)) % height * 5;

    for (var inYourFall = 0; inYourFall < 10; inYourFall++) {

        rotate(radians(fog));

        noStroke();
        fill(255, random(200));
        strokeWeight(random(0.4));
        ellipse(dust, dust, between2 % 6, between2 % 6);
        noFill();
        stroke(255, 222, 0, random(200));
        strokeWeight(random(5));
        line(0, 0, between % 22, between % 22);

    }
}



var num4 = 103;
var x4 = new Array([num4]);
let y4 = new Array([num4]);
var indexPosition4 = 0;

function fall4() {

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 80;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 20;

    var ruidoD = 0.0004;
    var posD = noise(millis() * ruidoD) * 200;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;

    var fog = millis() / -29;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

        var ruidoX = 0.000009;
        var posX = noise(millis() * ruidoX) * width + 200;

        var ruidoY = -0.0001;
        var posY = noise(millis() * ruidoY) * height;


    x4[indexPosition4] = posX;
    y4[indexPosition4] = posY;
    



    for (var inYourFall = 0; inYourFall < 3; inYourFall++) {

        indexPosition4 = (indexPosition4 + 1) % num4;
        for (var i = 0; i < num4; i++) {
            push();
            //translate(x4[pos4], y4[pos4]);

            var pos4 = (indexPosition4 + i) % num4;
            var radius4 = 8 + (num4 - i) / 2.0;
           //rotate(radians(120));
           // fill(255, 2, 209, 30);
            rectMode(CENTER);
        fill(mouseY, 255, hue, posC);
        //strokeWeight(1);
       // stroke(80, 47, 144, 180);
          noStroke();
          stroke(80, 47, 144, 80);
            ellipse(x4[pos4], y4[pos4], radius4, radius4);

            
            pop();
        }
    }

    }

/*
    function meumar(px, py, numPart, rad, opaF) {
        var besar = 0.000001;
        var vel = 0.0008;


        beginShape();

        var ruidoX = 0.00002;
        var posX = noise(millis() * ruidoX) * width;

        var ruidoY = 0.00008;
        var posY = noise(millis() * ruidoX) * height * 1.42;


        translate(posX, posY);

        for (var i = 0; i < numPart; i++) {

            let radio = rad * noise(frameCount * vel * (i));
            let ptoX = px + sin(radians(mouseX * 1.6 / numPart) * i) * radio;
            let ptoY = py + cos(radians(mouseY / numPart) * i) * radio;

            fill(233, 255, 3, opaF);
            strokeWeight(1);
            stroke(80, 47, 144, 120);
            vertex(ptoY, ptoX);
        }
        endShape(CLOSE);
    }
    */

    function meumar(px, py, numPart, rad, opaF) {
    var besar = 0.00001;
    var vel = 0.0008;


    beginShape();

  var ruidoX = 0.00002;
        var posX = noise(millis() * ruidoX) * width;

        var ruidoY = 0.00008;
        var posY = noise(millis() * ruidoX) * height;



    translate(posX, posY);

    for (var i = 0; i < numPart; i++) {

        let radio = rad * noise(frameCount * vel * (i));
        let ptoX = px + sin(radians(4093 / numPart) * i) * radio;
        let ptoY = py + cos(radians(3000 / numPart) * i) * radio;

        fill(233, 255, 3, opaF);
        strokeWeight(1);
        stroke(80, 47, 144, 180);
        vertex(ptoY, ptoX);
    }
    endShape(CLOSE);
}


    function aguadebeber(px, py, numPart, rad, opaF) {

        var vel = 0.00078;

        beginShape();

var ruidoX = 0.000009;
        var posX = noise(millis() * ruidoX) * width;

        var ruidoY = 0.00007;
        var posY = noise(millis() * ruidoY) * height;
        translate(posX, posY);

        for (var i = 0; i < numPart; i++) {

            let radio = rad * noise(frameCount * vel * (i));
            let ptoX = px + sin(radians(1000 / numPart) * i) * radio;
            let ptoY = py + cos(radians(contador / numPart) * i) * radio;
            //fill(255, 150, 13, opaF);
            fill(13, 245, 255, opaF);
            strokeWeight(1);
            stroke(80, 47, 144, 120);
            //noStroke();
            vertex(ptoY, ptoX);
        }
        endShape();
    }

    function ondeandavoce(px, py, numPart, rad, opaF) {

    var vel = 0.000078;

    beginShape();


    var ruidoX = 0.000004;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.002;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX - 200, posY);

    for (var i = 0; i < numPart; i++) {

        let radio = rad * noise(frameCount * vel * (i));
        let ptoX = px + sin(radians(800 / numPart) * i) * radio;
        let ptoY = py + cos(radians(rodatnoc / numPart)) * radio;
        noFill();
        //fill(255, opaF);
        strokeWeight(0.5);
        stroke(80, 47, 144, 120);
        vertex(ptoY, ptoX);
    }
    endShape();
}


    function fall3() {

        var ruidoC4 = 0.00008;
        var posC4 = noise(millis() * ruidoC4) * 82;

        var ruidoC = 0.0001;
        var posC = noise(millis() * ruidoC) * 14;

        var ruidoD = 0.00008;
        var posD = noise(millis() * ruidoD) * 39;

        var ruidoZ = -0.0001;
        var posZ = noise(millis() * ruidoZ) * 5;


        var fog = millis() / 29;

        var historyOfNothing = fog % 5;

        var dust = tan(radians(historyOfNothing));

        var ruidoX = 0.000008;
        var posX = noise(millis() * ruidoX) * width;

        var ruidoY = 0.002;
        var posY = noise(millis() * ruidoX) * height;



        for (var inYourFall = 0; inYourFall < 40; inYourFall++) {

        translate(posX, posY);

            noStroke();
            strokeWeight(2);
            //rotate(radians(-fog));
            fill(255, random(170), 0, (random(70)));
            //rectMode(CENTER);
            //triangle(-30, -75, -58, -20, -86, -75);
            ellipse(5, 5, posC4, posC4);
            /*
            noFill();
            strokeWeight(5);
            stroke(255, 255, 255, 200);
            line(60, 60, 80, 80);
            */

        }

    }


    function fall2() {

        var ruidoC4 = 0.0001;
        var posC4 = noise(millis() * ruidoC4) * 180;

        var ruidoC = 0.0001;
        var posC = noise(millis() * ruidoC) * 124;

        var ruidoD = 0.00008;
        var posD = noise(millis() * ruidoD) * 39;

        var ruidoZ = -0.0001;
        var posZ = noise(millis() * ruidoZ) * 5;


        var fog = millis() / 2009;

        var historyOfNothing = fog % 5;

        var dust = tan(radians(historyOfNothing));

        var ruidoX = 0.0000081;
        var posX = noise(millis() * ruidoX) * windowWidth;

        var ruidoY = 0.0000008;
        var posY = noise(millis() * ruidoX) * windowHeight;


        translate(posX, posY);

        for (var inYourFall = 0; inYourFall < 124; inYourFall++) {

            noFill();
            strokeWeight(2);
            rotate(radians(fog));
            stroke(255, 170, hue, 30);
            rectMode(CENTER);
            //triangle(100, 25, posD, -30, 36, 25);
            ellipse(posD, posD, posC4, posC4);
            /*
            noFill();
            strokeWeight(5);
            stroke(255, 255, 255, 200);
            line(60, 60, 80, 80);
            */

        }

    }



    function sol() {

        var ruidoC4 = 0.0002;
        var posC4 = noise(millis() * ruidoC4) * 1.6;

        var ruidoC = 0.0001;
        var posC = noise(millis() * ruidoC) * 124;

        var ruidoD = 0.0008;
        var posD = noise(millis() * ruidoD) * 25;

        var ruidoZ = -0.0001;
        var posZ = noise(millis() * ruidoZ) * 5;


        var fog = millis() / 2009;

        var historyOfNothing = fog % 5;

        var dust = tan(radians(historyOfNothing));

        var ruidoX = 0.000009;
        var posX = noise(millis() * ruidoX) * 200;

        var ruidoY = 0.002;
        var posY = noise(millis() * ruidoX) * 400;

        translate(posX, posY);

        for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

            noStroke();
            rotate(radians(fog) * -7);
            fill(255, 86, 80, 20);
            rectMode(CENTER);
            scale(posC4);
            //triangle(-20, 25, 8, -30, 36, 25);
            ellipse(0, 0, 20, 20);

        }

    }


    function offset() {


        var sinval = sin(angle);
        var cosval = cos(angle);

        var x = 150 + (cosval * radius);
        var y = 50 + (sinval * radius);

        var ruidoX = 0.0005;
        var posX = noise(millis() * ruidoX) * 10;

        var ruidoY = 0.0008;
        var posY = noise(millis() * ruidoY) * 15;

        fill(80, 47, 144, 120, 200);
        //stroke(255);
        noStroke();
        ellipse(x, y, posX, posX);

        var x2 = x + cos(angle * sx) * radius / 2;
        var y2 = y + sin(angle * sy) * radius / 2;

        ellipse(x2, y2, posY, posY);

        var x3 = x + cos(angle * sx) * radius / 3;
        var y3 = y + cos(angle * sy) * radius / 2;

        ellipse(x3, y3, posX, posX);

        var x4 = x + sin(angle * sx) * radius / 3;
        var y4 = y + cos(angle * sy) * radius / 4;

        ellipse(x4 + posY, y4, posY, posY);

    }

    function offset1() {


        var sinval = sin(angle1);
        var cosval = cos(angle1);

        var x = 50 + (cosval * radius1);
        var y = 50 + (sinval * radius1);

        var ruidoX = 0.0005;
        var posX = noise(millis() * ruidoX) * 10;

        var ruidoY = 0.0008;
        var posY = noise(millis() * ruidoY) * 15;

        fill(255, 200);
        //stroke(255);
        noStroke();
        ellipse(x, y, posX, posX);

        var x2 = x + cos(angle1 * sx1) * radius1 / 2;
        var y2 = y + sin(angle1 * sy1) * radius1 / 2;

        ellipse(x2, y2, posY, posY);

        var x3 = x + cos(angle1 * sx1) * radius1 / 3;
        var y3 = y + cos(angle1 * sy1) * radius1 / 2;

        ellipse(x3, y3, posX, posX);

        var x4 = x + sin(angle1 * sx1) * radius1 / 3;
        var y4 = y + cos(angle1 * sy1) * radius1 / 4;

        ellipse(x4 + posY, y4, posY, posY);

    }


    var num = 333;
    var x = new Array([num]);
    let y = new Array([num]);
    var indexPosition = 0;

    function toyollo() {
        var ruidoX = 0.00009;
        var posX = noise(millis() * ruidoX) * width;

        var ruidoY = -0.0001;
        var posY = noise(millis() * ruidoY) * height;

        x[indexPosition] = posX;
        y[indexPosition] = posY;

        // stroke(0);
        stroke(80, 47, 144, 180);
        //fill(255, 255, 255, 70);
        fill(255, contador, 255, 20);

        // fill(255, 102);

        indexPosition = (indexPosition + 1) % num;
        for (var i = 0; i < num; i++) {
            var pos = (indexPosition + i) % num;
            var radius = 5 + (num - i) / 3.0;
            ellipse(x[pos], y[pos], radius, radius);


        }

    }


