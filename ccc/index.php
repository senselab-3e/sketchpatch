<?php session_start(); ?>

<html>
<head>

  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.js"></script>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js"></script>
 <style>
   #popup{
     border:1px solid;
     background:#ff9999;
     width:500px;
     height:500px;
     display:none;
     position:absolute;
   }
 </style>
  <script>
   var mouseX,mouseY,windowWidth,windowHeight;
   var  popupLeft,popupTop;
 $(document).ready(function(){

   $(document).mousemove(function(e){
           mouseX = e.pageX;
           mouseY = e.pageY;
           //To Get the relative position
           if( this.offsetLeft !=undefined)
             mouseX = e.pageX - this.offsetLeft;
           if( this.offsetTop != undefined)
             mouseY = e.pageY; - this.offsetTop;

           if(mouseX < 0)
                mouseX =0;
           if(mouseY < 0)
               mouseY = 0;

           windowWidth  = $(window).width()+$(window).scrollLeft();
           windowHeight = $(window).height()+$(window).scrollTop();
   });

     $('html').click(function(){
       this.popup.show();
      var popupWidth  = this.popup.outerWidth();
      var popupHeight =  this.popup.outerHeight();

      if(mouseX+popupWidth > windowWidth)
        popupLeft = mouseX-popupWidth;
      else
       popupLeft = mouseX;

      if(mouseY+popupHeight > windowHeight)
        popupTop = mouseY-popupHeight;
      else
        popupTop = mouseY; 

    if( popupLeft < $(window).scrollLeft()){
     popupLeft = $(window).scrollLeft();
    }

    if( popupTop < $(window).scrollTop()){
     popupTop = $(window).scrollTop();
    }

     if(popupLeft < 0 || popupLeft == undefined)
           popupLeft = 0;
      if(popupTop < 0 || popupTop == undefined)
           popupTop = 0;

      this.popup.offset({top:popupTop,left:popupLeft});
     });
 });
  </script>

</head>
<title>some cosmic constructivism</title>
<body>

<?php

if (!$_SESSION['width'] && !$_POST['width']) { $_SESSION['width'] = '100%'; } else { $_SESSION['width'] = $_POST['width']; }
if (!$_SESSION['height'] && !$_POST['height']) { $_SESSION['height'] = '100%'; } else { $_SESSION['height'] = $_POST['height']; }
if (!$_SESSION['color'] && !$_POST['color']) { $_SESSION['color'] = 'blue'; } else { $_SESSION['color'] = $_POST['color']; }	

echo "

<div style='width:" . $_SESSION['width'] . "; height:".$_SESSION['height']."; position:absolute; background-color: ".$_SESSION['color']."; top: 0px; left: 0px; right: 0px;'>



<div style='width: 100%; height: 35px; position: fixed; top: 0px; left: 0px; right: 0px;'>
<form action='index.php' method='post'>
  width : <input type='text' name='width' value='".$_SESSION['width']."'> 
  height : <input type='text' name='height' value='".$_SESSION['height']."'> 
  height #: <input type='text' name='color' value='".$_SESSION['color']."'> 
  <input type='submit' value='submit'>
</form>
</div>

<div style='width: 100%; height: 35px; position: relative; top: 35px; left: 0px; right: 0px; padding: 20px;'>
welcome to the plane of composition. feel free to change its dimensions and background.
</div>


<div id='popup'>lalalala</div>



</div>

";

?>





</body>
</html>