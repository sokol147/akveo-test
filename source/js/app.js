$(document).ready(function() {
	$('.banner__close').on('click', function(){
		$('.banner').slideUp();
	});
	$('.menu__btn').on('click',function(e){
		e.preventDefault;
		$(this).toggleClass('menu__btn--active');
		$('.menu__mobile').toggleClass('menu__mobile--active');
	});
	$('.search__icon').on('click', function(e){
		e.preventDefault;
		$('.search__input').toggleClass('search__input--active');
	});

	$('.inc').on('click', function(e){
		e.preventDefault();
		for(var i = 0; i < document.images.length; i++){
			document.images[i].style.width = document.images[i].width + 10 + 'px';
		}
	})
	$('.deg').on('click', function(e){
		e.preventDefault();
		for(var i = 0; i < document.images.length; i++){
			document.images[i].style.width = document.images[i].width - 10 + 'px';
		}
	})

var form = document.getElementsByClassName('form');

var para = document.getElementsByClassName('text');
$('.text').append(' lololo');


  svg4everybody();
});