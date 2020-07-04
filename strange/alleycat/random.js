var imgArr = ["image001.png","image002.jpg", "image003.png", "image004.png", "image005.png", "image006.png", "image007.jpg", "picture001.jpg", "picture002.jpg", "picture003.jpg", "picture004.jpg", "picture005.png"];

function displayImg(){
    var num = Math.floor(Math.random() * (imgArr.length));
    document.canvas.src="img/"+imgArr[num];
}