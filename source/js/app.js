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
			document.images[i].style.width = document.images[i].width + 5 + 'px';
		}
	})
	$('.dec').on('click', function(e){
		e.preventDefault();
		for(var i = 0; i < document.images.length; i++){
			document.images[i].style.width = document.images[i].width - 5 + 'px';
		}
	})
	$('.toTop').on('click',function(e){
		e.preventDefault();
		window.scrollTo(0,0);
	});

/*var shipping_method
var form = document.forms.shipping;
var elem = form.elements;
for(i = 0; i < elem.length; i++){
	if(elem[i].checked) {shipping_method = elem[i].value}
}
console.log(shipping_method);
*/
/*var formName;
var form = document.forms.fio;
var elem = form.elements;
for(i = 0; i < elem.length; i++){
	console.log(elem[i].value)
}*/

function getSelectedText(){
	if(window.getSelection){
		return window.getSelection().toString();
	} else if(document.selection){
		return document.selection.createRange().text;
	}
}
getSelectedText()
  svg4everybody();
});