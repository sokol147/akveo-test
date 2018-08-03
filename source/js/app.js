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
getSelectedText();


function inputValidation(){
  var inputelts = document.getElementsByTagName('input');

  for(var i = 0; i < inputelts.length; i++){
    var elt = inputelts[i];

    if(elt.type != 'text' || !elt.getAttribute('data-allowed-chars')){
      continue;
    }

    if(elt.addEventListener){
      elt.addEventListener('keypress', filter, false);
      elt.addEventListener('taxtInput', filter, false);
      elt.addEventListener('textinput', filter, false);
    } else {
      elt.attachEvent('onkeypress', filter);
    }
  }

  function filter(event){
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var text = null;

    if(e.type === 'textinput' || e.type === 'textInput') text = e.data;
    else{
      var code = e.charCode || e.keyCode;

      if(code < 32 || e.charCode == 0 || e.ctrlKey || e.altKey) return;

      var text = String.fromCharCode(code);
    }
    var allowed = target.getAttribute('data-allowed-chars');
    var messageid = target.getAttribute('data-messageid');
    if(messageid){
      var messageElement = document.getElementById(messageid);
    }
    for(var i = 0; i < text.length; i++){
      var c = text.charAt(i);
      if(allowed.indexOf(c) == -1){
        if(messageElement) messageElement.style.visibility = 'visible';

        if(e.preventDefault) e.preventDefault();

        if(e.returnValue) e.returnValue = false;
        return false;
      }
    }
    if(messageElement) messageElement.style.visibility = 'hidden';
  }
}
inputValidation();

$('#mail').val('Enter your mail')


  svg4everybody();
});