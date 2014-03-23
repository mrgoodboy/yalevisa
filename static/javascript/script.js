  $(document).ready(function(){
	//navbar stick to top
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
		mode: 'fade',
		captions: true
	});

	function scrollToAnchor(aid){
		console.log(aid);
		var aTag = $("a[name='"+ aid +"']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	//navigation
	$(".navlink").click(function(){
		scrollToAnchor($(this).text().toLowerCase());

	});

	$("#logo").click(function(){
		$('html,body').animate({scrollTop: 0},'slow');
	});


	//add to mailing list
	$('#mlist').click(function(){
		$.ajax({
			url: '/mlist',
			type: 'POST',
			data: { name: $('#mlist-name').val(), email: $('#mlist-email').val() },
			success: function(response) {
				if (response == "success") {
					$("#mlist-name").val('');
					$("#mlist-email").val('');
					alert("We have added you to our mailing list.");
				} else {
					alert("Oops, an error has occurred. Please try again later.");
				}

			}
		});

	});

	//profile qtip
	$('.profile').each(function() { // Grab all elements with a title attribute,and set "this"
		position = $(this).attr('id')
		if (position == 'president1') {
			$(this).qtip({ 
				content: { 
					title: '<h2>Kevin Nguyen</h2>',
					text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
						'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
						'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
						+'<hr>Email me at <a href="mailto:kevin.nguyen@yale.edu">kevin.nguyen@yale.edu</a> '),
					button: true
				},
				style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
				hide: {
					event: 'unfocus'
				},
				show: {
					event: 'click'
				},
				position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target,
			        
			    }
			});
} else if (position == 'president2') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Jenny Nguyen</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:jenny.nguyen@yale.edu">jenny.nguyen@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target,

			    }
			});
} else if (position == 'political1') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Mark Pham</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:mark.pham@yale.edu">mark.pham@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    }

			});
} else if (position == 'political2') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Johnny Xu</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:johnny.xu@yale.edu">johnny.xu@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} else if (position == 'social1') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Minh Tri Pham</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:minhtri.pham@yale.edu">minhtri.pham@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} else if (position == 'social2') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Jason Liu</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:jason.liu@yale.edu">jason.liu@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} else if (position == 'social3') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Kevin A. Pham</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:kevin.a.nguyen@yale.edu">kevin.a.nguyen@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} else if (position == 'publicity') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Hannah Truong</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:hannah.truong@yale.edu">hannah.truong@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} else if (position == 'treasurer') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Gia Hoa Nguyen</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:giahoa.nguyen@yale.edu">giahoa.nguyen@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'bottom left',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} else if (position == 'cultural') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Nancy Tran</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:nancy.tran@yale.edu">nancy.tran@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'bottom left',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} else if (position == 'historian') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Tony Nguyen</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:tony.nguyen@yale.edu">tony.nguyen@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'bottom right',  // Position my top left...
			        at: 'top right', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} else if (position == 'secretary') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Mimi Pham</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:mimi.pham@yale.edu">mimi.pham@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		hide: {
			event: 'unfocus'
		},
		show: {
			event: 'click'
		},
		position: {
			        my: 'bottom right',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    }
			});
} 
});


  function buildprofile(src, description) {
  	var profile = $(document.createElement('div'));
  	profile.addClass('profile-tooltip');
  	profile.html('<div class="tooltip-photo"><img src="'+ src +'"></div><div class="description">' + description + '</description>');
  	return profile;

  };


});