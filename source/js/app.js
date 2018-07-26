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
  svg4everybody();
});