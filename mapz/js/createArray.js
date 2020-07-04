let imageFiles = [];
let rrr;
  var iiii = document.querySelectorAll('img');

for (var i = 0; i < iiii.length; i++) {
    var imaged = iiii[i];
    rrr = imaged.getAttribute('src');
    imageFiles.push(rrr);

}
console.log(imageFiles);
