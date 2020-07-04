
function makeRandomColor(){
  return '#'+Math.random().toString(16).substr(-6);
}
var $grid;
var count = 0;
var updateList = function() {    
  if (count > 0) {
    var shell = document.createElement("div");
    $(shell).addClass("shell");
    var el = document.createElement("div");
    $(el).addClass("item");  
    el.style.height = (count * 70)+"px";
    el.style.width = (count * 70)+"px";
    el.style.backgroundColor = makeRandomColor();
    $(shell).append($(el));
    $(grid).append($(shell));
    count--;
  }
    updateImage();  
};

var currIdx = 0;

function updateImage() {
	var imgdex = document.getElementById('grid');
	var figs = imgdex.querySelectorAll('div.shell');
  for(var i=0;i<figs.length;i++) {
    var idx = (currIdx + i) % figs.length;
    if (i === 0) {
      figs[idx].style.opacity = "1";            
      $(figs[idx]).removeClass("fadeout");
	    figs[idx].style.transform = 'rotate3d(1,0,0,0deg)';
      //figs[idx].style.visibility = "visible";            
    }    
    else if (i === 1) {
      figs[idx].style.transform = 'rotate3d(1,0,0,90deg)';
    }
    else {
      //figs[idx].style.visibility = "hidden";
      figs[idx].style.transform = 'rotate3d(1,0,0,-90deg)';
      $(figs[idx]).addClass("fadeout");
      figs[idx].style.opacity = "0";   
    }
  }
  currIdx = (currIdx + 1) % figs.length;
}

$(document).ready(function() {			
  
  
  updateList();
  setInterval(updateList, 2000);
  /*
    var feed = "http://feeds.feedburner.com/bingimages";
    var data = {
            q: 'http://feeds.feedburner.com/bingimages'
            , num: 10
            , output: 'json_xml'
            , v: '1.0'
        };
  
    $.ajax({
            url:'https://ajax.googleapis.com/ajax/services/feed/load'
            ,type : "GET"
            ,dataType : "jsonp"
            ,data: data
            ,success: function (json) {
              var feed = json.responseData.xmlString;              
              var $xml = $(feed);
              $xml.find("item").each(function() {
                var $this = $(this);
                var url = $this.find("enclosure").attr("url");
                console.log(url);                
                
                var shell = document.createElement("div");
                $(shell).addClass("shell");
                var el = document.createElement("img");
                $(el).attr("src",url);
                $(el).addClass("item");  
                $(shell).append($(el));
                $(grid).append($(shell));                
              });      
            }
      });*/
});