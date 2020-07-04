let lastId, id, info, text = null;

$('.box').click(function() {
   id = $(this).index('.box');
   info = $(this).nextAll('.info-box');
   text = $(this).data('content');
   if( !$(info).hasClass('open')) {
     $(info).html(text);
     $(info).addClass('open');
   } else {
     if ( id === lastId) {
       $(info).removeClass('open');
     } else {
       $(info).html(text);
     }
   }
  lastId = id;
  //$('body').scrollTo($(info));
})


$('.boximage').click(function() {
   id = $(this).index('.boximage');
   info = $(this).nextAll('.info-boximage');
   text = $(this).data('content');
   if( !$(info).hasClass('open')) {
     $(info).html(text);
     $(info).addClass('open');
   } else {
     if ( id === lastId) {
       $(info).removeClass('open');
     } else {
       $(info).html(text);
     }
   }
  lastId = id;
  //$('body').scrollTo($(info));
})


$(function(){
    // Enables popover
    $("[data-toggle=popover]").popover();
});

document.querySelector("#fitin span").style.fontSize="10px";

/* requestAnimationFrame(function(){
while( document.querySelector("#fitin span").offsetHeight < document.querySelector("#fitin").offsetHeight ) {
document.querySelector("#fitin span").style.fontSize=(parseInt(document.querySelector("#fitin span").style.fontSize)+2)+"px";
  console.log(document.querySelector("#fitin span").style.fontSize)
}
}); */

//addHandler(window, "online", function () { alert("Online"); });
//var head= document.getElementById("head");setStyle(head,{width:"200px",height:"70px",display:"block"},false); false 累加，true一次性加
//var style = getCurrentStyle(element,"font-size");
//document.querySelector("#fitin span").style.fontSize="10px";
(function(document){
var tools;
var jsPath="../js/mi_";
var cssPath="../css/mi_";
var obj = {
	loadJs:function(file){
		var scriptTag = document.getElementById('loadScript');
		var head = document.getElementsByTagName('head').item(0);
		if(scriptTag) head.removeChild(scriptTag);
		script = document.createElement('script');
		script.src = jsPath+file+".js";
		script.type = 'text/javascript';
		script.id = 'loadScript';
		head.appendChild(script);
	},
    loadCss:function(file){
    var cssTag = document.getElementById('loadCss');
    var head = document.getElementsByTagName('head').item(0);
    if(cssTag) head.removeChild(cssTag);
    css = document.createElement('link');
    css.href = cssPath+file+".css";
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.id = 'loadCss';
    head.appendChild(css);
    },
    addHandler: function (element, type, handler) {

　　　　　　if(element.addEventListener) {

　　　　　　　　element.addEventListener(type, handler, false);

　　　　　　}else if (element.attachEvent) {

　　　　　　　　element.attachEvent("on" + type, handler);

　　　　　　}else {

　　　　　　　　element["on" + type] = handler;

　　　　　　}

　　　　},
 getCurrentStyle:function(ele,attr){


if(document.defaultView){
var style = document.defaultView.getComputedStyle(ele,null);
return style ? style.getPropertyValue(attr): null;
}else{
return ele.currentStyle[attr];
}
},
	getUrlJson:function(url) {
    var result = {};
    var reg = new RegExp('([\\?|&])(.+?)=([^&?]*)', 'ig');
    var arr = reg.exec(url);
    while (arr) {
        result[arr[2]] = arr[3];
        arr = reg.exec(url);
    }
    return result;
   },
   isArray:function (e){
    var sign=false;
    if(!!e && e instanceof Array && e.length){
    sign=true;
    }
    return sign;
  },
  isObject:function(e){
    var sign=false;
    if(!!e && e instanceof Object && !(e instanceof Array) && Object.keys(e).length){
    sign=true;
    }
    return sign;
    },
    toFixed:function(num, s) {
    var times = Math.pow(10, s)
    var des = num * times + 0.5;
    des = parseInt(des, 10) / times;
    return des + ''
    },
    uniqueArray:function(array){
      var r = [];
      for(var i = 0, l = array.length; i < l; i++) {
        for(var j = i + 1; j < l; j++)
          if (array[i] === array[j]) j = ++i;
        r.push(array[i]);
      }
      return r;
    },
    setStyle:function(e,css,sign){
        var appendStr="";
        for(var atr in css){
        if(!!sign){appendStr+=atr+":"+css[atr];}
        e.style[atr] = css[atr];
        }
        if(!!sign) e.style.cssText=appendStr;
    },
    autoFontSize:function(elementId,span){
        var id=elementId+" " +span;
        requestAnimationFrame(function(){
        while( document.querySelector(id).offsetHeight < document.querySelector(elementId).offsetHeight ) {
        document.querySelector(id).style.fontSize=(parseInt(document.querySelector(id).style.fontSize)+1)+"px";
          console.log(document.querySelector(id).style.fontSize)
        }
        });
    },
    stopBubble:function(event){
        var e = event || window.event;
        if (e && e.stopPropagation )
        e.stopPropagation();
        else
        window.event.cancelBubble = true;
   },
   stopDefault:function(event){
        var e = event || window.event;
        if(e && e.preventDefault) {
        　e.preventDefault();
        } else {
        window.event.returnValue = false;
        }
        return false;
   }

}
window.tools = obj;
})(document);
tools.autoFontSize("#fitin","span");
