$(document).ready(function () {
	$(".generation").on('click', function(){
		$('.container').append($('<div>', {class: 'box'}));
	})
	$(".manipulation").on('click', function(){
		$('.box').addClass("turn");
	})
	$(".randomization").on('click', function(){
		var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('.box').css('background-color', randomColorChange);
    });
    $(".iteration").on('click', function(){
		$('.container').append($('<div>', {class: 'box'}));
		$('.box').animate({height: '100px', opacity: '0.4'}, "slow");
	})
});