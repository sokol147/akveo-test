(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function() {
	svg4everybody();

//Promocode input
	$('.promo__button').on('click',function(){
		$(this).hide();
		$('.signup__gift').slideUp();
		$('.signup__gift--active').slideDown();
		$('.promo-confirm').show();
	});


//Scroll to section
  $('.nav-link').on('click', function(e){
    e.preventDefault();

    let id = $(this).attr('href');
    let top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1500);
  })
});