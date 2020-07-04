var gifs = ['https://media.giphy.com/media/1zRdpvolXQpIDAHZ9v/giphy.gif'];

var l = gifs.length,
	wrapper = document.body,
	lastNum = 0;
console.log(l);
//MAKE IT RAIN 💵💴💷💶
(window.gifRain = function() {

	var gif = document.createElement('div');

	var randomNum = Math.floor((Math.random() * l) + 0);

	//Randon top/left
	var randomTop = (Math.floor(Math.random() * (document.body.clientHeight - 200)) + 200) * -1,
		randomLeft = Math.floor(Math.random() * (document.body.clientWidth - 300)) + 1;

	//Random width/height and random transition time
	var wANDh = (Math.floor(Math.random() * 200) + 75),
		seconds = (Math.floor(Math.random() * 5) + 5);

	//When equal I use the giphy api to return a random #pizza gif.
	if (lastNum == randomNum) {
		console.log(randomNum)
		q = "capybara"; // search query

		request = new XMLHttpRequest;
		request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + q, true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				data = JSON.parse(request.responseText).data.image_url;
				console.log(data + ' ' + 'random gif loaded');
				gif.style.backgroundImage = 'url(' + data + ')';
				gif.classList += 'gif random';
				gif.style.left = randomLeft + 'px';
				gif.style.top = randomTop + 'px';
				gif.style.width = wANDh + 'px';
				gif.style.height = wANDh + 'px';
				gif.style.transition = "transform " + seconds + 's linear';

				lastNum = randomNum;
				wrapper.appendChild(gif);

				//Set top to trigger animation
				setTimeout(function() {
					gif.style.transform = "translateY(" + (document.body.clientHeight * 2) + 'px)';
				}, 100)

				//Remove old gifs
				setTimeout(function() {
					wrapper.removeChild(gif);
				}, seconds * 1000);
			} else {
				console.log('reached giphy, but API returned an error');
			}
		};

		request.onerror = function() {
			console.log('connection error');
		};

		request.send();
	} else {

		gif.style.backgroundImage = 'url(' + gifs[randomNum] + ')';
		gif.classList += 'gif';
		gif.style.left = randomLeft + 'px';
		gif.style.top = randomTop + 'px';
		gif.style.width = wANDh + 'px';
		gif.style.height = wANDh + 'px';
		gif.style.transition = "transform " + seconds + 's linear';

		lastNum = randomNum;
		wrapper.appendChild(gif);

		//Set top to trigger animation
		setTimeout(function() {
			gif.style.transform = "translateY(" + (document.body.clientHeight * 2) + 'px)';
		}, 100)

		//Remove old gifs
		setTimeout(function() {
			//wrapper.removeChild(gif);
		}, seconds * 1000);
	}

})();

//Rain em down baby
setInterval(function() {
	gifRain();
}, 500);
