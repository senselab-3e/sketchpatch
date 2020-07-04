var dexs = document.getElementsByClassName('rolodex');

for (var i=0; i<dexs.length; i++) {
  var dex = dexs[i];
  var cards = dex.getElementsByTagName('li');
  cards = [].slice.call(cards);
  
  cards[0].classList.add('first');
  cards[1].classList.add('second');
  cards[2].classList.add('third');
  cards[3].classList.add('fourth');
  
  dex.onclick = function () {
    console.log(cards);
    
    cards[0].classList.add('front');
    cards[0].classList.remove('first');
    
    cards[1].classList.add('first');
    cards[1].classList.remove('second');
    
    cards[2].classList.add('second');
    cards[2].classList.remove('third');
    
    cards[3].classList.add('third');
    cards[3].classList.remove('fourth');
    
    cards[4].classList.add('fourth');
    cards[4].classList.remove('front');
    
    var first = cards.shift();
    cards.push(first);
  }
}