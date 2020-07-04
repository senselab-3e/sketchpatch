
function init(){

window.setTimeout( "init()", 1000); //every 4 secs it runs

  w=document.body.offsetWidth;
  h=document.body.offsetHeight;
  rd=document.getElementsByTagName('div');

for(c=0;c<rd.length;c++) {
if(rd[c].className=='random') {
  xCoord=Math.floor(Math.random()*w);
  yCoord=Math.floor(Math.random()*h);

if(xCoord>=w-rd[c].offsetWidth-10){
  xCoord=w-rd[c].offsetWidth-10;
}
if(xCoord<=10){
  xCoord=10;
}

if(yCoord>=h-rd[c].offsetHeight-10){
  yCoord=h-rd[c].offsetHeight-10;
}
if(yCoord<=10){
  yCoord=10;
}

  rd[c].style.left=xCoord+'px';
  rd[c].style.top=yCoord+'px';
  }
 }
}
  window.addEventListener?
  window.addEventListener('load',init,false):
  window.attachEvent('onload',init);
