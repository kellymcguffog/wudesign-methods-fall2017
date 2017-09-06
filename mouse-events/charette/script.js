$(document).ready(function () {
 $('.background').click(function() {
    this.style.backgroundColor = this.style.backgroundColor == 'blue' ? '' : 'blue';
});
 $('.color').on('click', function() { 
       this.style.color = this.style.color == 'green' ? '' : 'green';
    }); 
 $('.three').on('click', function() { 
               $(".shake").effect("shake");
            });
$( ".five" ).click(function() {
$(".rotate").addClass("after");
});
$( ".large" ).click(function() {
  $( this ).addClass( "big-blue", 1000, "easeOutBounce" );
});
$(".dropper").click(function(){
	$('.drop').slideDown('slow');
});
$(".twentytwo").click(function(){
	$(".slide").animate({left: '250px'});
})
$(".fourteen").click(function(){
	$(".grow").animate({left: '250px', height: '+=150px', width: '+=150px'});
});
$(".twelve").click(function(){
	var div = $(".around");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
$(".thirteen").click(function(){
        var name = $(".font");  
        name.animate({left: '5em'}, "slow");
        name.animate({fontSize: '3em'}, "slow");
    });
$('#test').attr('checked','checked');

$('#test').removeAttr('checked');
$(".psh").click(function(){
        $("p").hide("slow", function(){
            ("The paragraph is now hidden");
        });
    });
$(".fadein").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
$(".fadeout").click(function(){
        $(".boxone").fadeOut();
        $(".boxtwo").fadeOut("slow");
        $(".boxthree").fadeOut(3000);
    });
$(".fading").click(function(){
        $(".quarter").fadeTo("slow", 0.15);
        $(".half").fadeTo("slow", 0.4);
        $(".full").fadeTo("slow", 0.7);
    });
$(".ha").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
$(".remove").click(function(){
        $(".yellow").empty();
    });
 $(".shape").click(function(){
       $('.square').addClass('circle');
    }); 
 $( ".shrink" ).click(function() {
  $( this ).addClass( "small-blue", 1000, "easeOutBounce" );
});
 $(".border").click(function() {
    $(this).css('border', "solid 2px red");  
  });
  $(".twentyfour").click(function() {
    $(".smalltype").css("fontSize","-=5");
   });
  $(".twentyfive").click(function() {
    $(".largetype").css("fontSize","+=5");
   });
    $(".turn").click(function(){
    $(this).toggleClass("card"); 
});
    $(".reverse").on("click", function() {
        $(this).toggleClass("rotate-180");
    });
   $(".four").click(function() {
  $( ".bounce" ).toggle( "bounce", { times: 3 }, "slow" );
});
   $(".twentyseven").click(function(){
	$(".slidechange").animate({left: '250px'});
	$('.slidechange').addClass('circle');
});
$(".slash").click(function(){
	$(this).toggleClass("slashed"); 
});
$(".slant").click(function(){
	$(this).toggleClass("slanted"); 
});
$(".turnbig").click(function(){
	$(this).toggleClass("turned"); 
});
$(".change").click(function(){
	$(this).toggleClass("changed"); 
});
$(".smallspin").click(function(){
	$(this).toggleClass("small"); 
});
$(".growborder").click(function(){
	$(this).toggleClass("grew"); 
});
$(".opacity").click(function(){
	$(this).toggleClass("disappear"); 
});
$(".shift").click(function(){
	$(this).toggleClass("shifted"); 
});
$(".grownshift").click(function(){
	$(this).toggleClass("grown"); 
});
$(".skew").click(function(){
	$(this).toggleClass("skewed"); 
});
   $('.counter').data('count', 0);
$('.count').click(function(){
    $('.counter').html(function(){
        var $this = $(this),
            count = $this.data('count') + 1;

        $this.data('count', count);
        return count;
    });
});
var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
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
$( ".spinner" ).click(function() {
$(".textspin").addClass("spun");
});
$(".fortytwo").click(function(){
	$('.spread').addClass('word');
});
$('.expand').click(function(){
	$(this).animate({
		opacity:0,
		width:"100%",
		height:"100%",
	});
});
 $('.time').click(function(){
                  var time = new Date();                
                  $('.time-holder').val(time.toDateString());  
        });
 $(".fortyfive").click(function(){
	$('.squeeze').addClass('tight');
});
 $(".fortysix").click(function(){
 	$('.fill').addClass('filled');
 });
  $(".fortyseven").click(function(){
 	$('.regular').addClass('strike');
 });
  $(".fortyeight").click(function(){
 	$('.italic').addClass('additalic');
 });
  $(".fortynine").click(function(){
 	$('.bold').addClass('bolder');
 });
  $(".fifty").click(function(){
 	$('.caps').addClass('uppercase');
 });
  $(".fiftyone").click(function(){
 	$('.noborder').addClass('borderless');
 });
  $(".fiftytwo").click(function(){
    if( $('.dog').is(':hidden')) {
    $('.dog').show();
    }else{
    $('.dog').hide();
    }
});
  $(".shadow").click(function(){
  	$(this).toggleClass("blur");
  });
   $(".blurr").click(function(){
  	$(this).toggleClass("disperse");
  });
   $(".fiftysix").click(function(){
 	$('.boxshadow').addClass('dark');
 });
   $(".scrolldown").click(function(){
 	$("html, body").animate({ scrollTop: 1000 }, "slow");
});
   $(".scrollup").click(function(){
 	$("html, body").animate({ scrollTop: 9999 }, "slow");
});
   $(".fiftynine").click(function(){
 	$('.changecolor').addClass('switch');
 });  
   $(".sixty").click(function(){
 	$('.changebackground').addClass('colors');
 });  
   $(".sixtyone").click(function(){
 	$('.radius').addClass('curved');
 }); 
$(".alert").click( function() {
    alert("Your book is overdue.");
});
$(".line").click(function(){
 	$('.space').addClass('height');
 }); 
$(".type").click(function(){
  	$(this).toggleClass("face");
  });
$(".underline").click(function(){
  	$(this).toggleClass("text");
  });
$(".sixtysix").click(function(){
 	$('.watch').addClass('time');
 }); 
function pretty_time_string(num) {
    return ( num < 10 ? "0" : "" ) + num;
  }

var start = new Date;    

setInterval(function() {
  var total_seconds = (new Date - start) / 1000;   

  var hours = Math.floor(total_seconds / 3600);
  total_seconds = total_seconds % 3600;

  var minutes = Math.floor(total_seconds / 60);
  total_seconds = total_seconds % 60;

  var seconds = Math.floor(total_seconds);

  hours = pretty_time_string(hours);
  minutes = pretty_time_string(minutes);
  seconds = pretty_time_string(seconds);

  var currentTimeString = hours + ":" + minutes + ":" + seconds;

  $('.time').text(currentTimeString);
}, 1000);
$(".upside").click(function(){
  	$(this).toggleClass("down");
  });
$(".sixtyeight").click(function(){
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
$(".decreaseline").click(function(){
 	$('.smushed').addClass('leading');
 }); 
$(".seventy").click(function(){
 	$('.flip').addClass('flipped');
 });
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
	$("#submit-btn").click(function(){ 
  		phoneValidator($("#phone").val());
		emailValidator($("#email").val());

	});
	$('#list').click(function() {
    var out = '<ul>';
    $("input[type=text]").each(function() {
        out += "<li>" + $(this).val() + "</li>";
    });
    out += "</ul>";
    $('.seventyfive').html(out);
});
	 $('.removelist').on('click', 'li', function () {
        $(this).remove();
    });
	 $(".seventysix").click(function(){
 	$('.dash').addClass('dashed');
 });
	 $(".seventyseven").click(function(){
 	$('.sick').addClass('sicker');
 });
	 $(".seventyeight").click(function(){
 	$('.flippity').addClass('doo');
 });
	 $(".rect").click(function(){
  	$(this).toggleClass("effect");
  });
	 $("slide-up").click(function(){
  	$(this).toggleClass("it");
  });
	 $("eighty").click(function(){
  	$(this).toggleClass("blink");
  });
	 $(".eightyone").click(function(){
  	$( ".yay" ).toggle( "bounce", { times: 3 }, "slow" );
  });
	  $('.eightytwo').on('click', function() { 
               $(".almost").effect("shake");
            });
	 $(".eightythree").click(function(){
 	$('.about').addClass('there');
 });
	 $(".eightyfour").click(function(){
	$(".slide").animate({left: '250px'});
})
	 $(".across").click(function(){
	$(this).toggleClass("cross"); 
});
	  $(".eightysix").click(function(){
 	$('.vlarge').addClass('groww');
 });
	  $(".eightyseven").click(function(){
 	$('.twist').addClass('shout');
 });
	  $(".dot").click(function(){
  	$(this).toggleClass("ease");
  });
$(".ninetyone").click(function(){
 	$('.camo').addClass('black');
 });
$(".ninetytwo").click(function(){
 	$('.cray').addClass('heat');
 });
 $(".ninetythree").click(function(){
 	$('.odd').addClass('help');
 });
 $(".ninetyfour").click(function(){
 	$('.side').addClass('ways');
 });
 $(".ninetyfive").click(function(){
 	$('.twirl').addClass('hit');
 });
 $(".ninetysix").click(function(){
 	$('.slight').addClass('curl');
 });
  $(".ninetyseven").click(function(){
 	$('.hope').addClass('try');
 	$(".hope").effect("shake");
 });
   $(".ninetyeight").click(function(){
 	$('.please').addClass('light');
 });
   $(".ninetynine").click(function(){
 	$('.tilt').addClass('pers');
 });
   $(".done").click(function(){
    $(".cute").animate({
        left: '-50%'
    }, 500, function() {
        $(this).css('left', '150%');
        $(this).appendTo('hundo');
    });

});
 });
function phoneValidator(phoneNum) {  
	var phoneTest=phoneNum.split('-');
	if(phoneTest.length !==3) {
		$("#test1").text("invalid number");
	}
	else if((phoneTest[0].length !==3) || (phoneTest[0] == NaN)) {
		$("#test1").text("invalid number");
	}
	else if((phoneTest[1].length !==3) || (phoneTest[1] == NaN)) {
		$("#test1").text("invalid number");
	}
	else if((phoneTest[2].length !==4) || (phoneTest[2] == NaN)) {
		$("#test1").text("invalid number");
	}
	else {
		$("#test1").text("valid number");
	}
}


function emailValidator(email) {
	var emailTest=email.split('@');
	if(emailTest.length !==2) {
		$("#test2").text("invalid email");
	}
	else {
		var emailTest2=emailTest[1].split('.');
		if (emailTest2.length !==2) {
			$("#test2").text("invalid email");
		}
		else {
			$("#test2").text("valid email");
		}
	}

}
var newWindow;

function openWin() {
    newWindow = window.open("", "newWindow", "width=200,height=600");
}

function closeWin() {
    newWindow.ciao();
}
