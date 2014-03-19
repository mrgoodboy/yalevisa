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

  	function scrollToAnchor(aid){
  		console.log(aid);
  		var aTag = $("a[name='"+ aid +"']");
  		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
  	}

  	$(".navlink").click(function(){
  		scrollToAnchor($(this).text().toLowerCase());

  	});

  	$("#logo").click(function(){
  		$('html,body').animate({scrollTop: 0},'slow');
  	});




  });