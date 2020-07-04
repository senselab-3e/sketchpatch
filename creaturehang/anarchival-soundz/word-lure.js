let loopBeat;

function setup() {
  loopBeat = new Tone.Loop(song, '4n');
  Tone.Transport.start();
  loopBeat.start(0);
}

function song(time) {
  console.log(time)
}


function performClick(node) {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mousedown", true, true);
    document.getElementById("myElement").dispatchEvent(evt);
}
