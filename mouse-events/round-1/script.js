$(document).ready(function () {
$( ".large" ).click(function() {
  $( this ).addClass( "big-blue", 1000, "easeOutBounce" );
});
$(".dropper").click(function(){
	$('.drop').slideDown('slow');
});
$(".ha").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
    $(".turn").click(function(){
    $(this).toggleClass("card"); 
});
$('.spell').click(function(){
  showText(".spell", "Click Me", 0, 500);   
});
$('.blink').click(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 500);
    });
   $(".seven").click(function(){
 	$('.changebackground').addClass('colors');
 });  
$(".eight").click(function(){
 	$('.cool').addClass('gradient');
 }); 
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
var colorIndices = [0,1,2,3];
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
var clickCount = 0; 

	$(".grid-box").click(function(e) {
		var clickedID = e.currentTarget.id; 
		clickCount++;
		if(clickCount%2===0){
		$("#"+clickedID).html("X");
		}
		else {
		$("#"+clickedID).html("O");
		}
	});
   followCursor.init();
  document.body.onmousemove = followCursor.run;
}
	});
function getMouseCoords(e) {
  var e = e || window.event;
  document.getElementById('msg').innerHTML = e.clientX + ', ' + 
           e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}


var followCursor = (function() {
  var s = document.createElement('div');
  s.style.position = 'absolute';
  s.style.margin = '0';
  s.style.padding = '5px';
  s.style.border = '1px solid red';

  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left  = (e.clientX - 5) + 'px';
      s.style.top = (e.clientY - 5) + 'px';
      getMouseCoords(e);
    }
  };
}());