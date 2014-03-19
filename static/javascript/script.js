  $(document).ready(function(){
  	$(window).bind('scroll', function() {
  		if ($(window).scrollTop() > 571) {
  			$('#navbar').addClass('fixed');
  			$('#content').css('padding-top', '80px');
  		}
  		else {
  			$('#navbar').removeClass('fixed');
  			$('#content').css('padding-top', '0px');
  		}
  	});
  	$('.bxslider').bxSlider({
  		adaptiveHeight: true,
  		mode: 'fade'
  	});
  });