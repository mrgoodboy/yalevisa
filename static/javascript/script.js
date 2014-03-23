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

				show: {
					event: 'click',
					solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
    },
    position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target,
			        
			    },
			    hide: {
			    	event: 'click'
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
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target,

			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'political1') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Mark Pham</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hi guys! <br><br>' + 
				'I hail from the beautiful suburb of Springfield, Virginia, where I moved to from Saigon five years ago.  A poli sci major, I love anything  diplomacy, in theory as well as practice.  Eventually, I want to work for the State Department and serve as an IR professor somewhere.' + 
				'<br><br>In my free time, if there is ever any, I enjoy hanging out with  friends and playing sports.  Most recently, I\'ve rediscovered my passion for soccer. I\'m terrible at it, but haven\'t given up.  As Vietnamese like to say, "Đá hay không bằng hay đá" (playing soccer often is better than just being good at it).  So hopefully, one of these days my wish to persist will reward me with a goal....or at least prevent me from scoring one in the wrong end :D'
				+'<hr>Email me at <a href="mailto:mark.pham@yale.edu">mark.pham@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
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
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
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
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'social2') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Jason Liu</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Hello friends! <br><br> I’m Kevin (P.), ES ‘16, and I hail from the wild realm of Ohio, from a suburb devoid of much cultural diversity. When I’m not doing Asian things, you can find me playing in DPops and SYO, raising roundworms at the School of Medicine, crying over Kdramas, or getting fat from baked goods and ice cream. I also go to school.' + 
				'<br><br>I got involved with ViSA last year to make up for this lack of culture in my life, and to obey my mother by making lots of “nice Vietnamese friends”. After a term as social chair, I now humbly serve as co-president of the most beautiful and talented cultural group on campus. I hope you’ll join me and the rest of ViSA in having a fun and delicious year!' +
				'<br><br>See you at our next event (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
				+'<hr>Email me at <a href="mailto:jason.j.liu@yale.edu">jason.j.liu@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top left',  // Position my top left...
			        at: 'bottom left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
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
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
			    }
			});
} else if (position == 'publicity') {
	$(this).qtip({ 
		content: { 
			title: '<h2>Hannah Truong</h2>',
			text: buildprofile('/static/img/dance.jpg', 'Chào mừng bạn đến trường đại học Yale!' + 
				'<br><br>My name is Hannah, and I am a freshman in Morse College hailing from Seattle, Washington. I hope to fulfill a science degree in biochemistry at Yale and continue on to medical school, with a particular interest in the business side of healthcare. '+
				'<br><br>On campus, I am also involved in the Freshman Class Council and Morse College Council. I am a member of the Yale Cheerleading Squad (Go Bulldogs!), Kappa Kappa Gamma sorority and the Leadership Education and Development (LEAD) Program. '+
				'<br><br>In my free time, I like to dance with the Yale Phoenix Asian Dance Team and cook food for my friends in the Morse student kitchen… Pho of course!'
				+'<hr>Email me at <a href="mailto:hannah.truong@yale.edu">hannah.truong@yale.edu</a> '),
			button: true
		},
		style: { classes: 'qtip-rounded qtip-shadow qtip-bootstrap tooltip' },
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'top right',  // Position my top left...
			        at: 'bottom right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
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
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'bottom left',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
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
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'bottom left',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
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
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'bottom right',  // Position my top left...
			        at: 'top right', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
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
		show: {
			event: 'click',
			solo:true,
effect: function(offset) {
            $(this).fadeIn(300); // "this" refers to the tooltip
        }
		},
		position: {
			        my: 'bottom right',  // Position my top left...
			        at: 'top left', // at the bottom right of...
			        target: $(this) // my target
			    },
			    hide: {
			    	event: 'click'
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